import type { ReactNode, SVGProps } from "react";

const paths = {
  phone: <path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2z" />,
  check: <path d="M5 12l4.5 4.5L19 7" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  chevron: <path d="M6 9l6 6 6-6" />,
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-4-4" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  eye: (
    <>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  tag: (
    <>
      <path d="M3 12V3h9l9 9-9 9z" />
      <circle cx="7.5" cy="7.5" r="1.5" />
    </>
  ),
  ruler: (
    <>
      <path d="M3 17L17 3l4 4L7 21z" />
      <path d="M7 13l2 2M10 10l2 2M13 7l2 2" />
    </>
  ),
  helmet: (
    <>
      <path d="M3 17h18" />
      <path d="M5 17a7 7 0 0 1 14 0" />
      <path d="M10 10.5V6h4v4.5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
      <path d="M8.5 12l2.5 2.5 4.5-5" />
    </>
  ),
  messenger: (
    <>
      <path d="M12 3C7 3 3 6.6 3 11c0 2.5 1.3 4.7 3.3 6.2V21l3.3-1.8c.8.2 1.6.3 2.4.3 5 0 9-3.6 9-8s-4-8.5-9-8.5z" />
      <path d="M7.5 13l3-3 2.5 2 3.5-3" />
    </>
  ),
  chat: <path d="M12 3C7 3 3 6.6 3 11c0 2.5 1.3 4.7 3.3 6.2V21l3.3-1.8c.8.2 1.6.3 2.4.3 5 0 9-3.6 9-8s-4-8.5-9-8.5z" />,
  // Service icons
  home: (
    <>
      <path d="M3 11l9-7 9 7" />
      <path d="M5 9.5V20h14V9.5" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  drop: (
    <>
      <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />
      <path d="M9.5 14.5a2.5 2.5 0 0 0 2.5 2.5" />
    </>
  ),
  roller: (
    <>
      <rect x="3" y="3" width="15" height="6" rx="1.5" />
      <path d="M18 6h2v5h-8v3" />
      <rect x="10.5" y="14" width="3" height="7" rx="1" />
    </>
  ),
  tiles: (
    <>
      <rect x="3" y="3" width="8" height="8" />
      <rect x="13" y="3" width="8" height="8" />
      <rect x="3" y="13" width="8" height="8" />
      <rect x="13" y="13" width="8" height="8" />
    </>
  ),
  ceiling: (
    <>
      <path d="M2 5h20" />
      <path d="M4 5v4h16V5" />
      <path d="M12 9v4" />
      <path d="M8.5 17.5L12 13l3.5 4.5z" />
    </>
  ),
  bolt: <path d="M13 2L4 14h7l-1 8 9-12h-7z" />,
  snow: (
    <>
      <path d="M12 2v20M4.9 7l14.2 10M4.9 17L19.1 7" />
      <path d="M9.5 3.5L12 6l2.5-2.5M9.5 20.5L12 18l2.5 2.5M3.3 10.3l3.4-.8-.8-3.4M20.7 13.7l-3.4.8.8 3.4M5.9 17.9l.8-3.4-3.4-.8M18.1 6.1l-.8 3.4 3.4.8" />
    </>
  ),
  pipe: (
    <>
      <path d="M3 6h8a4 4 0 0 1 4 4v11" />
      <path d="M3 10h7a1 1 0 0 1 1 1v10" />
      <path d="M2 4v8M9 19h8" />
    </>
  ),
  gate: (
    <>
      <path d="M3 21V9a9 5 0 0 1 18 0v12" />
      <path d="M2 21h20" />
      <path d="M7.5 21V8.5M12 21V6.5M16.5 21V8.5" />
    </>
  ),
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof paths;

type Props = Omit<SVGProps<SVGSVGElement>, "name"> & {
  name: IconName;
  size?: number;
};

export function Icon({ name, size = 20, className, ...rest }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      className={className ? `ic ${className}` : "ic"}
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}

export function Star({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path
        fill="#E8912F"
        d="M12 2l3 6.5 7 .8-5.2 4.7 1.4 7L12 17.5 5.8 21l1.4-7L2 9.3l7-.8z"
      />
    </svg>
  );
}
