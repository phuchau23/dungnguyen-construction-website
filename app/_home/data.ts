import type { IconName } from "@/components/Icon";

/** Dữ liệu riêng cho trang chủ (lấy từ design PhuongAnB.dc.html) */

export const quotes = [
  { n: "1", t: "Báo giá sửa chữa nhà", s: "Khảo sát tận nơi – tư vấn phương án" },
  { n: "2", t: "Báo giá chống thấm", s: "Sân thượng, WC, tường, mái, bể nước" },
  { n: "3", t: "Báo giá sơn nước", s: "Sơn trong – ngoài nhà, sơn hiệu ứng" },
  { n: "4", t: "Báo giá cải tạo trọn gói", s: "Báo giá rõ ràng, không phát sinh" },
];

/** 6 mặt khối lập phương ở hero */
export type CubeFace = {
  code: string;
  icon: IconName;
  lines: [string, string];
  tone: "light" | "brand" | "dark";
  transform: string;
};

export const cubeFaces: CubeFace[] = [
  { code: "S-02", icon: "drop", lines: ["Chống", "thấm"], tone: "light", transform: "translateZ(150px)" },
  { code: "S-03", icon: "roller", lines: ["Sơn nước", "Sơn dầu"], tone: "brand", transform: "rotateY(90deg) translateZ(150px)" },
  { code: "S-04", icon: "tiles", lines: ["Ốp lát", "gạch"], tone: "dark", transform: "rotateY(180deg) translateZ(150px)" },
  { code: "S-06", icon: "bolt", lines: ["Điện", "nước"], tone: "brand", transform: "rotateY(-90deg) translateZ(150px)" },
  { code: "S-05", icon: "ceiling", lines: ["Trần", "thạch cao"], tone: "light", transform: "rotateX(90deg) translateZ(150px)" },
  { code: "S-07", icon: "gate", lines: ["Cửa", "sắt"], tone: "dark", transform: "rotateX(-90deg) translateZ(150px)" },
];

export type Area = {
  name: string;
  eta: string;
  line?: string;
  /** Tọa độ gần đúng trung tâm khu vực [vĩ độ, kinh độ] */
  pos: [number, number];
};

/** Văn phòng: 54/6A đường TTH 29, P. Tân Thới Hiệp, Q.12 (tọa độ gần đúng) */
export const officePos: [number, number] = [10.8627, 106.6445];

export const areas: Area[] = [
  { name: "Quận 12", eta: "~ 30 phút", line: "Văn phòng chính — có thể có mặt trong khoảng 30 phút tùy lịch.", pos: [10.8671, 106.6413] },
  { name: "Gò Vấp", eta: "~ 45 phút", pos: [10.8387, 106.6653] },
  { name: "Tân Bình", eta: "~ 60 phút", pos: [10.8015, 106.6527] },
  { name: "Tân Phú", eta: "~ 60 phút", pos: [10.7901, 106.6282] },
  { name: "Thủ Đức", eta: "~ 60 phút", pos: [10.8494, 106.7537] },
];

export type PriceCategory = {
  label: string;
  rows: { item: string; scope: string }[];
};

const r = (item: string, scope: string) => ({ item, scope });

export const priceCategories: PriceCategory[] = [
  {
    label: "Sửa chữa, cải tạo",
    rows: [
      r("Sửa chữa nhà trọn gói", "Khảo sát kết cấu, sửa tường, sàn, mái, hoàn thiện lại toàn bộ"),
      r("Cải tạo phòng, tầng", "Đập thông, chia lại không gian, làm mới nội thất cơ bản"),
      r("Nâng tầng, cơi nới", "Kiểm tra móng, gia cố kết cấu, xin phép theo quy định"),
      r("Khắc phục hư hỏng nhỏ", "Nứt tường, bong tróc, lún nền, sụt trần"),
    ],
  },
  {
    label: "Chống thấm",
    rows: [
      r("Chống thấm sân thượng", "Vệ sinh bề mặt, xử lý cổ ống, phủ màng, ngâm nước thử"),
      r("Chống thấm nhà vệ sinh", "Tháo gạch khu vực thấm, chống thấm lại, lát hoàn trả"),
      r("Chống thấm tường, ban công", "Xử lý vết nứt, sơn chống thấm gốc xi măng hoặc PU"),
      r("Chống thấm mái, máng, bể nước", "Khò màng bitum, xử lý mối nối, kiểm tra thoát nước"),
    ],
  },
  {
    label: "Sơn nước – Sơn dầu",
    rows: [
      r("Sơn lại tường trong nhà", "Che chắn nội thất, xả nhám, bả matit, 1 lót + 2 phủ"),
      r("Sơn ngoài nhà", "Dựng giàn giáo, xử lý rêu mốc, sơn chống thấm ngoại thất"),
      r("Sơn trang trí, hiệu ứng", "Tư vấn mẫu, thi công sơn giả đá, giả bê tông, hiệu ứng"),
      r("Sơn dầu cửa sắt, lan can", "Cạo rỉ, sơn chống rỉ, sơn phủ hoàn thiện"),
    ],
  },
  {
    label: "Ốp lát",
    rows: [
      r("Lát gạch nền", "Cán nền, căn cốt, lát gạch, chà ron"),
      r("Ốp tường", "Xử lý mặt tường, ốp bằng keo chuyên dụng"),
      r("Ốp lát nhà vệ sinh", "Tạo dốc thoát sàn, chống thấm, ốp lát trọn gói"),
      r("Lát sân, lối đi", "Đổ bê tông lót, lát gạch hoặc đá chống trơn"),
    ],
  },
  {
    label: "Trần thạch cao",
    rows: [
      r("Trần chìm", "Khung xương, tấm thạch cao, xử lý mối nối, sơn bả"),
      r("Trần nổi", "Lắp khung, thả tấm, thuận tiện bảo trì"),
      r("Trần trang trí giật cấp", "Thiết kế mẫu trần, kết hợp đèn hắt LED"),
    ],
  },
  {
    label: "Điện nước",
    rows: [
      r("Sửa chữa, lắp đặt điện", "Kiểm tra tải, đi lại dây, lắp ổ cắm, công tắc, CB"),
      r("Sửa đường ống nước", "Dò tìm rò rỉ, thay ống, xử lý áp lực nước yếu"),
      r("Lắp đèn chiếu sáng", "Đèn âm trần, đèn trang trí, đèn cầu thang"),
      r("Lắp thiết bị vệ sinh", "Bồn cầu, lavabo, sen vòi, máy nước nóng"),
    ],
  },
  {
    label: "Cửa sắt",
    rows: [
      r("Cửa sắt, cổng sắt", "Đo đạc, gia công theo mẫu, sơn tĩnh điện hoặc sơn dầu"),
      r("Hàng rào, lan can", "Thiết kế mẫu, gia công, lắp đặt tại chỗ"),
      r("Mái che tôn, mái kính", "Khung sắt, mái tôn cách nhiệt hoặc kính cường lực"),
      r("Cửa cuốn", "Lắp mới, sửa motor, thay lá cửa"),
    ],
  },
];

export const faqs = [
  {
    q: "Khảo sát và báo giá có mất phí không?",
    a: "Với phần lớn khu vực nội thành TP.HCM, Duy Long Home hỗ trợ khảo sát tận nơi. Nếu có chi phí phát sinh cho việc khảo sát, nhân viên sẽ thông báo rõ khi bạn đặt lịch.",
  },
  {
    q: "Bao lâu thì thợ có mặt?",
    a: "Tùy lịch và khu vực, thường trong ngày hoặc ngày hôm sau. Các sự cố gấp như rò rỉ nước, chập điện sẽ được ưu tiên sắp xếp sớm nhất có thể.",
  },
  {
    q: "Làm sao để nhận báo giá chính xác?",
    a: "Bạn gọi hotline hoặc gửi ảnh hiện trạng qua Zalo. Kỹ thuật viên sẽ hẹn lịch khảo sát, đo đạc thực tế và gửi báo giá chi tiết từng hạng mục bằng văn bản.",
  },
  {
    q: "Thời gian bảo hành bao lâu?",
    a: "Thời gian bảo hành khác nhau theo từng hạng mục và được ghi cụ thể trong hợp đồng thi công.",
  },
  {
    q: "Có phải dọn nhà khi thi công không?",
    a: "Tùy hạng mục. Đội thợ sẽ tư vấn phương án che chắn và thi công theo từng khu vực để gia đình vẫn có thể sinh hoạt.",
  },
];
