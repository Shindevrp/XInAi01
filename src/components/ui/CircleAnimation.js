import { useEffect, useState } from 'react';

const sizeClasses = {
  sm: 'w-16 h-16',
  md: 'w-24 h-24',
  lg: 'w-32 h-32',
  xl: 'w-48 h-48',
};

const variantClasses = {
  primary: 'bg-gradient-to-br from-primary to-primary/80 shadow-[0_0_30px_hsl(var(--primary)/0.5)]',
  accent: 'bg-gradient-to-br from-accent to-accent/80 shadow-[0_0_30px_hsl(var(--accent)/0.5)]',
  tech: 'bg-gradient-to-br from-blue-500 to-blue-400 shadow-[0_0_30px_theme(colors.blue.500/0.5)]',
  design: 'bg-gradient-to-br from-pink-500 to-pink-400 shadow-[0_0_30px_theme(colors.pink.500/0.5)]',
  business: 'bg-gradient-to-br from-yellow-500 to-yellow-400 shadow-[0_0_30px_theme(colors.yellow.500/0.5)]',
  data: 'bg-gradient-to-br from-green-500 to-green-400 shadow-[0_0_30px_theme(colors.green.500/0.5)]',
};

export default function CircleAnimation({
  size = 'md',
  variant = 'primary',
  floatAnimation = false,
  pulseAnimation = false,
  enhanceOnHover = false,
  onClick,
  className = '',
  style,
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const baseClasses = `
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    rounded-full
    backdrop-blur-sm
    transition-all
    duration-700
    cursor-pointer
    ${floatAnimation ? 'animate-float' : ''}
    ${pulseAnimation ? 'animate-pulse' : ''}
    ${enhanceOnHover ? 'circle-enhance' : ''}
    ${isVisible ? 'animate-circle-expand' : 'opacity-0 scale-0'}
    ${className}
  `;

  return (
    <div
      className={baseClasses}
      style={style}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    />
  );
}
