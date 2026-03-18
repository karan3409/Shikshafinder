import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code2, Zap, Server } from 'lucide-react';

interface ITHeroSectionProps {
  icon?: React.ReactNode;
  heading?: string;
  subheading?: string;
  description?: string;
  primaryButton?: {
    text: string;
    icon?: React.ReactNode;
    url: string;
  };
  secondaryButton?: {
    text: string;
    url: string;
  };
  trustText?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export const ITHeroSection = ({
  icon = <Server className="size-6" />,
  heading = "Transform Your Business",
  subheading = "with Cutting-Edge Technology Solutions",
  description = "We deliver innovative IT solutions that drive digital transformation. Specializing in Kubernetes, AI agents, scalable Next.js applications, and cybersecurity solutions. Our expert team helps businesses scale and succeed in the digital age.",
  primaryButton = {
    text: "Get Started",
    icon: <ArrowRight className="ml-2 size-4" />,
    url: "#contact",
  },
  secondaryButton = {
    text: "Learn More",
    url: "#about",
  },
  trustText = "Trusted by 500+ Enterprise Clients Worldwide",
  imageSrc = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2944&auto=format&fit=crop",
  imageAlt = "Technology Dashboard",
}: ITHeroSectionProps) => {
  return (
    <section className="overflow-hidden py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-8">
          <div className="relative flex flex-col gap-6">
            <div
              style={{
                transform: "translate(-50%, -50%)",
              }}
              className="absolute left-1/2 top-1/2 -z-10 mx-auto size-[800px] rounded-full border p-16 [mask-image:radial-gradient(ellipse_200%_40%,white_0%,white_40%,transparent_70%)] md:size-[1300px] md:p-32"
            >
              <div className="size-full rounded-full border p-16 md:p-32">
                <div className="size-full rounded-full border"></div>
              </div>
            </div>
            
            <span className="mx-auto flex size-16 items-center justify-center rounded-full border bg-background shadow-lg md:size-20">
              {icon}
            </span>
            
            <div className="mx-auto max-w-screen-lg text-center">
              <h1 className="text-balance text-4xl font-bold md:text-6xl lg:text-7xl">
                {heading}
              </h1>
              <h2 className="mt-2 text-balance text-3xl font-medium text-muted-foreground md:text-5xl lg:text-6xl">
                {subheading}
              </h2>
            </div>
            
            <p className="mx-auto max-w-screen-md text-center text-base text-muted-foreground md:text-lg lg:text-xl">
              {description}
            </p>

            {/* <div className="mx-auto max-w-2xl text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-2xl font-bold text-primary">₹4,999</span>
                <span className="text-sm text-muted-foreground">Starting from</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Website building with hosting & free professional email included
              </p>
            </div> */}
            
            <div className="flex flex-col items-center justify-center gap-3 pb-8 pt-3 sm:flex-row">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <a href={primaryButton.url}>
                  {primaryButton.text} {primaryButton.icon}
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                <a href={secondaryButton.url}>
                  {secondaryButton.text}
                </a>
              </Button>
            </div>
            
            {trustText && (
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Zap className="size-4 text-primary" />
                {trustText}
              </div>
            )}
          </div>
          
          <div className="relative mx-auto w-full max-w-screen-lg overflow-hidden rounded-2xl bg-black/10">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={1200}
              height={524}
              className="h-full max-h-[524px] w-full rounded-2xl object-cover shadow-2xl ring-1 ring-border"
              priority
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
          </div>
          
          <div className="mx-auto flex flex-wrap items-center justify-center gap-8 pt-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Code2 className="size-5" />
              <span>Custom Development</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Server className="size-5" />
              <span>Cloud Solutions</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Zap className="size-5" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

