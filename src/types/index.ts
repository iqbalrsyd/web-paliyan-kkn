// This file exports TypeScript types and interfaces used throughout the project, ensuring type safety for props and state management.

export interface CarouselItem {
    id: string;
    imageUrl: string;
    altText: string;
}

export interface DesaCarouselProps {
    items: CarouselItem[];
    autoPlay?: boolean;
    interval?: number;
}

export interface NavBarLink {
    label: string;
    href: string;
}

export interface NavBarProps {
    links: NavBarLink[];
}

export interface ProfileSectionProps {
    username: string;
    bio?: string;
    avatarUrl?: string;
}