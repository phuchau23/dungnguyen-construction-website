"use client";

import { useEffect, useRef } from "react";
import type { GeoJSONSource, Map as MlMap } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { site } from "@/lib/site";
import { areas, officePos } from "./data";

type Props = { active: number; onSelect: (i: number) => void };
type LngLat = [number, number];

/*
 * Bản đồ MapLibre + nền OpenFreeMap (dữ liệu OpenStreetMap): miễn phí, không cần API key.
 * Ghim văn phòng, các khu vực phục vụ và đường nối từ văn phòng tới từng khu vực.
 * Khu vực đầu tiên (Quận 12) chính là nơi đặt văn phòng nên dùng chung ghim văn phòng.
 */

const STYLE = "https://tiles.openfreemap.org/styles/positron";

// MapLibre dùng [kinh độ, vĩ độ]
const ll = ([lat, lng]: [number, number]): LngLat => [lng, lat];
const office = ll(officePos);

/** Khung bao quanh các điểm, dạng [[tây, nam], [đông, bắc]] */
const box = (pts: LngLat[]): [LngLat, LngLat] => [
  [Math.min(...pts.map((p) => p[0])), Math.min(...pts.map((p) => p[1]))],
  [Math.max(...pts.map((p) => p[0])), Math.max(...pts.map((p) => p[1]))],
];

/** Lề khung nhìn; bên phải rộng hơn vì nhãn nằm bên phải ghim */
const pad = (w: number) =>
  w >= 700 ? { top: 90, bottom: 100, left: 70, right: 170 } : { top: 50, bottom: 70, left: 30, right: 110 };

const lines = (cur: number): GeoJSON.FeatureCollection => ({
  type: "FeatureCollection",
  features: areas.slice(1).map((a, k) => ({
    type: "Feature",
    properties: { on: k + 1 === cur },
    geometry: { type: "LineString", coordinates: [office, ll(a.pos)] },
  })),
});

const pinEl = (cls: string, html: string, title: string) => {
  const d = document.createElement("button");
  d.type = "button";
  d.className = cls;
  d.title = title;
  d.innerHTML = html;
  return d;
};

export function OfficeMap({ active, onSelect }: Props) {
  const el = useRef<HTMLDivElement>(null);
  const map = useRef<MlMap | null>(null);
  const pins = useRef<HTMLElement[]>([]);
  const select = useRef(onSelect);
  const activeRef = useRef(active);
  const ready = useRef(false);

  useEffect(() => {
    select.current = onSelect;
  }, [onSelect]);

  // Tô đậm khu vực đang chọn + đưa khung nhìn tới đó
  const show = (cur: number, animate: boolean) => {
    const m = map.current;
    if (!m) return;
    pins.current.forEach((p, i) => p.classList.toggle("is-on", i === cur));
    (m.getSource("routes") as GeoJSONSource | undefined)?.setData(lines(cur));
    const opts = { padding: pad(m.getContainer().clientWidth), maxZoom: 14, duration: animate ? 900 : 0 };
    if (cur === 0) m.easeTo({ center: office, zoom: 14, ...opts });
    else m.fitBounds(box([office, ll(areas[cur].pos)]), opts);
  };

  useEffect(() => {
    let cancelled = false;

    import("maplibre-gl").then((mod) => {
      // Gói UMD: tùy bundler có thể nằm trong `default`
      const ml = ((mod as { default?: typeof mod }).default ?? mod) as typeof mod;
      // Worker được copy vào public/maplibre (script postinstall) vì bundler không tự đóng gói được
      ml.setWorkerUrl("/maplibre/maplibre-gl-worker.mjs");
      if (cancelled || !el.current || map.current) return;

      const m = new ml.Map({
        container: el.current,
        style: STYLE,
        bounds: box([office, ...areas.map((a) => ll(a.pos))]),
        fitBoundsOptions: { padding: pad(el.current.clientWidth) },
        scrollZoom: false,
        dragRotate: false,
        pitchWithRotate: false,
        attributionControl: { compact: true },
      });
      m.touchZoomRotate.disableRotation();
      m.addControl(new ml.NavigationControl({ showCompass: false }), "top-right");
      map.current = m;

      areas.forEach((a, i) => {
        const e =
          i === 0
            ? pinEl(
                "om-office",
                `<span class="om-office-dot"></span><span class="om-office-tag">${site.name}<small>Văn phòng chính · ${a.name}</small></span>`,
                site.address,
              )
            : pinEl("om-area", `<span class="om-area-dot"></span><span class="om-area-tag">${a.name}<small>${a.eta}</small></span>`, a.name);
        e.addEventListener("click", () => select.current(i));
        pins.current[i] = e;
        new ml.Marker({ element: e, anchor: "left", offset: [i === 0 ? -11 : -6, 0] })
          .setLngLat(i === 0 ? office : ll(a.pos))
          .addTo(m);
      });

      m.on("load", () => {
        m.addSource("routes", { type: "geojson", data: lines(activeRef.current) });
        m.addLayer({
          id: "routes",
          type: "line",
          source: "routes",
          layout: { "line-cap": "round" },
          paint: {
            "line-color": ["case", ["get", "on"], "#E07A2E", "#1B2330"],
            "line-width": ["case", ["get", "on"], 3, 1.2],
            "line-opacity": ["case", ["get", "on"], 1, 0.3],
            "line-dasharray": [2, 2],
          },
        });
        ready.current = true;
        pins.current.forEach((p, i) => p.classList.toggle("is-on", i === activeRef.current));
      });
    });

    return () => {
      cancelled = true;
      map.current?.remove();
      map.current = null;
      pins.current = [];
      ready.current = false;
    };
  }, []);

  useEffect(() => {
    activeRef.current = active;
    if (ready.current) show(active, true);
  }, [active]);

  // CSS của MapLibre đặt .maplibregl-map { position: relative } nên cần lớp bọc ngoài để phủ kín
  return (
    <div className="absolute inset-0 z-0">
      <div ref={el} className="size-full" aria-label={`Bản đồ văn phòng ${site.name} và khu vực phục vụ`} />
    </div>
  );
}
