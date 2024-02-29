import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import resume from "@/config/resume";
import Card from "@/components/CardListItem";
import CardList from "@/components/CardList";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			{resume.basics && <>
				<h1 className={title()}>Hi, I am {resume.basics?.name}</h1>
				{resume.basics.summary && <p>{resume.basics?.summary}</p>}
			</>}
			<h1 className="text-center text-2xl">Education</h1>
			<CardList items={resume.education?.map(e => ({
				title: e.area ? (e.studyType ? `${e.studyType} in ${e.area}` : e.area) : e.studyType || "",
				startDate: e.startDate,
				endDate: e.endDate,
				entity: e.institution,
				tags: e.courses,
				url: e.url,
				description: e.score && `Score: ${e.score}`,
				image: e.image
			}))} />

			<h1 className="text-center text-2xl">Experience</h1>
			<CardList items={resume.work?.map(w => {
				let text=w.description||""+w.summary||"";
				if(w.highlights)
					text+="\n- "+w.highlights.join("\n- ");
				return {
					title: w.position || "",
					startDate: w.startDate,
					endDate: w.endDate,
					entity: w.name,
					description: text,
					url: w.url,
					image: w.image
				}
			})} />
			<h1 className="text-center text-2xl">Awards</h1>
			<CardList items={resume.awards?.map(a => ({
				title: a.title || "",
				date: a.date,
				entity: a.awarder,
				description: a.summary,
				url: a.url,
				image: a.image
			}))} />
			<h1 className="text-center text-2xl">Volunteering</h1>
			<CardList items={resume.volunteer?.map(v => ({
				title: v.position || "",
				startDate: v.startDate,
				endDate: v.endDate,
				entity: v.organization,
				description: v.summary,
				url: v.url,
				image: v.image
			}))} />
		</section>
	);
}
