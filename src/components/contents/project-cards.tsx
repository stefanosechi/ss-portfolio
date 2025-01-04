"use client";

import { getProjects } from '@/graphql';
import { Project as ProjectProps } from '@/types';
import { Badge } from '@mantine/core';
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from 'react';
import { Button } from "../ui/button";
import Icons from "../ui/icons";
import { Skeleton } from "../ui/skeleton";
import AnimationContainer from "../utils/animation-container";

const ProjectCards = () => {

    const [projects, setProjects] = useState<ProjectProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        try {
            const fetchProjects = async () => {
                const data = await getProjects();
                setProjects(data);
                setIsLoading(false);
            };
            fetchProjects();
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }, []);

    const data = projects?.map((item: any) => item.node);


    return (
        <AnimationContainer className="w-full flex flex-col">

            <div className="flex flex-col items-center justify-center w-full mt-8 space-y-5 md:space-y-8">

                {isLoading ? (
                    <>
                        <Skeleton className="w-full h-40" />
                        <Skeleton className="w-full h-40" />
                        <Skeleton className="w-full h-40" />
                        <Skeleton className="w-full h-40" />
                        <Skeleton className="w-full h-40" />
                        <Skeleton className="w-full h-40" />
                    </>
                ) : (
                    <>
                        {data && data?.map((project: ProjectProps) => (
                            <Card key={project.title} project={project} />
                        ))}
                    </>
                )}

            </div>
        </AnimationContainer>
    )
};

const Card = ({ project }: {project :ProjectProps}) => {
    return (
        <AnimationContainer className='bg-[#080809] border border-border w-full hover:border-neutral-700 rounded-xl'>

            <div className="flex-col items-start p-4 lg:p-5">
                <div className="flex flex-col items-start space-y-4">
                    <h4 className="text-lg font-medium text-neutral-100">
                        {project?.title}
                    </h4>
                    <p className="text-sm text-neutral-300">
                        {project?.description}
                    </p>
                    <div className="flex flex-col lg:flex-row items-start justify-start space-y-4 lg:space-y-0 lg:justify-between w-full">
                        <div className="flex items-center justify-start flex-wrap gap-2">
                            {project?.stack?.map((item, index) => (
                                <Badge
                                    key={index}
                                    size="sm"
                                    radius="sm"
                                    variant="filled"
                                    color="dark"
                                    className="transition-colors duration-300 ease-in-out bg-neutral-600/70 hover:bg-neutral-700"
                                >
                                    <span className="font-medium text-white">
                                        {item}
                                    </span>
                                </Badge>
                            ))}
                        </div>
                        <div className="flex items-end gap-4">
                            <Link href={project.github} target="_blank">
                                <Button variant="outline" size="sm">
                                    <Icons.github className="w-5 h-5" />
                                    <span className="ml-2">
                                        Github
                                    </span>
                                </Button>
                            </Link>
                            <Link href={project.view} target="_blank">
                                <Button variant="outline" size="sm">
                                    <ExternalLinkIcon className="w-5 h-5" />
                                    <span className="ml-2">
                                        View
                                    </span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </AnimationContainer>
    )
};

export default ProjectCards
