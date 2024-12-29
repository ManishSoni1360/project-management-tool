import Header from "@/components/Header";
import React from "react";
import SkeletonLoader from "../skeletonLoader";

const ProjectLoader = () => {
  return (
    <div className="container h-full w-[100%] bg-gray-100 bg-transparent p-8">
      <Header name="Project Management Dashboard" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-lg bg-white p-4 shadow dark:bg-dark-secondary">
          <SkeletonLoader width="80%" height="24px" className="mb-4" />
          <SkeletonLoader width="100%" height="300px" />
        </div>
        <div className="rounded-lg bg-white p-4 shadow dark:bg-dark-secondary">
          <SkeletonLoader width="80%" height="24px" className="mb-4" />
          <SkeletonLoader width="100%" height="300px" />
        </div>
        <div className="rounded-lg bg-white p-4 shadow dark:bg-dark-secondary md:col-span-2">
          <SkeletonLoader width="80%" height="24px" className="mb-4" />
          <SkeletonLoader width="100%" height="400px" />
        </div>
      </div>
    </div>
  );
};

export default ProjectLoader;
