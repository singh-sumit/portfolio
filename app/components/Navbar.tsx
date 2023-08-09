"use client"

import React, {useState} from "react";
import {
    Navbar as NextUINavbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    NavbarMenuToggle, NavbarMenu, NavbarMenuItem
} from "@nextui-org/react";
import {AcmeLogo} from "@/app/components/icons/AcmeLogo";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [activeMenu, setActiveMenu] = useState("About");

    const menuItems = [
        "About",
        "Experience",
        "Projects",
        "Contact",
    ];

    const navMenuClick = (event) => {
        console.log("aad", event)
        setActiveMenu(event.target.id)
    }
    console.log("Aactive menu", activeMenu)

    return (
        <NextUINavbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"}/>
            </NavbarContent>

            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    <AcmeLogo/>
                    <p className="font-bold text-inherit">SUMIT</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarBrand>
                    <AcmeLogo/>
                    <p className="font-bold text-inherit">SUMIT</p>
                </NavbarBrand>

            </NavbarContent>

            <NavbarContent justify="end">
                {
                    menuItems.map((menu, index) => (
                        <NavbarItem key={`${menu}_${index}`}
                                    isActive={activeMenu == menu}
                                    className="hidden lg:flex tracking-widest"
                        >
                            <Link href={`#${menu}`}
                                  {...activeMenu == menu ? {} : {color: "foreground"}}
                                // color="foreground"
                                  id={menu}
                                  onClick={navMenuClick}
                            >
                                {menu}
                            </Link>
                        </NavbarItem>
                    ))
                }
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full tracking-widest"
                            color={
                                activeMenu == item ? "primary" : "foreground"
                            }
                            href="#"
                            size="lg"
                            id={item}
                            onClick={navMenuClick}
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </NextUINavbar>
    );
}