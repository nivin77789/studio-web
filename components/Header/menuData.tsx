import type { MenuItem } from "./types";

const menuData: MenuItem[] = [
  { id: 1, title: "Home", path: "/" },
  {
    id: 2,
    title: "Services",
    submenu: [
      { title: "Wedding", path: "/services/wedding" },
      { title: "Engagement", path: "/services/engagement" },
    ],
  },
  { id: 3, title: "About", path: "/about" },
  { id: 4, title: "Contact", path: "/contact" },
];

export default menuData;
