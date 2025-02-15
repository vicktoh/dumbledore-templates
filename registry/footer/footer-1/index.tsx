import React from 'react';
type Socials = {
    name: string;
    url?: string;
    Icon?: React.JSXElementConstructor<{ className?: string }>;
};

export type Footer1Props = {
    logo?: string;
    companyName?: string;
    socials: Socials[];
    copyright: string;
    termsAndConditions: string;
    privacyPolicy: string;
    address?: string;
    phone?: string;
    email?: string;
    links?: {
        title: string;
        url: string;
    }[];
};
export default function Footer1({
    logo,
    companyName,
    socials,
    copyright,
    termsAndConditions,
    privacyPolicy,
    address,
    phone,
    email,
    links,
}: Footer1Props) {
    return (
        <div className="flex flex-col w-full px-5 py-12 md:px-16 md:py-20 gap-10 md:gap-16">
            <div className="flex flex-col md:flex-row md:justify-between items-center gap-16">
                <div className="flex flex-col gap-8">
                    <img
                        src={logo || 'logo.svg'}
                        alt={companyName || 'Dumbledore Tech'}
                        width={100}
                        height={100}
                    />

                    <div className="flex flex-col gap-1">
                        <p className="font-semibold text-sm">Address</p>
                        <p className="text-sm text-muted-foreground">
                            {address}
                        </p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="font-semibold text-sm">Contact</p>
                        <p className="text-sm text-muted-foreground">{phone}</p>
                        <p className="text-sm text-muted-foreground">{email}</p>
                    </div>

                    <div className="flex flex-row gap-3">
                        {socials.map((social) => (
                            <a
                                href={social.url || ''}
                                key={social.name}
                                className="text-muted-foreground"
                            >
                                {social.Icon && (
                                    <social.Icon className="w-5 h-5" />
                                )}
                                {social.name}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="flex flex-row gap-8">
                    <div className="flex flex-col gap-6">
                        {links?.map((link) => (
                            <a
                                href={link.url}
                                key={link.title}
                                className="text-muted-foreground inline-flex py-2"
                            >
                                {link.title}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex flex-row justify-between border-t pt-8">
                <p className="text-muted-foreground">{copyright}</p>
                <div className="flex flex-row gap-6">
                    <p className="text-muted-foreground">{termsAndConditions}</p>
                    <p className="text-muted-foreground">{privacyPolicy}</p>
                    <p className="text-muted-foreground">Cookie Policy</p>
                </div>
            </div>
        </div>
    );
}
