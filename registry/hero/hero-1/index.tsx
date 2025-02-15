import React from 'react';
import { Button } from '@/components/ui/button';
type Hero1Props = {
    title?: string;
    description?: string;
    image?: string;
    cta?: string;
    secondaryCta?: string;
    asLink?: boolean;
    
};
export default function Hero1({
    title="Medium length hero headline goes here",
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    image="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cta="Get Started",
    secondaryCta="Learn More",
    
}: Hero1Props) {
    return (
        <div className="min-h-screen container  px-16 py-28 grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="flex flex-col gap-6 justify-center">
                <div className="flex flex-col gap-6">
                    <h1 className="md:text-6xl text-4xl font-bold">{title}</h1>
                    <p className="md:text-lg text-base">{description}</p>
                </div>
                <div className="flex gap-4">
                    <Button>
                        {cta}

                    </Button>
                    <Button variant="outline">{secondaryCta}</Button>
                </div>
            </div>
            <div className="relative bg-cover bg-center h-[300px] md:h-full" style={{ backgroundImage: `url(${image})` }}>
               
            </div>
        </div>
    );
}
