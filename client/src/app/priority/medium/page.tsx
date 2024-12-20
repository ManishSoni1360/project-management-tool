import ReusablePriorityPage from "@/components/Priority";
import { PriorityType } from "@/types/fieldEnum";
import React from "react";

const Medium = () => {
  return <ReusablePriorityPage priority={PriorityType.Medium} />;
};

export default Medium;
