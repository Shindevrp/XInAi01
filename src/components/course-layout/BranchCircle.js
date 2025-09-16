import { motion } from 'framer-motion';

const variantColors = {
  tech: 'from-blue-500 to-blue-400',
  design: 'from-pink-500 to-pink-400',
  business: 'from-yellow-500 to-yellow-400',
  data: 'from-green-500 to-green-400',
};

const variantShadows = {
  tech: 'blue-500',
  design: 'pink-500',
  business: 'yellow-500',
  data: 'green-500',
};

const BranchCircle = ({ course, position, isActive, enhancementLevel, onClick }) => {
  return (
    <motion.div
      className="absolute"
      style={{
        x: position.x,
        y: position.y,
      }}
      animate={{
        scale: isActive ? 1.3 : 1 + enhancementLevel * 0.3,
        opacity: 0.8 + enhancementLevel * 0.2,
      }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <motion.div
        className={`w-32 h-32 rounded-full bg-gradient-to-br ${variantColors[course.variant]} cursor-pointer flex items-center justify-center`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClick}
        animate={{
          boxShadow: [
            `0 0 ${20 + enhancementLevel * 30}px theme(colors.${variantShadows[course.variant]}/0.5)`,
            `0 0 ${30 + enhancementLevel * 40}px theme(colors.${variantShadows[course.variant]}/0.7)`,
            `0 0 ${20 + enhancementLevel * 30}px theme(colors.${variantShadows[course.variant]}/0.5)`,
          ],
          rotate: enhancementLevel * 180,
        }}
        transition={{
          boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 1, ease: "easeInOut" },
        }}
      >
        <div className="text-center">
          <div className="text-white font-semibold text-sm mb-1">
            {course.title.split(' ')[0]}
          </div>
          <div className="text-white/80 text-xs">
            {course.level}
          </div>
        </div>
      </motion.div>

      {/* Connection Line */}
      <motion.div
        className="absolute top-1/2 left-1/2 origin-left h-0.5 bg-gradient-to-r from-primary/40 to-transparent"
        style={{
          width: Math.sqrt(position.x ** 2 + position.y ** 2),
          rotate: Math.atan2(position.y, position.x) * (180 / Math.PI) + 180,
        }}
        animate={{
          opacity: enhancementLevel,
          background: isActive 
            ? `linear-gradient(to right, theme(colors.${variantShadows[course.variant]}/0.8), transparent)`
            : 'linear-gradient(to right, hsl(var(--primary)/0.4), transparent)',
        }}
        transition={{ duration: 0.6 }}
      />
    </motion.div>
  );
};

export default BranchCircle;
