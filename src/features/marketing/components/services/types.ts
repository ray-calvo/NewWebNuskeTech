export type ServiceSection = {
  title: string;
  category: string;
  description: string;
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  bullets: readonly string[];
  href?: string;
  ctaLabel?: string;
  status?: "published" | "planned" | "subordinate";
};

export type ServiceCategoryBlock = {
  badge?: string;
  title: string;
  description: string;
  services: readonly ServiceSection[];
};
