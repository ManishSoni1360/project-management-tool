import ReusablePriorityPage from "@/components/Priority";
import { PriorityType } from "@/types/fieldEnum";
import React from "react";

const High = () => {
  return <ReusablePriorityPage priority={PriorityType.High} />;
};

export default High;
