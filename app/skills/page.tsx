import { title } from "@/components/primitives";
import {Progress} from "@nextui-org/progress";
import resume from "@/config/resume";

export default function PricingPage() {
	const skill_to_number={
		"Beginner": 25,
		"Intermediate": 50,
		"Advanced": 75,
		"Expert": 100
	
	}
	const keywords=Array.from(new Set(resume.skills?.map((skill)=>skill.keywords).flat())).filter((keyword)=>keyword) as string[]
	const skillsByKeywords=Object.fromEntries(keywords.map((keyword)=>[keyword, resume.skills?.filter((skill)=>skill.keywords?.includes(keyword||""))]))
	keywords.sort((a,b)=>skillsByKeywords[b].length-skillsByKeywords[a].length)
	
	return (
		<div className="flex flex-wrap">
			{keywords.map((keyword, index) => {
				return (
					<div key={index} className="m-6">
						<h1 className="text-xl">{keyword}</h1>
						{skillsByKeywords[keyword]?.map((skill, index) => {
							return (
								<div key={index}>
									<Progress label={skill.name} value={skill_to_number[skill.level]} />
								</div>
							)
						})}
					</div>
				)
			}
			)}
		</div>
	);
}
