import { motion } from "framer-motion";
import ProductCard from "@/react-app/components/ProductCard";

const products = [
  // Page 1 - Bestselling (matching exact names from the images)
  { name: "GHKCU 50MG", price: "RM 300" },
  { name: "RETATRUTIDE", price: "10MG - RM490\n30MG - RM 870" },
  { name: "CJC-1295", price: "5 VIAL 2000MG\nRM 550" },
  { name: "TIRZAPEPTIDE 15 MG", price: "RM 400" },
  { name: "OZEMPIC 5MG", price: "RM300" },
  { name: "GLUTATHIONE 1500MG", price: "RM290" },
  { name: "BPC 157 + TB 500", price: "5MG + 5MG\nRM350" },
  { name: "GLOW 70MG", price: "(GHKCU + BPC 157 + TB 500)\nRM600" },
  
  // Page 2 - Additional Products
  { name: "IPAMORELIN 10MG", price: "RM 330" },
  { name: "TESAMORELIN 10MG", price: "RM 450" },
  { name: "KLOW 80MG", price: "(GHKCU + BPC 157 + TB500 + KPV)\nRM 550" },
  { name: "MOTS-C 10MG", price: "RM 290" },
  
  // Page 3 - More Products
  { name: "IGF 1 - LR3 100MCG 5 VIALS", price: "RM 640" },
  { name: "PT - 141 10MG", price: "RM 370" },
  { name: "AOD9604 5MG", price: "RM 270" },
  { name: "HGH", price: "15 IU - RM 280\n24 IU - RM 350" },
];

export default function ProductsSection() {
  return (
    <section className="relative min-h-screen py-20 px-6 overflow-hidden">
      {/* Triathlon Runner Background - Multiple runners in motion */}
      <div 
        className="absolute inset-0 bg-cover bg-center brightness-110"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=1920&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/70 via-gray-700/60 to-slate-900/70"></div>
      </div>

      {/* Motion blur effect - simulate runner movement */}
      <motion.div
        animate={{
          x: ['-100%', '100%'],
          opacity: [0, 0.3, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"
        style={{ filter: 'blur(40px)' }}
      />

      {/* Running motion lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: '-100%' }}
            animate={{ x: '200%' }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear",
            }}
            className="absolute h-px w-96 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
            }}
          />
        ))}
      </div>

      {/* Aesthetic gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-600/10 via-transparent to-blue-600/10"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-purple-600/5 via-transparent to-emerald-600/5"></div>

      {/* Animated floating particles - sweat/water droplets */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.5, 1],
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
            }}
            transition={{
              duration: Math.random() * 10 + 8,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute w-1 h-1 bg-white/60 rounded-full blur-[2px]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Decorative geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-teal-500/10 to-blue-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/3 -right-32 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-32 left-1/4 w-96 h-96 bg-gradient-to-br from-emerald-500/10 to-teal-500/5 rounded-full blur-3xl"
        />
      </div>

      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            animate={{
              textShadow: [
                '0 0 20px rgba(52, 211, 153, 0.3)',
                '0 0 40px rgba(52, 211, 153, 0.5)',
                '0 0 20px rgba(52, 211, 153, 0.3)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-wide drop-shadow-2xl"
          >
            OUR BESTSELLING GERMAN PEPTIDES
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-40 h-1.5 mx-auto rounded-full overflow-hidden shadow-2xl"
          >
            <motion.div 
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex h-full"
              style={{
                background: 'linear-gradient(90deg, #000000 0%, #DC2626 33%, #FACC15 66%, #000000 100%)',
                backgroundSize: '200% 100%',
              }}
            />
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {products.slice(0, 8).map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
              index={index}
            />
          ))}
        </div>

        {/* Second page of products */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <motion.h2 
            animate={{
              textShadow: [
                '0 0 20px rgba(52, 211, 153, 0.3)',
                '0 0 40px rgba(52, 211, 153, 0.5)',
                '0 0 20px rgba(52, 211, 153, 0.3)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            className="text-4xl md:text-5xl font-black text-white mb-12 text-center uppercase tracking-wide drop-shadow-2xl"
          >
            PURE PHARMA PEPTIDES
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {products.slice(8).map((product, index) => (
              <ProductCard
                key={index + 8}
                name={product.name}
                price={product.price}
                index={index + 8}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
