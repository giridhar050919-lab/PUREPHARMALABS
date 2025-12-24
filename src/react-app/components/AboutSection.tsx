import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative min-h-screen flex items-center py-20 px-6">
      {/* Brighter mountain background */}
      <div 
        className="absolute inset-0 bg-cover bg-center brightness-125"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-600/70 via-slate-700/65 to-slate-600/70"></div>
      </div>

      {/* Colorful light overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-emerald-500/10"></div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* WHO WE ARE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-8 uppercase tracking-wide drop-shadow-2xl"
          >
            Who We Are
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/95 backdrop-blur-sm border-2 border-teal-400/50 p-8 rounded-2xl shadow-2xl space-y-6 text-slate-800 leading-relaxed"
          >
            <p className="text-lg md:text-xl font-bold">
              PURE PHARMA PEPTIDES IS A PRECISION-FOCUSED PEPTIDE SOURCING AND DISTRIBUTION BRAND 
              DEDICATED TO PHARMACEUTICAL-GRADE PURITY AND GERMAN MANUFACTURING STANDARDS.
            </p>
            <p className="text-base md:text-lg">
              WE SPECIALIZE IN CAREFULLY SELECTED PEPTIDE COMPOUNDS MANUFACTURED UNDER CONTROLLED 
              CONDITIONS IN GERMANY, WITH A STRONG EMPHASIS ON QUALITY, CONSISTENCY, AND TRACEABILITY.
            </p>
            <p className="text-base md:text-lg font-bold">OUR APPROACH IS SIMPLE AND DISCIPLINED:</p>
            <ul className="list-disc list-inside space-y-2 text-base md:text-lg pl-4">
              <li>SOURCE PEPTIDES MANUFACTURED UNDER GERMAN QUALITY STANDARDS</li>
              <li>MAINTAIN STRICT SELECTION AND EVALUATION CRITERIA</li>
              <li>OFFER GUIDANCE-BASED ACCESS RATHER THAN OPEN RETAIL</li>
              <li>COMMUNICATE CLEARLY AND CONSERVATIVELY</li>
              <li>OPERATE WITH SCIENTIFIC RESPONSIBILITY</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* OUR APPROACH */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-red-500/95 to-orange-500/95 backdrop-blur-sm border-2 border-yellow-400/60 p-8 rounded-2xl shadow-2xl hover:shadow-orange-500/40 transition-all"
          >
            <h3 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-wide drop-shadow-lg">
              Our Approach
            </h3>
            <ul className="space-y-3 text-base md:text-lg text-white">
              {[
                "SOURCE PEPTIDES MANUFACTURED UNDER GERMAN QUALITY STANDARDS",
                "MAINTAIN STRICT SELECTION AND EVALUATION CRITERIA",
                "OFFER GUIDANCE-BASED ACCESS RATHER THAN OPEN RETAIL",
                "COMMUNICATE CLEARLY AND CONSERVATIVELY",
                "OPERATE WITH SCIENTIFIC RESPONSIBILITY"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <motion.span 
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    className="text-yellow-300 font-black text-2xl drop-shadow-lg"
                  >
                    •
                  </motion.span>
                  <span className="drop-shadow-md">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* WHO WE WORK WITH */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-amber-500/95 to-yellow-500/95 backdrop-blur-sm border-2 border-orange-400/60 p-8 rounded-2xl shadow-2xl hover:shadow-amber-500/40 transition-all"
          >
            <h3 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-wide drop-shadow-lg">
              Who We Work With
            </h3>
            <p className="text-white text-base md:text-lg mb-4 font-bold drop-shadow-md">OUR CATALOG IS INTENDED FOR:</p>
            <ul className="space-y-3 text-base md:text-lg text-white">
              {[
                "RESEARCH PROFESSIONALS",
                "SCIENTIFIC INSTITUTIONS",
                "EDUCATIONAL AND LABORATORY ENVIRONMENTS",
                "PROFESSIONALS SEEKING DOCUMENTED PEPTIDE SOURCING"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <motion.span 
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                    className="text-emerald-300 font-black text-2xl drop-shadow-lg"
                  >
                    •
                  </motion.span>
                  <span className="drop-shadow-md">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Laboratory Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/30"
        >
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1200&q=80"
              alt="Laboratory"
              className="w-full h-80 md:h-96 object-cover brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="absolute bottom-0 left-0 right-0 p-8 text-center"
            >
              <motion.p 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-yellow-300 font-black text-xl md:text-2xl mb-2 drop-shadow-lg"
              >
                ⚠️ Professional Notice
              </motion.p>
              <p className="text-white font-semibold text-sm md:text-base drop-shadow-lg">
                All products are provided strictly for research, educational, and professional evaluation purposes only
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
