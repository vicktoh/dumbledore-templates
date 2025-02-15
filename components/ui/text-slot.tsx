import React from 'react';
import { Button, ButtonProps } from './button';
import { cn } from '@/lib/utils';
export type TextSlotProps = React.HTMLAttributes<HTMLDivElement> & {
    title: string;
    description: string;
    tagline?: string;
    primaryButtonProps?: ButtonProps & { title: string };
    secondaryButtonProps?: ButtonProps & { title: string };
    headerContainerClassName?: string;
    textContainerClassName?: string;
    buttonContainerClassName?: string;
};
export default function TextSlot({
    title,
    description,
    tagline,
    primaryButtonProps,
    secondaryButtonProps,
    className,
    headerContainerClassName,
    textContainerClassName,
    buttonContainerClassName,
    ...props
}: TextSlotProps) {
    return (
        <div {...props} className={cn('flex flex-col gap-8', className)}>
            <div
                className={cn(
                    'flex flex-col gap-6',
                    textContainerClassName
                )}
            >
                <div
                    className={cn(
                        'flex flex-col gap-4',
                        headerContainerClassName
                    )}
                >
                    {tagline && (
                        <p className="text-base font-medium text-muted-foreground">
                            {tagline}
                        </p>
                    )}
                    {title && (
                        <h2 className="text-2xl md:text-4xl font-bold">
                            {title}
                        </h2>
                    )}
                </div>

                {description && (
                    <p className=" md:text-lg text-muted-foreground">{description}</p>
                )}
            </div>
            {primaryButtonProps || secondaryButtonProps ? (
                <div
                    className={cn(
                        'flex gap-6 items-center',
                        buttonContainerClassName
                    )}
                >
                    {primaryButtonProps && (
                        <Button>{primaryButtonProps.title}</Button>
                    )}
                    {secondaryButtonProps && (
                        <Button variant="secondary">
                            {secondaryButtonProps.title}
                        </Button>
                    )}
                </div>
            ) : null}
        </div>
    );
}
