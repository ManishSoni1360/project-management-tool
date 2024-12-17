"use client";
import ModalNewTask from "@/components/ModalNewTask";
import BoardView from "@/components/Project/BoardView";
import ProjectHeader from "@/components/Project/ProjectHeader";
import TableView from "@/components/Project/TableView";
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
      <ModalNewTask
        isOpen={isModalNewTaskOpen}
        onClose={() => setIsModelNewTaskOpen(false)}
        id={id as string}
      />
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

      {activeTab === "Table" && (
        <TableView
          id={id as string}
          setIsModalNewTaskOpen={setIsModelNewTaskOpen}
        />
      )}
    </div>
  );
};

export default Project;
