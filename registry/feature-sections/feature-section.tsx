import { Feature } from "./types";
import { ButtonProps } from "@/components/ui/button";
export type FeatureSectionProps = Feature & {
   buttonProps?: ButtonProps
   ButtonComponent?: React.ReactNode
}
const FeatureSection = ({ title, description, Icon }: FeatureSectionProps) => {
   return (
       <div className="flex gap-6 items-start">
           <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
               {Icon}
           </div>
           <div className="flex flex-col gap-6">
               <h3 className="text-4xl font-bold text-foreground">{title}</h3>
               <p className="text-base text-muted-foreground">{description}</p>
           </div>
       </div>
   );
};

export default FeatureSection;