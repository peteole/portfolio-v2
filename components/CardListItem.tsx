import { CardBody, CardHeader, Card } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import * as React from "react";
import imageUrls from "@/config/imageUrls.json";
import Image from "next/image";
import { Chip } from "@nextui-org/chip";
import Link from "next/link";
import { url } from "inspector";
export type CardListItemProps = {
    title: string;
    url?: string;
    tags?: string[];
    description?: string;
    startDate?: string;
    endDate?: string;
    entity?: string;
    demo?: string;
    image?: string;
}
const CardListItem: React.FC<CardListItemProps> = (props) => {
    const urlSrc = props.url && (imageUrls as any)[props.url];
    const demoSrc = props.demo && (imageUrls as any)[props.demo];
    const src = props.image || urlSrc || demoSrc;
    console.log(props.title, ": ", src);
    return (
        <Card className="py-4 h-80 pt-0 w-80">
            <CardHeader>
                <div className="flex flex-col w-full">
                    {
                        props.tags && <div className="flex space-x-2 overflow-x-auto">
                            {props.tags.map((tag, index) => (
                                <Chip key={index} size="sm">
                                    {tag}
                                </Chip>
                            ))}
                        </div>
                    }
                    {props.url ? <Link href={props.url}><h4 className="font-bold text-large">{props.title}</h4></Link> : <h4 className="font-bold text-large">{props.title}</h4>}
                    {(props.startDate) && <p className="text-tiny">{props.startDate} - {(props.endDate || "now")}{props.entity && `, ${props.entity}`}</p>}
                </div>
            </CardHeader>

            <CardBody className="overflow-y-auto py-0">
                {props.url && src && <Link target="blank" href={props.url}><Image
                    alt="Card background"
                    className="rounded-xl mx-auto"
                    src={src}
                    style={{ objectFit: "cover", height: 100 }}
                    height={100}
                    width={250} /></Link>}
                {props.description?.split("\n").map((line, index) => <p key={index} className="text-sm">{line}</p>)}
                {props.demo && <Button target="blank" as={Link} href={props.demo} color="primary" size="sm" className="w-fit m-auto">View Demo</Button>}
            </CardBody>
        </Card>
    );
};
export default CardListItem