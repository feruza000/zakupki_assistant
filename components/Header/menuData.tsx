import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Главная",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Обявления",
    newTab: false,
    path: "/announcements",
  },
  {
    id: 2.1,
    title: "Новости",
    newTab: false,
    path: "/blog",
  },
  {
    id: 2.3,
    title: "Инструкция",
    newTab: false,
    submenu: [
      {
        id: 231,
        title: "О нашей системе",
        newTab: false,
        path: "/docs",
      },
      {
        id: 231,
        title: "Обучение ИП, ОСОО",
        newTab: false,
        path: "/docs",
      },
      {
        id: 232,
        title: "Образовательная школа",
        newTab: false,
        path: "/auth/signin",
      },
      {
        id: 234,
        title: "Бонусы за активность",
        newTab: false,
        path: "/auth/signup",
      },
      {
        id: 335,
        title: "Реферальная программа",
        newTab: false,
        path: "/docs",
      },
    ],
  },
  {
    id: 3,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Blog Grid",
        newTab: false,
        path: "/blog",
      },
      {
        id: 34,
        title: "Sign In",
        newTab: false,
        path: "/auth/signin",
      },
      {
        id: 35,
        title: "Sign Up",
        newTab: false,
        path: "/auth/signup",
      },
      {
        id: 35,
        title: "Docs",
        newTab: false,
        path: "/docs",
      },
      {
        id: 35.1,
        title: "Support",
        newTab: false,
        path: "/support",
      },
      {
        id: 36,
        title: "404",
        newTab: false,
        path: "/error",
      },
    ],
  },
];

export default menuData;
