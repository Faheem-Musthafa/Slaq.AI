import React from 'react';
import { Logo } from './ui/Logo';
import { Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="flex flex-col items-center md:items-start gap-4">
                <Logo color="white" />
                <p className="text-gray-400 text-sm">Adaptive speech therapy for the future.</p>
            </div>
            
            <div className="flex gap-6">
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-slaq-green hover:text-black transition-all duration-300 hover:scale-110">
                    <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-slaq-green hover:text-black transition-all duration-300 hover:scale-110">
                    <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-slaq-green hover:text-black transition-all duration-300 hover:scale-110">
                    <Instagram className="w-5 h-5" />
                </a>
            </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
            <p>&copy; 2025 Slaq.ai. All rights reserved.</p>
            <div className="flex gap-6">
                <a href="mailto:hello@slaq.ai" className="hover:text-slaq-green transition-colors">hello@slaq.ai</a>
                <a href="https://slaq.neuraq.in" className="hover:text-slaq-green transition-colors">www.slaq.neuraq.in</a>
            </div>
        </div>
      </div>
    </footer>
  );
};