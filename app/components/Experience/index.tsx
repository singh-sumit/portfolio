"use client";

import {Divider} from "@nextui-org/react";
import {WorkExperience} from "@/app/components/Experience/WorkExperience";

export const Experience = ({}) => {

  return (
    <section
      id="experience"
      className="min-h-screen p-4 mt-36"
    >
      <h2 className="text-3xl text-primary text-center">
        Where I've worked.
        <Divider className="w-96 mx-auto"/>
      </h2>
      <div className="flex flex-row justify-around align-center work-timeline">
        <WorkExperience />
      </div>
    </section>
  )
}