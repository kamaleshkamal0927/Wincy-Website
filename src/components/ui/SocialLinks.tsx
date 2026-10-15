import React from 'react';
import { SITE_CONFIG, SocialLink } from '@/content/site';
import { Linkedin, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
  links?: SocialLink[];
}

export function SocialLinks({ className, iconClassName, links }: SocialLinksProps) {
  const targetLinks = links || SITE_CONFIG.socials;

  // STRICT REQUIREMENT: Completely hidden when their URL is empty!
  const activeSocials = targetLinks.filter((s) => s.url && s.url.trim() !== '');

  if (activeSocials.length === 0) {
    return null;
  }

  const renderIcon = (iconName: SocialLink['icon']) => {
    switch (iconName) {
      case 'linkedin':
        return <Linkedin className={cn('w-4 h-4', iconClassName)} />;
      case 'twitter_x':
        return <Twitter className={cn('w-4 h-4', iconClassName)} />;
      case 'facebook':
        return <Facebook className={cn('w-4 h-4', iconClassName)} />;
      case 'instagram':
        return <Instagram className={cn('w-4 h-4', iconClassName)} />;
      case 'youtube':
        return <Youtube className={cn('w-4 h-4', iconClassName)} />;
      default:
        return null;
    }
  };

  return (
    <div className={cn('flex items-center gap-3', className)}>
      {activeSocials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className="p-2.5 rounded-full bg-ink_card border border-border_dark text-text_muted_on_dark hover:text-white hover:border-lime_accent transition-all duration-200 hover:-translate-y-0.5"
        >
          {renderIcon(social.icon)}
        </a>
      ))}
    </div>
  );
}
