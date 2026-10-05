import type { IconName } from "@/components/Icon";

export type Service = {
  slug: string;
  code: string;
  icon: IconName;
  time: string;
  title: string;
  desc: string;
  bullets: string[];
};

export const services: Service[] = [
  { slug: "sua-chua-cai-tao-nha", code: "S-01", icon: "home", time: "7 – 45 ngày", title: "Sửa chữa, cải tạo nhà", desc: "Khắc phục hư hỏng, nâng cấp, cải tạo không gian sống tiện nghi, hiện đại.", bullets: ["Nâng tầng, cơi nới", "Đập thông, chia lại phòng", "Làm mới mặt tiền"] },
  { slug: "chong-tham", code: "S-02", icon: "drop", time: "1 – 5 ngày", title: "Chống thấm", desc: "Sân thượng, tường, nhà vệ sinh, ban công, mái, máng, bể nước.", bullets: ["Khò nóng màng bitum", "Sơn gốc PU, xi măng", "Kiểm tra ngâm nước 48h"] },
  { slug: "son-nuoc-son-dau", code: "S-03", icon: "roller", time: "3 – 10 ngày", title: "Sơn nước – Sơn dầu", desc: "Sơn nhà, sơn lại tường trong – ngoài, sơn trang trí, chống thấm, hiệu ứng.", bullets: ["Xả nhám, bả matit", "1 lớp lót + 2 lớp phủ", "Sơn dầu cửa, lan can"] },
  { slug: "op-lat", code: "S-04", icon: "tiles", time: "2 – 7 ngày", title: "Ốp lát", desc: "Ốp lát gạch nền, tường, nhà vệ sinh, sân — thẩm mỹ, đúng kỹ thuật.", bullets: ["Cán nền, tạo dốc thoát", "Keo dán gạch chuyên dụng", "Chà ron chống thấm"] },
  { slug: "tran-thach-cao", code: "S-05", icon: "ceiling", time: "2 – 5 ngày", title: "Trần thạch cao", desc: "Trần trang trí, trần chìm, trần nổi. Đẹp, bền, chống ẩm, chống nóng.", bullets: ["Khung xương tiêu chuẩn", "Tấm chống ẩm cho WC", "Kết hợp đèn hắt LED"] },
  { slug: "dien-nuoc", code: "S-06", icon: "bolt", time: "Trong ngày", title: "Điện nước", desc: "Sửa chữa, lắp đặt thiết bị điện nước, thay ống, bóng đèn, thiết bị vệ sinh.", bullets: ["Dò tìm rò rỉ nước", "Đi lại dây điện âm tường", "Lắp máy bơm, bồn nước"] },
  { slug: "cua-sat", code: "S-07", icon: "gate", time: "3 – 10 ngày", title: "Cửa sắt", desc: "Làm mới, sửa chữa cửa sắt, cổng, hàng rào, lan can, mái che, cửa cuốn.", bullets: ["Gia công theo bản vẽ", "Sơn tĩnh điện / sơn dầu", "Mái tôn, mái kính"] },
];

export type Project = {
  slug: string;
  /** Ảnh đại diện (trong /public) */
  image?: string;
  cat: string;
  name: string;
  area: string;
  size: string;
  time: string;
};

export const projects: Project[] = [
  { slug: "son-lat-op-go-go-vap", image: "/son-op-go/1790740739263_751968165130597158_751968165130597158_f744a2d4b78a79096737a274dc3983e1.jpg", cat: "Cải tạo", name: "Sơn lát ốp gỗ", area: "Gò Vấp", size: "4 × 16 m", time: "~ 35 ngày" },
  { slug: "chong-tham-san-thuong-quan-12", image: "/chong-tham/1790996283519_751968165130597158_751968165130597158_55db2ffbd52106b065cb384bf1aeadd5.jpg", cat: "Chống thấm", name: "Chống thấm sân thượng và máng xối", area: "Quận 12", size: "60 m²", time: "3 ngày" },
  { slug: "sua-nha-tron-goi-nha-pho-nhieu-tang", image: "/sua-nha-tron-goi/1790744682376_751968165130597158_751968165130597158_db721af947cc3690371a71343db7106f.jpg", cat: "Cải tạo", name: "Sửa nhà trọn gói nhà phố nhiều tầng", area: "TP.HCM", size: "Nhà phố nhiều tầng", time: "Đang cập nhật" },
  { slug: "xay-to-son-ba-tuong-cau-thang", image: "/thay-nen-nha/1790746071156_751968165130597158_751968165130597158_38e751793d80adb68359e94d3517c383.jpg", cat: "Cải tạo", name: "Xây tô, sơn bả tường vòm cầu thang", area: "TP.HCM", size: "Tường cầu thang, trần", time: "Đang cập nhật" },
  { slug: "sua-son-cua-sat-my-thuat-hoc-mon", image: "/lam-cua-sat/1790996243968_751968165130597158_751968165130597158_0a9cf5c762a5588fd73269086b2dd275.jpg", cat: "Cửa sắt", name: "Sửa, sơn lại cửa sắt mỹ thuật", area: "Hóc Môn", size: "Cửa mặt tiền 4 cánh", time: "6 ngày" },
  { slug: "sua-chua-quan-ca-phe-binh-thanh", image: "/op-tuong/1791124557457_751968165130597158_751968165130597158_1dfb01f9a2d6be17705e99248c219456.jpg", cat: "Cải tạo", name: "Sửa chữa toàn bộ quán cà phê", area: "Bình Thạnh", size: "Mặt bằng tầng trệt", time: "1 ngày" },
];

export type Post = {
  slug: string;
  tag: string;
  title: string;
  date: string;
};

export const posts: Post[] = [
  { slug: "5-dau-hieu-san-thuong-dang-tham", tag: "Chống thấm", title: "5 dấu hiệu sân thượng đang thấm và cách xử lý trước mùa mưa", date: "09/2026" },
  { slug: "sua-nha-tron-goi-gom-nhung-hang-muc-nao", tag: "Báo giá", title: "Sửa nhà trọn gói gồm những hạng mục nào? Cách đọc một bảng báo giá", date: "09/2026" },
  { slug: "chon-son-noi-that-nha-pho-tphcm", tag: "Sơn nước", title: "Chọn sơn nội thất cho nhà phố TP.HCM: những điều cần lưu ý", date: "08/2026" },
];

export const steps = [
  { n: "1", t: "Tiếp nhận yêu cầu", d: "Tiếp nhận thông tin, hẹn lịch khảo sát.", time: "Trong ngày" },
  { n: "2", t: "Khảo sát & báo giá", d: "Kiểm tra hiện trạng, đưa phương án và báo giá chi tiết.", time: "1 – 2 ngày" },
  { n: "3", t: "Ký kết thi công", d: "Thống nhất hạng mục, tiến độ, hợp đồng.", time: "Theo lịch hẹn" },
  { n: "4", t: "Thi công", d: "Thi công đúng kỹ thuật, cập nhật tiến độ hằng ngày.", time: "Tùy hạng mục" },
  { n: "5", t: "Nghiệm thu", d: "Kiểm tra cùng chủ nhà, bàn giao công trình.", time: "Khi hoàn thành" },
  { n: "6", t: "Bảo hành", d: "Bảo hành theo hợp đồng, hỗ trợ nhanh chóng.", time: "Theo hạng mục" },
];

export const reviews = [
  { q: "Sân thượng thấm mấy năm, gọi buổi sáng thì chiều có người qua xem. Làm xong ngâm nước thử cho mình coi, mùa mưa vừa rồi không còn thấm.", i: "H", n: "Chị Thu Hà", m: "Chống thấm · Quận 12" },
  { q: "Báo giá chi tiết từng hạng mục nên dễ so sánh. Thợ làm gọn, cuối ngày dọn dẹp sạch sẽ, nhà vẫn ở được trong lúc sửa.", i: "B", n: "Anh Quốc Bảo", m: "Cải tạo nhà · Gò Vấp" },
  { q: "Trần thạch cao và đèn hắt làm đẹp hơn mình tưởng. Có vài chỗ muốn chỉnh lại, đội thợ quay lại sửa ngay không phàn nàn.", i: "L", n: "Cô Mỹ Lan", m: "Trần thạch cao · Tân Bình" },
];

export const stats = [
  { v: "10+", l: "năm kinh nghiệm sửa chữa nhà" },
  { v: "1.500+", l: "công trình đã bàn giao tại TP.HCM" },
  { v: "30+", l: "thợ lành nghề, có tổ đội riêng" },
  { v: "8", l: "hạng mục thi công một đầu mối" },
];
