import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import CentralCircle from './components/course-layout/CentralCircle';
import BranchCircle from './components/course-layout/BranchCircle';
import CourseDetails from './components/course-layout/CourseDetails';
import ScrollIndicators from './components/course-layout/ScrollIndicators';

const courses = [
  {
    id: 'tech',
    title: 'Full Stack Development',
    description: 'Master modern web development with React, Node.js, and cutting-edge technologies. Build scalable applications from frontend to backend.',
    level: 'Intermediate',
    duration: '12 weeks',
    students: '2.4k',
    variant: 'tech',
  },
  {
    id: 'design',
    title: 'UI/UX Design Mastery',
    description: 'Create stunning user experiences with design thinking and modern tools. Learn Figma, user research, and design systems.',
    level: 'Beginner',
    duration: '8 weeks',
    students: '1.8k',
    variant: 'design',
  },
  {
    id: 'business',
    title: 'Digital Marketing',
    description: 'Drive growth through strategic marketing and data-driven campaigns. Master SEO, social media, and analytics.',
    level: 'Intermediate',
    duration: '10 weeks',
    students: '3.2k',
    variant: 'business',
  },
  {
    id: 'data',
    title: 'Data Science & AI',
    description: 'Unlock insights with Python, machine learning, and artificial intelligence. Build predictive models and intelligent systems.',
    level: 'Advanced',
    duration: '16 weeks',
    students: '1.5k',
    variant: 'data',
  },
];

const Demo = () => {
  const [currentCourseIndex, setCurrentCourseIndex] = useState(-1);
  const [enhancementLevels, setEnhancementLevels] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollProgress = Math.min(scrollY / Math.max(maxScroll, 1), 1);
      
      // Determine current course index
      const courseIndex = Math.floor(scrollProgress * (courses.length + 1)) - 1;
      setCurrentCourseIndex(Math.max(-1, Math.min(courses.length - 1, courseIndex)));
      
      // Calculate enhancement levels for each course
      const newEnhancements = {};
      courses.forEach((course, index) => {
        const staggerDelay = index * 0.2;
        const enhancementProgress = Math.max(0, Math.min(1, (scrollProgress - staggerDelay) / 0.4));
        newEnhancements[course.id] = enhancementProgress;
      });
      
      setEnhancementLevels(newEnhancements);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate positions for branch circles
  const getCirclePosition = (index) => {
    const angle = (index * 90) - 45; // 90-degree spacing starting at -45°
    const radius = 220;
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;
    return { x, y };
  };

  const currentCourse = currentCourseIndex >= 0 ? courses[currentCourseIndex] : null;

  return (
    <div className="min-h-[500vh] bg-gradient-to-br from-background via-background to-muted/20">
      {/* Fixed Layout */}
      <section className="fixed inset-0 flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, hsl(var(--primary)/0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, hsl(var(--accent)/0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 20%, hsl(var(--primary)/0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, hsl(var(--primary)/0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Central Circle */}
        <CentralCircle isActive={currentCourseIndex >= 0} />

        {/* Branch Circles */}
        {courses.map((course, index) => {
          const position = getCirclePosition(index);
          const isActive = currentCourseIndex === index;
          const enhancementLevel = enhancementLevels[course.id] || 0;

          return (
            <BranchCircle
              key={course.id}
              course={course}
              position={position}
              isActive={isActive}
              enhancementLevel={enhancementLevel}
              onClick={() => setCurrentCourseIndex(index)}
            />
          );
        })}

        {/* Floating Background Circles */}
        <motion.div
          className="absolute top-20 left-20 w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-accent/10"
          animate={{
            y: [-10, 10, -10],
            x: [-5, 5, -5],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 right-32 w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10"
          animate={{
            y: [10, -10, 10],
            x: [5, -5, 5],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </section>

      {/* Course Details */}
      <CourseDetails course={currentCourse} />

      {/* UI Indicators */}
      <ScrollIndicators 
        currentCourseIndex={currentCourseIndex}
        totalCourses={courses.length}
      />

      {/* Invisible scroll content */}
      <div className="relative z-0 opacity-0 pointer-events-none">
        {Array.from({ length: 5 }, (_, i) => (
          <div key={i} className="h-screen" />
        ))}
      </div>
    </div>
  );
};

export default Demo;
