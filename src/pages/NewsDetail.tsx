import { SEO } from '../components/SEO';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';

const ARTICLES = {
  'kinh-nghiem-thao-do-nha-cu': {
    title: 'Kinh nghiệm tháo dỡ nhà cũ an toàn, tiết kiệm chi phí',
    date: '15/10/2023',
    author: 'Quản trị viên',
    img: '/tin-tuc-1.jpg',
    content: (
      <div className="text-gray-700 text-lg leading-relaxed space-y-6">
        <p>
          Tháo dỡ nhà cũ là bước khởi đầu vô cùng quan trọng trước khi bắt tay vào xây dựng một công trình mới. Rất nhiều chủ nhà thường chủ quan cho rằng đây chỉ là công việc "đập phá" đơn thuần. Tuy nhiên, thực tế quá trình này đòi hỏi sự tính toán kỹ lưỡng về mặt kỹ thuật, am hiểu kết cấu để đảm bảo an toàn tuyệt đối cho người lao động, không gây ảnh hưởng đến cấu trúc của các công trình lân cận, và tối ưu hóa chi phí một cách tốt nhất.
        </p>
        <p>
          Với đặc thù nhà ở tại các khu đô thị lớn như TP.HCM – nơi mật độ dân cư đông đúc, nhà ống san sát và hẻm nhỏ chằng chịt, việc tháo dỡ lại càng trở nên phức tạp. Dưới đây là những kinh nghiệm thực tế chuyên sâu được <strong>Công ty Quang Hải</strong> đúc kết sau nhiều năm trực tiếp thi công hàng trăm dự án.
        </p>
        
        <h3 className="text-2xl font-bold text-primary mt-10 mb-4 border-l-4 border-secondary pl-4">1. Khảo sát kỹ lưỡng và hoàn thiện thủ tục pháp lý</h3>
        <p>
          Trước khi tiến hành bất kỳ hạng mục tháo dỡ nào, việc đầu tiên nhà thầu cần thực hiện là khảo sát hiện trạng. Các kỹ sư sẽ đánh giá chi tiết địa hình, kết cấu chịu lực của ngôi nhà cũ và đặc biệt là tình trạng móng, vách của các nhà liền kề. Điều này giúp đưa ra phương án thi công (thủ công hay cơ giới) một cách chính xác nhất và dự trù những rủi ro sụt lún có thể xảy ra.
        </p>
        <p>
          Đồng thời, chủ đầu tư cần phối hợp với nhà thầu hoàn tất các thủ tục xin phép tháo dỡ tại UBND Phường/Quận. Việc không xin phép có thể dẫn đến việc bị đình chỉ thi công, phạt hành chính, gây ảnh hưởng nghiêm trọng đến tiến độ chung của toàn bộ dự án.
        </p>

        <h3 className="text-2xl font-bold text-primary mt-10 mb-4 border-l-4 border-secondary pl-4">2. Lựa chọn biện pháp thi công tối ưu nhất</h3>
        <p>Tùy thuộc vào vị trí và quy mô công trình, nhà thầu sẽ tư vấn biện pháp thi công phù hợp:</p>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Thi công thủ công (hoặc bán thủ công):</strong> Thường được áp dụng cho các công trình nằm trong hẻm sâu, xe cơ giới lớn không thể tiếp cận, hoặc nhà phố sát vách có chung tường, chung móng với hàng xóm. Đòi hỏi công nhân giàu kinh nghiệm sử dụng búa phá đá, máy khoan cắt cầm tay để bóc tách từng mảng bê tông một cách cẩn thận, giảm thiểu chấn động.</li>
          <li><strong>Thi công bằng máy móc cơ giới:</strong> Phù hợp với công trình nằm ở mặt tiền đường lớn, khu đất rộng rãi. Sử dụng máy xúc, máy ủi có gắn búa thủy lực cỡ lớn giúp đập phá nhanh chóng, rút ngắn tới 70% thời gian thi công và tiết kiệm đáng kể chi phí nhân công.</li>
        </ul>

        <h3 className="text-2xl font-bold text-primary mt-10 mb-4 border-l-4 border-secondary pl-4">3. Cô lập hệ thống điện nước và chuẩn bị mặt bằng</h3>
        <p>
          Một sai lầm rất nguy hiểm là không xử lý triệt để hệ thống điện nước ngầm trước khi đập phá. Cần phải cắt hoàn toàn nguồn điện lưới và khóa van nước tổng kết nối với ngôi nhà. Ngoài ra, cần di dời các vật liệu dễ cháy nổ ra khỏi khu vực thi công để phòng tránh tai nạn chập điện, hỏa hoạn hoặc ngập úng mặt bằng gây khó khăn cho việc vận chuyển xà bần.
        </p>

        <h3 className="text-2xl font-bold text-primary mt-10 mb-4 border-l-4 border-secondary pl-4">4. Biện pháp che chắn, bảo vệ môi trường và khu dân cư</h3>
        <p>
          Tháo dỡ nhà luôn đi kèm với khói bụi và tiếng ồn lớn. Một nhà thầu chuyên nghiệp sẽ sử dụng hệ thống lưới B40 vững chắc kết hợp bạt dứa dày để bao bọc toàn bộ không gian công trình. Quá trình đập phá đến đâu phải kết hợp phun nước áp lực đến đó để dập bụi. Việc che chắn kỹ lưỡng không chỉ ngăn chặn gạch đá văng ra ngoài gây nguy hiểm mà còn thể hiện sự tôn trọng đối với sinh hoạt của khu dân cư xung quanh.
        </p>
        
        <h3 className="text-2xl font-bold text-primary mt-10 mb-4 border-l-4 border-secondary pl-4">5. Tối ưu chi phí thông qua thanh lý phế liệu</h3>
        <p>
          Một bí quyết giúp chủ nhà tiết kiệm một khoản tiền không nhỏ là tận dụng lại các phế liệu từ công trình cũ. Các vật liệu như sắt thép phế liệu từ cốt thép bê tông, cửa sắt, cửa nhôm kính cũ, xà gồ, mái tôn, hay thậm chí đồ nội thất cũ đều có thể được bán thanh lý. Tại Quang Hải, chúng tôi cung cấp dịch vụ định giá và thu mua phế liệu tại chỗ với giá cao, số tiền này sẽ được khấu trừ trực tiếp vào chi phí tháo dỡ, mang lại lợi ích tài chính tối đa cho khách hàng.
        </p>
      </div>
    )
  },
  'luu-y-san-lap-mat-bang': {
    title: 'Lưu ý khi chọn dịch vụ san lấp mặt bằng tại TP.HCM',
    date: '02/11/2023',
    author: 'Quản trị viên',
    img: '/tin-tuc-2.jpg',
    content: (
      <div className="text-gray-700 text-lg leading-relaxed space-y-6">
        <p>
          San lấp mặt bằng là công đoạn nền tảng, đóng vai trò tạo ra một mặt bằng tiêu chuẩn, vững chắc và bằng phẳng cho mọi dự án xây dựng từ nhà ở dân dụng đến các khu công nghiệp quy mô lớn. Đặc biệt tại một đô thị có điều kiện địa chất đa dạng, nhiều vùng trũng thấp và mạng lưới kênh rạch chằng chịt như khu vực TP.HCM và các tỉnh miền Tây lân cận, việc chọn đúng đơn vị thi công và phương án san lấp ảnh hưởng trực tiếp đến chất lượng, khả năng chống sụt lún và tuổi thọ của công trình.
        </p>
        <p>
          Để đảm bảo dự án diễn ra suôn sẻ, đúng tiến độ và không phát sinh chi phí "ngầm", dưới đây là những lưu ý mang tính chuyên môn sâu mà chủ đầu tư cần đặc biệt quan tâm khi tìm kiếm dịch vụ san lấp.
        </p>

        <h3 className="text-2xl font-bold text-primary mt-10 mb-4 border-l-4 border-secondary pl-4">1. Khảo sát địa chất và tư vấn chọn vật liệu san lấp phù hợp</h3>
        <p>
          Sai lầm lớn nhất trong san lấp là sử dụng sai loại vật liệu. Tùy thuộc vào đặc điểm địa chất của khu vực (nền đất yếu, vùng trũng thấp, ngập nước hay nền đất thịt đã ổn định) và mục đích sử dụng (làm bãi xe, xây nhà xưởng, hay trồng cây) mà nhà thầu phải tư vấn vật liệu tương ứng:
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Cát san lấp (cát đen, cát tạp):</strong> Phù hợp cho những vùng đất nền yếu, nhiều bùn lầy, khu vực gần sông rạch (như Quận 7, Nhà Bè, Bình Chánh). Cát có đặc tính dễ len lỏi, lấp đầy các khoảng trống và khả năng thoát nước, nén chặt tốt, tạo độ ổn định rất cao cho nền móng công trình tải trọng lớn.</li>
          <li><strong>Đất san lấp (đất đồi, đất pha cát):</strong> Thường dùng cho các khu vực có nền đất tương đối cứng, hoặc dùng để san nền trồng cây, làm đường giao thông.</li>
          <li><strong>Xà bần (mảnh vỡ bê tông, gạch đá):</strong> Là giải pháp tái chế vô cùng tiết kiệm chi phí, cực kỳ cứng chắc. Tuy nhiên, chỉ thích hợp cho những nền đất đã có độ cứng nhất định và yêu cầu kỹ thuật đầm nén rất cao để tránh tạo ra các lỗ rỗng dưới lòng đất.</li>
        </ul>

        <h3 className="text-2xl font-bold text-primary mt-10 mb-4 border-l-4 border-secondary pl-4">2. Đánh giá quy trình lu lèn và tiêu chuẩn nghiệm thu độ chặt (Hệ số K)</h3>
        <p>
          Một mặt bằng được san lấp đạt chuẩn kỹ thuật không chỉ đơn giản là đổ đất cát cho đầy tới cao độ thiết kế. Trái lại, quá trình này yêu cầu phải lu lèn theo từng lớp mỏng (thường từ 20-30cm/lớp) để đảm bảo độ nén đồng đều.
        </p>
        <p>
          Bạn cần yêu cầu đơn vị thi công cam kết sử dụng các loại xe lu (lu rung, lu tĩnh, lu chân cừu) có tải trọng phù hợp. Điểm mấu chốt là phải tiến hành thí nghiệm kiểm tra độ chặt K (K90, K95, K98...) theo đúng hồ sơ thiết kế. Việc bỏ qua công đoạn lu lèn hoặc làm qua loa sẽ dẫn đến hậu quả nền nhà bị sụt lún, nứt tường nghiêm trọng chỉ sau vài năm sử dụng.
        </p>

        <h3 className="text-2xl font-bold text-primary mt-10 mb-4 border-l-4 border-secondary pl-4">3. Năng lực máy móc cơ giới và khả năng vận tải</h3>
        <p>
          Điều kiện giao thông tại TP.HCM vô cùng phức tạp với nhiều cung đường cấm tải trọng, cấm giờ chạy xe tải và những con hẻm nhỏ hẹp. Một đơn vị san lấp uy tín phải chứng minh được năng lực vận tải thông qua việc sở hữu hoặc điều động linh hoạt đa dạng các loại xe ben (từ loại nhỏ 1-2 khối đi hẻm, đến loại 15-20 khối đi đường lớn).
        </p>
        <p>
          Bên cạnh đó, hệ thống máy xúc, máy ủi, máy san gạt phải luôn sẵn sàng tại công trình để san phẳng và lu lèn ngay khi vật liệu được đổ xuống, đảm bảo tiến độ không bị gián đoạn.
        </p>

        <h3 className="text-2xl font-bold text-primary mt-10 mb-4 border-l-4 border-secondary pl-4">4. Báo giá minh bạch, hợp đồng rõ ràng</h3>
        <p>
          Chi phí san lấp thường được tính toán theo m3 hoặc báo giá trọn gói cho toàn bộ diện tích. Chủ đầu tư cần làm rõ các hạng mục trong bảng báo giá:
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li>Báo giá đã bao gồm chi phí vật liệu (cát/đất/xà bần) và chi phí vận chuyển tới tận công trình chưa?</li>
          <li>Đã bao gồm chi phí cho xe cuốc gạt phẳng, xe lu lèn đầm chặt chưa?</li>
          <li>Có cam kết không phát sinh phụ phí nếu thời gian thi công kéo dài do kẹt xe hoặc yếu tố thời tiết không?</li>
        </ul>
        
        <h3 className="text-2xl font-bold text-primary mt-10 mb-4 border-l-4 border-secondary pl-4">5. Kinh nghiệm và uy tín của nhà thầu Quang Hải</h3>
        <p>
          Sự chênh lệch giá giữa các đơn vị đôi khi đến từ việc cắt xén khối lượng vật liệu hoặc bỏ qua bước đầm nén. Hãy ưu tiên những đơn vị có pháp nhân rõ ràng, có nhiều năm kinh nghiệm, có khả năng kết nối trực tiếp với các mỏ vật liệu, và sở hữu dàn xe cơ giới chuyên dụng như <strong>Quang Hải</strong>. Chúng tôi luôn cam kết cung cấp dịch vụ san lấp mặt bằng đúng khối lượng, đạt chuẩn độ chặt kỹ thuật, hoàn thành đúng tiến độ với mức giá cạnh tranh nhất, mang lại sự an tâm tuyệt đối cho chủ đầu tư.
        </p>
      </div>
    )
  }
};

export default function NewsDetail() {
  const { slug } = useParams();
  const article = ARTICLES[slug as keyof typeof ARTICLES];

  if (!article) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gray-50 text-center px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Bài viết không tồn tại</h1>
        <p className="text-gray-600 mb-8">Xin lỗi, nội dung bạn đang tìm kiếm không có sẵn hoặc đã bị xóa.</p>
        <Link to="/tin-tuc" className="px-6 py-3 bg-primary text-white rounded-full font-bold hover:bg-primary-dark transition-colors">
          Quay lại trang Tin tức
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEO title={article.title} />
      
      {/* Banner */}
      <section className="bg-primary pt-16 pb-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url("${article.img}")` }}></div>
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <Link to="/tin-tuc" className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={16} /> Trở về danh sách
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight">{article.title}</h1>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-200">
            <span className="flex items-center gap-2"><Calendar size={16} /> {article.date}</span>
            <span className="flex items-center gap-2"><User size={16} /> {article.author}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-10">
              <div className="h-64 md:h-96 w-full relative">
                <img src={article.img} alt={article.title} className="w-full h-full object-cover" />
              </div>
              
              <div className="p-8 md:p-12 lg:p-16">
                <div>
                  {article.content}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-orange-50 p-8 md:p-10 rounded-2xl border border-orange-100 text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">Bạn đang chuẩn bị thi công công trình?</h3>
              <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
                Hãy để Quang Hải đồng hành cùng bạn. Đội ngũ kỹ sư của chúng tôi luôn sẵn sàng khảo sát thực tế và đưa ra phương án thi công tối ưu, an toàn và tiết kiệm nhất.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="tel:0972833227" className="w-full sm:w-auto px-8 py-3 bg-secondary hover:bg-secondary-hover text-white font-bold rounded-full transition-colors shadow-md">
                  Gọi Tư Vấn Miễn Phí
                </a>
                <Link to="/lien-he" className="w-full sm:w-auto px-8 py-3 bg-white text-secondary border-2 border-secondary hover:bg-gray-50 font-bold rounded-full transition-colors">
                  Để Lại Thông Tin
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
