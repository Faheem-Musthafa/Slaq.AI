import { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

export interface SectionProps {
  id?: string;
  className?: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  delay?: number;
}
