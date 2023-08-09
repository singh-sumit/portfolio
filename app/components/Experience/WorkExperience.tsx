import React from "react";
import {Accordion, AccordionItem, Avatar, Divider, Link} from "@nextui-org/react";

import numericMindsLogo from "@/public/images/company/numeric_mind.jpeg";
import nimbleLogo from "@/public/images/company/nimble.jpeg";
import {RoleTimeline} from "@/app/components/Experience/RoleTimeline";

const logoMap = {
  "numeric_minds": numericMindsLogo,
  "nimble-cr": nimbleLogo
}


const CompanyTitle = ({name, url}) => {

  return (
    <div className="flex items-center justify-between">
      <Link
        isExternal
        href={url}
        color="primary"
        className="p-2"
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

const ExperienceInCompany = ({company_info, roles}) =>{

  return (
    <>
      <p>
        {company_info}
      </p>
      <Divider />
      <RoleTimeline />
    </>
  )
}
export const WorkExperience = ({}) => {
  const work = {
    "name": "Experience",
    "type": "work",
    "company": [
      {
        "key": "numeric_minds",
        "name": "Numeric Minds",
        "address": "Kathmandu, Nepal",
        "url": "https://www.numericmind.com",
        "icon": "numeric_mind.png",
        "company_info": "NumericMind is a statistical data solution company providing full statistical analysis services primarily to the clients from Biotech, Healthcare, and Pharmaceuticals industries.",
        "roles": [
          {
            "position": "Software Developer",
            "date": {
              "end": null,
              "start": "2022-09-23"
            },
            "task_performed": [
              "Worked on Backend to create restful api for multi-tennant applications.",
              "Used Kubernetes to programmatically start and stop R server pod, reducing cost of operation.",
              "Mentored juniors on their task.",
              "Worked with celery to schedule the task of creating reports.",
              "Worked on ReactJs & AntDesign to create UI components.",
            ],
            "tech_stack": [
              {
                name: "FastApi",
                icon_url: "",
              }
            ]
          },
          {
            "position": "Python Developer",
            "date": {
              "end": "2022-09-22T17:06:33.000Z",
              "start": "2021-10-21T17:00:31.000Z"
            },
            "task_performed": [
              "Worked with PyQt, in developing Desktop Clinical Analytics Application for report generation.",
              "Created library to convert rich text files (used mostly on the clinical domain) to pdf/doc format with python, to prepare processed reports.",
              "Worked with Django and reactJs on creating Report designer to facilitate automated clinical report generation(Table/ Listing / Figure - TFLs)•",
              "Worked on Low-Code solution for Report (Table/Listing/Figure) generation, through Template Editor to create a custom template.",
            ],
            "tech_stack": [
              {
                name: "PyQt",
                icon_url: "",
              }
            ]
          }
        ]
      },
      {
        "key": "nimble-cr",
        "name": "Nimble Clinical Research.",
        "address": "New Jersey, USA",
        "url": "https://nimble-cr.com",
        "icon": "nimble.png",
        "company_info": "Nimble Clinical Research is a US-based research company dedicated towards creating cutting-edge AI based platform for pharmaceutical and biotech companies.\nNumeric Minds is Nepali partnered company for Nimble Clinical Research.",
        "roles": [
          {
            "position": "Software Developer",
            "date": {
              "end": null,
              "start": "2022-09-23"
            },
            "task_performed": [
              "Worked on Backend to create restful api for multi-tennant applications.",
              "Used Kubernetes to programmatically start and stop R server pod, reducing cost of operation.",
              "Mentored juniors on their task.",
              "Worked with celery to schedule the task of creating reports.",
              "Worked on ReactJs & AntDesign to create UI components.",
            ],
            "tech_stack": [
              {
                name: "FastApi",
                icon_url: "",
              }
            ]
          },
          {
            "position": "Python Developer",
            "date": {
              "end": "2022-09-22T17:06:33.000Z",
              "start": "2021-10-21T17:00:31.000Z"
            },
            "task_performed": [
              "Worked with PyQt, in developing Desktop Clinical Analytics Application for report generation.",
              "Created library to convert rich text files (used mostly on the clinical domain) to pdf/doc format with python, to prepare processed reports.",
              "Worked with Django and reactJs on creating Report designer to facilitate automated clinical report generation(Table/ Listing / Figure - TFLs)•",
              "Worked on Low-Code solution for Report (Table/Listing/Figure) generation, through Template Editor to create a custom template.",
            ],
            "tech_stack": [
              {
                name: "PyQt",
                icon_url: "",
              }
            ]
          }
        ]
      }
    ],
  }
  const
    defaultContent =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion selectionMode="multiple" defaultExpandedKeys={[work.company[0].key]}>
      {
        work.company.map((workedCompany, index) => (
            <AccordionItem
              key={workedCompany.key}
              aria-label={workedCompany.name}
              startContent={
                <Avatar
                  isBordered
                  color="primary"
                  radius="full"
                  className="w-20 h-20 text-large object-cover"
                  src={logoMap[workedCompany.key].src}
                />
              }
              subtitle={workedCompany.address}
              title={<CompanyTitle url={workedCompany.url} name={workedCompany.name} /> }
            >
              <ExperienceInCompany
                company_info={workedCompany.company_info}
                roles={workedCompany.roles}
                />
            </AccordionItem>
          )
        )
      }
    </Accordion>
  );
}