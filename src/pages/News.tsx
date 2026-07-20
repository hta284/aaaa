import { SEO } from '../components/SEO';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const NEWS = [
  {
    id: 1,
    title: 'Kinh nghiệm tháo dỡ nhà cũ an toàn, tiết kiệm',
    excerpt: 'Tháo dỡ nhà cũ là công đoạn đầu tiên và vô cùng quan trọng trước khi xây dựng công trình mới. Bài viết này sẽ chia sẻ những kinh nghiệm thực tế...',
    img: '/tin-tuc-1.jpg',
    date: '15/10/2023',
    author: 'Quản trị viên',
    link: '/tin-tuc/kinh-nghiem-thao-do-nha-cu'
  },
  {
    id: 2,
    title: 'Lưu ý khi chọn dịch vụ san lấp mặt bằng tại TP.HCM',
    excerpt: 'Làm sao để chọn được đơn vị san lấp mặt bằng uy tín, chất lượng đất cát đảm bảo và giá cả hợp lý? Hãy cùng tìm hiểu qua bài viết dưới đây...',
    img: '/tin-tuc-2.jpg',
    date: '02/11/2023',
    author: 'Quản trị viên',
    link: '/tin-tuc/luu-y-san-lap-mat-bang'
  },
  {
    id: 3,
    title: 'Chi phí đục phá bê tông mới nhất năm nay',
    excerpt: 'Cập nhật bảng chi phí dịch vụ khoan cắt, đục phá bê tông tham khảo cho từng hạng mục công trình. Cam kết không phát sinh...',
    img: '/duc-pha-nen.jpg',
    date: '20/11/2023',
    author: 'Quản trị viên',
    link: '/bang-gia'
  }
];

export default function News() {
  return (
    <>
      <SEO title="Tin Tức" />
      
      {/* Banner */}
      <section className="bg-primary pt-16 pb-20 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-4">TIN TỨC & KIẾN THỨC</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Cập nhật thông tin mới nhất về ngành xây dựng, kinh nghiệm thi công và các dự án của Quang Hải.
          </p>
        </div>
      </section>

      {/* Blog List */}
      <section className="py-20 bg-gray-50 min-h-[60vh]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {NEWS.map((item) => (
                <article key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col sm:flex-row">
                  <div className="sm:w-2/5 h-64 sm:h-auto overflow-hidden relative">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="sm:w-3/5 p-6 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3 font-medium">
                      <span className="flex items-center gap-1"><Calendar size={14}/> {item.date}</span>
                      <span className="flex items-center gap-1"><User size={14}/> {item.author}</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                      <Link to={item.link}>{item.title}</Link>
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {item.excerpt}
                    </p>
                    <Link to={item.link} className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary mt-auto transition-colors">
                      Đọc tiếp <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Widget */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-secondary">
                  Chuyên mục
                </h3>
                <ul className="space-y-2">
                  {['Kinh nghiệm thi công', 'Chi phí tham khảo', 'Tin tức công ty', 'Kiến thức xây dựng'].map((cat, i) => (
                    <li key={i}>
                      <a href="#" className="flex justify-between items-center text-gray-600 hover:text-secondary transition-colors py-2 border-b border-gray-50 last:border-0">
                        <span>{cat}</span>
                        <ArrowRight size={14} className="opacity-50" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Widget Banner */}
              <div className="bg-primary text-white p-6 rounded-2xl shadow-sm text-center">
                <h3 className="text-xl font-bold mb-3">Cần Tư Vấn Gấp?</h3>
                <p className="text-gray-300 text-sm mb-6">Liên hệ ngay để được khảo sát tận nơi miễn phí tại TP.HCM</p>
                <a href="tel:0972833227" className="block w-full py-3 bg-secondary hover:bg-secondary-hover rounded-full font-bold transition-colors">
                  Gọi 0972 833 227
                </a>
              </div>
            </aside>
            
          </div>
        </div>
      </section>
    </>
  );
}
