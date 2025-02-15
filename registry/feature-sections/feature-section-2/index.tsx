import React from 'react'
import {  Feature, FeatureSection2Props } from '../types';
import { Button } from '@/components/ui/button';
import { LucideGitBranch } from 'lucide-react';
import { LucideBrain } from 'lucide-react';
import { LucideCodeXml } from 'lucide-react';
const defatuleFeatures: Feature[] = [
   {     
       title: 'Software Development 1',
       description: "Custom software solutions tailored to your organization's unique needs, delivered with magical precision and excellence.",
       Icon: <LucideCodeXml className='w-12 h-12 text-white'/>,
   },
   {
       title: 'AI Integration',
       description: "Harness the power of artificial intelligence to transform your business processes and enhance decision-making capabilities.",
       Icon: <LucideBrain className='w-12 h-12 text-white'/>,
   },
   {
       title:"Workflow Automation",
       description:` Say goodbye to manual and repetitive tasks, say hello to unlimited productivity and speed.
Streamline your operations with intelligent automation solutions that make work flow as smoothly as a well-cast spell.`,
       Icon: <LucideGitBranch className='w-12 h-12 text-white' width={48} height={48}/>,
   },
];

export default function FeatureSection2({title, features = defatuleFeatures, bgUrl='/hero-2-bg.jpg'}: FeatureSection2Props) {
  return (
    <div className='flex flex-col gap-20 p-16' style={{backgroundImage: `url(${bgUrl})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className='absolute inset-0 bg-black opacity-50 z-0'></div>
      <h1 className='text-4xl font-bold text-white z-10'>{title}</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 z-10'>
        {features.map((feature) => (
          <div key={feature.title} className='flex flex-col items-center gap-8'>
             <div className="flex flex-col gap-6">
               {feature.Icon}

               <h3 className="text-xl md:text-3xl font-bold text-white">{feature.title}</h3>
               <p className="text-base text-white">{feature.description}</p>
             </div>
             {feature?.buttonProps && <Button {...feature.buttonProps}>
               {feature?.buttonProps?.rightIcon && <feature.buttonProps.rightIcon className='w-4 h-4' />}
               {feature?.buttonProps?.title || "Button"}
               {feature?.buttonProps?.leftIcon && <feature.buttonProps.leftIcon className='w-4 h-4' />}
             </Button>}
          </div>
        ))}
      </div>

    </div>
  )
}
