export type NavBar1Item = {
   title: string;
   link?: string;
   children?: NavBar1Item[];
   Component?: React.ReactNode;
   LinkComponent?: React.JSXElementConstructor<
       React.LinkHTMLAttributes<HTMLAnchorElement>
   >;
};