export interface Project {
  id: string;
  title: string;
  hostedBy: string;
  description: string;
  year: string;
  imageUrl: string;
  imageFit?: 'cover' | 'contain';
  size: 'large' | 'small';
  videoUrl?: string;
  videoButtonText?: string;
  eventUrl?: string;
  keywords?: string[];
  featured?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Member {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  website?: string;
}
