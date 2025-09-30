export type MenuItem = {
  id: number;
  title: string;
  path?: string;
  submenu?: {
    title: string;
    path: string;
  }[];
};
