"use client";
import BoardView from "@/components/Project/BoardView";
import ProjectHeader from "@/components/Project/ProjectHeader";
import TimelineView from "@/components/Project/TimelineView";
import { useParams } from "next/navigation";
import React, { useState } from "react";

const Project = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("Board");
  const [isModalNewTaskOpen, setIsModelNewTaskOpen] = useState(false);

  return (
    <div>
      {/* MODAL NEW TASK */}
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "Board" && (
        <BoardView
          id={id as string}
          setIsModalNewTaskOpen={setIsModelNewTaskOpen}
        />
      )}

      {activeTab === "Timeline" && (
        <TimelineView
          id={id as string}
          setIsModalNewTaskOpen={setIsModelNewTaskOpen}
        />
      )}
    </div>
  );
};

export default Project;
