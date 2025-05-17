import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ProjectCardProps {
    title: string;
    technologies: string;
    image: string;
    link: string;
    index: number;
    isActive: boolean;
    isMobile: boolean;
    onMouseEnter: (index: number) => void;
    onMouseLeave: () => void;
}

export function ProjectCard({
    title,
    technologies,
    image,
    link,
    index,
    isActive,
    isMobile,
    onMouseEnter,
    onMouseLeave,
}: ProjectCardProps) {
    const cardWidth = isMobile ? "w-[80vw]" : (isActive ? "w-[400px]" : "w-[150px]");
    const transitionDuration = "transition-all duration-300 ease-in-out";

    return (
        <Link
            href={link}
        >
            <Card
                className={`h-[380px] bg-transparent relative overflow-hidden cursor-pointer group ${cardWidth} ${transitionDuration}`}
                onMouseEnter={() => onMouseEnter(index)}
                onMouseLeave={onMouseLeave}
            >
                <div className={`absolute top-0 left-0 w-full h-full ${transitionDuration}`}>
                    <Image
                        src={image}
                        alt={title}
                        objectFit="cover"
                        fill
                        className={`rounded-t-xl ${transitionDuration} ${isActive ? "" : "scale-115 group-hover:scale-10"}`}
                    />
                </div>
                <CardFooter
                    className={`absolute bottom-0 left-0 w-full bg-white rounded-b-xl flex justify-between items-center h-20 ${transitionDuration} ${isActive ? "translate-y-0" : "translate-y-[calc(100% - 20px)]"
                        }`}
                    style={{ opacity: isActive ? 1 : 0, pointerEvents: isActive ? "auto" : "none" }}
                >
                    <div>
                        <h4 className="font-bold">{title}</h4>
                        <h5>{technologies}</h5>
                    </div>
                    <Button>Go</Button>
                </CardFooter>
                <CardContent
                    className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black/50 rounded-t-xl ${transitionDuration} opacity-0`}
                    style={{ pointerEvents: isActive ? "auto" : "none" }}
                >
                </CardContent>
            </Card>
        </Link>
    );
}