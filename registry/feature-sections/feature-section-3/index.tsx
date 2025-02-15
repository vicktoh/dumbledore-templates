import TextSlot from '@/components/ui/text-slot';
import { Feature3Feature, FeatureSection3Props } from '../types';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
const defaultPrimaryButton = {
    title: 'Book a Consultation',
    href: '/contact',
    variant: 'default',
} as const;

const defaultSecondaryButton = {
    title: 'View All Projects',
    href: '/projects',
    variant: 'outline',
} as const;

const featuredProjects: Feature3Feature[] = [
    {
        title: 'SupportBuddy AI',
        description:
            'SupportBuddy AI is an intelligent customer support assistant designed to enhance business interactions, streamline operations, and drive sales. With advanced chatbot training and customization, businesses can automate responses, improve response time, and provide a seamless customer experience. The result? Increased customer satisfaction, reduced support workload, and a scalable solution that adapts to business needs.',
        type: 'image',
        source: 'https://placehold.co/600x400',
    },
    {
        title: 'Kopaville',
        description:
            'Kopaville is a vibrant platform where National Youth Service Corps (NYSC) members, ex-corpers, and aspiring corpers connect, share experiences, and access vital resources. With features like Kopa-Market, dating, job listings, and multimedia sharing, it’s a one-stop destination for Nigeria’s youth. Since its launch, Kopaville has fostered stronger community engagement, provided career opportunities, and created a space for authentic social interactions.',
        type: 'image',
        source: 'https://placehold.co/600x400',
    },
    {
        title: 'Open Contracting Portal',
        description:
            'Our AI-driven Open Contracting Portal uses machine learning to extract and structure data from scanned files, turning messy procurement records into searchable, actionable insights. By automating data extraction and organization, we’re making procurement information more transparent and accessible. Civil society organizations, journalists, and policymakers can now track government spending, detect anomalies, and drive accountability with ease.',
        type: 'image',
        source: 'https://placehold.co/600x400',
    },
];

export default function FeatureSection3({
    title,
    description,
    tagline,
    primaryButtonProps = defaultPrimaryButton,
    secondaryButtonProps = defaultSecondaryButton,
    tabs = featuredProjects,
}: FeatureSection3Props) {
    return (
        <div className="flex flex-col gap-12 px-5 py-12 md:gap-20 md:py-28 md:px-12">
            <TextSlot
                title={title}
                description={description}
                tagline={tagline}
                className="items-center"
                textContainerClassName="items-center"
                headerContainerClassName="gap-4 text-center"
                primaryButtonProps={primaryButtonProps}
                secondaryButtonProps={secondaryButtonProps}
            />
            <Tabs
                defaultValue={tabs[0].title}
                className="flex flex-col gap-12 md:gap-16"
            >
                <TabsList className="flex flex-row bg-transparent">
                    <div className="flex flex-row gap-2 md:self-center flex-wrap">
                        {tabs.map((tab) => (
                            <TabsTrigger
                                value={tab.title}
                                key={tab.title}
                                className="text-base py-2 bg-none  border-primary rounded-none data-[state=active]:border-b"
                            >
                                {tab.title}
                            </TabsTrigger>
                        ))}
                    </div>
                </TabsList>
                {tabs.map((tab) => (
                    <TabsContent value={tab.title} key={tab.title}>
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="flex flex-col gap-4 p-12 min-h-[640px] justify-center">
                                <TextSlot
                                    title={tab.title}
                                    description={tab.description}
                                    className="items-start"
                                    textContainerClassName="items-start"
                                />
                            </div>
                            <div className="flex flex-col gap-4 items-center justify-center">
                                {tab.type === 'image' && (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                        src={tab.source}
                                        alt={tab.title}
                                        className="w-full h-full object-cover"
                                    />
                                )}
                                {tab.type === 'video' && (
                                    <video src={tab.source} />
                                )}
                            </div>
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
}
