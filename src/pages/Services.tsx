import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { Pickaxe, Truck, HardHat, Building2, MapPin, Wrench, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const SERVICES = [
  { 
    id: 'thao-do-nha',
    title: "Tháo dỡ nhà", 
    desc: "Thi công tháo dỡ nhà xưởng, công trình dân dụng cũ an toàn, dọn dẹp sạch sẽ mặt bằng.", 
    img: "/thao-do-nha.jpg", 
    icon: Wrench,
    features: ["Biện pháp thi công an toàn", "Dọn dẹp sạch xà bần", "Bảo vệ các công trình lân cận"]
  },
  { 
    id: 'dao-mong',
    title: "Đào móng", 
    desc: "Đào móng nhà, tầng hầm, hố ga chuyên nghiệp với hệ thống xe cuốc đa kích cỡ.", 
    img: "/san-lap-mat-bang.jpg", 
    icon: Pickaxe,
    features: ["Máy móc đa dạng, vào được hẻm nhỏ", "Đào chuẩn kích thước bản vẽ", "Đội ngũ kỹ thuật giám sát"]
  },
  { 
    id: 'san-lap-mat-bang',
    title: "San lấp mặt bằng", 
    desc: "Cung cấp vật tư và thi công san lấp mặt bằng công trình, đất nền, khu công nghiệp.", 
    img: "/dao-mong-dong-cu.jpg", 
    icon: MapPin,
    features: ["Cung cấp đất, cát san lấp giá rẻ", "Lu lèn đạt chuẩn độ chặt K", "Mặt bằng phẳng, thoát nước tốt"]
  },
  { 
    id: 'ep-cu',
    title: "Đóng cừ, Ép cừ", 
    desc: "Thi công ép cừ U, cừ larsen chống sạt lở cho các công trình có tầng hầm, ven sông.", 
    img: "/ep-cu.jpg", 
    icon: Building2,
    features: ["Ép cừ bằng máy thủy lực êm ái", "Bảo vệ móng nhà lân cận", "Bản vẽ biện pháp thi công chi tiết"]
  },
  { 
    id: 'duc-nen-be-tong',
    title: "Đục phá bê tông", 
    desc: "Khoan cắt, đục phá bê tông nền, tường, cột bằng máy móc hiện đại, ít tiếng ồn. Nhận đổ bê tông, xoa bóng cắt rong.", 
    img: "/duc-pha-nen.jpg", 
    icon: HardHat,
    features: ["Máy đục hơi, đục điện công suất lớn", "Khoan rút lõi bê tông", "Nhận đổ bê tông, xoa bóng cắt rong"]
  },
  { 
    id: 'cho-xa-ban',
    title: "Chở xà bần", 
    desc: "Thu gom, dọn dẹp và vận chuyển xà bần, rác thải xây dựng bằng xe ben từ 1 - 15 khối.", 
    img: "/cho-xa-ban.jpg", 
    icon: Truck,
    features: ["Xe tải đủ tải trọng", "Vào hẻm nội thành", "Bãi đổ rác đúng quy định"]
  },
];

export default function Services() {
  return (
    <>
      <SEO title="Dịch Vụ" />
      
      {/* Banner */}
      <section className="bg-primary pt-16 pb-20 text-center text-white bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-4">DỊCH VỤ CỦA CHÚNG TÔI</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Quang Hải cung cấp giải pháp thi công toàn diện, chuyên nghiệp với máy móc hiện đại và đội ngũ kỹ thuật giàu kinh nghiệm.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`grid lg:grid-cols-2 gap-10 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={idx % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img src={service.img} alt={service.title} className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
                <div className={idx % 2 !== 0 ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-orange-50 text-secondary rounded-lg flex items-center justify-center">
                      <service.icon size={24} />
                    </div>
                    <h2 className="text-3xl font-bold text-primary">{service.title}</h2>
                  </div>
                  <p className="text-gray-600 text-lg mb-6">{service.desc}</p>
                  
                  <h3 className="font-bold text-gray-800 mb-4 uppercase text-sm tracking-wider">Ưu điểm dịch vụ:</h3>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 text-gray-700">
                        <CheckCircle className="text-secondary shrink-0" size={20} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-4">
                    <Link 
                      to={`/dich-vu/${service.id}`}
                      className="inline-flex items-center gap-2 px-8 py-3 bg-secondary hover:bg-secondary-hover text-white rounded-full font-bold transition-all shadow-md"
                    >
                      Xem chi tiết <ArrowRight size={18} />
                    </Link>
                    <Link 
                      to="/lien-he"
                      className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-full font-bold transition-all shadow-md"
                    >
                      Liên hệ ngay
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Bạn chưa tìm thấy dịch vụ mình cần?</h2>
          <p className="mb-8 opacity-90 max-w-2xl mx-auto">
            Hãy liên hệ trực tiếp, chúng tôi sẵn sàng tư vấn và cung cấp giải pháp thi công theo yêu cầu đặc thù của công trình.
          </p>
          <a 
            href="tel:0972833227"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-secondary hover:bg-gray-100 rounded-full font-bold transition-all shadow-lg"
          >
            Gọi Tự Vấn: 0972 833 227
          </a>
        </div>
      </section>
    </>
  );
}
