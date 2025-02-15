import { Footer1Props } from "@/registry/footer/footer-1";
import { ExampleForm } from "@/registry/example-form/example-form";
import { NavBar1Item } from "@/registry/navbars/navbar-1/types";

export const dummyFooterProps: Footer1Props = {
   logo: 'logo.svg',
   companyName: 'Dumbledore Tech',
   socials: [],
   copyright: 'Copyright 2025 Dumbledore Tech',
   termsAndConditions: 'Terms and Conditions',
   privacyPolicy: 'Privacy Policy',
   address: '123 Main St, Anytown, USA',
   phone: '123-456-7890',
   email: 'info@dumbledoretech.com',
   links: [
       {
           title: 'Home',
           url: '/',
       },
       {
           title: 'Features',
           url: '/features',
       },
       {
           title: 'Careers',
           url: '/careers',
       }
   ],
};


export const components: NavBar1Item[] = [
    {
        title: 'Getting started',
        link: '/',
    },
    {
        title: 'Contact Us',
        children: [
            {
                title: 'Email',
                link: 'mailto:contact@example.com',
            },
            {
                title: 'Phone',
                link: 'tel:+1234567890',
            },
        ],
    },
    {
        title: 'About Us',
        Component: <ExampleForm />,
    },
];