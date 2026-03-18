import React from 'react';
import { Users, Award, TrendingUp } from 'lucide-react';
import { NumberTicker } from '@/components/ui/number-ticker';

const stats = [
  { icon: <Users className="size-6" />, value: 500, label: 'Happy Clients' },
  { icon: <Award className="size-6" />, value: 20, label: 'Years Experience' },
  { icon: <TrendingUp className="size-6" />, value: 1000, label: 'Projects Completed' },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              About Us
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Flavi Dairy IT Solutions is a leading technology provider specializing in 
              Kubernetes infrastructure, AI agents, scalable Next.js applications, and 
              comprehensive cybersecurity solutions.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              We have developed complete platforms including major products like 
              platform.shikshafinder.com, womenatwork.in, flavidairysolution.com, 
              hindutemplerk.com, ldce.ac.in, and aicybershield.tech.
            </p>
            <p className="text-lg text-muted-foreground">
              Our team of expert developers, engineers, and consultants work together
              to help companies transform their digital infrastructure with cutting-edge
              technologies including Kubernetes orchestration, AI-powered solutions, and
              enterprise-grade cybersecurity frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border bg-card text-center"
              >
                <div className="mb-4 flex justify-center text-primary">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2">
                  <NumberTicker value={stat.value} className="inline" />
                  <span>+</span>
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

