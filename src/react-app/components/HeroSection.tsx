import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Bright Mountain Background with Sun Rays */}
      <div 
        className="absolute inset-0 bg-cover bg-center brightness-125"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/30 via-orange-500/20 to-slate-700/50"></div>
      </div>

      {/* Sun Ray Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            className="absolute top-0 left-1/2 w-1 h-full origin-top"
            style={{
              background: 'linear-gradient(180deg, rgba(255,223,0,0.4) 0%, transparent 60%)',
              transform: `rotate(${i * 30 - 180}deg)`,
              transformOrigin: 'top center',
            }}
          />
        ))}
      </div>

      {/* Animated light particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: Math.random() * 100 }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              y: [Math.random() * 100, Math.random() * -100],
              x: [Math.random() * 100, Math.random() * -100],
            }}
            transition={{
              duration: Math.random() * 6 + 6,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
            className="absolute w-2 h-2 bg-yellow-200 rounded-full blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-black text-white tracking-tight mb-8"
          style={{ 
            fontFamily: 'Montserrat, sans-serif',
            textShadow: '0 4px 30px rgba(0,0,0,0.6), 0 0 60px rgba(255,223,0,0.4)',
          }}
        >
          PURE PHARMA
        </motion.h1>

        {/* German Flag Accent */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="w-80 h-4 mx-auto mb-12 rounded-full overflow-hidden shadow-2xl"
        >
          <div className="flex h-full">
            <div className="flex-1 bg-black"></div>
            <div className="flex-1 bg-red-600"></div>
            <div className="flex-1 bg-yellow-400"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-8 mb-16"
        >
          <p className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide drop-shadow-2xl">
            AT PURE PHARMA PEPTIDES, WE FOCUS ON ONE PRINCIPLE ONLY:
          </p>

          <div className="space-y-4 text-base md:text-lg text-white max-w-4xl mx-auto">
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="font-black text-xl md:text-2xl drop-shadow-2xl"
            >
              UNCOMPROMISING QUALITY.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="leading-relaxed drop-shadow-lg font-semibold"
            >
              OUR PEPTIDES ARE SOURCED FROM GERMAN MANUFACTURERS OPERATING UNDER 
              RIGOROUS QUALITY CONTROL SYSTEMS, ENSURING CONSISTENCY, CLARITY, AND HIGH-GRADE PURITY.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="pt-8"
          >
            <p className="text-lg font-semibold text-yellow-200 mb-3 drop-shadow-2xl">THE ONLY TRUSTED PEPTIDE</p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="text-4xl md:text-6xl font-black text-white tracking-wide mb-4"
              style={{
                textShadow: '0 0 50px rgba(255,223,0,0.8), 0 4px 30px rgba(0,0,0,0.5)',
              }}
            >
              HEAL WITHIN YOU
            </motion.p>
            <p className="text-lg text-yellow-200 font-semibold drop-shadow-2xl">TOP SELLING PEPTIDES</p>
          </motion.div>
        </motion.div>

        {/* Top 3 Peptides with German Flag Colors */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {[
            {
              number: "#1",
              name: "GHK CU",
              description: "Widely referenced in scientific and cosmetic literature. GHK Cu is valued for its stability and long-standing presence in laboratory studies.",
              bgColor: "bg-black",
              textColor: "text-white",
              borderColor: "border-gray-600"
            },
            {
              number: "#2",
              name: "GLOW",
              description: "Frequently selected for functional and surface-level research. Glow Peptide is prized for its stability and relevance in cosmetic and material science evaluation.",
              bgColor: "bg-red-600",
              textColor: "text-white",
              borderColor: "border-red-400"
            },
            {
              number: "#3",
              name: "BPC 157",
              description: "Commonly cited in experimental research, BPC-157 is examined for controlled laboratory and educational study.",
              bgColor: "bg-yellow-400",
              textColor: "text-black",
              borderColor: "border-yellow-200"
            },
          ].map((peptide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, rotateY: -90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 1.7 + index * 0.2 }}
              whileHover={{ scale: 1.08, y: -10 }}
              className={`${peptide.bgColor} backdrop-blur-md border-4 ${peptide.borderColor} p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all`}
            >
              <div className={`text-6xl font-black ${peptide.textColor} mb-3 drop-shadow-xl`}>{peptide.number}</div>
              <div className={`text-2xl font-bold ${peptide.textColor} mb-4 drop-shadow-lg`}>{peptide.name}</div>
              <div className={`text-sm ${peptide.textColor} opacity-90 leading-relaxed drop-shadow-md`}>{peptide.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Info with vibrant buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 text-white"
        >
          <motion.a
            href="tel:+60122017553"
            whileHover={{ scale: 1.1, boxShadow: '0 0 40px rgba(255,223,0,0.7)' }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 px-8 py-4 rounded-full transition-all shadow-2xl font-semibold text-black"
          >
            <Phone size={20} />
            <span>+60122017553</span>
          </motion.a>
          <motion.a
            href="mailto:giridhar050919@gmail.com"
            whileHover={{ scale: 1.1, boxShadow: '0 0 40px rgba(220,38,38,0.7)' }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 px-8 py-4 rounded-full transition-all shadow-2xl font-semibold"
          >
            <Mail size={20} />
            <span>giridhar050919@gmail.com</span>
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/90 rounded-full flex items-start justify-center p-2 shadow-2xl bg-black/20">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-yellow-300 rounded-full shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
