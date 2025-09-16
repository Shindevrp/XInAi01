import { motion, AnimatePresence } from 'framer-motion';

const variantColors = {
  tech: 'text-blue-400',
  design: 'text-pink-400',
  business: 'text-yellow-400',
  data: 'text-green-400',
};

const variantGradients = {
  tech: 'from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500',
  design: 'from-pink-500 to-pink-400 hover:from-pink-600 hover:to-pink-500',
  business: 'from-yellow-500 to-yellow-400 hover:from-yellow-600 hover:to-yellow-500',
  data: 'from-green-500 to-green-400 hover:from-green-600 hover:to-green-500',
};

const CourseDetails = ({ course }) => {
  return (
    <AnimatePresence mode="wait">
      {course && (
        <motion.div
          key={course.id}
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -100, scale: 0.8 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed right-8 top-1/2 -translate-y-1/2 bg-card/95 backdrop-blur-xl border border-border/50 rounded-2xl p-8 max-w-sm w-full shadow-2xl z-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-6"
          >
            {/* Header */}
            <div className="space-y-3">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-bold text-card-foreground"
              >
                {course.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className={`text-sm font-medium ${variantColors[course.variant]}`}
              >
                {course.level} • {course.duration}
              </motion.p>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground leading-relaxed"
            >
              {course.description}
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-3"
            >
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Students enrolled:</span>
                <span className="font-semibold text-foreground">{course.students}</span>
              </div>
              <div className="w-full bg-muted/50 rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '85%' }}
                  transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
                  className={`h-full bg-gradient-to-r ${variantGradients[course.variant].split(' ')[0]} ${variantGradients[course.variant].split(' ')[1]}`}
                />
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3 px-6 rounded-xl font-semibold text-white transition-all duration-300 bg-gradient-to-r ${variantGradients[course.variant]} shadow-lg`}
            >
              Start Learning Now
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CourseDetails;
