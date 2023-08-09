"use client";

import {Divider} from "@nextui-org/react";

export const AboutContent = ({content, name}) => {

  return (
    <div className="container grow flex flex-col align-center justify-around">
      <div></div>
      <div className="mb-0">
        <h1>
          Hi, 👋 there I'm
          <p className="text-7xl text-primary">
            {name}
          </p>
          <Divider className="my-4" />
          {content.headline}
        </h1>
        <p>
          {content.summary}
        </p>
      </div>
    </div>
  )
}