
import React from "react";
import { cn } from "@/lib/utils";

interface ImageComponentProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageComponent = ({ src, alt, className }: ImageComponentProps) => {
  return (
    <div className={cn("overflow-hidden", className)}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );
};

export default ImageComponent;
