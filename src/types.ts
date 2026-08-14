export interface BusinessInfo {
  name: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
  phone: string;
  formattedPhone: string;
  email: string;
  hours: string;
  days: string;
  googleMapsUrl: string;
}

export interface ProgramItem {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  longDescription: string;
  features: string[];
  keyHighlights: string[];
  image: string;
  imageAlt: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  accentColor: string;
}

export interface DailyExperienceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  image: string;
  imageAlt: string;
  icon: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'all' | 'learning' | 'creative' | 'play' | 'outdoor';
  categoryLabel: string;
  src: string;
  alt: string;
  description: string;
}

export interface ContactFormData {
  parentName: string;
  email: string;
  phone: string;
  programInterest: string;
  preferredContactTime: string;
  message: string;
}
