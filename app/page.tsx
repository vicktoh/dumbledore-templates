import * as React from "react"
import Hero1 from "@/registry/hero/hero-1"
import NavBar1 from "@/registry/navbars/navbar-1"
import FeatureSection1 from "@/registry/feature-sections/feature-section-1"
import FeatureSection2 from "@/registry/feature-sections/feature-section-2"
import Testimonial1 from "@/registry/testimonials/testimonial-1"
import FeatureSection3 from "@/registry/feature-sections/feature-section-3"
import Footer1 from "@/registry/footer/footer-1"
import { components, dummyFooterProps } from "@/app/default-data/component"
// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function Home() {
  return (
    <div className=" mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Custom Registry</h1>
        <p className="text-muted-foreground">
          A custom registry for distribution code using shadcn.
        </p>
      </header>
      <main className="flex flex-col flex-1 gap-8">
        

      

        
        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
        <h2 className="text-sm text-muted-foreground sm:pl-3">
             Dumbledore Components
            </h2>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <Hero1 />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <NavBar1 navItems={components} />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative"> 
            <FeatureSection1 title="Our Services" primaryButtonProps={{
              children: "Get Started",
              variant: "default",
              size: "lg",
              className: "w-fit",
              title: "Get Started",
            }} />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <FeatureSection2 title="Our Services" />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <Testimonial1 primaryButtonProps={{
              children: "Get Started",
              variant: "outline",
              size: "lg",
              className: "w-fit",
              title: "Get Started",
            }} />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <FeatureSection3 title="Featured Projects" description="We have a wide range of projects that we have worked on. We are proud to showcase some of them here." tagline="Featured Projects"  />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <Footer1 {...dummyFooterProps} />
          </div>
        </div>
      </main>
    </div>
  )
}
