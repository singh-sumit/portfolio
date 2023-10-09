"use client";

import {Accordion, AccordionItem, Divider, Link} from "@nextui-org/react";
import React from "react";


const AcademyTitle = ({name, url}) => {

  return (
    <div className="flex items-center justify-between">
      <Link
        isExternal
        href={url}
        color="primary"
        className="tareting-widest"
      >
        {name}
      </Link>
      <Link
        isExternal
        showAnchorIcon
        href={url}
        color="foreground"
        className="text-default-400 underline underline-offset-4 text-small hover:text-primary"
      >
        {url}
      </Link>
    </div>
  )
}

const AcademySubTitle = ({address, level, faculty, marks, duration}) => {

  return (
    <div className="flex items-center justify-between">
      <div>
        {address}
        <div
          className="tareting-widest"
        >
          {level} {faculty}
        </div>
      </div>
      <div className="flex flex-col items-center justify-between">
        <p>
          {duration.start}  -  {duration.end ?? "Present"}
        </p>
        <p>
          {marks.score} {marks.suffix}
        </p>
      </div>
    </div>
  )
}

export const Education = ({}) => {

  const academics = [
    {
      key: "bachelor",
      level: "Bachelor",
      faculty: "Computer Engineering",
      name: "Purwanchal University School of Science & Technology.",
      address: "Biratnagar, Nepal",
      url: "https://pusat.edu.np/",
      marks: {
        score: 3.45,
        suffix: "GPA"
      },
      duration: {
        start: "2016",
        end: "2020"
      }
    },
    {
      key: "plus_two",
      level: "+2",
      faculty: "Science",
      name: "Orchid Public Higher Secondary School",
      address: "Biratnagar, Nepal",
      url: "https://orchidcollege.edu.np/",
      marks: {
        score: 71.40,
        suffix: "%"
      },
      duration: {
        start: "2013",
        end: "2015"
      }
    }
  ]

  return (
    <section
      id="education"
      className="min-h-min p-6"
    >
      <h2 className="text-3xl text-primary text-center mb-10">
        Education.
        <Divider className="w-96 mx-auto"/>
      </h2>
      <div className="flex flex-row justify-around align-center">
        <Accordion
          variant="bordered"
          hideIndicator="false"
          selectionMode="multiple"
          defaultExpandedKeys={academics.map((academy, index) => academy.key)}>
          {
            academics.map((academy, index) => (
                <AccordionItem
                  key={academy.key}
                  aria-label={academy.name}
                  subtitle={
                    <AcademySubTitle
                      key={academy.key}
                      address={academy.address}
                      level={academy.level}
                      faculty={academy.faculty}
                      marks={academy.marks}
                      duration={academy.duration}
                    />
                  }
                  title={
                    <AcademyTitle
                      url={academy.url}
                      name={academy.name}
                    />
                  }
               />
              )
            )
          }
        </Accordion>
      </div>
    </section>
  )
}