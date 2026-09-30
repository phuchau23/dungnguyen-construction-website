/** Chèn dữ liệu cấu trúc schema.org (JSON-LD) cho Google. Thoát "<" để không đóng thẻ script sớm. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
