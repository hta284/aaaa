import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { CheckCircle, Users, HardHat, Target, Eye, Shield } from 'lucide-react';

export default function About() {
  return (
    <>
      <SEO title="Giới Thiệu" />
      
      {/* Banner */}
      <section className="bg-primary pt-16 pb-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url("/thao-do-nha.jpg")' }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-black mb-4">VỀ CHÚNG TÔI</h1>
          <p className="text-gray-200 max-w-2xl mx-auto text-lg">
            Công ty Quang Hải - Đơn vị tiên phong trong lĩnh vực phá dỡ, san lấp và chuẩn bị mặt bằng tại TP.HCM.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="/thao-do-nha.jpg" 
                alt="Công ty Quang Hải" 
                className="rounded-xl shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-primary">CÔNG TY QUANG HẢI</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Được thành lập với tâm huyết và sự thấu hiểu sâu sắc về ngành xây dựng, Quang Hải đã và đang khẳng định vị thế vững chắc của mình trong lĩnh vực tháo dỡ công trình, đào móng, đóng cừ và san lấp mặt bằng.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Trải qua nhiều năm hoạt động, chúng tôi sở hữu đội ngũ kỹ sư, công nhân lành nghề cùng hệ thống máy móc cơ giới hiện đại (xe cuốc, xe tải, máy đục bê tông...). Chúng tôi cam kết mang lại giải pháp an toàn, nhanh chóng và tiết kiệm nhất cho mọi công trình.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Phục vụ toàn khu vực TP.HCM và lân cận",
                  "Máy móc hiện đại, thi công an toàn",
                  "Chi phí minh bạch, hợp lý",
                  "Hỗ trợ khảo sát tận nơi miễn phí 24/7"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                    <CheckCircle className="text-secondary" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <Target className="w-16 h-16 text-secondary mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">Sứ Mệnh</h3>
              <p className="text-gray-600 leading-relaxed">
                Cung cấp dịch vụ chuẩn bị mặt bằng hoàn hảo, góp phần xây dựng nền móng vững chắc cho những công trình thế kỷ. An toàn của cộng đồng là trên hết.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center border-b-4 border-primary">
              <Eye className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">Tầm Nhìn</h3>
              <p className="text-gray-600 leading-relaxed">
                Trở thành thương hiệu hàng đầu Việt Nam trong lĩnh vực thi công phá dỡ và san lấp, áp dụng công nghệ máy móc tiên tiến nhất.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <Shield className="w-16 h-16 text-secondary mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">Giá Trị Cốt Lõi</h3>
              <p className="text-gray-600 leading-relaxed">
                Uy Tín - Chuyên Nghiệp - Tận Tâm. Chúng tôi xem công trình của khách hàng như chính ngôi nhà của mình.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
