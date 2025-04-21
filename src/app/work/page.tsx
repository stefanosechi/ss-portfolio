"use client";

import Link from "next/link";
import { ChevronLeftIcon } from "lucide-react";
import ProjectsSection from "../../components/sections/projects-section";

const WorkPage = () => {
  return (
    <main className="relative flex flex-col items-center justify-center px-0 md:px-4 pt-20 pb-40">
      <ProjectsSection />
    </main>
  );
};

export default WorkPage;
