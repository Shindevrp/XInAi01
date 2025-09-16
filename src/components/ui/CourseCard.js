const variantStyles = {
  tech: 'border-blue-500/30 bg-blue-500/10',
  design: 'border-pink-500/30 bg-pink-500/10',
  business: 'border-yellow-500/30 bg-yellow-500/10',
  data: 'border-green-500/30 bg-green-500/10',
};

const variantAccents = {
  tech: 'text-blue-400',
  design: 'text-pink-400',
  business: 'text-yellow-400',
  data: 'text-green-400',
};

export const CourseCard = ({
  title,
  description,
  level,
  duration,
  students,
  variant,
  isRevealed
}) => {
  return (
    <div className={`
      course-card p-6 rounded-2xl border 
      ${variantStyles[variant]}
      ${isRevealed ? 'scroll-reveal revealed animate-course-reveal' : 'scroll-reveal'}
      transition-all duration-700
    `}>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
          <span className={`text-sm font-medium ${variantAccents[variant]}`}>
            {level}
          </span>
        </div>
        
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            {duration}
          </span>
          <span className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-accent"></div>
            {students} students
          </span>
        </div>
        
        <button className={`
          w-full py-3 px-4 rounded-lg font-medium transition-all duration-300
          bg-gradient-to-r from-primary to-primary/80
          hover:from-primary/90 hover:to-primary/70
          text-primary-foreground
          hover:shadow-lg hover:shadow-primary/25
          hover:scale-[1.02]
        `}>
          Enroll Now
        </button>
      </div>
    </div>
  );
};
