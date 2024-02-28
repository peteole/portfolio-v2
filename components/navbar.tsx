"use client";
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import { SocialIcon } from "react-social-icons";
import resume from "@/config/resume";

import { Logo } from "@/components/icons";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTheme } from "next-themes";

export const Navbar = () => {
	const {theme}=useTheme();
	const pathname = usePathname();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const socialIconColor=theme==="dark"?"white":"black";

	return (
		<NextUINavbar maxWidth="xl" position="sticky" isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<ul className="hidden sm:flex gap-4 justify-start ml-2">
					{siteConfig.navItems.map((item, i) => (
						<NavbarItem key={item.href} isActive={item.href === pathname}>
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium"
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden sm:flex gap-2">
					{resume.basics?.profiles?.map((profile, index) => (
						<SocialIcon key={profile.url} url={profile.url} fgColor={socialIconColor} bgColor="transparent"/>
					))}

					<ThemeSwitch />
				</NavbarItem>
			</NavbarContent>
			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				{resume.basics?.profiles?.map((profile, index) => (
					<SocialIcon key={profile.url} url={profile.url} fgColor={socialIconColor} bgColor="transparent" />
				))}
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu >
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								color={
									item.href === pathname ? "primary" : "foreground"
								}
								href={item.href}
								size="lg"
								onClick={() => setIsMenuOpen(false)}
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>

		</NextUINavbar>
	);
};

