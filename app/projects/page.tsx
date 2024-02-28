import { title } from "@/components/primitives";
import Card from "@/components/CardListItem";
import resume from "@/config/resume";
import CardList from "@/components/CardList";

export default function AboutPage() {
	return (
		<div>
			<h1 className={title()}>Projects</h1>
			<CardList items={resume.projects?.map(p=>({
				title: p.name||"",
				url: p.url,
				tags: p.keywords,
				description: p.description,
				startDate: p.startDate,
				endDate: p.endDate,
				entity:p.entity,
				demo: p.demo
			}))}/>
		</div>
	);
}
