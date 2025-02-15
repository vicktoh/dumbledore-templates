import { Button } from '@/components/ui/button';
import { LucideBrain, LucideCodeXml, LucideGitBranch } from 'lucide-react';
import React from 'react';
import { Feature, FeatureSection1Props } from '../types';
import FeatureSection from '../feature-section';
const defatuleFeatures: Feature[] = [
    {
        title: 'Software Development 1',
        description: "Custom software solutions tailored to your organization's unique needs, delivered with magical precision and excellence.",
        Icon: <LucideCodeXml className='w-12 h-12 text-primary'/>,
    },
    {
        title: 'AI Integration',
        description: "Harness the power of artificial intelligence to transform your business processes and enhance decision-making capabilities.",
        Icon: <LucideBrain className='w-12 h-12 text-primary'/>,
    },
    {
        title:"Workflow Automation",
        description:` Say goodbye to manual and repetitive tasks, say hello to unlimited productivity and speed.
Streamline your operations with intelligent automation solutions that make work flow as smoothly as a well-cast spell.`,
        Icon: <LucideGitBranch className='w-12 h-12 text-primary' width={48} height={48}/>,
    },
];


export default function FeatureSection1({
    title="Medium length section heading goes here",
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    features = defatuleFeatures,
    tagLine="Tagline",
    primaryButtonProps,
    secondaryButtonProps
}: FeatureSection1Props) {
    return (
      <div className="flex flex-col gap-20 p-16 w-full">
         <div className="flex flex-col gap-4">
            {tagLine && <p className="text-base text-muted-foreground font-medium">{tagLine}</p>}
            <div className="flex flex-col gap-6">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">{title}</h1>
                <p className=" text-base md:text-lg">{description}</p>
            </div>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
            {features?.map((feature) => (
               <FeatureSection key={feature.title} {...feature} />
            ))}
         </div>
         {
            (primaryButtonProps || secondaryButtonProps) && (
                <div className="flex gap-4">
                    {primaryButtonProps && <Button {...primaryButtonProps} />}
                    {secondaryButtonProps && <Button {...secondaryButtonProps} />}
                </div>
            )
         }
      </div>
    )
}
