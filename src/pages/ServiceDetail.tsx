import { SEO } from '../components/SEO';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Phone, CheckCircle } from 'lucide-react';
import { SEO_SERVICES, FALLBACK_SEO_CONTENT } from '../data/servicesSeo';

export default function ServiceDetail() {
  const { slug } = useParams();
  
  // Try to find specific SEO content, or fall back to generic
  const seoData = slug && SEO_SERVICES[slug as keyof typeof SEO_SERVICES] 
    ? SEO_SERVICES[slug as keyof typeof SEO_SERVICES] 
    : FALLBACK_SEO_CONTENT;

  // Generate Schema markup for FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": seoData.faq.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <>
      <SEO title={seoData.title} />
      
      {/* Inject Schema into head */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      {/* Banner & Breadcrumb */}
      <section className="bg-primary pt-16 pb-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url("${seoData.img}")` }}></div>
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <nav className="flex items-center justify-center gap-2 text-sm text-gray-300 mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">Trang chủ</Link>
            <span>/</span>
            <Link to="/dich-vu" className="hover:text-white transition-colors">Dịch vụ</Link>
            <span>/</span>
            <span className="text-secondary font-medium">{seoData.title}</span>
          </nav>
          
          <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight uppercase">{seoData.title}</h1>
          <p className="text-lg text-gray-200">{seoData.description}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
            
            {/* Left: Article */}
            <article className="lg:w-2/3 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
              
              <div 
                className="prose prose-lg max-w-none text-gray-700
                           prose-headings:text-primary prose-headings:font-bold
                           prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-l-4 prose-h2:border-secondary prose-h2:pl-4
                           prose-h3:text-xl prose-h3:text-gray-800
                           prose-p:leading-relaxed prose-p:mb-6
                           prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-ul:space-y-2
                           prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-6 prose-ol:space-y-3
                           prose-strong:text-gray-900"
                dangerouslySetInnerHTML={{ __html: seoData.content }}
              />

              {/* FAQ Section */}
              <div className="mt-16 pt-10 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-primary mb-8 border-l-4 border-secondary pl-4">Câu hỏi thường gặp (FAQ)</h2>
                <div className="space-y-6">
                  {seoData.faq.map((item, idx) => (
                    <div key={idx} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <h3 className="text-lg font-bold text-gray-900 mb-3">{item.q}</h3>
                      <p className="text-gray-700 leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>

            </article>

            {/* Right: Sidebar */}
            <aside className="lg:w-1/3">
              {/* Contact Box */}
              <div className="bg-primary text-white p-8 rounded-2xl shadow-xl sticky top-24">
                <h3 className="text-2xl font-black mb-4 uppercase">Cần tư vấn ngay?</h3>
                <p className="text-gray-300 mb-8">Kỹ sư của chúng tôi sẵn sàng khảo sát thực tế và báo giá chi tiết hoàn toàn miễn phí.</p>
                
                <div className="space-y-4">
                  <a href="tel:0972833227" className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-secondary hover:bg-secondary-hover text-white font-bold rounded-xl transition-all shadow-md">
                    <Phone className="animate-pulse" size={20} />
                    0972 833 227
                  </a>
                  <a href="https://zalo.me/0985023531" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-white hover:bg-gray-100 text-primary font-bold rounded-xl transition-all shadow-md">
                    Nhắn tin Zalo
                  </a>
                </div>

                <ul className="mt-8 space-y-4 text-sm text-gray-300">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-secondary shrink-0" size={18} />
                    Khảo sát miễn phí 24/7
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-secondary shrink-0" size={18} />
                    Cam kết không phát sinh
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-secondary shrink-0" size={18} />
                    Thi công đúng tiến độ
                  </li>
                </ul>
              </div>

              {/* Internal Links */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Dịch vụ liên quan</h3>
                <div className="space-y-3">
                  <Link to="/dich-vu/thao-do-nha" className="block text-primary hover:text-secondary font-medium transition-colors">» Tháo dỡ nhà cũ</Link>
                  <Link to="/dich-vu/san-lap-mat-bang" className="block text-primary hover:text-secondary font-medium transition-colors">» San lấp mặt bằng</Link>
                  <Link to="/dich-vu/duc-nen-be-tong" className="block text-primary hover:text-secondary font-medium transition-colors">» Đục phá nền bê tông</Link>
                  <Link to="/dich-vu/dao-mong" className="block text-primary hover:text-secondary font-medium transition-colors">» Đào móng công trình</Link>
                  <Link to="/dich-vu/ep-cu" className="block text-primary hover:text-secondary font-medium transition-colors">» Đóng cừ, Ép cừ Larsen</Link>
                  <Link to="/dich-vu/cho-xa-ban" className="block text-primary hover:text-secondary font-medium transition-colors">» Vận chuyển xà bần</Link>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-orange-50 py-16 border-t border-orange-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4">Bạn đã sẵn sàng để bắt đầu dự án?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Đừng ngần ngại, hãy để Quang Hải đồng hành cùng bạn tạo nên một nền móng vững chắc cho công trình tương lai.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/lien-he" className="inline-flex items-center gap-2 px-10 py-4 bg-secondary hover:bg-secondary-hover text-white rounded-full font-bold transition-all shadow-xl uppercase tracking-wider">
              Liên Hệ Đặt Lịch Khảo Sát
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
