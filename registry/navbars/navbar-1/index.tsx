'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Button, ButtonProps } from '@/components/ui/button';
import { MenuIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { NavBar1Item } from './types';



export type NavBar1SecondaryButton = ButtonProps & {
    title: string;
    link?: string;
};



type NavBar1Props = {
    navItems?: NavBar1Item[];
    logoComponent?: React.ReactNode;
    logoTitle?: string;
    secondaryButtons?: NavBar1SecondaryButton[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    LinkComponent?: React.JSXElementConstructor<any>
};
const SecondaryButtons: NavBar1SecondaryButton[] = [
    {
        title: 'Login',
        link: '/login',
    },
    
];

export default function NavBar1({
    navItems=[],
    logoComponent,
    logoTitle = 'Logo',
    secondaryButtons = SecondaryButtons,
    LinkComponent
}: NavBar1Props) {
    
    return (
        <div className="flex flex-row items-center px-1  md:px-10 w-full py-5 gap-4">
            {logoComponent && logoComponent}
            {logoTitle && <h3 className="text-xl font-bold">{logoTitle}</h3>}

            {navItems.length > 0 && (
                <NavigationMenu className='ml-auto hidden md:block'>
                    <NavigationMenuList>
                        {navItems.map((item, i) =>{
                            const Component = LinkComponent || (item.link ? NavigationMenuLink : NavigationMenuTrigger);
                            return(
                            <NavigationMenuItem key={`navbar-1-${i}`} >
                                <Component href={item.link || undefined} className={!item.Component && !item.children ? navigationMenuTriggerStyle() : ""}>
                                        {item.title}
                                </Component>

                                {item.children?.length || item.Component ? (
                                    <NavigationMenuContent>
                                        
                                        {item.children && (
                                            <ul className="flex flex-col gap-2 min-w-40  p-6">
                                                {item.children?.map(
                                                    (child, i) => {
                                                        const LinkComp = LinkComponent || NavigationMenuLink;
                                                        return (
                                                        <li
                                                            key={`navbar-1-${i}`}
                                                            className="hover:bg-muted py-2"
                                                        >
                                                            <NavigationMenuLink
                                                                asChild
                                                            >
                                                                <LinkComp
                                                                    href={
                                                                        child.link || undefined
                                                                    }
                                                                >
                                                                    {
                                                                        child.title
                                                                    }
                                                                </LinkComp>
                                                            </NavigationMenuLink>
                                                        </li>
                                                    )}
                                                )}
                                            </ul>
                                        )}
                                        {item.Component && item.Component}
                                    </NavigationMenuContent>
                                ) : null}
                            </NavigationMenuItem>
                        )})}
                    </NavigationMenuList>
                </NavigationMenu>
            )}
            {secondaryButtons?.length && (
                <div className="hidden md:flex flex-row gap-2">
                    {secondaryButtons.map((button, i) => (
                        <Button key={`navbar-1-secondary-${i}`} {...button}>{button.title}</Button>
                    ))}
                </div>
            )}
            <div className="flex md:hidden ml-auto">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon">
                            <MenuIcon />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="top">
                        <SheetHeader>
                            <SheetTitle className='hidden'>Menu</SheetTitle>
                            <div className='flex flex-row  items-center gap-2'>
                                {logoComponent && logoComponent}
                                {logoTitle && <h3 className="text-xl font-bold">{logoTitle}</h3>}
                            </div>
                        </SheetHeader>
                        <div className="flex flex-col gap-4 pt-4 pb-10 px-5">
                            {navItems.map((item, i) => (item.children || item.Component) ?  (
                                <div key={`mobile-navbar-${i}`}>
                                    <div className='text-lg font-bold'>{item.title}</div>
                                    <div className='flex flex-col gap-2 px-5 py-2'>
                                        {item.children?.map((child, i) => (
                                            <a href={child.link} key={`navbar-1-${i}`}>{child.title}</    a>
                                        ))}
                                    </div>
                                    {item.Component && item.Component}
                                </div>
                            ): (
                                <a href={item.link || ''} key={`navbar-1-${i}`}>{item.title}</a>
                            ))}
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<'a'>,
    React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = 'ListItem';
