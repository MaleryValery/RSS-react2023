export interface ICustomNavProps {
  navItems: ICustomNavItem[];
  className?: string;
}

export interface ICustomNavItem {
  navItemTitle: string;
  navItemId: number;
}
