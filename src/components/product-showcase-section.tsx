"use client";

import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, CheckCircle2, Building2, ShoppingCart, Factory } from 'lucide-react';

const products = [
  {
    name: 'dhandho.tech',
    tagline: 'The ultimate business management suite for Indian SMBs.',
    description:
      'Handle GST invoicing, inventory, and complex accounting in one clean, powerful interface.',
    features: ['Industry-grade GST Invoicing', 'Complete Production BOM', 'Real-time Stock Ledger'],
    ctaText: 'Visit dhandho.tech',
    ctaUrl: 'https://dhandho.tech',
    Icon: Building2,
    gradient: 'from-blue-50 to-blue-100/60',
    border: 'border-blue-200',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    featureColor: 'text-blue-500',
    buttonClass:
      'bg-blue-800 hover:bg-blue-900 hover:shadow-blue-500/30',
    accent: 'text-blue-700',
  },
  {
    name: 'vepar.shop',
    tagline: 'Smart Kirana & Retail POS designed to capture every rupee.',
    description:
      'Digitize your bills, track customer udhar, and manage stock in seconds.',
    features: ['Single-click POS Billing', 'Automated Udhar Tracking', 'Kirana-specific Inventory'],
    ctaText: 'Visit vepar.shop',
    ctaUrl: 'https://vepar.shop',
    Icon: ShoppingCart,
    gradient: 'from-green-50 to-green-100/60',
    border: 'border-green-200',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    featureColor: 'text-green-500',
    buttonClass:
      'bg-green-600 hover:bg-green-700 hover:shadow-green-500/30',
    accent: 'text-green-700',
  },
  {
    name: 'Flavi 360',
    tagline: 'Next-gen MES for industrial intelligence.',
    description:
      'Monitor real-time machine OEE, detect downtime patterns, and maximize plant productivity.',
    features: ['Live OEE & Efficiency', 'Smart Downtime Analytics', 'Plant Pulse Monitoring'],
    ctaText: 'Visit Flavi 360',
    ctaUrl: 'https://crm.flavidairysolution.com/',
    Icon: Factory,
    gradient: 'from-orange-50 to-orange-100/60',
    border: 'border-orange-200',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    featureColor: 'text-orange-500',
    buttonClass:
      'bg-orange-500 hover:bg-orange-600 hover:shadow-orange-500/30',
    accent: 'text-orange-600',
  },
];

export const ProductShowcaseSection = () => {
  const [visible, setVisible] = useState([false, false, false]);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = refs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(
              () =>
                setVisible((prev) => {
                  const next = [...prev];
                  next[i] = true;
                  return next;
                }),
              i * 150,
            );
            obs.disconnect();
          }
        },
        { threshold: 0.1 },
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <section id="products" className="py-20 md:py-32 bg-gray-50/60">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 tracking-wide">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Built for Bharat&apos;s Businesses
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful, affordable software solutions designed specifically for Indian
            entrepreneurs and industries.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, i) => {
            const { Icon } = product;
            return (
              <div
                key={product.name}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                className={[
                  'group flex flex-col rounded-3xl border p-8 shadow-sm',
                  `bg-gradient-to-b ${product.gradient}`,
                  product.border,
                  'transition-all duration-700 ease-out',
                  'hover:-translate-y-2 hover:shadow-2xl',
                  visible[i]
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10',
                ].join(' ')}
              >
                {/* Icon */}
                <div
                  className={`inline-flex size-14 items-center justify-center rounded-2xl ${product.iconBg} ${product.iconColor} mb-6 transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className="size-7" />
                </div>

                {/* Name */}
                <h3 className={`text-2xl font-bold mb-2 ${product.accent}`}>
                  {product.name}
                </h3>

                {/* Tagline */}
                <p className="text-base font-semibold text-foreground mb-3 leading-snug">
                  {product.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm font-medium">
                      <CheckCircle2 className={`size-4 shrink-0 ${product.featureColor}`} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA button */}
                {product.ctaUrl ? (
                  <a
                    href={product.ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={[
                      'inline-flex items-center justify-center gap-2 w-full',
                      'px-6 py-3 rounded-xl text-sm font-semibold text-white',
                      'transition-all duration-300 hover:shadow-lg hover:shadow-xl',
                      product.buttonClass,
                    ].join(' ')}
                  >
                    {product.ctaText}
                    <ExternalLink className="size-4" />
                  </a>
                ) : (
                  <span
                    className={[
                      'inline-flex items-center justify-center gap-2 w-full',
                      'px-6 py-3 rounded-xl text-sm font-semibold text-white',
                      'opacity-60 cursor-not-allowed',
                      product.buttonClass,
                    ].join(' ')}
                  >
                    {product.ctaText}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Made in India · Made for India */}
        <div className="mt-16 flex flex-col items-center gap-3">
          <div className="flex items-center gap-0.5">
            <div className="h-2.5 w-20 rounded-l-full bg-[#FF9933]" />
            <div className="h-2.5 w-20 bg-white border-y border-gray-200" />
            <div className="h-2.5 w-20 rounded-r-full bg-[#138808]" />
          </div>
          <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
            Made in India &nbsp;·&nbsp; Made for India
          </p>
        </div>
      </div>
    </section>
  );
};
