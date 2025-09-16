import { motion } from 'framer-motion';

const CentralCircle = ({ isActive }) => {
  return (
    <motion.div
      className="relative z-10"
      animate={{
        scale: isActive ? 0.8 : 1,
        opacity: isActive ? 0.6 : 1,
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-primary/80 shadow-[0_0_50px_hsl(var(--primary)/0.6)] flex items-center justify-center cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            "0 0 50px hsl(var(--primary)/0.6)",
            "0 0 80px hsl(var(--primary)/0.8)",
            "0 0 50px hsl(var(--primary)/0.6)",
          ],
        }}
        transition={{
          boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <span className="text-primary-foreground font-bold text-xl tracking-wider">
          LEARN
        </span>
      </motion.div>
    </motion.div>
  );
};

export default CentralCircle;
