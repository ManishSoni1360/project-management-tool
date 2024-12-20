import ReusablePriorityPage from "@/components/Priority";
import { PriorityType } from "@/types/fieldEnum";
import React from "react";

const Low = () => {
  return <ReusablePriorityPage priority={PriorityType.Low} />;
};

export default Low;
