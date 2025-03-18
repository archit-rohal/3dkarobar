import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import logo from '../../assets/company_logo.svg'; // After converting your PNG to SVG

export function Logo({ 
  height = 32, // default height in pixels
  width = 'auto', // default width - auto to maintain aspect ratio
  className = '', 
  variant = 'default' 
}) {
  const variants = {
    default: 'text-foreground',
    light: 'text-white',
    colored: 'text-busybee-600'
  };

  return (
    <Link 
      to="/" 
      className={cn('inline-flex items-center', className)}
      aria-label="3Dkarobar"
    >
      <img 
        src={logo} 
        alt="3Dkarobar Logo" 
        className={cn(variants[variant])}
        style={{ 
          height: typeof height === 'number' ? `${height}px` : height,
          width: typeof width === 'number' ? `${width}px` : width
        }}
      />
    </Link>
  );
}
