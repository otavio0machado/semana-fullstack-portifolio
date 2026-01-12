import React, { useState } from 'react';
import { Share2, X, Facebook, Twitter, Linkedin } from 'lucide-react';

export const ShareSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Using a placeholder URL for the event
  const eventUrl = "https://semanafullstack.com.br"; 
  const shareText = "Estou participando da Semana FullStack! Aprenda React do zero em 7 dias. 🚀 #React #FullStack #Dev";

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(eventUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(eventUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(eventUrl)}`
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="mt-8 flex items-center gap-2 text-neutral-600 hover:text-red-500 transition-colors text-sm font-medium group py-2 px-4 rounded-full border border-neutral-900 hover:border-red-900/30"
      >
        <Share2 className="w-4 h-4" />
        <span>Compartilhar este evento</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 animate-fade-in">
           {/* Backdrop */}
           <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>

           {/* Modal */}
           <div className="relative bg-neutral-900 border border-neutral-800 rounded-2xl p-6 w-full max-w-sm text-center shadow-2xl shadow-red-900/10 animate-in fade-in zoom-in duration-200">
             <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex justify-center mb-4">
                <div className="bg-neutral-800/50 p-3 rounded-full">
                  <Share2 className="w-6 h-6 text-white" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">Espalhe a Palavra</h3>
              <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                Ajude outros desenvolvedores a descobrirem este evento gratuito.
              </p>

              <div className="flex flex-col gap-3">
                <a 
                  href={shareLinks.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-3 bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20 text-[#1DA1F2] rounded-lg font-medium transition-colors border border-[#1DA1F2]/20 hover:border-[#1DA1F2]/40"
                >
                  <Twitter className="w-5 h-5" />
                  Twitter
                </a>
                
                <a 
                  href={shareLinks.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-3 bg-[#1877F2]/10 hover:bg-[#1877F2]/20 text-[#1877F2] rounded-lg font-medium transition-colors border border-[#1877F2]/20 hover:border-[#1877F2]/40"
                >
                  <Facebook className="w-5 h-5" />
                  Facebook
                </a>

                <a 
                  href={shareLinks.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-3 bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 text-[#0A66C2] rounded-lg font-medium transition-colors border border-[#0A66C2]/20 hover:border-[#0A66C2]/40"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </div>
           </div>
        </div>
      )}
    </>
  );
};