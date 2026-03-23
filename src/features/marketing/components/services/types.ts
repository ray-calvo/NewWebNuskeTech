export type ServiceSection = {
  title: string;
  category: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  benefits: readonly string[];
  whatsappMessage: string;
};

export type ServiceCategoryBlock = {
  title: string;
  description: string;
  services: readonly ServiceSection[];
};

export type DigitalService = {
  title: string;
  description: string;
  whatsappMessage: string;
};
