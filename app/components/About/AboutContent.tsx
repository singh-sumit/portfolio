"use client";

import { Divider } from "@nextui-org/react";

export const AboutContent = ({ content, name, title }) => {
  const today_year = new Date().getFullYear()
  const expertise_years = today_year - content.work_start_year
  content.summary = content.summary.replace('##EXPERTISE_YEAR##', expertise_years)

  return (
    <div className="container grow flex flex-col align-center justify-around"
    >
      <div></div>
      <div className="mb-0">
        <h1 className="text-3xl">
          Hi, <span className="text-5xl"> 👋 </span> there I'm
          <p className="text-7xl text-primary">
            {title} {name}
          </p>
        </h1>
        <Divider className="my-4" />
        <p className="text-default-500">
          {content.headline}
        </p>
        <br />
        <p>
          {content.summary}
        </p>
      </div>
    </div>
  )
}