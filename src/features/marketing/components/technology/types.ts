export type TechnologyEquipmentItem = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  specs: readonly string[];
};
