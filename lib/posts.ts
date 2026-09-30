/** Bài viết mục Tin tức / Cẩm nang sửa nhà */

export type PostCategory = { slug: string; label: string };

/** Chuyên mục hiển thị ở hàng pill lọc trên trang /tin-tuc */
export const postCategories: PostCategory[] = [
  { slug: "chong-tham", label: "Chống thấm" },
  { slug: "son-nuoc", label: "Sơn nước" },
  { slug: "cai-tao", label: "Cải tạo" },
  { slug: "dien-lanh", label: "Điện lạnh" },
  { slug: "bao-gia", label: "Báo giá" },
];

export type ArticleSection = {
  /** id neo cho mục lục */
  id: string;
  heading: string;
  paragraphs: string[];
  /** Có hiện trong mục lục bên phải không (mặc định: có) */
  toc?: boolean;
};

export type Article = {
  slug: string;
  /** Ảnh bìa (trong /public) */
  image?: string;
  tag: string;
  tagSlug: string;
  title: string;
  excerpt: string;
  /** Tháng/năm, ví dụ "09/2026" */
  date: string;
  readTime: string;
  authorTeam: string;
  sections: ArticleSection[];
  /** Khối kêu gọi chèn sau mục thứ `ctaAfter` (tính từ 1) */
  cta: { title: string; text: string };
  ctaAfter: number;
  /** Nhãn nhỏ trên thẻ hotline ở cột phải */
  callLabel: string;
};

export const articles: Article[] = [
  {
    slug: "5-dau-hieu-san-thuong-dang-tham",
    image: "/chong-tham/1790684753143_751968165130597158_751968165130597158_d14a7b603ac49fa7c15cef31d8268c4e.jpg",
    tag: "Chống thấm",
    tagSlug: "chong-tham",
    title: "5 dấu hiệu sân thượng đang thấm và cách xử lý trước mùa mưa",
    excerpt:
      "Vết ố trên trần tầng trên cùng thường là dấu hiệu muộn. Đây là những điểm chủ nhà nên kiểm tra sớm.",
    date: "09/2026",
    readTime: "6 phút đọc",
    authorTeam: "Tổ thợ chống thấm",
    sections: [
      {
        id: "m0",
        heading: "1. Vết ố vàng trên trần tầng trên cùng",
        paragraphs: [
          "Đây là dấu hiệu dễ thấy nhất nhưng cũng là dấu hiệu muộn nhất. Khi nước đã thấm xuyên qua sàn bê tông, lớp chống thấm phía trên thường đã hỏng từ lâu.",
        ],
      },
      {
        id: "m1",
        heading: "2. Nước đọng lâu sau mưa",
        paragraphs: [
          "Nếu sau mưa 2–3 giờ mà sân thượng vẫn còn vũng nước, độ dốc thoát nước có vấn đề. Nước đọng lâu sẽ tìm đường thấm qua các khe nứt nhỏ.",
        ],
      },
      {
        id: "m2",
        heading: "3. Vết nứt chân chim trên bề mặt",
        paragraphs: [
          "Các vết nứt nhỏ do co ngót nhiệt là đường dẫn nước vào kết cấu. Chúng thường xuất hiện nhiều ở sân thượng không có lớp chống nóng.",
        ],
      },
      {
        id: "m3",
        heading: "4. Cổ ống và góc tường bị ẩm",
        paragraphs: [
          "Cổ ống thoát nước, chân tường lan can là những vị trí hay bị bỏ sót nhất khi thi công chống thấm ban đầu.",
        ],
      },
      {
        id: "m4",
        heading: "5. Sơn tường tầng trên phồng rộp",
        paragraphs: [
          "Hơi ẩm từ sàn sân thượng có thể lan sang tường, làm sơn phồng rộp và bong tróc từng mảng.",
        ],
      },
      {
        id: "m9",
        heading: "Nên xử lý thế nào?",
        toc: false,
        paragraphs: [
          "Không nên chỉ quét thêm một lớp sơn lên bề mặt. Cách làm đúng là xác định vị trí nước vào, xử lý triệt để các khe nứt và cổ ống, sau đó thi công lớp chống thấm mới và ngâm nước thử trước khi hoàn trả bề mặt.",
        ],
      },
    ],
    cta: {
      title: "Sân thượng nhà bạn có dấu hiệu này?",
      text: "Gửi ảnh qua Zalo, kỹ thuật viên xem giúp miễn phí qua tin nhắn.",
    },
    ctaAfter: 3,
    callLabel: "Cần xử lý thấm?",
  },
  {
    slug: "sua-nha-tron-goi-gom-nhung-hang-muc-nao",
    image: "/sua-nha-tron-goi/1790744682322_751968165130597158_751968165130597158_f8357baa844150d41fc1e22884c717b5.jpg",
    tag: "Báo giá",
    tagSlug: "bao-gia",
    title: "Sửa nhà trọn gói gồm những hạng mục nào? Cách đọc một bảng báo giá",
    excerpt:
      "Một bảng báo giá rõ ràng cần có khối lượng, vật tư và tiến độ. Đây là cách kiểm tra nhanh.",
    date: "09/2026",
    readTime: "8 phút đọc",
    authorTeam: "Bộ phận khảo sát – báo giá",
    sections: [
      {
        id: "m0",
        heading: "1. Phần thô: tháo dỡ, xây tô, gia cố",
        paragraphs: [
          "Gồm đập bỏ tường cũ, xây lại vách ngăn, tô trát, đổ bù sàn và gia cố những chỗ kết cấu đã xuống cấp. Đây là phần quyết định độ bền của cả ngôi nhà nên cần được khảo sát kỹ trước khi báo giá.",
        ],
      },
      {
        id: "m1",
        heading: "2. Điện nước âm tường",
        paragraphs: [
          "Đi lại dây điện, ống cấp và ống thoát trước khi hoàn thiện bề mặt. Làm phần này sau cùng thường phải đục phá lại tường, nền vừa mới làm.",
        ],
      },
      {
        id: "m2",
        heading: "3. Chống thấm",
        paragraphs: [
          "Sân thượng, nhà vệ sinh, ban công và chân tường là các vị trí nên được chống thấm lại khi sửa nhà trọn gói, kèm ngâm nước thử trước khi lát gạch.",
        ],
      },
      {
        id: "m3",
        heading: "4. Hoàn thiện: ốp lát, trần, sơn",
        paragraphs: [
          "Ốp lát nền và tường, làm trần thạch cao, bả matit và sơn nước. Bảng báo giá nên ghi rõ loại gạch, loại tấm trần và hệ sơn (số lớp lót, số lớp phủ).",
        ],
      },
      {
        id: "m4",
        heading: "5. Cửa, lan can, thiết bị",
        paragraphs: [
          "Cửa sắt, cổng, lan can, mái che và thiết bị vệ sinh, đèn chiếu sáng. Một số hạng mục chủ nhà có thể tự chọn mua, cần ghi rõ bên nào cung cấp.",
        ],
      },
      {
        id: "m9",
        heading: "Cách đọc một bảng báo giá",
        toc: false,
        paragraphs: [
          "Mỗi dòng trong báo giá nên có đủ: tên hạng mục, khối lượng (m², m dài, bộ), đơn giá và thành tiền. Phần vật tư cần ghi hãng, chủng loại cụ thể thay vì chỉ ghi “loại tốt”.",
          "Hãy hỏi thêm về những hạng mục không nằm trong báo giá, tiến độ dự kiến và thời gian bảo hành từng phần. Báo giá càng rõ, càng ít phát sinh khi thi công.",
        ],
      },
    ],
    cta: {
      title: "Muốn có báo giá chi tiết cho nhà bạn?",
      text: "Gửi ảnh hiện trạng qua Zalo, kỹ thuật viên hẹn lịch khảo sát và lập báo giá từng hạng mục.",
    },
    ctaAfter: 3,
    callLabel: "Cần báo giá sửa nhà?",
  },
  {
    slug: "chon-son-noi-that-nha-pho-tphcm",
    image: "/sua-nha-tron-goi/1790786750145_751968165130597158_751968165130597158_b7ef394052aeec8638875b4d20d072a5.jpg",
    tag: "Sơn nước",
    tagSlug: "son-nuoc",
    title: "Chọn sơn nội thất cho nhà phố TP.HCM: những điều cần lưu ý",
    excerpt: "Độ ẩm cao và nắng nóng khiến sơn nhanh xuống màu nếu chọn sai hệ sơn.",
    date: "08/2026",
    readTime: "5 phút đọc",
    authorTeam: "Tổ thợ sơn",
    sections: [
      {
        id: "m0",
        heading: "1. Kiểm tra độ ẩm tường trước khi sơn",
        paragraphs: [
          "Tường còn ẩm hoặc đang thấm thì sơn loại nào cũng sẽ phồng rộp. Cần xử lý nguồn thấm và để tường khô hẳn trước khi thi công.",
        ],
      },
      {
        id: "m1",
        heading: "2. Đừng bỏ qua lớp bả và sơn lót",
        paragraphs: [
          "Bả matit giúp bề mặt phẳng mịn, sơn lót kháng kiềm giúp lớp phủ bám chắc và lên đúng màu. Bỏ lớp lót để tiết kiệm thường khiến tường nhanh loang ố.",
        ],
      },
      {
        id: "m2",
        heading: "3. Chọn loại sơn theo từng phòng",
        paragraphs: [
          "Phòng khách, phòng ngủ ưu tiên sơn dễ lau chùi. Bếp và khu vực gần nhà vệ sinh nên dùng sơn có khả năng chống nấm mốc.",
        ],
      },
      {
        id: "m3",
        heading: "4. Chọn màu hợp với ánh sáng",
        paragraphs: [
          "Nhà phố thường sâu và ít cửa sổ, màu sáng giúp không gian thoáng hơn. Nên thử màu trên một mảng tường nhỏ trước khi sơn toàn bộ.",
        ],
      },
      {
        id: "m9",
        heading: "Quy trình sơn chuẩn",
        toc: false,
        paragraphs: [
          "Xả nhám, vá các vết nứt, bả matit, sơn 1 lớp lót và 2 lớp phủ. Giữa các lớp cần đủ thời gian khô theo hướng dẫn của nhà sản xuất.",
        ],
      },
    ],
    cta: {
      title: "Tường nhà bạn đang bong tróc, xuống màu?",
      text: "Gửi ảnh qua Zalo, kỹ thuật viên tư vấn hệ sơn phù hợp cho từng phòng.",
    },
    ctaAfter: 2,
    callLabel: "Cần sơn lại nhà?",
  },
  {
    slug: "may-lanh-chay-nuoc-kem-lanh",
    image: "/dien-lanh/img-02.jpg",
    tag: "Điện lạnh",
    tagSlug: "dien-lanh",
    title: "Máy lạnh chảy nước, kém lạnh: nguyên nhân và khi nào nên gọi thợ",
    excerpt: "Phần lớn do lâu ngày không vệ sinh, nhưng xì gas hay hỏng linh kiện thì cần thợ kiểm tra.",
    date: "07/2026",
    readTime: "4 phút đọc",
    authorTeam: "Tổ thợ điện lạnh",
    sections: [
      {
        id: "m0",
        heading: "1. Dàn lạnh bám bụi, lâu ngày không vệ sinh",
        paragraphs: [
          "Lưới lọc và lá tản nhiệt bám bụi khiến gió yếu, máy chạy lâu mới mát và tốn điện hơn. Gia đình có thể tự tháo lưới lọc rửa nước mỗi tháng, còn dàn lạnh, dàn nóng nên vệ sinh bằng máy xịt áp lực 4–6 tháng một lần.",
        ],
      },
      {
        id: "m1",
        heading: "2. Ống thoát nước bị nghẹt hoặc lắp sai độ dốc",
        paragraphs: [
          "Nước ngưng không thoát kịp sẽ tràn khỏi máng và nhỏ giọt xuống tường, sàn. Thường do rêu, bụi bẩn làm nghẹt ống hoặc ống thoát đi ngược dốc khi lắp đặt.",
        ],
      },
      {
        id: "m2",
        heading: "3. Thiếu gas hoặc hỏng linh kiện",
        paragraphs: [
          "Máy chạy liên tục mà không lạnh, dàn nóng quay nhưng ống đồng bám tuyết là dấu hiệu thiếu gas. Máy không khởi động, chớp đèn báo lỗi có thể do tụ, board mạch hoặc máy nén.",
        ],
      },
      {
        id: "m9",
        heading: "Khi nào nên gọi thợ?",
        toc: false,
        paragraphs: [
          "Khi đã vệ sinh lưới lọc mà máy vẫn kém lạnh, chảy nước nhiều, có tiếng kêu lạ hoặc báo lỗi. Thợ kiểm tra áp suất gas, dòng điện và linh kiện, báo giá trước khi sửa.",
        ],
      },
    ],
    cta: {
      title: "Máy lạnh nhà bạn chảy nước, kém lạnh?",
      text: "Gọi hoặc nhắn Zalo, thợ điện lạnh đến kiểm tra và xử lý trong ngày.",
    },
    ctaAfter: 2,
    callLabel: "Cần thợ điện lạnh?",
  },
  {
    slug: "cai-tao-nha-cu-lam-hang-muc-nao-truoc",
    image: "/sua-nha-tron-goi/1790744682358_751968165130597158_751968165130597158_5eacc596cabcd2bd8e85039ca8c1fad0.jpg",
    tag: "Cải tạo",
    tagSlug: "cai-tao",
    title: "Cải tạo nhà cũ: nên làm hạng mục nào trước để đỡ tốn kém",
    excerpt: "Thứ tự thi công hợp lý giúp tránh phải đục phá lại nhiều lần.",
    date: "07/2026",
    readTime: "7 phút đọc",
    authorTeam: "Đội thi công cải tạo",
    sections: [
      {
        id: "m0",
        heading: "1. Kiểm tra kết cấu và chống thấm",
        paragraphs: [
          "Nứt tường, lún nền, thấm dột phải được xử lý đầu tiên. Làm đẹp bề mặt khi kết cấu còn vấn đề thì chỉ sau một mùa mưa là hỏng lại.",
        ],
      },
      {
        id: "m1",
        heading: "2. Xây sửa, đập thông, chia lại phòng",
        paragraphs: [
          "Các thay đổi về mặt bằng nên chốt sớm, trước khi đi điện nước và hoàn thiện, để không phải làm lại.",
        ],
      },
      {
        id: "m2",
        heading: "3. Đi lại hệ thống điện nước",
        paragraphs: [
          "Đi dây điện, ống cấp thoát âm tường, âm sàn khi tường và nền còn đang mở. Đây là lúc thay thế đường ống cũ đỡ tốn công nhất.",
        ],
      },
      {
        id: "m3",
        heading: "4. Ốp lát, trần, sơn và lắp thiết bị",
        paragraphs: [
          "Phần hoàn thiện làm sau cùng: lát nền, ốp tường, đóng trần, sơn nước, rồi mới lắp thiết bị vệ sinh, đèn và cửa.",
        ],
      },
      {
        id: "m9",
        heading: "Mẹo để đỡ tốn kém",
        toc: false,
        paragraphs: [
          "Khảo sát kỹ và chốt phương án trước khi khởi công. Gom các hạng mục cùng một đầu mối thi công giúp tiến độ liền mạch và hạn chế phát sinh do các đội thợ làm chồng chéo.",
        ],
      },
    ],
    cta: {
      title: "Nhà cũ cần cải tạo lại?",
      text: "Gửi ảnh hiện trạng qua Zalo, kỹ thuật viên tư vấn thứ tự thi công hợp lý.",
    },
    ctaAfter: 2,
    callLabel: "Cần cải tạo nhà?",
  },
  {
    slug: "tran-chim-hay-tran-noi",
    image: "/son-op-go/1790740739225_751968165130597158_751968165130597158_5a693decaaeb1aec0f938f04d4978886.jpg",
    tag: "Trần thạch cao",
    tagSlug: "tran-thach-cao",
    title: "Trần chìm hay trần nổi: chọn loại nào cho phòng khách",
    excerpt: "So sánh ưu nhược điểm của hai loại trần phổ biến nhất hiện nay.",
    date: "06/2026",
    readTime: "5 phút đọc",
    authorTeam: "Tổ thợ trần thạch cao",
    sections: [
      {
        id: "m0",
        heading: "1. Trần chìm: phẳng, liền mạch",
        paragraphs: [
          "Khung xương được giấu hoàn toàn, bề mặt bả sơn phẳng như trần bê tông. Dễ tạo hình giật cấp và kết hợp đèn hắt, hợp với phòng khách, phòng ngủ.",
        ],
      },
      {
        id: "m1",
        heading: "2. Trần nổi: dễ tháo lắp, bảo trì",
        paragraphs: [
          "Tấm trần đặt trên khung lộ, có thể nhấc ra để kiểm tra đường ống, dây điện phía trên. Thường dùng cho văn phòng, kho hoặc khu vực nhiều kỹ thuật.",
        ],
      },
      {
        id: "m2",
        heading: "3. Lưu ý về độ ẩm",
        paragraphs: [
          "Với khu vực gần nhà vệ sinh, bếp hoặc tầng dưới sân thượng, nên dùng tấm chống ẩm và xử lý thấm phía trên trước khi đóng trần.",
        ],
      },
      {
        id: "m9",
        heading: "Phòng khách nên chọn loại nào?",
        toc: false,
        paragraphs: [
          "Phần lớn phòng khách nhà phố chọn trần chìm vì thẩm mỹ và dễ kết hợp đèn trang trí. Nếu phía trên trần có nhiều đường ống cần bảo trì, có thể bố trí thêm nắp thăm trần.",
        ],
      },
    ],
    cta: {
      title: "Đang tính làm trần cho phòng khách?",
      text: "Gửi ảnh và kích thước phòng qua Zalo, kỹ thuật viên tư vấn kiểu trần phù hợp.",
    },
    ctaAfter: 2,
    callLabel: "Cần làm trần thạch cao?",
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

/** Bài liên quan: cùng chuyên mục trước, sau đó các bài mới nhất */
export function getRelatedArticles(slug: string, count = 3): Article[] {
  const current = getArticle(slug);
  const others = articles.filter((a) => a.slug !== slug);
  const same = others.filter((a) => a.tagSlug === current?.tagSlug);
  const rest = others.filter((a) => a.tagSlug !== current?.tagSlug);
  return [...same, ...rest].slice(0, count);
}

/** Chuẩn hóa để tìm kiếm không phân biệt hoa thường và dấu tiếng Việt */
export function normalizeText(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/đ/g, "d")
    .trim();
}

export function searchArticles(list: Article[], q: string): Article[] {
  const needle = normalizeText(q);
  if (!needle) return list;
  return list.filter((a) => normalizeText(`${a.title} ${a.excerpt}`).includes(needle));
}
