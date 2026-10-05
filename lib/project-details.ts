/**
 * Danh sách công trình đầy đủ (trang /cong-trinh) + nội dung chi tiết (trang /cong-trinh/[slug]).
 *
 * - 6 công trình đầu giữ nguyên slug của `lib/data.ts`; 3 công trình cuối lấy từ design CongTrinh.dc.html.
 * - `cat` là danh mục dùng cho tab lọc (theo design CongTrinh.dc.html).
 * - Nội dung chi tiết của "Sơn lát ốp gỗ" (trước là "Cải tạo nhà phố 3 tầng") lấy từ design CongTrinhChiTiet.dc.html.
 *   Các công trình khác được viết cùng cấu trúc từ thông tin có sẵn (mô tả dịch vụ, đánh giá khách hàng)
 *   — TODO: chủ web thay bằng mô tả, ảnh và phản hồi thật của từng công trình.
 */

export const projectCategories = ["Cải tạo", "Chống thấm", "Sơn nước", "Trần thạch cao", "Cửa sắt"] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export type ProjectStatus = "Đã bàn giao" | "Đang thi công";

export type ProjectQuote = {
  text: string;
  name: string;
  role: string;
};

export type ProjectDetail = {
  slug: string;
  /** Ảnh công trình (trong /public) kèm chú thích; ảnh đầu là ảnh đại diện */
  photos?: { src: string; caption: string }[];
  /** Cặp ảnh trước / sau (vị trí trong photos) */
  beforeAfter?: [number, number];
  /** Video thi công (trong /public) */
  video?: string;
  cat: ProjectCategory;
  name: string;
  area: string;
  size: string;
  time: string;
  status: ProjectStatus;
  /** H1: phần chữ thường + phần tô màu thương hiệu */
  title: { main: string; hl: string };
  lead: string;
  /** Thanh thông tin */
  location: string;
  sizeDetail: string;
  scope: string;
  /** 3 cột Hiện trạng / Giải pháp / Kết quả */
  current: string[];
  solution: string[];
  resultTitle: string;
  result: string[];
  /** Số ảnh còn lại hiển thị trên ô ảnh nhỏ thứ 2 (chỉ khi có) */
  morePhotos?: number;
  quote?: ProjectQuote;
  /** Slug công trình tương tự (nếu không có sẽ tự chọn) */
  related?: string[];
};

export const projectDetails: ProjectDetail[] = [
  {
    slug: "son-lat-op-go-go-vap",
    photos: [
      { src: "/son-op-go/1790740739263_751968165130597158_751968165130597158_f744a2d4b78a79096737a274dc3983e1.jpg", caption: "Phòng khách: lát gạch vân đá khổ lớn, ốp tường vân đá kèm tranh gạch, vách lam gỗ, trần thạch cao giật cấp có đèn hắt" },
      { src: "/son-op-go/1790740739252_751968165130597158_751968165130597158_d63d0996e0ec453bbcef4fbd07545796.jpg", caption: "Cầu thang: ốp gỗ tường cầu thang có phào chỉ gỗ chạm hoa văn, mặt bậc đá granite đen, lan can kính cường lực tay vịn gỗ" },
      { src: "/son-op-go/1790740739274_751968165130597158_751968165130597158_6b6b60901114dd575a6cfb89a20f5521.jpg", caption: "Bếp và gầm cầu thang: lát gạch vân đá, trần thạch cao giật cấp, tủ bếp gỗ" },
      { src: "/son-op-go/1790740739225_751968165130597158_751968165130597158_5a693decaaeb1aec0f938f04d4978886.jpg", caption: "Sảnh tầng trệt: lát gạch vân đá, thảm gạch trang trí giữa sàn, ốp tường vân đá" },
      { src: "/son-op-go/1790740739240_751968165130597158_751968165130597158_6d546bc32a4f8f35021771773c890fe6.jpg", caption: "Cầu thang lên tầng: ốp gỗ tường cầu thang, lan can kính tay vịn gỗ" },
      { src: "/son-op-go/1790740739201_751968165130597158_751968165130597158_a72c74efe4a9602253e17472dd8584fb.jpg", caption: "Mặt tiền nhà sau khi sơn mới, phào chỉ trang trí" },
    ],
    cat: "Cải tạo",
    name: "Sơn lát ốp gỗ",
    area: "Gò Vấp",
    size: "4 × 16 m",
    time: "~ 35 ngày",
    status: "Đã bàn giao",
    title: { main: "Sơn lát ốp gỗ", hl: "nhà phố – Gò Vấp" },
    lead: "Nhà xây hơn 15 năm, thấm sân thượng, điện nước xuống cấp. Gia chủ muốn làm mới toàn bộ trước khi con cái về ở cùng.",
    location: "Gò Vấp, TP.HCM",
    sizeDetail: "4 × 16 m · 3 tầng",
    scope: "Sơn nước, lát gạch, ốp tường, ốp lam gỗ, trần thạch cao",
    current: [
      "Sân thượng thấm xuống trần tầng 3",
      "Tường ngoài bong tróc, rêu mốc",
      "Hệ thống điện cũ, hay nhảy CB",
      "2 nhà vệ sinh thấm sang phòng bên",
    ],
    solution: [
      "Chống thấm sân thượng bằng màng khò nóng",
      "Xử lý nứt, sơn lại toàn bộ trong – ngoài",
      "Đi lại dây điện, thay tủ điện",
      "Cải tạo 2 nhà vệ sinh trọn gói",
    ],
    resultTitle: "Kết quả",
    result: [
      "Ngâm nước thử 48 giờ không thấm",
      "Nhà sáng, thoáng hơn với tông sơn mới",
      "Điện nước an toàn, ổn định",
      "Bàn giao đúng tiến độ đã thống nhất",
    ],
    morePhotos: 3,
    quote: {
      text: "Ban đầu chỉ định sửa sân thượng, nhưng sau khi kỹ thuật viên khảo sát và giải thích, gia đình quyết định làm luôn cả nhà. Mỗi ngày đều được gửi ảnh tiến độ qua Zalo nên rất yên tâm.",
      name: "Anh Quốc Bảo",
      role: "Chủ nhà, Gò Vấp",
    },
    related: ["chong-tham-san-thuong-quan-12", "sua-chua-quan-ca-phe-binh-thanh", "sua-son-cua-sat-my-thuat-hoc-mon"],
  },
  {
    slug: "sua-nha-tron-goi-nha-pho-nhieu-tang",
    photos: [
      { src: "/sua-nha-tron-goi/1790744682376_751968165130597158_751968165130597158_db721af947cc3690371a71343db7106f.jpg", caption: "Phòng ngủ sau khi hoàn thiện: sơn mới, lát sàn gỗ, phào chỉ trần" },
      { src: "/sua-nha-tron-goi/1790744682340_751968165130597158_751968165130597158_d7710168198f6dd92d84c382b8c6f032.jpg", caption: "Gạch tàu sân thượng bong, rêu bám quanh mái" },
      { src: "/sua-nha-tron-goi/1790744682378_751968165130597158_751968165130597158_dfbc6ce75fa87ddab893d46f59a5e8aa.jpg", caption: "Hành lang, cầu thang sau khi hoàn thiện: cửa gỗ sơn trắng, sàn gỗ" },
      { src: "/sua-nha-tron-goi/1790744682318_751968165130597158_751968165130597158_16ae06c85edebd7217c48ade5baccccc.jpg", caption: "Mặt tiền nhà phố nhiều tầng trước khi sửa chữa" },
      { src: "/sua-nha-tron-goi/1790744682354_751968165130597158_751968165130597158_07ba5370a4c47c109221d145e3723d8a.jpg", caption: "Dựng giàn giáo để sửa và sơn lại mặt tiền" },
      { src: "/sua-nha-tron-goi/1790744682322_751968165130597158_751968165130597158_f8357baa844150d41fc1e22884c717b5.jpg", caption: "Kỹ thuật viên khảo sát hiện trạng cùng chủ nhà" },
      { src: "/sua-nha-tron-goi/1790744682330_751968165130597158_751968165130597158_28f1e1c7eab59afd954578037e524a3c.jpg", caption: "Lan can con tiện ban công bong tróc, bám bẩn" },
      { src: "/sua-nha-tron-goi/1790744682336_751968165130597158_751968165130597158_9da35815c689e66821f15c45e2acff2c.jpg", caption: "Sân thượng xuống cấp, nhiều đồ cũ cần dọn dẹp" },
      { src: "/sua-nha-tron-goi/1790744682338_751968165130597158_751968165130597158_e69b286e1cde80780733795fc727e6f3.jpg", caption: "Sân thượng lát gạch tàu cũ, tường ố vàng" },
      { src: "/sua-nha-tron-goi/1790744682342_751968165130597158_751968165130597158_ea4cf3db234c9a672d48505cd1a5a89f.jpg", caption: "Giếng trời mái vòm trước khi sơn sửa" },
      { src: "/sua-nha-tron-goi/1790744682358_751968165130597158_751968165130597158_5eacc596cabcd2bd8e85039ca8c1fad0.jpg", caption: "Đục bỏ gạch ốp lát cũ khu bếp" },
      { src: "/sua-nha-tron-goi/1790744682362_751968165130597158_751968165130597158_7755c03949c7f9fd9d3c1ff3bbc33812.jpg", caption: "Tháo dỡ gạch cũ, chuẩn bị chống thấm nhà vệ sinh" },
      { src: "/sua-nha-tron-goi/1790744682364_751968165130597158_751968165130597158_876254a4c6ae87abf7f81de9efa579ab.jpg", caption: "Nền và tường sau khi đục bỏ gạch cũ" },
      { src: "/sua-nha-tron-goi/1790744682366_751968165130597158_751968165130597158_e573643c5a9651d7fc23c67230fb9e93.jpg", caption: "Mặt bằng sạch, sẵn sàng cán nền và ốp lát lại" },
      { src: "/sua-nha-tron-goi/1790744682352_751968165130597158_751968165130597158_b539ef539a02597805688cdf55e3189f.jpg", caption: "Trát vữa hoàn thiện mảng tường vòm cầu thang" },
      { src: "/sua-nha-tron-goi/1790744682344_751968165130597158_751968165130597158_89fd8a72872b666cdca46240d42bad12.jpg", caption: "Thi công trong nhà: giàn giáo, vật tư bột trét, sơn" },
      { src: "/sua-nha-tron-goi/1790744682348_751968165130597158_751968165130597158_b8be12c85b9337b6d3d597baca6ece05.jpg", caption: "Bả matit tường trước khi sơn" },
      { src: "/sua-nha-tron-goi/1790786750145_751968165130597158_751968165130597158_b7ef394052aeec8638875b4d20d072a5.jpg", caption: "Sơn trần trên giàn giáo" },
      { src: "/sua-nha-tron-goi/1790744682320_751968165130597158_751968165130597158_2001891f282f26028eb9099ba70fd79d.jpg", caption: "Mặt tiền nhìn từ dưới lên, tầng trệt kinh doanh" },
    ],
    cat: "Cải tạo",
    name: "Sửa nhà trọn gói nhà phố nhiều tầng",
    area: "TP.HCM",
    size: "Nhà phố nhiều tầng",
    time: "Đang cập nhật",
    status: "Đã bàn giao",
    title: { main: "Sửa nhà trọn gói", hl: "nhà phố nhiều tầng" },
    lead: "Nhà phố nhiều năm chưa sửa: sân thượng lát gạch tàu cũ, lan can bong tróc, gạch bếp và nhà vệ sinh xuống cấp. Đội thợ khảo sát, lên phương án và làm lại trọn gói từ mặt tiền đến từng phòng.",
    location: "TP.HCM",
    sizeDetail: "Nhà phố nhiều tầng",
    scope: "Sửa chữa, đục ốp lát, trát, sơn bả, sàn gỗ",
    current: [
      "Mặt tiền, lan can bong tróc, bám bẩn",
      "Sân thượng gạch tàu cũ, rêu mốc",
      "Gạch bếp, nhà vệ sinh cũ và xuống cấp",
      "Tường, trần ố màu, cần sơn lại",
    ],
    solution: [
      "Dựng giàn giáo, sửa và sơn lại mặt tiền",
      "Đục bỏ gạch cũ, chống thấm, ốp lát lại",
      "Xây, trát lại các mảng tường hư hỏng",
      "Bả matit, sơn mới toàn bộ trong nhà",
      "Lát sàn gỗ cho phòng ngủ, hành lang",
    ],
    resultTitle: "Kết quả",
    result: ["Nhà sáng, sạch như mới", "Phòng ngủ ấm cúng với sàn gỗ", "Một đầu mối lo từ khảo sát đến bàn giao"],
    related: ["xay-to-son-ba-tuong-cau-thang", "son-lat-op-go-go-vap", "chong-tham-san-thuong-quan-12"],
  },
  {
    slug: "xay-to-son-ba-tuong-cau-thang",
    photos: [
      { src: "/thay-nen-nha/1790746071156_751968165130597158_751968165130597158_38e751793d80adb68359e94d3517c383.jpg", caption: "Xây gạch lại mảng tường vòm cạnh cầu thang" },
      { src: "/thay-nen-nha/1790746071131_751968165130597158_751968165130597158_c99a8b6feeaaabc975bb7a8ad899aa38.jpg", caption: "Trát vữa phủ kín mảng tường vừa xây" },
      { src: "/thay-nen-nha/1790746071204_751968165130597158_751968165130597158_acec4ee086fb124e1d03cd09cad5d2dc.jpg", caption: "Trát vữa hoàn thiện, chuẩn bị bả matit" },
      { src: "/thay-nen-nha/1790746071171_751968165130597158_751968165130597158_979868210ab048179696c39f57347f83.jpg", caption: "Sơn bả trần trên giàn giáo" },
      { src: "/thay-nen-nha/1790746071183_751968165130597158_751968165130597158_971b6b1b9fc74a8c5250c3399ddb8c77.jpg", caption: "Pha trộn vật tư, chuẩn bị sơn bả trong nhà" },
    ],
    cat: "Cải tạo",
    name: "Xây tô, sơn bả tường vòm cầu thang",
    area: "TP.HCM",
    size: "Tường cầu thang, trần",
    time: "Đang cập nhật",
    status: "Đã bàn giao",
    title: { main: "Xây tô, sơn bả", hl: "tường vòm cầu thang" },
    lead: "Mảng tường vòm cạnh cầu thang bị hư hỏng, nứt bong. Đội thợ xây gạch lại, trát vữa phẳng rồi bả matit, sơn hoàn thiện cùng phần trần trong nhà.",
    location: "TP.HCM",
    sizeDetail: "Tường cầu thang, trần",
    scope: "Xây gạch, trát vữa, bả matit, sơn",
    current: ["Tường vòm cạnh cầu thang hư hỏng, nứt bong", "Trần ố màu, cần sơn lại"],
    solution: ["Xây gạch lại theo đúng đường vòm cũ", "Trát vữa phẳng, chờ khô đúng kỹ thuật", "Bả matit, sơn lót và sơn phủ"],
    resultTitle: "Kết quả",
    result: ["Tường vòm liền mạch, giữ đúng kiểu dáng cũ", "Tường, trần phẳng, sạch màu"],
    related: ["sua-nha-tron-goi-nha-pho-nhieu-tang", "son-lat-op-go-go-vap", "sua-chua-quan-ca-phe-binh-thanh"],
  },
  {
    slug: "chong-tham-san-thuong-quan-12",
    photos: [
      { src: "/chong-tham/1790996283519_751968165130597158_751968165130597158_55db2ffbd52106b065cb384bf1aeadd5.jpg", caption: "Lăn lớp chống thấm phủ kín sàn, chạy lên chân tường và bao quanh bệ bồn nước" },
      { src: "/chong-tham/1790684753147_751968165130597158_751968165130597158_9eb3c0a523cbf81021e0ab58ac1bee00.jpg", caption: "Sân thượng sau khi hoàn thiện: sàn, tường, chân giếng trời phủ liền một lớp, không còn khe hở" },
      { src: "/chong-tham/1790684753143_751968165130597158_751968165130597158_d14a7b603ac49fa7c15cef31d8268c4e.jpg", caption: "Máng xối giữa hai mái ngói trước khi xử lý: rêu mốc, nước đọng, tường bong tróc từng mảng" },
      { src: "/chong-tham/1790684753141_751968165130597158_751968165130597158_83740481b7ef5b7a0193644f814f1f69.jpg", caption: "Trộn vật liệu chống thấm gốc xi măng ngay trên sân thượng, quét lần lượt từng mảng" },
      { src: "/chong-tham/1790684753145_751968165130597158_751968165130597158_43e6a6c60e720233565e51137fb3dfb6.jpg", caption: "Máng xối sau khi chống thấm: lòng máng và tường phủ kín, nước chảy thẳng về ống thoát" },
    ],
    beforeAfter: [2, 4],
    cat: "Chống thấm",
    name: "Chống thấm sân thượng và máng xối",
    area: "Quận 12",
    size: "60 m²",
    time: "3 ngày",
    status: "Đã bàn giao",
    title: { main: "Chống thấm sân thượng", hl: "và máng xối – Quận 12" },
    lead: "Sân thượng và máng xối giữa hai mái ngói thấm nhiều năm, mùa mưa nào tầng dưới cũng ố trần, bong sơn. Gia chủ đã thử vá chỗ thấm vài lần nhưng không hết. Đội thợ xử lý lại toàn bộ bề mặt nhận nước, từ sàn, chân tường đến lòng máng, và ngâm nước thử trước mặt chủ nhà rồi mới bàn giao.",
    location: "Quận 12, TP.HCM",
    sizeDetail: "60 m², gồm sàn sân thượng và máng xối mái ngói",
    scope: "Chống thấm sàn, chân tường, máng xối",
    current: [
      "Sân thượng thấm nhiều năm, đã vá cục bộ nhưng không hết",
      "Máng xối rêu mốc, nước đọng lâu không thoát",
      "Tường quanh máng nứt chân chim, bong tróc từng mảng",
      "Trần và tường tầng dưới ố vàng, bong sơn mỗi mùa mưa",
    ],
    solution: [
      "Cạo rêu, đục bỏ lớp vữa bong, vệ sinh sạch bụi bẩn",
      "Gia cố chân tường, góc tiếp giáp sàn và cổ ống thoát nước, là những chỗ hay thấm nhất",
      "Quét vật liệu chống thấm gốc xi măng cho sàn, chạy lên chân tường",
      "Phủ kín lòng máng xối và mặt tường hai bên máng",
      "Ngâm nước thử 48 giờ, kiểm tra trần tầng dưới trước khi bàn giao",
    ],
    resultTitle: "Kết quả",
    result: [
      "Ngâm nước thử 48 giờ, trần tầng dưới khô ráo",
      "Máng xối thoát nước nhanh, không còn đọng",
      "Qua mùa mưa không thấm lại",
      "Bàn giao đúng 3 ngày như đã báo",
    ],
    quote: {
      text: "Sân thượng thấm mấy năm, gọi buổi sáng thì chiều có người qua xem. Làm xong ngâm nước thử cho mình coi, mùa mưa vừa rồi không còn thấm.",
      name: "Chị Thu Hà",
      role: "Chủ nhà, Quận 12",
    },
    related: ["chong-tham-san-thuong-lan-can-kinh", "chong-tham-tuong-giap-ranh-go-vap", "sua-nha-tron-goi-nha-pho-nhieu-tang"],
  },
  {
    slug: "chong-tham-san-thuong-lan-can-kinh",
    photos: [
      { src: "/chong-tham/san-thuong-lan-can-kinh-3.jpg", caption: "Chân tường sân thượng đã quét chống thấm gốc xi măng, thợ đang xử lý tiếp góc tiếp giáp sàn" },
      { src: "/chong-tham/san-thuong-lan-can-kinh-1.jpg", caption: "Quét lớp chống thấm đầu tiên bằng chổi, miết kỹ vào mặt bê tông" },
      { src: "/chong-tham/san-thuong-lan-can-kinh-2.jpg", caption: "Lớp chống thấm loang dần ra sàn, quét từ trong ra lối đi để không giẫm lên lớp mới" },
      { src: "/chong-tham/1790684753139_751968165130597158_751968165130597158_09ead468c6298f048a093a9a829b4b93.jpg", caption: "Bậc bê tông sát khung kính: phủ kín mặt bậc, quét đậm ở khe tiếp giáp khung cửa" },
      { src: "/chong-tham/san-thuong-lan-can-kinh-4.jpg", caption: "Toàn bộ chân tường quanh sân thượng được phủ một dải chống thấm đều tay" },
    ],
    video: "/chong-tham/1790684753149_751968165130597158_751968165130597158.mp4",
    cat: "Chống thấm",
    name: "Chống thấm sân thượng nhà cao tầng",
    area: "TP.HCM",
    size: "Sân thượng lan can kính",
    time: "Đang cập nhật",
    status: "Đã bàn giao",
    title: { main: "Chống thấm sân thượng", hl: "nhà cao tầng lan can kính" },
    lead: "Sân thượng bê tông trên cao, nắng gắt và mưa tạt quanh năm. Nước thường ngấm vào ở chân tường và các khe tiếp giáp khung kính trước, rồi mới lan ra mặt sàn. Đội thợ xử lý chân tường trước, sau đó quét phủ toàn bộ mặt sàn.",
    location: "TP.HCM",
    sizeDetail: "Sân thượng bê tông, lan can kính",
    scope: "Chống thấm sàn, chân tường, khe khung kính",
    current: [
      "Sàn bê tông trần, không có lớp chống thấm",
      "Chân tường và khe khung kính là chỗ nước ngấm vào",
      "Sân thượng lộ thiên, chịu nắng mưa trực tiếp",
    ],
    solution: [
      "Vệ sinh mặt sàn, tưới ẩm bê tông trước khi quét",
      "Quét chống thấm gốc xi măng cho chân tường trước, tạo một dải kín quanh sân",
      "Miết kỹ các khe tiếp giáp khung kính, bậc bê tông",
      "Quét phủ toàn bộ mặt sàn, nối liền với dải chân tường",
    ],
    resultTitle: "Kết quả",
    result: [
      "Sàn và chân tường liền một lớp, không còn khe hở cho nước",
      "Bàn giao đúng tiến độ đã thống nhất",
    ],
    related: ["chong-tham-san-thuong-quan-12", "chong-tham-tuong-giap-ranh-go-vap", "sua-nha-tron-goi-nha-pho-nhieu-tang"],
  },
  {
    slug: "son-moi-nha-pho-thu-duc",
    cat: "Sơn nước",
    name: "Sơn mới nhà phố 2 mặt tiền",
    area: "Thủ Đức",
    size: "420 m² sơn",
    time: "9 ngày",
    status: "Đã bàn giao",
    title: { main: "Sơn mới nhà phố", hl: "2 mặt tiền – Thủ Đức" },
    lead: "Làm mới toàn bộ lớp sơn trong – ngoài cho nhà phố 2 mặt tiền, thi công đúng quy trình để màu sơn bền đẹp lâu dài.",
    location: "Thủ Đức, TP.HCM",
    sizeDetail: "420 m² sơn",
    scope: "Sơn nước trong – ngoài",
    current: ["Lớp sơn cũ xuống màu, bong tróc", "Tường có vết nứt chân chim"],
    solution: ["Xả nhám, bả matit", "Xử lý nứt trước khi sơn", "1 lớp lót + 2 lớp phủ"],
    resultTitle: "Kết quả",
    result: ["Nhà sáng, thoáng hơn với tông sơn mới", "Bàn giao đúng tiến độ đã thống nhất"],
  },
  {
    slug: "tran-giat-cap-tan-binh",
    cat: "Trần thạch cao",
    name: "Trần giật cấp phòng khách",
    area: "Tân Bình",
    size: "38 m²",
    time: "4 ngày",
    status: "Đã bàn giao",
    title: { main: "Trần giật cấp", hl: "phòng khách – Tân Bình" },
    lead: "Làm trần thạch cao giật cấp cho phòng khách, kết hợp đèn hắt LED để không gian sang và ấm hơn.",
    location: "Tân Bình, TP.HCM",
    sizeDetail: "38 m²",
    scope: "Trần thạch cao, đèn hắt",
    current: ["Trần cũ đơn điệu, thiếu ánh sáng", "Gia chủ muốn làm mới phòng khách"],
    solution: ["Khung xương tiêu chuẩn", "Trần giật cấp theo thiết kế thống nhất", "Kết hợp đèn hắt LED"],
    resultTitle: "Kết quả",
    result: ["Phòng khách sáng và sang hơn", "Bàn giao đúng tiến độ đã thống nhất"],
    quote: {
      text: "Trần thạch cao và đèn hắt làm đẹp hơn mình tưởng. Có vài chỗ muốn chỉnh lại, đội thợ quay lại sửa ngay không phàn nàn.",
      name: "Cô Mỹ Lan",
      role: "Chủ nhà, Tân Bình",
    },
  },
  {
    slug: "sua-son-cua-sat-my-thuat-hoc-mon",
    photos: [
      { src: "/lam-cua-sat/1790996243968_751968165130597158_751968165130597158_0a9cf5c762a5588fd73269086b2dd275.jpg", caption: "Sơn dặm hoàn thiện bộ cửa sắt mỹ thuật sau khi lắp lại" },
      { src: "/lam-cua-sat/1790996243927_751968165130597158_751968165130597158_3bffe94318e30b24439df57f9a32c537.jpg", caption: "Gia công chân cửa mới bằng sắt hộp ngay tại công trình" },
      { src: "/lam-cua-sat/1790996243953_751968165130597158_751968165130597158_092f4f0f4fd17a4ac5abc5f48f580599.jpg", caption: "Chân cửa cũ bị mục được thay bằng sắt hộp mới, sơn lót chống rỉ ở mối hàn" },
    ],
    cat: "Cửa sắt",
    name: "Sửa, sơn lại cửa sắt mỹ thuật",
    area: "Hóc Môn",
    size: "Cửa mặt tiền 4 cánh",
    time: "6 ngày",
    status: "Đã bàn giao",
    title: { main: "Sửa, sơn lại cửa sắt", hl: "mỹ thuật – Hóc Môn" },
    lead: "Bộ cửa sắt mỹ thuật mặt tiền bị mục chân cửa sau nhiều năm. Đội thợ thay chân cửa bằng sắt hộp mới ngay tại chỗ, giữ nguyên phần hoa văn và sơn lại toàn bộ.",
    location: "Bà Điểm, Hóc Môn, TP.HCM",
    sizeDetail: "Cửa mặt tiền 4 cánh",
    scope: "Sửa cửa sắt, sơn dầu",
    current: ["Chân cửa han gỉ, mục thủng", "Cánh cửa xệ, đóng mở nặng", "Lớp sơn cũ bong tróc"],
    solution: ["Cắt bỏ chân cửa mục, hàn chân mới bằng sắt hộp", "Sơn lót chống rỉ các mối hàn", "Sơn dầu hoàn thiện, dặm lại hoa văn"],
    resultTitle: "Kết quả",
    result: ["Cửa chắc chắn, đóng mở nhẹ nhàng", "Giữ nguyên hoa văn, không phải làm cửa mới", "Mặt tiền sạch đẹp như mới"],
  },
  {
    slug: "sua-chua-quan-ca-phe-binh-thanh",
    photos: [
      { src: "/op-tuong/1791124557457_751968165130597158_751968165130597158_1dfb01f9a2d6be17705e99248c219456.jpg", caption: "Không gian quán sau khi sửa: tường sơn mới, chân tường ốp lam sóng giả gỗ chạy liền một dải" },
      { src: "/op-tuong/1791124557469_751968165130597158_751968165130597158_5ace6cce04e8cf46b17992aa9f4b997d.jpg", caption: "Quán cà phê góc phố tạm nghỉ một ngày để sửa chữa" },
      { src: "/op-tuong/1791125519891_751968165130597158_751968165130597158_a6f19ccf204c16e6b57e7e02f26a46a4.jpg", caption: "Đội thợ bóc lớp giấy dán tường cũ đã bong, ố trên toàn bộ mảng tường" },
      { src: "/op-tuong/1791125519915_751968165130597158_751968165130597158_88d1f2c6566945575ccdddca6dc78eb1.jpg", caption: "Tập kết bột trét, sơn ngay trước quán, gọn lối đi cho hàng xóm" },
      { src: "/op-tuong/1791124557463_751968165130597158_751968165130597158_c216ccbaa07572629db0d698dd4364b2.jpg", caption: "Bắn máy laser lấy một đường cao độ chung, cắt tấm lam sóng tại chỗ" },
      { src: "/op-tuong/1791124557455_751968165130597158_751968165130597158_d98f42be5ac70e3e00abe4582099e754.jpg", caption: "Ốp lam sóng hai bên lối vào, dọc theo quầy pha chế" },
      { src: "/op-tuong/1791124557461_751968165130597158_751968165130597158_9f6153f7b7e509a8c459952c82b4454f.jpg", caption: "Ốp chân tường dưới bảng tên quán, khoét ổ điện đúng vị trí cũ" },
      { src: "/op-tuong/1791124557449_751968165130597158_751968165130597158_03682d7771021d5cd5e6a12bf16b048c.jpg", caption: "Bo góc cột bằng nẹp gỗ, dán băng keo giữ tấm chờ keo silicone khô" },
      { src: "/op-tuong/1791124557453_751968165130597158_751968165130597158_58522ccd3bbb2be1704cffde73108cc7.jpg", caption: "Mảng tường cạnh cửa kính sau khi hoàn thiện, nẹp viền khít" },
      { src: "/op-tuong/1791124557451_751968165130597158_751968165130597158_0df9f88a7b4f3bef2d8629ff878a9aa6.jpg", caption: "Quán mở cửa đón khách lại ngay sau khi bàn giao" },
    ],
    beforeAfter: [2, 0],
    cat: "Cải tạo",
    name: "Sửa chữa toàn bộ quán cà phê",
    area: "Bình Thạnh",
    size: "Mặt bằng tầng trệt",
    time: "1 ngày",
    status: "Đã bàn giao",
    title: { main: "Sửa chữa toàn bộ", hl: "quán cà phê – Bình Thạnh" },
    lead: "Quán cà phê góc phố dùng giấy dán tường nhiều năm, đã bong tróc và ố vàng. Chủ quán chỉ muốn nghỉ bán đúng một ngày, nên đội thợ bóc tường cũ, sơn bả lại và ốp lam sóng giả gỗ toàn bộ chân tường trong ngày, để quán mở cửa lại ngay hôm sau.",
    location: "Bình Thạnh, TP.HCM",
    sizeDetail: "Mặt bằng tầng trệt, quầy pha chế và khu khách ngồi",
    scope: "Bóc giấy dán tường, sơn bả, ốp lam sóng giả gỗ",
    current: [
      "Giấy dán tường cũ bong mảng, ố vàng",
      "Chân tường trầy xước, bám bẩn vì bàn ghế va chạm",
      "Quán đang kinh doanh, chỉ nghỉ được một ngày",
    ],
    solution: [
      "Bóc sạch giấy dán tường, xử lý lại bề mặt",
      "Bả matit, sơn mới phần tường phía trên",
      "Cân laser, ốp lam sóng giả gỗ chạy liền toàn bộ chân tường",
      "Bo góc cột, nẹp viền, khoét ổ điện đúng vị trí",
    ],
    resultTitle: "Kết quả",
    result: [
      "Quán sáng, sạch, đồng bộ một tông gỗ ấm",
      "Chân tường chịu va chạm, lau chùi dễ",
      "Xong trong một ngày, quán mở cửa lại đúng hẹn",
    ],
  },
  {
    slug: "chong-tham-tuong-giap-ranh-go-vap",
    cat: "Chống thấm",
    name: "Chống thấm tường giáp ranh",
    area: "Gò Vấp",
    size: "85 m²",
    time: "4 ngày",
    status: "Đang thi công",
    title: { main: "Chống thấm", hl: "tường giáp ranh – Gò Vấp" },
    lead: "Xử lý thấm tường giáp ranh với nhà bên cạnh, nơi nước mưa ngấm vào gây ố và bong sơn phía trong.",
    location: "Gò Vấp, TP.HCM",
    sizeDetail: "85 m²",
    scope: "Chống thấm tường",
    current: ["Tường giáp ranh thấm, ố vàng", "Sơn phía trong bong tróc"],
    solution: ["Xử lý bề mặt, trám vết nứt", "Chống thấm bằng sơn gốc PU, xi măng", "Sơn hoàn thiện lại phía trong"],
    resultTitle: "Mục tiêu",
    result: ["Tường khô ráo, không còn thấm", "Bàn giao đúng tiến độ đã thống nhất"],
  },
  {
    slug: "son-lai-can-ho-3-phong-ngu-thu-duc",
    cat: "Sơn nước",
    name: "Sơn lại căn hộ 3 phòng ngủ",
    area: "Thủ Đức",
    size: "96 m² sàn",
    time: "5 ngày",
    status: "Đang thi công",
    title: { main: "Sơn lại căn hộ", hl: "3 phòng ngủ – Thủ Đức" },
    lead: "Sơn lại toàn bộ căn hộ 3 phòng ngủ, thi công gọn gàng, dọn dẹp sạch sẽ cuối mỗi ngày.",
    location: "Thủ Đức, TP.HCM",
    sizeDetail: "96 m² sàn",
    scope: "Sơn nước nội thất",
    current: ["Tường cũ xuống màu, nhiều vết bẩn"],
    solution: ["Xả nhám, bả matit", "1 lớp lót + 2 lớp phủ", "Che chắn đồ đạc, vệ sinh sau thi công"],
    resultTitle: "Mục tiêu",
    result: ["Căn hộ sáng, sạch với tông sơn mới", "Bàn giao đúng tiến độ đã thống nhất"],
  },
  {
    slug: "nang-tang-nha-cap-4-quan-12",
    cat: "Cải tạo",
    name: "Nâng tầng nhà cấp 4",
    area: "Quận 12",
    size: "5 × 18 m",
    time: "~ 45 ngày",
    status: "Đang thi công",
    title: { main: "Nâng tầng", hl: "nhà cấp 4 – Quận 12" },
    lead: "Nâng tầng cho nhà cấp 4 để có thêm không gian sinh hoạt, hoàn thiện đồng bộ điện nước, chống thấm và sơn.",
    location: "Quận 12, TP.HCM",
    sizeDetail: "5 × 18 m",
    scope: "Nâng tầng, cải tạo",
    current: ["Nhà cấp 4 thiếu không gian sinh hoạt"],
    solution: ["Nâng tầng, cơi nới", "Đi lại hệ thống điện nước", "Chống thấm và sơn hoàn thiện"],
    resultTitle: "Mục tiêu",
    result: ["Thêm không gian sinh hoạt cho gia đình", "Bàn giao đúng tiến độ đã thống nhất"],
  },
];

export function getProjectDetail(slug: string): ProjectDetail | undefined {
  return projectDetails.find((p) => p.slug === slug);
}

/** 3 công trình tương tự: ưu tiên danh sách chỉ định, sau đó cùng danh mục, rồi các công trình khác */
export function getRelatedProjects(project: ProjectDetail, count = 3): ProjectDetail[] {
  const others = projectDetails.filter((p) => p.slug !== project.slug);
  const picked: ProjectDetail[] = [];
  const add = (p: ProjectDetail | undefined) => {
    if (p && picked.length < count && !picked.includes(p)) picked.push(p);
  };
  project.related?.forEach((slug) => add(others.find((p) => p.slug === slug)));
  others.filter((p) => p.cat === project.cat).forEach(add);
  others.forEach(add);
  return picked;
}
