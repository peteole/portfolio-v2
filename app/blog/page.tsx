import CardList from "@/components/CardList";
import { title } from "@/components/primitives";
import resume from "@/config/resume";
function findImageUrl(text:string, baseURL?:string) {
    // Regular expression to match both absolute and relative image URLs
    const imageUrlRegex = /(?:https?:\/\/[^\s]+\.(?:jpeg|jpg|gif|png|svg))|(?:\bimages\/\S+\.(?:jpeg|jpg|gif|png|svg)\b)/ig;

    // Find all matching URLs in the text
    const matches = text.matchAll(imageUrlRegex);

    // Convert relative URLs to absolute URLs using the baseURL
    const absoluteUrls = Array.from(matches, match => {
        const url = match[0];
        if (!url.startsWith('http')) {
            return new URL(url, baseURL).href;
        }
        return url;
    });
	const regex = /<img[^>]+src\s*=\s*["']?([^"'\s]+)["']?[^>]*>/g;
    const dataUrls: string[] = [];
    let match;

    while ((match = regex.exec(text)) !== null) {
        const src = match[1];
        if (src.startsWith("data:")) {
            dataUrls.push(src);
        }
    }
	absoluteUrls.push(...dataUrls)

    // Return the first absolute URL
    return absoluteUrls[0] || null;
}


export default async function BlogPage() {
	const blogPosts=resume.publications?.filter((publication)=>publication.type==="blog")||[]
	blogPosts.sort((a,b)=>(new Date(b.releaseDate||"").getTime())-(new Date(a.releaseDate||"").getTime()))
	const blogPostContents=await Promise.all(blogPosts.map(async (blogPost)=>{
		const response=await fetch(blogPost.url||"")
		return response.text()
	}))
	//console.log(blogPostContents)
	const blogPostImages=blogPostContents.map((content,i)=>findImageUrl(content,blogPosts[i].url)||"")
	//console.log(blogPostImages)
	return (
		<div>
			<h1 className={title()}>Blog</h1>
			<CardList items={blogPosts.map((p,i)=>{
				return {
					title:p.name||"",
					date:p.releaseDate,
					entity:p.publisher,
					description:p.summary?.slice(0,200)+"...",
					image:blogPostImages[i],
					url:p.url
				}
			})}/>
		</div>
	);
}
