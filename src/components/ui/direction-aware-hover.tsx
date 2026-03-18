"use client";

import React, { useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface DirectionAwareHoverProps {
  children: React.ReactNode;
  className?: string;
  imageClassName?: string;
}

export const DirectionAwareHover = ({
  children,
  className,
  imageClassName,
}: DirectionAwareHoverProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);

    // Calculate rotation based on mouse position
    const rotateX = -y * 15; // Max 15 degrees
    const rotateY = x * 15;  // Max 15 degrees

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        transform: isHovering
          ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1.05)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
        transition: 'transform 0.3s ease-out',
      }}
    >
      <div
        className={cn("transition-transform duration-300", imageClassName)}
        style={{
          transform: isHovering ? 'scale(1.1)' : 'scale(1)',
        }}
      >
        {children}
      </div>

      {/* Shine effect */}
      {isHovering && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(${45 + rotation.x}deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)`,
            transform: `translateZ(50px)`,
          }}
        />
      )}
    </div>
  );
};