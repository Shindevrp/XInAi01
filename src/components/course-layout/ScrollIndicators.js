import { motion } from 'framer-motion';

const ScrollIndicators = ({ currentCourseIndex, totalCourses }) => {
  return (
    <>
      {/* Scroll Hint */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="text-center space-y-3">
          <motion.div
            className="w-6 h-10 border-2 border-primary/50 rounded-full mx-auto flex justify-center relative overflow-hidden"
            animate={{
              borderColor: [
                "hsl(var(--primary)/0.5)",
                "hsl(var(--primary)/0.8)",
                "hsl(var(--primary)/0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="w-1 h-3 bg-primary rounded-full mt-2"
              animate={{
                y: [0, 16, 0],
                opacity: [1, 0.3, 1],
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          <p className="text-xs text-muted-foreground font-medium">
            Scroll to explore courses
          </p>
        </div>
      </motion.div>

      {/* Course Progress */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="fixed top-6 left-6 z-10"
      >
        <div className="bg-card/80 backdrop-blur-sm rounded-xl p-4 border border-border/30">
          {currentCourseIndex >= 0 ? (
            <div className="space-y-3">
              <p className="text-sm font-medium text-foreground">
                Course {currentCourseIndex + 1} of {totalCourses}
              </p>
              <div className="flex gap-2">
                {Array.from({ length: totalCourses }, (_, index) => (
                  <motion.div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentCourseIndex
                        ? "bg-primary scale-125"
                        : index < currentCourseIndex
                        ? "bg-primary/60"
                        : "bg-muted"
                    }`}
                    animate={{
                      scale: index === currentCourseIndex ? 1.25 : 1,
                      opacity: index === currentCourseIndex ? 1 : 0.7,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </div>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">
              Scroll to start exploring
            </p>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default ScrollIndicators;
