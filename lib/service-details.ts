/**
 * Nội dung chi tiết cho trang /dich-vu/[slug].
 * `slug` khớp với `services` trong lib/data.ts.
 * Nội dung "Chống thấm" lấy nguyên từ design (DichVuChiTiet.dc.html);
 * các dịch vụ khác viết theo cùng cấu trúc — không ghi giá, không số liệu cụ thể.
 */

export type ServiceDetail = {
  slug: string;
  /** H1: phần chữ thường + phần tô màu thương hiệu */
  title: string;
  titleHl: string;
  lead: string;
  /** image: nhãn ô ảnh khi chưa có ảnh; src: ảnh thật (trong /public) */
  intro: { title: string; text: string; image: string; src?: string };
  signs: { title: string; items: string[] };
  items: { title: string; rows: { name: string; scope: string }[] };
  process: { t: string; d: string }[];
  materials: { title: string; items: string[] };
  /** 3 ảnh thực tế; thiếu src thì hiện ô trống kèm nhãn */
  gallery: { label: string; src?: string }[];
  form: { title: string; field: string; options: string[] };
  faq: { title: string; titleHl: string; items: { q: string; a: string }[] };
};

const warranty = (what: string) => ({
  q: `Bảo hành ${what} như thế nào?`,
  a: "Thời gian bảo hành phụ thuộc hạng mục và vật liệu, được ghi rõ trong hợp đồng thi công.",
});

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "sua-chua-cai-tao-nha",
    title: "Sửa chữa, cải tạo",
    titleHl: "nhà ở TP.HCM",
    lead: "Khắc phục hư hỏng, nâng tầng, cơi nới, đập thông, chia lại phòng và làm mới mặt tiền — kiểm tra hiện trạng, kết cấu trước khi đưa phương án.",
    intro: {
      title: "Khi nào nên sửa chữa, cải tạo nhà?",
      text: "Nhà phố sau nhiều năm sử dụng thường xuống cấp: tường nứt, trần bong tróc, nền lún, hệ thống điện nước cũ không còn an toàn. Cũng có khi gia đình cần thêm phòng, thêm tầng hoặc muốn bố trí lại không gian cho tiện nghi hơn. Trước khi cải tạo, kỹ thuật viên kiểm tra móng, cột, dầm để chọn phương án an toàn và tiết kiệm nhất.",
      image: "[Ảnh thi công cải tạo nhà phố]",
      src: "/sua-nha-tron-goi/1790744682344_751968165130597158_751968165130597158_89fd8a72872b666cdca46240d42bad12.jpg",
    },
    signs: {
      title: "6 dấu hiệu nhà cần sửa chữa",
      items: [
        "Tường nứt chân chim hoặc nứt dọc theo cột",
        "Trần bong tróc, rơi vữa",
        "Nền lún, gạch bong, gõ kêu rỗng",
        "Cửa kẹt, khó đóng mở do nhà lún",
        "Điện nước cũ, hay chập, rò rỉ",
        "Không gian chật, bố trí không còn phù hợp",
      ],
    },
    items: {
      title: "Hạng mục sửa chữa, cải tạo",
      rows: [
        { name: "Sửa chữa nhà trọn gói", scope: "Khảo sát kết cấu, sửa tường, sàn, mái, hoàn thiện lại toàn bộ" },
        { name: "Cải tạo phòng, tầng", scope: "Đập thông, chia lại không gian, làm mới nội thất cơ bản" },
        { name: "Nâng tầng, cơi nới", scope: "Kiểm tra móng, gia cố kết cấu, xin phép theo quy định" },
        { name: "Khắc phục hư hỏng nhỏ", scope: "Nứt tường, bong tróc, lún nền, sụt trần" },
      ],
    },
    process: [
      { t: "Khảo sát", d: "Kiểm tra hiện trạng, kết cấu, nhu cầu sử dụng." },
      { t: "Phương án", d: "Đề xuất bố trí, vật liệu, báo giá chi tiết." },
      { t: "Chuẩn bị", d: "Che chắn, bảo vệ nội thất, chuẩn bị mặt bằng." },
      { t: "Thi công", d: "Thi công phần thô và hoàn thiện theo tiến độ." },
      { t: "Hoàn thiện", d: "Sơn bả, lắp thiết bị, vệ sinh công trình." },
      { t: "Bàn giao", d: "Nghiệm thu cùng chủ nhà, bảo hành." },
    ],
    materials: {
      title: "Vật liệu thường dùng",
      items: [
        "Xi măng, cát, đá",
        "Gạch xây, gạch ốp lát",
        "Thép gia cố kết cấu",
        "Tấm thạch cao",
        "Sơn nội – ngoại thất",
        "Vật tư điện nước",
      ],
    },
    gallery: [
      { label: "Trước cải tạo", src: "/sua-nha-tron-goi/1790744682318_751968165130597158_751968165130597158_16ae06c85edebd7217c48ade5baccccc.jpg" },
      { label: "Đang thi công", src: "/sua-nha-tron-goi/1790744682354_751968165130597158_751968165130597158_07ba5370a4c47c109221d145e3723d8a.jpg" },
      { label: "Sau bàn giao", src: "/sua-nha-tron-goi/1790744682376_751968165130597158_751968165130597158_db721af947cc3690371a71343db7106f.jpg" },
    ],
    form: {
      title: "Nhận tư vấn sửa chữa nhà",
      field: "Hạng mục cần làm",
      options: ["Sửa chữa nhà trọn gói", "Cải tạo phòng, tầng", "Nâng tầng, cơi nới", "Khắc phục hư hỏng nhỏ", "Chưa rõ"],
    },
    faq: {
      title: "Hỏi đáp",
      titleHl: "sửa chữa nhà",
      items: [
        {
          q: "Sửa nhà có cần xin giấy phép không?",
          a: "Tùy hạng mục. Sửa chữa bên trong thường không cần, còn nâng tầng, cơi nới hoặc thay đổi kết cấu, mặt tiền cần xin phép theo quy định. Kỹ thuật viên sẽ tư vấn cụ thể khi khảo sát.",
        },
        {
          q: "Gia đình có ở lại được trong lúc sửa không?",
          a: "Với hạng mục nhỏ và vừa, đội thợ thi công theo từng khu vực, che chắn và dọn dẹp cuối ngày để gia đình vẫn sinh hoạt. Hạng mục lớn như nâng tầng sẽ được tư vấn phương án phù hợp.",
        },
        {
          q: "Báo giá có phát sinh không?",
          a: "Báo giá được lập chi tiết theo từng hạng mục sau khảo sát. Nếu gia đình muốn thay đổi hoặc bổ sung trong quá trình thi công, hai bên thống nhất bằng văn bản trước khi làm.",
        },
        warranty("sửa chữa nhà"),
      ],
    },
  },
  {
    slug: "chong-tham",
    title: "Chống thấm",
    titleHl: "nhà ở TP.HCM",
    lead: "Xử lý thấm sân thượng, nhà vệ sinh, tường, ban công, mái, máng và bể nước — tìm đúng nguyên nhân trước khi xử lý.",
    intro: {
      title: "Vì sao nhà bị thấm?",
      text: "Phần lớn nhà phố tại TP.HCM bị thấm ở sân thượng, nhà vệ sinh và tường giáp ranh. Nguyên nhân thường đến từ lớp chống thấm cũ đã lão hóa, cổ ống xử lý chưa kỹ, vết nứt do co ngót hoặc độ dốc thoát nước không đạt. Mỗi nguyên nhân cần một cách xử lý khác nhau, vì vậy khảo sát đúng là bước quan trọng nhất.",
      image: "[Ảnh thi công chống thấm sân thượng]",
      src: "/chong-tham/1790684753141_751968165130597158_751968165130597158_83740481b7ef5b7a0193644f814f1f69.jpg",
    },
    signs: {
      title: "6 dấu hiệu nhà đang bị thấm",
      items: [
        "Trần có vết ố vàng, loang lổ sau mưa",
        "Tường bong tróc sơn, phồng rộp",
        "Mùi ẩm mốc kéo dài trong phòng",
        "Nước đọng lâu trên sân thượng",
        "Gạch nhà vệ sinh bị thấm sang phòng bên",
        "Chân tường chuyển màu, rêu mốc",
      ],
    },
    items: {
      title: "Hạng mục chống thấm",
      rows: [
        { name: "Chống thấm sân thượng", scope: "Vệ sinh bề mặt, xử lý cổ ống, phủ màng, ngâm nước thử" },
        { name: "Chống thấm nhà vệ sinh", scope: "Tháo gạch khu vực thấm, chống thấm lại, lát hoàn trả" },
        { name: "Chống thấm tường, ban công", scope: "Xử lý vết nứt, sơn chống thấm gốc xi măng hoặc PU" },
        { name: "Chống thấm mái, máng, bể nước", scope: "Khò màng bitum, xử lý mối nối, kiểm tra thoát nước" },
      ],
    },
    process: [
      { t: "Khảo sát", d: "Kiểm tra vị trí thấm, xác định nguyên nhân." },
      { t: "Phương án", d: "Tư vấn vật liệu, báo giá chi tiết." },
      { t: "Xử lý nền", d: "Vệ sinh, xử lý nứt, cổ ống, góc tường." },
      { t: "Thi công", d: "Phủ lớp chống thấm theo đúng quy trình." },
      { t: "Ngâm thử", d: "Ngâm nước kiểm tra trước khi hoàn trả." },
      { t: "Bàn giao", d: "Nghiệm thu cùng chủ nhà, bảo hành." },
    ],
    materials: {
      title: "Vật liệu thường dùng",
      items: [
        "Màng bitum khò nóng",
        "Sơn chống thấm gốc PU",
        "Vữa xi măng polymer",
        "Màng lỏng gốc acrylic",
        "Băng cản nước cổ ống",
        "Keo trám khe co giãn",
      ],
    },
    gallery: [
      { label: "Trước xử lý", src: "/chong-tham/1790684753143_751968165130597158_751968165130597158_d14a7b603ac49fa7c15cef31d8268c4e.jpg" },
      { label: "Đang thi công", src: "/chong-tham/1790684753139_751968165130597158_751968165130597158_09ead468c6298f048a093a9a829b4b93.jpg" },
      { label: "Sau khi hoàn thiện", src: "/chong-tham/1790684753145_751968165130597158_751968165130597158_43e6a6c60e720233565e51137fb3dfb6.jpg" },
    ],
    form: {
      title: "Nhận tư vấn chống thấm",
      field: "Vị trí bị thấm",
      options: ["Sân thượng", "Nhà vệ sinh", "Tường, ban công", "Mái, máng, bể nước", "Chưa rõ"],
    },
    faq: {
      title: "Hỏi đáp",
      titleHl: "chống thấm",
      items: [
        {
          q: "Chống thấm xong bao lâu thì sử dụng được?",
          a: "Tùy vật liệu và thời tiết, thường cần 1–3 ngày để lớp chống thấm khô hoàn toàn trước khi ngâm thử và hoàn trả bề mặt.",
        },
        {
          q: "Có cần đục bỏ gạch cũ không?",
          a: "Không phải lúc nào cũng cần. Kỹ thuật viên sẽ đánh giá hiện trạng; nhiều trường hợp có thể xử lý trên bề mặt gạch cũ bằng vật liệu phù hợp.",
        },
        {
          q: "Thi công có ảnh hưởng sinh hoạt gia đình?",
          a: "Đội thợ thi công theo từng khu vực và che chắn kỹ, gia đình vẫn có thể sinh hoạt bình thường ở các phòng khác.",
        },
        warranty("chống thấm"),
      ],
    },
  },
  {
    slug: "son-nuoc-son-dau",
    title: "Sơn nước – Sơn dầu",
    titleHl: "trong & ngoài nhà",
    lead: "Sơn lại tường trong – ngoài nhà, sơn trang trí, hiệu ứng và sơn dầu cửa sắt, lan can — xử lý bề mặt kỹ trước khi sơn để màu bền, không bong tróc.",
    intro: {
      title: "Vì sao sơn nhanh xuống cấp?",
      text: "Tường bị phấn hóa, bong tróc hay ố mốc thường không do sơn kém mà do bề mặt chưa được xử lý: tường còn ẩm, chưa xả nhám, bả matit không đều hoặc bỏ qua lớp sơn lót. Với mặt ngoài, nắng mưa và rêu mốc làm sơn xuống cấp nhanh hơn nếu không dùng sơn ngoại thất phù hợp. Làm đúng quy trình từ bước xử lý nền giúp lớp sơn giữ màu lâu.",
      image: "[Ảnh thi công sơn nhà phố]",
      src: "/sua-nha-tron-goi/1790744682346_751968165130597158_751968165130597158_c942ff0d0abc307144bb9a7ade29a9b9.jpg",
    },
    signs: {
      title: "6 dấu hiệu nên sơn lại nhà",
      items: [
        "Tường phai màu, loang lổ không đều",
        "Sơn phồng rộp, bong tróc từng mảng",
        "Bề mặt phấn hóa, chạm tay thấy bột",
        "Tường ngoài bám rêu, ố mốc đen",
        "Vết nứt chân chim trên mặt tường",
        "Cửa sắt, lan can bị rỉ sét",
      ],
    },
    items: {
      title: "Hạng mục sơn",
      rows: [
        { name: "Sơn lại tường trong nhà", scope: "Che chắn nội thất, xả nhám, bả matit, 1 lót + 2 phủ" },
        { name: "Sơn ngoài nhà", scope: "Dựng giàn giáo, xử lý rêu mốc, sơn chống thấm ngoại thất" },
        { name: "Sơn trang trí, hiệu ứng", scope: "Tư vấn mẫu, thi công sơn giả đá, giả bê tông, hiệu ứng" },
        { name: "Sơn dầu cửa sắt, lan can", scope: "Cạo rỉ, sơn chống rỉ, sơn phủ hoàn thiện" },
      ],
    },
    process: [
      { t: "Khảo sát", d: "Kiểm tra bề mặt, độ ẩm, diện tích cần sơn." },
      { t: "Chọn màu", d: "Tư vấn loại sơn, bảng màu, báo giá chi tiết." },
      { t: "Che chắn", d: "Che phủ nội thất, sàn, cửa trước khi thi công." },
      { t: "Xử lý nền", d: "Xả nhám, trám nứt, bả matit phẳng mặt." },
      { t: "Sơn phủ", d: "1 lớp lót + 2 lớp phủ theo đúng quy trình." },
      { t: "Bàn giao", d: "Vệ sinh, nghiệm thu cùng chủ nhà, bảo hành." },
    ],
    materials: {
      title: "Vật liệu thường dùng",
      items: [
        "Sơn nước nội thất",
        "Sơn ngoại thất chống thấm",
        "Sơn lót kháng kiềm",
        "Bột bả matit",
        "Sơn chống rỉ",
        "Sơn dầu hoàn thiện",
      ],
    },
    gallery: [
      { label: "Trước khi sơn", src: "/sua-nha-tron-goi/1790744682330_751968165130597158_751968165130597158_28f1e1c7eab59afd954578037e524a3c.jpg" },
      { label: "Đang xử lý bề mặt", src: "/sua-nha-tron-goi/1790744682348_751968165130597158_751968165130597158_b8be12c85b9337b6d3d597baca6ece05.jpg" },
      { label: "Sau khi hoàn thiện", src: "/sua-nha-tron-goi/1790744682378_751968165130597158_751968165130597158_dfbc6ce75fa87ddab893d46f59a5e8aa.jpg" },
    ],
    form: {
      title: "Nhận tư vấn sơn nhà",
      field: "Hạng mục cần sơn",
      options: ["Sơn trong nhà", "Sơn ngoài nhà", "Sơn trang trí, hiệu ứng", "Sơn dầu cửa sắt, lan can", "Chưa rõ"],
    },
    faq: {
      title: "Hỏi đáp",
      titleHl: "sơn nhà",
      items: [
        {
          q: "Sơn lại có cần cạo bỏ lớp sơn cũ không?",
          a: "Nếu lớp sơn cũ còn bám tốt, chỉ cần vệ sinh, xả nhám rồi sơn phủ. Chỗ bong tróc, phồng rộp phải cạo bỏ và xử lý lại trước khi sơn.",
        },
        {
          q: "Nên chọn loại sơn nào?",
          a: "Kỹ thuật viên tư vấn loại sơn theo vị trí (trong nhà, ngoài trời, khu vực ẩm) và ngân sách. Chủng loại vật tư được ghi rõ trong báo giá để gia đình dễ so sánh.",
        },
        {
          q: "Sơn xong bao lâu thì ở được?",
          a: "Sơn gốc nước khô bề mặt khá nhanh; nên mở cửa thông thoáng thêm một thời gian trước khi sử dụng phòng. Thời gian cụ thể tùy loại sơn và thời tiết.",
        },
        warranty("sơn"),
      ],
    },
  },
  {
    slug: "op-lat",
    title: "Ốp lát gạch",
    titleHl: "nền, tường, sân",
    lead: "Ốp lát gạch nền, tường, nhà vệ sinh, sân và lối đi — cán nền đúng cốt, tạo dốc thoát nước, dùng keo dán chuyên dụng cho mặt gạch phẳng, bền.",
    intro: {
      title: "Vì sao gạch bị bong, rộp?",
      text: "Gạch bị bong, kêu rỗng hay nứt vỡ thường do lớp vữa lót không đều, không chừa khe co giãn hoặc dùng vữa thường cho gạch khổ lớn. Ở nhà vệ sinh và sân, nếu không tạo dốc đúng, nước đọng lâu sẽ thấm xuống sàn và sang phòng bên. Căn cốt, cán nền và chọn keo phù hợp là các bước quyết định độ bền của mặt gạch.",
      image: "[Ảnh thi công ốp lát gạch]",
      src: "/son-op-go/1790740739263_751968165130597158_751968165130597158_f744a2d4b78a79096737a274dc3983e1.jpg",
    },
    signs: {
      title: "6 dấu hiệu cần lát lại gạch",
      items: [
        "Gạch kêu rỗng khi gõ hoặc bước lên",
        "Gạch phồng, bong, nứt vỡ",
        "Ron gạch đen, bong tróc, bám bẩn",
        "Nước đọng, không thoát về phễu thu",
        "Nền lún, gạch lệch cao độ",
        "Gạch cũ trơn trượt, xuống màu",
      ],
    },
    items: {
      title: "Hạng mục ốp lát",
      rows: [
        { name: "Lát gạch nền", scope: "Cán nền, căn cốt, lát gạch, chà ron" },
        { name: "Ốp tường", scope: "Xử lý mặt tường, ốp bằng keo chuyên dụng" },
        { name: "Ốp lát nhà vệ sinh", scope: "Tạo dốc thoát sàn, chống thấm, ốp lát trọn gói" },
        { name: "Lát sân, lối đi", scope: "Đổ bê tông lót, lát gạch hoặc đá chống trơn" },
      ],
    },
    process: [
      { t: "Khảo sát", d: "Đo đạc, kiểm tra cao độ và hiện trạng nền." },
      { t: "Chọn gạch", d: "Tư vấn chủng loại, kích thước, báo giá." },
      { t: "Xử lý nền", d: "Tháo gạch cũ, cán nền, căn cốt, tạo dốc." },
      { t: "Ốp lát", d: "Dán gạch bằng keo chuyên dụng, căn ron đều." },
      { t: "Chà ron", d: "Chà ron chống thấm, vệ sinh mặt gạch." },
      { t: "Bàn giao", d: "Nghiệm thu cùng chủ nhà, bảo hành." },
    ],
    materials: {
      title: "Vật liệu thường dùng",
      items: [
        "Gạch ceramic",
        "Gạch granite, porcelain",
        "Keo dán gạch chuyên dụng",
        "Vữa cán nền",
        "Keo chà ron chống thấm",
        "Ke cân bằng gạch",
      ],
    },
    gallery: [
      { label: "Đục bỏ gạch cũ", src: "/sua-nha-tron-goi/1790744682358_751968165130597158_751968165130597158_5eacc596cabcd2bd8e85039ca8c1fad0.jpg" },
      { label: "Mặt bằng sẵn sàng lát lại", src: "/sua-nha-tron-goi/1790744682366_751968165130597158_751968165130597158_e573643c5a9651d7fc23c67230fb9e93.jpg" },
      { label: "Sau khi hoàn thiện", src: "/son-op-go/1790740739225_751968165130597158_751968165130597158_5a693decaaeb1aec0f938f04d4978886.jpg" },
    ],
    form: {
      title: "Nhận tư vấn ốp lát",
      field: "Vị trí cần ốp lát",
      options: ["Lát nền", "Ốp tường", "Nhà vệ sinh", "Sân, lối đi", "Chưa rõ"],
    },
    faq: {
      title: "Hỏi đáp",
      titleHl: "ốp lát",
      items: [
        {
          q: "Có lát gạch mới đè lên gạch cũ được không?",
          a: "Được trong một số trường hợp nếu gạch cũ còn bám chắc và cao độ cho phép. Kỹ thuật viên sẽ gõ kiểm tra; chỗ gạch rỗng, bong phải tháo bỏ trước khi lát.",
        },
        {
          q: "Gia đình tự mua gạch được không?",
          a: "Được. Đội thợ tư vấn khối lượng cần mua (có tính hao hụt) và kiểm tra gạch trước khi thi công. Báo giá có thể tách riêng phần nhân công và vật tư.",
        },
        {
          q: "Lát xong bao lâu thì đi lại được?",
          a: "Cần chờ lớp keo, vữa ổn định trước khi đi lại và chà ron; thời gian tùy loại vật liệu. Đội thợ sẽ báo cụ thể và rào chắn khu vực đang thi công.",
        },
        warranty("ốp lát"),
      ],
    },
  },
  {
    slug: "tran-thach-cao",
    title: "Trần thạch cao",
    titleHl: "chìm, nổi, giật cấp",
    lead: "Thi công trần chìm, trần nổi, trần trang trí giật cấp kết hợp đèn hắt LED — khung xương tiêu chuẩn, tấm chống ẩm cho khu vực nhà vệ sinh.",
    intro: {
      title: "Vì sao trần thạch cao bị nứt, võng?",
      text: "Trần thạch cao nứt mối nối, võng hoặc ố vàng thường do khung xương không đủ, ty treo quá thưa, mối nối không dán băng keo lưới hoặc dùng tấm thường ở khu vực ẩm. Nếu phía trên trần bị thấm, nước sẽ làm tấm mục và sụt. Vì vậy cần kiểm tra cả mái, sàn phía trên trước khi làm trần mới.",
      image: "[Ảnh thi công trần thạch cao]",
      src: "/son-op-go/1790740739274_751968165130597158_751968165130597158_6b6b60901114dd575a6cfb89a20f5521.jpg",
    },
    signs: {
      title: "6 dấu hiệu cần sửa, làm mới trần",
      items: [
        "Mối nối trần nứt thành đường",
        "Trần võng, lượn sóng",
        "Tấm trần ố vàng, loang nước",
        "Trần nhựa, trần tôn cũ xuống cấp",
        "Phòng nóng, cần thêm lớp cách nhiệt",
        "Muốn làm lại đèn, trang trí phòng khách",
      ],
    },
    items: {
      title: "Hạng mục trần thạch cao",
      rows: [
        { name: "Trần chìm", scope: "Khung xương, tấm thạch cao, xử lý mối nối, sơn bả" },
        { name: "Trần nổi", scope: "Lắp khung, thả tấm, thuận tiện bảo trì" },
        { name: "Trần trang trí giật cấp", scope: "Thiết kế mẫu trần, kết hợp đèn hắt LED" },
      ],
    },
    process: [
      { t: "Khảo sát", d: "Đo đạc, kiểm tra mái, sàn phía trên trần." },
      { t: "Chọn mẫu", d: "Tư vấn kiểu trần, vị trí đèn, báo giá." },
      { t: "Khung xương", d: "Bắn ty, lắp khung xương theo tiêu chuẩn." },
      { t: "Lắp tấm", d: "Bắn tấm, dán băng keo lưới mối nối." },
      { t: "Sơn bả", d: "Bả matit, sơn hoàn thiện, lắp đèn." },
      { t: "Bàn giao", d: "Nghiệm thu cùng chủ nhà, bảo hành." },
    ],
    materials: {
      title: "Vật liệu thường dùng",
      items: [
        "Khung xương trần chìm, trần nổi",
        "Tấm thạch cao tiêu chuẩn",
        "Tấm thạch cao chống ẩm",
        "Băng keo lưới mối nối",
        "Bông cách nhiệt",
        "Đèn LED âm trần, đèn hắt",
      ],
    },
    gallery: [
      { label: "Trần cũ ố, xuống cấp", src: "/thach-cao/1790684895276_751968165130597158_751968165130597158_f8fcefa8393c184f3233ced69fbc3d69.jpg" },
      { label: "Đang lắp trần thả mới", src: "/thach-cao/1790684895273_751968165130597158_751968165130597158_4dccb784596e8db338230fdb91166558.jpg" },
      { label: "Sau khi hoàn thiện", src: "/son-op-go/1790740739263_751968165130597158_751968165130597158_f744a2d4b78a79096737a274dc3983e1.jpg" },
    ],
    form: {
      title: "Nhận tư vấn trần thạch cao",
      field: "Loại trần",
      options: ["Trần chìm", "Trần nổi", "Trần trang trí giật cấp", "Sửa trần cũ", "Chưa rõ"],
    },
    faq: {
      title: "Hỏi đáp",
      titleHl: "trần thạch cao",
      items: [
        {
          q: "Trần chìm và trần nổi khác nhau thế nào?",
          a: "Trần chìm che kín khung xương, bề mặt phẳng liền, phù hợp phòng khách, phòng ngủ. Trần nổi để lộ khung, thả tấm rời, dễ tháo ra kiểm tra điện nước và bảo trì.",
        },
        {
          q: "Nhà vệ sinh có làm trần thạch cao được không?",
          a: "Được, nhưng nên dùng tấm chống ẩm và xử lý thấm từ sàn tầng trên trước để trần bền lâu.",
        },
        {
          q: "Thi công trần có phải dọn đồ đạc không?",
          a: "Đội thợ che phủ đồ đạc và thi công theo từng phòng. Đồ có giá trị hoặc dễ vỡ nên được chuyển ra khu vực khác trong thời gian thi công.",
        },
        warranty("trần thạch cao"),
      ],
    },
  },
  {
    slug: "dien-nuoc",
    title: "Sửa chữa điện nước",
    titleHl: "tận nơi",
    lead: "Sửa chữa, lắp đặt điện nước: dò tìm rò rỉ, thay ống, đi lại dây điện âm tường, lắp đèn, máy bơm, bồn nước và thiết bị vệ sinh.",
    intro: {
      title: "Vì sao điện nước hay gặp sự cố?",
      text: "Hệ thống điện nước trong nhà cũ thường đã quá tải: dây dẫn nhỏ so với thiết bị hiện tại, ổ cắm lỏng, CB không còn nhạy. Đường ống âm tường lâu năm dễ rò rỉ ở mối nối, gây ẩm tường và hóa đơn nước tăng bất thường. Dò đúng vị trí hư hỏng giúp hạn chế đục phá và tiết kiệm chi phí.",
      image: "[Ảnh thi công điện nước]",
      src: "/dien-nuoc/OIP.webp",
    },
    signs: {
      title: "6 dấu hiệu điện nước cần kiểm tra",
      items: [
        "CB hay nhảy, đèn chập chờn",
        "Ổ cắm, công tắc nóng hoặc có mùi khét",
        "Hóa đơn nước tăng bất thường",
        "Tường, sàn ẩm dù không có mưa",
        "Nước yếu, máy bơm chạy liên tục",
        "Thiết bị vệ sinh rò rỉ, chảy nước",
      ],
    },
    items: {
      title: "Hạng mục điện nước",
      rows: [
        { name: "Sửa chữa, lắp đặt điện", scope: "Kiểm tra tải, đi lại dây, lắp ổ cắm, công tắc, CB" },
        { name: "Sửa đường ống nước", scope: "Dò tìm rò rỉ, thay ống, xử lý áp lực nước yếu" },
        { name: "Lắp đèn chiếu sáng", scope: "Đèn âm trần, đèn trang trí, đèn cầu thang" },
        { name: "Lắp thiết bị vệ sinh", scope: "Bồn cầu, lavabo, sen vòi, máy nước nóng" },
      ],
    },
    process: [
      { t: "Tiếp nhận", d: "Ghi nhận sự cố, ưu tiên các trường hợp gấp." },
      { t: "Kiểm tra", d: "Đo tải, dò tìm vị trí rò rỉ, chập điện." },
      { t: "Báo giá", d: "Tư vấn phương án, báo giá trước khi làm." },
      { t: "Sửa chữa", d: "Thay dây, thay ống, lắp đặt thiết bị." },
      { t: "Chạy thử", d: "Kiểm tra áp lực nước, tải điện, an toàn." },
      { t: "Bàn giao", d: "Nghiệm thu cùng chủ nhà, bảo hành." },
    ],
    materials: {
      title: "Vật tư thường dùng",
      items: [
        "Dây điện lõi đồng",
        "Ống nhựa PPR, uPVC",
        "CB, ổ cắm, công tắc",
        "Đèn LED âm trần",
        "Máy bơm tăng áp",
        "Thiết bị vệ sinh",
      ],
    },
    gallery: [
      { label: "Trước khi sửa" },
      { label: "Đang thi công" },
      { label: "Sau khi chạy thử" },
    ],
    form: {
      title: "Nhận tư vấn điện nước",
      field: "Sự cố cần xử lý",
      options: ["Sửa, lắp đặt điện", "Rò rỉ đường ống nước", "Lắp đèn chiếu sáng", "Lắp thiết bị vệ sinh", "Chưa rõ"],
    },
    faq: {
      title: "Hỏi đáp",
      titleHl: "điện nước",
      items: [
        {
          q: "Sự cố gấp thì bao lâu thợ có mặt?",
          a: "Các sự cố như rò rỉ nước, chập điện được ưu tiên sắp xếp sớm nhất có thể, tùy lịch và khu vực. Gọi hotline để được hướng dẫn xử lý tạm thời trong lúc chờ thợ.",
        },
        {
          q: "Dò rò rỉ nước có phải đục tường nhiều không?",
          a: "Kỹ thuật viên kiểm tra đồng hồ nước và khoanh vùng trước, sau đó chỉ đục mở tại vị trí nghi ngờ để hạn chế đục phá.",
        },
        {
          q: "Có lắp thiết bị do gia đình tự mua không?",
          a: "Có. Đội thợ nhận lắp đặt thiết bị gia đình đã mua và kiểm tra kỹ trước khi lắp.",
        },
        warranty("điện nước"),
      ],
    },
  },
  {
    slug: "cua-sat",
    title: "Cửa sắt, cổng",
    titleHl: "lan can, mái che",
    lead: "Làm mới, sửa chữa cửa sắt, cổng, hàng rào, lan can, mái che và cửa cuốn — đo đạc tận nơi, gia công theo bản vẽ, sơn tĩnh điện hoặc sơn dầu.",
    intro: {
      title: "Vì sao cửa sắt nhanh rỉ, xệ?",
      text: "Cửa, cổng sắt ngoài trời chịu nắng mưa liên tục; nếu không xử lý chống rỉ kỹ, lớp sơn bong và sắt bị ăn mòn từ mối hàn. Bản lề, bánh xe lâu ngày mòn khiến cửa xệ, kẹt. Chọn đúng vật liệu và phương án sơn phù hợp giúp cửa bền và ít phải bảo trì.",
      image: "[Ảnh gia công cửa, cổng sắt]",
      src: "/lam-cua-sat/1790684716737_751968165130597158_751968165130597158_d2cfac28c133dbf4abb92586baf74b98.jpg",
    },
    signs: {
      title: "6 dấu hiệu cần sửa, làm mới cửa sắt",
      items: [
        "Cửa, cổng rỉ sét, mục chân",
        "Cửa xệ, kẹt, khó đóng mở",
        "Mối hàn nứt, lan can rung lắc",
        "Sơn bong tróc, xuống màu",
        "Mái tôn dột, ồn khi mưa",
        "Cửa cuốn kêu to, motor yếu",
      ],
    },
    items: {
      title: "Hạng mục cửa sắt",
      rows: [
        { name: "Cửa sắt, cổng sắt", scope: "Đo đạc, gia công theo mẫu, sơn tĩnh điện hoặc sơn dầu" },
        { name: "Hàng rào, lan can", scope: "Thiết kế mẫu, gia công, lắp đặt tại chỗ" },
        { name: "Mái che tôn, mái kính", scope: "Khung sắt, mái tôn cách nhiệt hoặc kính cường lực" },
        { name: "Cửa cuốn", scope: "Lắp mới, sửa motor, thay lá cửa" },
      ],
    },
    process: [
      { t: "Khảo sát", d: "Đo đạc hiện trạng, tư vấn mẫu." },
      { t: "Bản vẽ", d: "Chốt mẫu, vật liệu, báo giá chi tiết." },
      { t: "Gia công", d: "Gia công theo bản vẽ đã thống nhất." },
      { t: "Sơn", d: "Chống rỉ, sơn tĩnh điện hoặc sơn dầu." },
      { t: "Lắp đặt", d: "Lắp đặt, căn chỉnh tại công trình." },
      { t: "Bàn giao", d: "Nghiệm thu cùng chủ nhà, bảo hành." },
    ],
    materials: {
      title: "Vật liệu thường dùng",
      items: [
        "Sắt hộp mạ kẽm",
        "Thép tấm, sắt đặc",
        "Sơn tĩnh điện",
        "Sơn chống rỉ, sơn dầu",
        "Tôn cách nhiệt",
        "Kính cường lực",
      ],
    },
    gallery: [
      { label: "Gia công chân cửa mới", src: "/lam-cua-sat/1790684716739_751968165130597158_751968165130597158_ab847dafc59b631a35f1120ed94531d9.jpg" },
      { label: "Thay chân, sơn lót chống rỉ", src: "/lam-cua-sat/1790684716735_751968165130597158_751968165130597158_67c226bb52f28692bbbcd8ea6dd8f399.jpg" },
      { label: "Sơn dặm hoàn thiện", src: "/lam-cua-sat/1790684716737_751968165130597158_751968165130597158_d2cfac28c133dbf4abb92586baf74b98.jpg" },
    ],
    form: {
      title: "Nhận tư vấn cửa sắt",
      field: "Hạng mục",
      options: ["Cửa sắt, cổng sắt", "Hàng rào, lan can", "Mái che tôn, mái kính", "Cửa cuốn", "Chưa rõ"],
    },
    faq: {
      title: "Hỏi đáp",
      titleHl: "cửa sắt",
      items: [
        {
          q: "Sơn tĩnh điện và sơn dầu khác nhau thế nào?",
          a: "Sơn tĩnh điện cho bề mặt đều, bám chắc, bền màu, phù hợp cửa, cổng làm mới. Sơn dầu linh hoạt hơn, dùng để sơn lại tại chỗ cho cửa, lan can đang sử dụng.",
        },
        {
          q: "Cửa sắt cũ sửa được không hay phải làm mới?",
          a: "Tùy mức độ rỉ sét. Nhiều trường hợp chỉ cần thay chân cửa, bản lề, hàn lại mối nối và sơn lại; kỹ thuật viên sẽ tư vấn phương án tiết kiệm nhất.",
        },
        {
          q: "Có làm theo mẫu gia đình gửi không?",
          a: "Có. Gia đình gửi hình mẫu tham khảo, đội thợ đo đạc thực tế và điều chỉnh bản vẽ cho phù hợp kích thước.",
        },
        warranty("cửa sắt"),
      ],
    },
  },
  {
    slug: "dien-lanh",
    title: "Điện lạnh",
    titleHl: "sửa chữa tận nơi",
    lead: "Vệ sinh, bơm gas, sửa chữa và tháo lắp máy lạnh; sửa tủ lạnh, máy giặt, máy nước nóng tại nhà — kiểm tra tận nơi, báo giá trước khi làm.",
    intro: {
      title: "Vì sao máy lạnh hay kém lạnh, chảy nước?",
      text: "Bụi bẩn bám lâu ngày trên lưới lọc, dàn lạnh và dàn nóng làm máy giảm hiệu suất, tốn điện và dễ chảy nước. Ống thoát nước nghẹt, lắp sai độ dốc, thiếu gas hoặc hỏng tụ, board mạch cũng là nguyên nhân thường gặp. Kiểm tra đúng bệnh giúp sửa nhanh, không thay linh kiện thừa.",
      image: "[Ảnh vệ sinh máy lạnh]",
      src: "/dien-lanh/inverter-ac-repairing-service-500x500.webp",
    },
    signs: {
      title: "6 dấu hiệu thiết bị điện lạnh cần kiểm tra",
      items: [
        "Máy lạnh chạy lâu nhưng không mát",
        "Dàn lạnh nhỏ nước xuống tường, sàn",
        "Có mùi hôi hoặc tiếng kêu lạ khi chạy",
        "Đèn báo lỗi chớp, máy tự ngắt",
        "Tủ lạnh không đông đá, đóng tuyết nhiều",
        "Máy giặt không vắt, rò nước",
      ],
    },
    items: {
      title: "Hạng mục điện lạnh",
      rows: [
        { name: "Vệ sinh máy lạnh", scope: "Rửa dàn nóng, dàn lạnh, thông ống thoát nước, kiểm tra gas" },
        { name: "Sửa chữa, bơm gas máy lạnh", scope: "Kiểm tra lỗi, xử lý xì gas, thay tụ, thay board" },
        { name: "Tháo lắp, di dời máy lạnh", scope: "Tháo máy cũ, lắp vị trí mới, đi ống đồng, ống nước" },
        { name: "Sửa tủ lạnh, máy giặt, máy nước nóng", scope: "Kiểm tra tận nơi, thay linh kiện, bảo hành sau sửa" },
      ],
    },
    process: [
      { t: "Tiếp nhận", d: "Ghi nhận tình trạng, hẹn giờ có mặt." },
      { t: "Kiểm tra", d: "Đo gas, dòng điện, xác định lỗi." },
      { t: "Báo giá", d: "Tư vấn phương án, báo giá trước khi làm." },
      { t: "Sửa chữa", d: "Vệ sinh, thay linh kiện, bơm gas." },
      { t: "Chạy thử", d: "Kiểm tra độ lạnh, thoát nước, tiếng ồn." },
      { t: "Bàn giao", d: "Dọn dẹp sạch sẽ, hướng dẫn sử dụng." },
    ],
    materials: {
      title: "Thiết bị, vật tư thường dùng",
      items: [
        "Máy xịt rửa áp lực",
        "Đồng hồ đo gas",
        "Gas R32, R410A",
        "Ống đồng, bảo ôn",
        "Tụ, board mạch thay thế",
        "Bạt hứng nước vệ sinh",
      ],
    },
    gallery: [
      { label: "Trước khi vệ sinh" },
      { label: "Đang xử lý" },
      { label: "Sau khi hoàn thiện" },
    ],
    form: {
      title: "Nhận tư vấn điện lạnh",
      field: "Thiết bị cần xử lý",
      options: ["Máy lạnh", "Tủ lạnh", "Máy giặt", "Máy nước nóng", "Chưa rõ"],
    },
    faq: {
      title: "Hỏi đáp",
      titleHl: "điện lạnh",
      items: [
        {
          q: "Bao lâu nên vệ sinh máy lạnh một lần?",
          a: "Gia đình dùng thường xuyên nên vệ sinh 4–6 tháng một lần; lưới lọc có thể tự tháo rửa hằng tháng. Nhà gần đường lớn, nhiều bụi nên vệ sinh dày hơn.",
        },
        {
          q: "Bao lâu thì thợ có mặt?",
          a: "Tùy lịch và khu vực, thường trong ngày. Trường hợp máy chảy nước nhiều hoặc chập điện được ưu tiên sắp xếp sớm nhất có thể.",
        },
        {
          q: "Máy lạnh thiếu gas có phải thay máy không?",
          a: "Không. Thợ sẽ tìm và xử lý điểm xì trước, sau đó bơm bổ sung đúng loại gas. Chỉ khi máy nén hỏng nặng mới cân nhắc thay máy.",
        },
        warranty("điện lạnh"),
      ],
    },
  },
];

export function getServiceDetail(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((s) => s.slug === slug);
}
