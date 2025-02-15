import { Button, ButtonProps } from '@/components/ui/button';
import React from 'react';
const defaultBrands = [
    {
        name: 'Brand 1',
        image: 'https://i0.wp.com/media.premiumtimesng.com/wp-content/files/2021/12/Dataphyte-1-e1638463222225.png?resize=1140%2C570&ssl=1',
    },
    {
        name: 'Brand 2',
        image: 'https://www.connecteddevelopment.org/wp-content/uploads/2021/05/Code-LOgo.png',
    },
    {
        name: 'Brand 3',
        image: 'https://imagedelivery.net/xWxuKZpxlXttNRGMIz5jrg/accountabilitylab.org/2023/01/AL_logo-1-e1674195862910.png/w=9999',
    },
    {
        name: 'Brand 4',
        image: 'https://pbs.twimg.com/profile_images/1141386274940620801/cOCL0LDw_400x400.jpg',
    },
    {
        name: 'Brand 5',
        image: 'https://currentaffairs.ng/wp-content/uploads/2023/10/Seal_of_Edo_State.png',
    },
];
type Testimonial1Props = {
    title?: string;
    description?: string;
    brands?: {
        name: string;
        image: string;
    }[];
    primaryButtonProps?: ButtonProps & { title: string };
    secondaryButtonProps?: ButtonProps & { title: string };
};

export default function Testimonial1({
    title = 'Trusted by',
    description = 'We are proud to work with a diverse range of clients. From small businesses looking to scale, to large corporate organizations. We also collaborate with government agencies and civil society organizations to create impactful technology solutions that enhance operations and drive meaningful change. No matter the size or sector, our goal is always the same: to empower our clients with cutting-edge technology that helps them succeed',
    brands = defaultBrands,
    primaryButtonProps,
    secondaryButtonProps,
}: Testimonial1Props) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 py-20 px-16">
            <div className="flex flex-col justify-center gap-8">
                <div className="flex flex-col gap-6">
                    <h2 className="md:text-5xl text-4xl font-bold">{title}</h2>
                    <p className="text-gray-500 md:text-lg">{description}</p>
                </div>

                {primaryButtonProps || secondaryButtonProps ? (
                    <div className="flex gap-6 items-center">
                        {primaryButtonProps && (
                            <Button {...primaryButtonProps} />
                        )}
                        {secondaryButtonProps && (
                            <Button {...secondaryButtonProps} />
                        )}
                    </div>
                ) : null}
            </div>
            <div className="grid grid-cols-2 gap-2">
                {brands?.map((brand) => (
                    <div
                        key={brand.name}
                        className="flex flex-col gap-4 items-center justify-center h-24"
                    >
                        <img
                            src={brand.image}
                            alt={brand.name}
                            className="object-contain w-[140px] h-[56px]"
                            width={140}
                            height={56}
                            
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
