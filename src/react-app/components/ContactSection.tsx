import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-6">
      {/* Bright Mountain Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center brightness-115"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-700/60 via-teal-700/65 to-blue-800/70"></div>
      </div>

      {/* Vibrant light particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.8, 1],
              x: [0, Math.random() * 150 - 75],
              y: [0, Math.random() * 150 - 75],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            className="absolute w-3 h-3 bg-yellow-300 rounded-full blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-wide"
            style={{
              textShadow: '0 0 40px rgba(52, 211, 153, 0.8), 0 4px 30px rgba(0,0,0,0.5)',
            }}
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-40 h-1.5 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 mx-auto mb-8 rounded-full shadow-lg"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-white font-semibold max-w-3xl mx-auto leading-relaxed drop-shadow-lg"
          >
            Interested in our pharmaceutical-grade German peptides? 
            Contact us through any of the channels below for professional consultation and guidance.
          </motion.p>
        </motion.div>

        {/* Vibrant Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <motion.a
            href="https://wa.me/60122017553"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50, rotateY: -90 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, y: -15, rotateY: 5 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-gradient-to-br from-green-500/95 to-emerald-600/95 backdrop-blur-md border-2 border-green-300/60 p-8 rounded-2xl shadow-2xl hover:shadow-green-400/50 transition-all"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <motion.div 
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center group-hover:bg-white/40 transition-all shadow-xl"
              >
                <MessageCircle size={40} className="text-white drop-shadow-lg" />
              </motion.div>
              <h3 className="text-2xl font-black text-white drop-shadow-lg">WhatsApp</h3>
              <p className="text-white text-lg font-bold drop-shadow-md">+60122017553</p>
              <div className="text-sm text-white/90 font-semibold drop-shadow-sm">Click to chat</div>
            </div>
          </motion.a>

          <motion.a
            href="tel:+60122017553"
            initial={{ opacity: 0, y: 50, rotateY: -90 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, y: -15, rotateY: 5 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-gradient-to-br from-blue-500/95 to-indigo-600/95 backdrop-blur-md border-2 border-blue-300/60 p-8 rounded-2xl shadow-2xl hover:shadow-blue-400/50 transition-all"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <motion.div 
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center group-hover:bg-white/40 transition-all shadow-xl"
              >
                <Phone size={40} className="text-white drop-shadow-lg" />
              </motion.div>
              <h3 className="text-2xl font-black text-white drop-shadow-lg">Phone</h3>
              <p className="text-white text-lg font-bold drop-shadow-md">+60122017553</p>
              <div className="text-sm text-white/90 font-semibold drop-shadow-sm">Click to call</div>
            </div>
          </motion.a>

          <motion.a
            href="mailto:giridhar050919@gmail.com"
            initial={{ opacity: 0, y: 50, rotateY: -90 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, y: -15, rotateY: 5 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-gradient-to-br from-teal-500/95 to-cyan-600/95 backdrop-blur-md border-2 border-teal-300/60 p-8 rounded-2xl shadow-2xl hover:shadow-teal-400/50 transition-all"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center group-hover:bg-white/40 transition-all shadow-xl"
              >
                <Mail size={40} className="text-white drop-shadow-lg" />
              </motion.div>
              <h3 className="text-2xl font-black text-white drop-shadow-lg">Email</h3>
              <p className="text-white text-sm break-all px-2 font-bold drop-shadow-md">giridhar050919@gmail.com</p>
              <div className="text-sm text-white/90 font-semibold drop-shadow-sm">Click to email</div>
            </div>
          </motion.a>
        </div>

        {/* Bright Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white/95 backdrop-blur-md border-2 border-teal-400/60 p-10 rounded-2xl text-center shadow-2xl"
        >
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black text-slate-800 mb-6"
          >
            Professional Consultation Available
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto mb-8 font-medium"
          >
            Our team is ready to provide detailed information about our peptide products, 
            quality certifications, and guidance for research and professional applications. 
            All inquiries are handled with strict confidentiality and professional discretion.
          </motion.p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { text: "German Quality Standards", gradient: "from-emerald-500 to-teal-600" },
              { text: "Pharmaceutical Grade", gradient: "from-blue-500 to-indigo-600" },
              { text: "Research Use Only", gradient: "from-amber-500 to-orange-600" }
            ].map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.15, rotate: 3 }}
                className={`bg-gradient-to-r ${badge.gradient} px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all`}
              >
                <span className="text-white font-bold drop-shadow-md">{badge.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center text-white text-sm"
        >
          <p className="mb-2 font-bold drop-shadow-lg">© 2024 Pure Pharma Peptides. All rights reserved.</p>
          <p className="text-xs drop-shadow-md">
            All products are strictly for research, educational, and professional evaluation purposes only.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
