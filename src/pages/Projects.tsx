import { SEO } from '../components/SEO';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const CATEGORIES = [
  { id: 'all', name: 'Tất cả' },
  { id: 'thao-do', name: 'Tháo dỡ nhà' },
  { id: 'san-lap', name: 'San lấp' },
  { id: 'dao-mong', name: 'Đào móng' },
  { id: 'do-be-tong', name: 'Đổ bê tông' },
];

const PROJECTS = [
  { id: 1, category: 'do-be-tong', title: 'Đổ nền bê tông tại Thích Quảng Đức, Phú Nhuận', img: '/du-an-1.jpg' },
  { id: 2, category: 'thao-do', title: 'Tháo dỡ nhà Tân Bình', img: '/du-an-2.jpg' },
  { id: 3, category: 'san-lap', title: 'San lấp mặt bằng tại Bình Chánh', img: '/du-an-3.jpg' },
  { id: 4, category: 'thao-do', title: 'Tháo dỡ nhà tại Quang Trung Gò Vấp', img: '/du-an-4.jpg' },
  { id: 5, category: 'thao-do', title: 'Tháo dỡ nhà Quận 6', img: '/du-an-5.jpg' },
  { id: 6, category: 'thao-do', title: 'Tháo dỡ nhà Quận Bình Thạnh', img: '/du-an-6.jpg' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = PROJECTS.filter(p => activeFilter === 'all' || p.category === activeFilter);

  return (
    <>
      <SEO title="Dự Án" />
      
      {/* Banner */}
      <section className="bg-primary pt-16 pb-20 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-4">DỰ ÁN ĐÃ THI CÔNG</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Hàng trăm công trình đã được Quang Hải thi công an toàn, đúng tiến độ trên khắp địa bàn TP.HCM.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white min-h-[60vh]">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-6 py-2 rounded-full font-bold transition-colors ${
                  activeFilter === cat.id
                    ? 'bg-secondary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="group relative h-80 rounded-xl overflow-hidden cursor-pointer shadow-md"
                >
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-secondary text-white text-xs font-bold rounded-sm mb-3 uppercase">
                      {CATEGORIES.find(c => c.id === project.category)?.name}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1 line-clamp-2">{project.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}
