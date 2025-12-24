import { motion } from "framer-motion";

interface ProductCardProps {
  name: string;
  price: string;
  boxImage?: string;
  index: number;
}

const getBoxColor = (index: number) => {
  const colors = [
    "from-slate-700 to-slate-800", // Dark gray
    "from-blue-600 to-blue-700",
    "from-teal-600 to-teal-700",
    "from-purple-600 to-purple-700",
    "from-indigo-600 to-indigo-700",
    "from-emerald-600 to-emerald-700",
    "from-cyan-600 to-cyan-700",
    "from-violet-600 to-violet-700",
  ];
  return colors[index % colors.length];
};

export default function ProductCard({ name, price, index }: ProductCardProps) {
  const boxGradient = getBoxColor(index);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.08, y: -15 }}
      className="group relative flex flex-col items-center text-center p-2"
    >
      {/* Clean white background card - more compact */}
      <div className="absolute inset-0 bg-white rounded-xl shadow-xl group-hover:shadow-2xl transition-all"></div>
      
      {/* Glow effect on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-xl blur-xl -z-10"
      />

      {/* Content */}
      <div className="relative z-10 w-full">
        {/* Colored Product Box - Smaller size */}
        <motion.div
          whileHover={{ rotateY: 5, scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="mb-3 w-full flex items-center justify-center"
        >
          <div className={`w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br ${boxGradient} rounded-lg shadow-2xl flex items-center justify-center p-3 border-3 border-white group-hover:border-teal-400 transition-all`}>
            <p className="text-white font-black text-xs md:text-sm uppercase tracking-tight leading-tight text-center drop-shadow-lg">
              {name}
            </p>
          </div>
        </motion.div>

        {/* Product Name (below box) - Same text size */}
        <div className="bg-gradient-to-r from-slate-900 to-black px-2 py-1.5 rounded-lg mb-2 shadow-lg">
          <h3 className="text-lg md:text-xl font-black text-white uppercase tracking-wide leading-tight drop-shadow-lg">
            {name}
          </h3>
        </div>

        {/* Divider */}
        <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 via-red-500 to-black mx-auto mb-2 rounded-full shadow-md"></div>

        {/* Product Price - Same text size */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 px-3 py-2 rounded-lg shadow-lg">
          <p className="text-base md:text-lg font-black text-white whitespace-pre-line leading-tight drop-shadow-lg">
            {price}
          </p>
        </div>
      </div>

      {/* Border effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-teal-400 rounded-xl transition-all"></div>
    </motion.div>
  );
}
