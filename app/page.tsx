import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import resume from "@/config/resume";
import Card from "@/components/CardListItem";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			{resume.basics && <>
				<h1 className={title()}>Hi, I am {resume.basics?.name}</h1>
				{resume.basics.summary && <p>{resume.basics?.summary}</p>}
			</>}
			<Card title="Projects" url="https://github.com/peteole" tags={["react", "telegram"]}/>

		</section>
	);
}
