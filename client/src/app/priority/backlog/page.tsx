import ReusablePriorityPage from "@/components/Priority";
import { PriorityType } from "@/types/fieldEnum";
import React from "react";

const Backlog = () => {
  return <ReusablePriorityPage priority={PriorityType.Backlog} />;
};

export default Backlog;
