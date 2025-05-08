export interface MainNavItem {
  title: string;
  href: string;
}

export interface SidebarNavItem {
  title: string; // e.g., Frontend, Backend
  items: CategoryItem[]; // Languages Items
}
export interface CategoryItem {
  title: string; // e.g., JavaScript, React
  items: SubCategoryItem[]; // Sidebar title, href, Sidebar child items
}
export interface SubCategoryItem {
  title: string; // e.g., Basics, Advanced
  href: string; // url
  items?: SubCategoryItem[]; // Sidebar child, e.g., child title, href
}

export interface CardNav {
  title: string;
  href: string;
  icon?: React.FC;
  description?: string;
}
export interface CardNavItem {
  title: string;
  items: CardNav[];
}
