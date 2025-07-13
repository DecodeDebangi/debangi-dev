import React from "react";
import ProjectDetails from "@/components/projects/ProjectDetails";

interface ProjectDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const { id } = await params;
  return <ProjectDetails id={id} />;
}
