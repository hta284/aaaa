import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Phone, ArrowRight, Truck, Clock, DollarSign, 
  ThumbsUp, CheckCircle, MapPin, HardHat, Building2, 
  Quote, Mail
} from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <>
      <SEO />
      
      {/* 1. HERO BANNER */}
      <section className="relative pt-[88px] bg-gray-50">
        <div className="w-full relative h-[300px] sm:h-[400px] md:h-[600px] overflow-x-auto overflow-y-hidden flex items-center">
          <div className="h-full min-w-[1000px] md:min-w-full relative shrink-0 grow w-full">
            {/* Background Image with Dark Overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: 'url("/banner.jpg")' }}
            >
              <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center container mx-auto px-4 z-10 text-center text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-wide drop-shadow-lg uppercase">
                  quanghai.com <sup className="text-2xl md:text-4xl">&reg;</sup>
                </h1>
                <p className="text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-200">
                  Am hiểu các hệ thống của tòa nhà, các công trình xây dựng giúp chúng tôi có khả năng tách rời giữa hệ thống cần tháo và hệ thống vẫn đang hoạt động.
                </p>
              </motion.div>
            </div>
            
            {/* Attempt to load custom banner on top if uploaded, otherwise hide */}
            <img 
              src="/banner.jpg" 
              alt="Công Ty Quang Hải Banner" 
              className="absolute inset-0 w-full h-full object-cover z-20 pointer-events-none"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </div>
      </section>

      {/* 2. GIỚI THIỆU & THỐNG KÊ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-20 after:h-1.5 after:bg-secondary">
                Về Quang Hải
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Với hơn 20 năm kinh nghiệm trong lĩnh vực thi công cơ giới, tháo dỡ và chuẩn bị mặt bằng, <strong>Quang Hải</strong> tự hào là đối tác tin cậy của hàng ngàn khách hàng tại TP.HCM và các tỉnh lân cận.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Chúng tôi cam kết mang đến dịch vụ chất lượng, an toàn tuyệt đối, tiến độ nhanh chóng với mức chi phí cạnh tranh nhất.
              </p>
              <Link to="/gioi-thieu" className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors">
                Xem chi tiết <ArrowRight size={18} />
              </Link>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "100+", label: "Công trình", icon: Building2 },
                { number: "50+", label: "Đội ngũ", icon: HardHat },
                { number: "30+", label: "Máy móc", icon: Truck },
                { number: "20+", label: "Năm kinh nghiệm", icon: Clock },
              ].map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-shadow group"
                >
                  <stat.icon className="w-10 h-10 mx-auto text-secondary mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl md:text-4xl font-black text-primary mb-2">{stat.number}</div>
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. DỊCH VỤ */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-3xl md:text-4xl font-black mb-4 uppercase text-primary">
              Dịch vụ của chúng tôi
            </motion.h2>
            <p className="text-gray-600">Đa dạng các hạng mục thi công, đáp ứng mọi nhu cầu từ nhà dân dụng đến dự án lớn.</p>
          </div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { title: "Tháo dỡ nhà", desc: "Tháo dỡ nhà cấp 4, cao tầng, biệt thự, nhà xưởng an toàn.", img: "/thao-do-nha.jpg", isMain: true },
              { title: "Đào móng - Đóng cừ", desc: "Thi công đào móng sâu, đóng cừ chuyên nghiệp cho mọi địa hình.", img: "/dao-mong-dong-cu.jpg" },
              { title: "San lấp mặt bằng", desc: "San lấp chuẩn cao độ, lu lèn chặt chẽ cho dự án.", img: "/san-lap-mat-bang.jpg" },
              { title: "Đục phá nền, đổ bê tông", desc: "Cắt đục bê tông, khoan rút lõi, nhận đổ bê tông, xoa bóng cắt rong.", img: "/duc-pha-nen.jpg" },
              { title: "Chở xà bần", desc: "Vận chuyển xà bần, phế thải xây dựng nhanh chóng.", img: "/cho-xa-ban.jpg" },
              { title: "Ép cừ", desc: "Ép cừ larsen, cừ tràm đảm bảo độ vững chắc cho công trình.", img: "/ep-cu.jpg" },
              { title: "Thu mua nhà cũ", desc: "Thu mua xác nhà, phế liệu công trình với giá cao.", img: "/thu-mua-nha-cu.jpg" },
            ].map((service, idx) => (
              <motion.div key={idx} variants={fadeIn} className="bg-white group cursor-pointer border border-gray-100 hover:border-secondary transition-all hover:shadow-xl relative overflow-hidden">
                {service.isMain && (
                  <div className="absolute top-4 -right-8 bg-secondary text-white text-xs font-bold px-10 py-1 rotate-45 z-10 shadow-md">
                    DỊCH VỤ CHÍNH
                  </div>
                )}
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-primary group-hover:text-secondary transition-colors uppercase">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. QUY TRÌNH LÀM VIỆC */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-3xl md:text-5xl font-black mb-6 text-primary uppercase leading-tight">
                Quy Trình <br/><span className="text-secondary">Làm Việc</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Quy trình làm việc chuyên nghiệp, minh bạch và tối ưu hóa thời gian, đảm bảo chất lượng và an toàn tuyệt đối cho mọi công trình.
              </p>
              <a href="tel:0972833227" className="inline-flex items-center gap-3 font-bold text-lg text-primary hover:text-secondary transition-colors group">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-red-50 transition-colors">
                  <Phone size={20} className="text-secondary" />
                </div>
                Tư vấn miễn phí
              </a>
            </div>
            
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Khảo sát & Tư vấn", desc: "Tiếp nhận thông tin, khảo sát thực tế và lên phương án thi công chi tiết.", icon: Phone },
                  { title: "Ký hợp đồng", desc: "Thống nhất các điều khoản, thời gian thi công và ký kết hợp đồng.", icon: CheckCircle },
                  { title: "Thi công tháo dỡ", desc: "Triển khai máy móc, nhân sự thi công đảm bảo an toàn, đúng tiến độ.", icon: Truck },
                  { title: "Bàn giao mặt bằng", desc: "Nghiệm thu, dọn dẹp sạch sẽ và bàn giao lại mặt bằng cho khách hàng.", icon: ThumbsUp },
                ].map((step, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-8 border border-gray-100 bg-gray-50 hover:bg-white hover:border-secondary hover:shadow-xl transition-all group relative overflow-hidden"
                  >
                    <div className="text-secondary mb-6 group-hover:scale-110 transition-transform origin-left">
                      <step.icon size={40} strokeWidth={1.5} />
                    </div>
                    <div className="absolute top-6 right-6 text-6xl font-black text-gray-200/50 group-hover:text-red-50 transition-colors -z-0">
                      0{idx + 1}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 relative z-10">{step.title}</h3>
                    <p className="text-gray-500 relative z-10">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DỰ ÁN NỔI BẬT */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase">Dự Án Đã Thi Công</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg">Hàng ngàn công trình đã được chúng tôi hoàn thành đúng tiến độ, an toàn tuyệt đối và nhận được sự tin tưởng từ chủ đầu tư.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              { id: 1, title: 'Đổ nền bê tông tại Thích Quảng Đức, Phú Nhuận', desc: 'Thi công đổ bê tông nền nguyên khối, kết hợp xoa nền đánh bóng và cắt ron chống nứt chuyên nghiệp. Cam kết mặt sàn phẳng mịn, độ bền cao, đáp ứng tiêu chuẩn chịu lực khắt khe nhất.', img: '/du-an-1.jpg' },
              { id: 2, title: 'San lấp mặt bằng Quận 7', desc: 'San lấp mặt bằng dự án lớn, đảm bảo tiến độ và kỹ thuật lu lèn nền đất.', img: '/du-an-2.jpg' },
            ].map((project) => (
              <motion.div 
                key={project.id}
                whileHover={{ y: -5 }}
                className="group cursor-pointer bg-primary-dark"
              >
                <div className="h-80 overflow-hidden relative">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100" />
                  <div className="absolute top-4 left-4 bg-secondary text-white px-4 py-1 text-sm font-bold uppercase tracking-wider">
                    Hoàn Thành
                  </div>
                </div>
                <div className="p-8 border-t-4 border-transparent group-hover:border-secondary transition-colors">
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">{project.desc}</p>
                  <span className="text-secondary font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                    Xem chi tiết <ArrowRight size={16} />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/du-an" className="inline-block px-10 py-4 border-2 border-white/20 hover:border-secondary hover:bg-secondary text-white font-bold uppercase tracking-widest transition-all">
              Xem tất cả dự án
            </Link>
          </div>
        </div>
      </section>

      {/* 6. VÌ SAO CHỌN CHÚNG TÔI */}
      <section className="py-24 relative bg-primary overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
          style={{ backgroundImage: 'url("/banner.jpg")' }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight text-white uppercase">TẠI SAO BẠN NÊN CHỌN <span className="text-secondary">quanghai.com</span> <sup className="text-xl">&reg;</sup></h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { desc: "quanghai.com bốc được khối lượng, lập bảng chi phí chi tiết rõ ràng các hạng mục sau khi khảo sát, là tư liệu để xây dựng kế hoạch thi công" },
              { desc: "quanghai.com tổ chức thi công tốt, lắp dựng hoarding chuyên nghiệp ngăn cách khu vực thi công và khu vực đang hoạt động" },
              { desc: "quanghai.com am hiểu các hệ thống của tòa nhà, các công trình xây dựng giúp chúng tôi có khả năng tách rời giữa hệ thống cần tháo và hệ thống vẫn đang hoạt động" },
            ].map((reason, idx) => (
               <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 flex flex-col items-center text-center border-t-4 border-secondary group hover:-translate-y-2 transition-transform"
              >
                <div className="w-16 h-16 border-2 border-primary/20 text-secondary rounded flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                  <CheckCircle size={32} />
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="bg-secondary text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-red-600 -skew-x-12 translate-x-20 opacity-50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase">
            CẦN KHẢO SÁT & TƯ VẤN MIỄN PHÍ?
          </h2>
          <p className="text-lg md:text-xl mb-10 text-white/90 max-w-2xl mx-auto">
            Liên hệ ngay với Quang Hải để nhận phương án thi công tối ưu và chi tiết nhất sau khi khảo sát thực tế.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="tel:0972833227"
              className="w-full sm:w-auto px-10 py-4 bg-white text-secondary hover:bg-gray-50 font-bold uppercase tracking-widest text-lg transition-all flex items-center justify-center gap-3 shadow-xl"
            >
              <Phone className="animate-pulse" />
              0972 833 227
            </a>
            <a 
              href="https://zalo.me/0985023531"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-10 py-4 bg-primary text-white hover:bg-primary-dark rounded-lg font-black tracking-wide text-lg transition-all shadow-2xl flex items-center justify-center gap-2"
            >
              CHAT ZALO NGAY
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
