import { title } from "@/components/primitives";
import Card from "@/components/CardListItem";
import resume from "@/config/resume";
import CardList from "@/components/CardList";

export default function AboutPage() {
	return (
		<div>
			<h1 className={title()}>Projects</h1>
			<CardList items={resume.projects?.map(p=>{
				
				let text=(p.description||"")+(p.summary||"");
				if(p.highlights)
					text+="\n- "+p.highlights.join("\n- ");
				return{
				title: p.name||"",
				url: p.url,
				tags: p.keywords,
				description: text,
				startDate: p.startDate,
				endDate: p.endDate,
				entity:p.entity,
				demo: p.demo,
				image:p.image
			}})}/>
		</div>
	);
}
