import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PRICING_ITEMS_1 = [
  { id: 1, name: 'Phá dỡ tường 110', unit: 'm2', price: '85k' },
  { id: 2, name: 'Phá dỡ tường 220', unit: 'm2', price: '155k' },
  { id: 3, name: 'Bóc vữa tường xi măng trát tường', unit: 'm2', price: '45k' },
  { id: 4, name: 'Bóc gạch ốp tường, lát nền', unit: 'm2', price: '85k' },
  { id: 5, name: 'Đập bỏ sàn bê tông cốt thép', unit: 'm2', price: '155k' },
  { id: 6, name: 'Tháo dỡ cầu thang', unit: 'm2', price: '285k' },
  { id: 7, name: 'Phá dỡ dầm bê công cốt thép', unit: 'm3', price: '225k' },
  { id: 8, name: 'Phá móng bê tông', unit: 'm3', price: '1355k' },
  { id: 9, name: 'Tháo bỏ thiết bị vệ sinh', unit: 'phòng', price: '555k' },
  { id: 10, name: 'Tháo cửa (cửa gỗ, nhôm kính)', unit: 'Bộ', price: '195k' },
  { id: 11, name: 'Xe chở phế thải 2,5 m3 (Xe đậu tại chân công trình)', unit: 'xe', price: '750k' },
];

const PRICING_ITEMS_2 = [
  { id: 1, name: 'Nhà bê tông cốt thép (loại nhà 110)', price: '100.000đ – 200.000đ/m2 sàn' },
  { id: 2, name: 'Nhà 2 lớp gạch (loại nhà 220)', price: '150.000đ – 250.000đ/m2 sàn' },
  { id: 3, name: 'Xưởng, kho', price: 'Liên hệ', isLink: true },
];

export default function Pricing() {
  return (
    <>
      <SEO title="Bảng Giá" />
      
      {/* Banner */}
      <section className="bg-primary pt-16 pb-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url("/duc-pha-nen.jpg")' }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase">Chi Phí Thi Công</h1>
          <p className="text-gray-200 max-w-2xl mx-auto text-lg">
            Bảng giá tham khảo cho các hạng mục phá dỡ nhà cũ, đục phá bê tông và san lấp mặt bằng.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100">
            
            {/* SEO Content block 1 */}
            <div className="mb-12 text-gray-700 text-lg leading-relaxed space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Bảng Giá Đục Phá Bê Tông, Phá Dỡ Nhà Cũ Mới Nhất</h2>
              <p>
                Khi chuẩn bị cho một công trình xây dựng mới, việc tìm hiểu <strong>chi phí đục phá bê tông</strong>, <strong>tháo dỡ nhà cũ</strong> là vô cùng quan trọng. Bảng giá thi công không chỉ giúp quý khách hàng dự trù kinh phí chính xác mà còn là cơ sở để đánh giá mức độ chuyên nghiệp và minh bạch của đơn vị thi công.
              </p>
              <p>
                Tại <strong>Quang Hải</strong>, chúng tôi tự hào cung cấp dịch vụ tháo dỡ, đập phá với mức giá cạnh tranh nhất thị trường TP.HCM và các tỉnh lân cận. Dưới đây là bảng báo giá tham khảo chi tiết cho từng hạng mục công việc. Cam kết <strong>không phát sinh thêm chi phí</strong> ngoài hợp đồng đã ký kết.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-primary border-b pb-4">Phá dỡ nhà cũ từng hạng mục</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-gray-100 text-gray-700">
                      <th className="p-4 border font-bold w-16 text-center">STT</th>
                      <th className="p-4 border font-bold">Loại thi công</th>
                      <th className="p-4 border font-bold w-32 text-center">Đơn vị</th>
                      <th className="p-4 border font-bold w-32 text-right">Giá</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PRICING_ITEMS_1.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                        <td className="p-4 border text-center text-gray-600">{item.id}</td>
                        <td className="p-4 border font-medium text-gray-800">{item.name}</td>
                        <td className="p-4 border text-center text-gray-600">{item.unit}</td>
                        <td className="p-4 border text-right font-bold text-secondary">{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 italic mt-4">* Giá chưa bao gồm phí vận chuyển và VAT</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary border-b pb-4">Chi phí phá dỡ trọn gói theo m2</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-gray-100 text-gray-700">
                      <th className="p-4 border font-bold w-16 text-center">STT</th>
                      <th className="p-4 border font-bold">Loại nhà phá dỡ</th>
                      <th className="p-4 border font-bold w-64 text-right">Giá</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PRICING_ITEMS_2.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                        <td className="p-4 border text-center text-gray-600">{item.id}</td>
                        <td className="p-4 border font-medium text-gray-800">{item.name}</td>
                        <td className="p-4 border text-right font-bold text-secondary">
                          {item.isLink ? (
                            <Link to="/lien-he" className="text-blue-600 hover:underline">{item.price}</Link>
                          ) : (
                            item.price
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 italic mt-4">* Mức giá có thể thay đổi tùy theo điều kiện thi công thực tế (hẻm nhỏ, khu vực đông dân cư...)</p>
            </div>

            {/* SEO Content block 2 */}
            <div className="mb-12 text-gray-700 text-lg leading-relaxed space-y-4 mt-12">
              <h3 className="text-2xl font-bold text-primary mb-6">Các Yếu Tố Ảnh Hưởng Đến Đơn Giá Thi Công</h3>
              <p>
                Bảng giá trên mang tính chất tham khảo. Thực tế, <strong>chi phí đục phá bê tông</strong> và tháo dỡ sẽ phụ thuộc vào các yếu tố sau:
              </p>
              <ul className="list-disc pl-6 space-y-3 mb-8">
                <li><strong>Vị trí thi công:</strong> Công trình nằm trong hẻm nhỏ, khó vận chuyển xà bần sẽ có chi phí cao hơn so với mặt tiền đường lớn.</li>
                <li><strong>Quy mô và kết cấu công trình:</strong> Nhà cao tầng, móng băng, móng bè cốt thép dày đòi hỏi máy móc công suất lớn và biện pháp thi công phức tạp.</li>
                <li><strong>Điều kiện thi công:</strong> Các yêu cầu đặc biệt về thời gian (thi công ban đêm), hạn chế tiếng ồn, hoặc che chắn nghiêm ngặt để bảo vệ các công trình lân cận.</li>
              </ul>
              
              <h3 className="text-2xl font-bold text-primary mb-6 pt-4">Tại sao nên chọn dịch vụ của Quang Hải?</h3>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Máy móc hiện đại:</strong> Trang bị đầy đủ các loại xe cuốc, máy đục hơi, máy cắt bê tông thủy lực giúp đẩy nhanh tiến độ và giảm thiểu tiếng ồn.</li>
                <li><strong>Đội ngũ chuyên nghiệp:</strong> Kỹ sư giám sát và công nhân lành nghề, giàu kinh nghiệm xử lý các tình huống phức tạp.</li>
                <li><strong>An toàn tuyệt đối:</strong> Tuân thủ nghiêm ngặt các quy định về an toàn lao động, có biện pháp che chắn chống bụi và bảo vệ cấu trúc nhà liền kề.</li>
                <li><strong>Xử lý xà bần trọn gói:</strong> Dọn dẹp sạch sẽ mặt bằng và vận chuyển phế thải xây dựng đến đúng nơi quy định.</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 mt-12 text-center">
              <h3 className="text-xl font-bold text-primary mb-3">Bạn cần báo giá chính xác?</h3>
              <p className="text-gray-700 mb-6">Chúng tôi sẽ cử kỹ sư đến khảo sát tận nơi và lên phương án thi công cùng bảng báo giá chi tiết hoàn toàn miễn phí.</p>
              <Link to="/lien-he" className="inline-block px-8 py-3 bg-secondary hover:bg-secondary-hover text-white font-bold rounded-full transition-colors shadow-md">
                Yêu Cầu Khảo Sát
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
