"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Code2 } from 'lucide-react';

const ShimmerButton = ({ children, href }: { children: React.ReactNode, href: string }) => (
  <a href={href} className="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-5 font-medium text-neutral-50 transition hover:scale-105">
    <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
      <div className="relative h-full w-8 bg-white/20" />
    </div>
    <span className="relative flex items-center gap-2">{children}</span>
  </a>
);

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    // Create intersection observer to detect which section is in view
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -75% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections
    navItems.forEach((item) => {
      const sectionId = item.href.replace('#', '');
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="size-6 text-primary" />
            <span className="text-xl font-bold">Flavi Dairy IT Solutions</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-all duration-300 px-4 py-2 rounded-full ${
                  activeSection === item.href.replace('#', '')
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-primary/5 hover:shadow-sm'
                }`}
              >
                {item.name}
              </a>
            ))}
            <ShimmerButton href="#contact">Get Started</ShimmerButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t py-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-all duration-300 px-4 py-3 rounded-full ${
                    activeSection === item.href.replace('#', '')
                      ? 'text-primary bg-primary/10 font-bold'
                      : 'text-muted-foreground hover:text-foreground hover:bg-primary/5'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <ShimmerButton href="#contact">Get Started</ShimmerButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

