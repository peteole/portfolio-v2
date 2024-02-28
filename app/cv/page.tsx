import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import Link from "next/link";

export default function DocsPage() {
	return (
		<div>
			<p><Button as={Link} color="primary" href="/cv.pdf">Click here to download my CV</Button></p>
		</div>
	);
}
