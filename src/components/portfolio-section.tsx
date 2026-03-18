import React from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';

const projects = [
  {
    title: 'Women at Work',
    description: 'Empowering platform connecting women professionals and opportunities',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    category: 'Platform Development',
    url: 'https://womenatwork.in',
  },
  {
    title: 'Flavi Dairy Solution',
    description: 'Complete dairy management and solution platform',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop',
    category: 'Web Development',
    url: 'https://www.flavidairysolution.com',
  },
  {
    title: 'Hindu Temple RK',
    description: 'Backend development, payment gateway integration, and Spain client management system',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop',
    category: 'Backend & Payment',
    url: 'https://hindutemplerk.com',
  },
  {
    title: 'LDCE Website',
    description: 'Educational institution website development and management',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    category: 'Web Development',
    url: 'https://ldce.ac.in',
  },
  {
    title: 'AICyberShield.tech',
    description: 'Kubernetes infrastructure, AI agents, scalable Next.js website with advanced cybersecurity solutions',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop',
    category: 'Kubernetes & AI',
    url: 'https://www.aicybershield.tech',
  },
  {
    title: 'EuroNovas',
    description: 'Complete web development and digital solutions platform',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    category: 'Web Development',
    url: 'https://euronovas.com',
  },
  {
    title: 'Flavi Dairy B2B Platform',
    description: 'B2B e-commerce platform for dairy products with advanced ordering and management system',
    image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?q=80&w=800&auto=format&fit=crop',
    category: 'B2B Platform',
    url: 'https://b2b.flavidairysolution.com/',
  },
  {
    title: 'Flavi Dairy CRM',
    description: 'Customer relationship management system for dairy business operations',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    category: 'CRM Development',
    url: 'https://crm.flavidairysolution.com/',
  },
  {
    title: 'Pakmon',
    description: 'Modern web application with interactive features and responsive design',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
    category: 'Web Application',
    url: 'https://pakmon.vercel.app/',
  },
  {
    title: 'Invar Pharmaceutical',
    description: 'Professional pharmaceutical company website with product catalog and information',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=800&auto=format&fit=crop',
    category: 'Corporate Website',
    url: 'https://www.invarpharmaceutical.com/',
  },
  {
    title: 'Long Video Platform',
    description: 'Advanced video hosting and streaming platform with extended content support',
    image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?q=80&w=800&auto=format&fit=crop',
    category: 'Video Platform',
    url: 'https://long-veo-videos.vercel.app/',
  },
  {
    title: 'Shiksha Finder Platform',
    description: 'Complete educational platform development for finding and connecting with educational institutions',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
    category: 'Platform Development',
    url: 'https://platform.shikshafinder.com',
  },
];

export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore some of our successful projects and client transformations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-lg border bg-card overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <DirectionAwareHover className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={192}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-background/90 text-xs font-medium backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </DirectionAwareHover>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  View Project <ExternalLink className="size-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

