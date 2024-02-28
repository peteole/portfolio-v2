export type SiteConfig = typeof siteConfig;
import resume from "./resume";

export const siteConfig = {
	name: `Portfolio - ${resume.basics?.name}`,
	description: `Portfolio of ${resume.basics?.name}`,
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Skills",
      href: "/skills",
    },
    {
      label: "CV",
      href: "/cv",
    },
    {
      label: "Blog",
      href: "/blog",
    }
	]
};
