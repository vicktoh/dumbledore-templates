import { ButtonProps } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

  export  type Feature = {
   title: string;
   description: string;
   Icon: React.ReactNode;
   buttonProps?: ButtonProps & {title: string, rightIcon?: LucideIcon, leftIcon?: LucideIcon};
};
export type FeatureSection1Props = {
   title: string;
   tagLine?: string;
   description?: string;
   features?: Feature[];
   primaryButtonProps?: ButtonProps & {title: string};
   secondaryButtonProps?: ButtonProps & {title: string}
};

export type FeatureSection2Props = {
   title: string; 
   features?: Feature[];
   bgUrl?: string;
}
export type Feature3Feature = {
   title: string;
   description: string;
   Icon?: React.JSXElementConstructor<{className?: string}>;
   buttonProps?: ButtonProps & {title: string};
   secondaryButtonProps?: ButtonProps & {title: string};
   type: "video" | "image",
   source?: string;
}
export type FeatureSection3Props = {
   tagline?: string;
   title:string;
   description:string;
   tabs?: Feature3Feature[];
   primaryButtonProps?: ButtonProps & {title: string};
   secondaryButtonProps?: ButtonProps & {title: string}
}