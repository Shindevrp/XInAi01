import React from 'react';

export function Button({ children, variant = 'default', className = '', ...props }) {
  let variantClass = '';
  if (variant === 'ghost') {
    variantClass = 'button-ghost';
  }
  return (
    <button className={`button ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
}
