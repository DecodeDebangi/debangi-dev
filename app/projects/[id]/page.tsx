"use client";

import React from "react";
import ProjectDetails from "@/components/projects/ProjectDetails";

interface ProjectDetailsPageProps {
  params: {
    id: string;
  };
}

export default function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  return <ProjectDetails id={params.id} />;
}
