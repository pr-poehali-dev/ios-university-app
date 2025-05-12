
import React from 'react';
import { cn } from '@/lib/utils';

interface PageTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

const PageTitle: React.FC<PageTitleProps> = ({ 
  title, 
  subtitle, 
  className,
  align = 'left' 
}) => {
  return (
    <div 
      className={cn(
        "mb-10 pb-4 border-b border-gray-200",
        align === 'center' && "text-center",
        align === 'right' && "text-right",
        className
      )}
    >
      <h1 className="text-3xl md:text-4xl font-bold mb-2 font-montserrat text-[#1A1F2C]">
        {title}
      </h1>
      {subtitle && (
        <p className="text-gray-600 font-roboto text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default PageTitle;
