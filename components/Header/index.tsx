"use client";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";

import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
    const [navigationOpen, setNavigationOpen] = useState(false);
    const [dropdownToggler, setDropdownToggler] = useState(false);
    const [stickyMenu, setStickyMenu] = useState(false);

    const pathUrl = usePathname();

    // Sticky menu
    const handleStickyMenu = () => {
        if (window.scrollY >= 80) {
            setStickyMenu(true);
        } else {
            setStickyMenu(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleStickyMenu);
    });

    return (
        <header
            className={`fixed left-0 top-0 z-99999 w-full py-7 ${
                stickyMenu
                    ? "bg-white !py-4 shadow transition duration-100 dark:bg-black"
                    : ""
            }`}
        >
            <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
                <div className="flex w-full items-center justify-between xl:w-1/4">
                    <a href="/">
                        <Image
                            src="/images/logo/logo-dark.svg"
                            alt="logo"
                            width={119.03}
                            height={30}
                            className="hidden w-full dark:block"
                        />
                        <Image
                            src="/images/logo/logo-light.svg"
                            alt="logo"
                            width={119.03}
                            height={30}
                            className="w-full dark:hidden"
                        />
                    </a>

                    {/* <!-- Hamburger Toggle BTN --> */}
                    <button
                        aria-label="hamburger Toggler"
                        className="block xl:hidden"
                        onClick={() => setNavigationOpen(!navigationOpen)}
                    >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="absolute right-0 block h-full w-full">
                <span
                    className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                        !navigationOpen ? "!w-full delay-300" : "w-0"
                    }`}
                ></span>
                <span
                    className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                        !navigationOpen ? "delay-400 !w-full" : "w-0"
                    }`}
                ></span>
                <span
                    className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                        !navigationOpen ? "!w-full delay-500" : "w-0"
                    }`}
                ></span>
              </span>
              <span className="du-block absolute right-0 h-full w-full rotate-45">
                <span
                    className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                        !navigationOpen ? "!h-0 delay-[0]" : "h-full"
                    }`}
                ></span>
                <span
                    className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                        !navigationOpen ? "!h-0 delay-200" : "h-0.5"
                    }`}
                ></span>
              </span>
            </span>
                    </button>
                    {/* <!-- Hamburger Toggle BTN --> */}
                </div>

                {/* Nav Menu Start   */}
                <div
                    className={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full ${
                        navigationOpen &&
                        "navbar !visible mt-4 h-auto max-h-[400px] rounded-md bg-white p-7.5 shadow-solid-5 dark:bg-blacksection xl:h-auto xl:p-0 xl:shadow-none xl:dark:bg-transparent"
                    }`}
                >
                    <nav>
                        <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
                            {menuData.map((menuItem, key) => (
                                <li key={key} className={menuItem.submenu && "group relative"}>
                                    {menuItem.submenu ? (
                                        <>
                                            <button
                                                onClick={() => setDropdownToggler(!dropdownToggler)}
                                                className="flex cursor-pointer items-center justify-between gap-3 hover:text-primary"
                                            >
                                                {menuItem.title}
                                                <span>
                          <svg
                              className="h-3 w-3 cursor-pointer fill-waterloo group-hover:fill-primary"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                          >
                            <path
                                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
                          </svg>
                        </span>
                                            </button>

                                            <ul
                                                className={`dropdown ${dropdownToggler ? "flex" : ""}`}
                                            >
                                                {menuItem.submenu.map((item, key) => (
                                                    <li key={key} className="hover:text-primary">
                                                        <Link href={item.path || "#"}>{item.title}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    ) : (
                                        <Link
                                            href={`${menuItem.path}`}
                                            className={
                                                pathUrl === menuItem.path
                                                    ? "text-primary hover:text-primary"
                                                    : "hover:text-primary"
                                            }
                                        >
                                            {menuItem.title}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="mt-7 flex items-center gap-6 xl:mt-0">
                        <ThemeToggler/>

                        <Link
                            href="https://nextjstemplates.com/templates/solid"
                            className="flex items-center justify-center rounded-full bg-primary px-7.5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-primaryho">
                            <span className="xs:pr-2"><svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                                           xmlns="http://www.w3.org/2000/svg"><path
                                d="M8.99995 7.79065C11.0812 7.79065 12.7687 6.1594 12.7687 4.1344C12.7687 2.1094 11.0812 0.478149 8.99995 0.478149C6.9187 0.478149 5.2312 2.1094 5.2312 4.1344C5.2312 6.1594 6.9187 7.79065 8.99995 7.79065ZM8.99995 1.7719C10.3781 1.7719 11.5031 2.84065 11.5031 4.16252C11.5031 5.4844 10.3781 6.55315 8.99995 6.55315C7.62183 6.55315 6.49683 5.4844 6.49683 4.16252C6.49683 2.84065 7.62183 1.7719 8.99995 1.7719Z"
                                fill="currentColor"></path><path
                                d="M10.8281 9.05627H7.17183C4.16245 9.05627 1.71558 11.5313 1.71558 14.5406V16.875C1.71558 17.2125 1.99683 17.5219 2.36245 17.5219C2.72808 17.5219 3.00933 17.2407 3.00933 16.875V14.5406C3.00933 12.2344 4.8937 10.3219 7.22808 10.3219H10.8562C13.1624 10.3219 15.075 12.2063 15.075 14.5406V16.875C15.075 17.2125 15.3562 17.5219 15.7218 17.5219C16.0875 17.5219 16.3687 17.2407 16.3687 16.875V14.5406C16.2843 11.5313 13.8375 9.05627 10.8281 9.05627Z"
                                fill="currentColor"></path></svg></span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

// w-full delay-300

export default Header;
