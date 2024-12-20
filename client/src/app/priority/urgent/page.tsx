import ReusablePriorityPage from "@/components/Priority";
import { PriorityType } from "@/types/fieldEnum";
import React from "react";

const Urgent = () => {
  return <ReusablePriorityPage priority={PriorityType.Urgent} />;
};

export default Urgent;
