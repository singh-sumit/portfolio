import {Button, Divider, Link} from "@nextui-org/react";
import React from "react";


export const TimelineTitle = ({name,url, position, date}) =>{

  return (
    <div>
    <h2 className="text-primary">
      {position}
    </h2>
      <Link
        isExternal
        showAnchorIcon
        href={url}
        color="warning"
        >
        {name}
      </Link>
      <h6 className="text-small text-default-500">
        {date.start} - {date.end??"Present"}
      </h6>
    </div>
  )
}

export const TimelineCardTitle=({position, company}) =>{
  return (
    <div className="flex align-center justify-between">
      <h2 className="text-primary text-bg">
        {position}
      </h2>
      <Link
        isExternal
        showAnchorIcon
        href={company.url}
        color="warning"
        >
        {company.name}
      </Link>
    </div>
  )
}

export const TimelineCardDetailedText = ({tasks, techStacks}) =>{

  return (
      <div>
        <ul className="list-disc text-xs p-4 text-default-250">
          {
            tasks.map((task, index)=>(
              <li>{task}</li>
              )
            )
          }
        </ul>
        <div
          className=""
        >
          {
            techStacks.map((tech, index)=> (
                <Button color="default" variant="bordered" size="sm"
                        className="text-default m-1"
                >
                  {tech}
                </Button>
            ))
          }
        </div>
      </div>
  )
}