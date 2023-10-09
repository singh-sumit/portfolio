import React from "react";
import {Divider, Link} from "@nextui-org/react";
import {RoleTimeline} from "@/app/components/Experience/RoleTimeline";
import {Chrono} from "react-chrono";
import {TimelineCardDetailedText, TimelineCardTitle, TimelineTitle} from "@/app/components/Experience/TimelineTitle";

import numericMindsFlatLogo from "@/public/images/company/numeric_mind_flat.png";
import nimbleFlatLogo from "@/public/images/company/nimble-flat.png";
import "./index.css";

const logoMap = {
  "numeric_minds": numericMindsFlatLogo,
  "nimble-cr": nimbleFlatLogo
}

export const WorkExperience = ({}) => {

  const work = {
    "name": "Experience",
    "type": "work",
    "companies": [
      {
        "key": "numeric_minds",
        "name": "Numeric Minds",
        "address": "Kathmandu, Nepal",
        "url": "https://www.numericmind.com",
        "icon": "numeric_mind.png",
        "company_info": "NumericMind is a statistical data solution company providing full statistical analysis services primarily to the clients from Biotech, Healthcare, and Pharmaceuticals industries.",
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
          "Django", "FastApi",
          "Python",
          "Docker", "Kubernetes",
          "Javascript", "ReactJs", "AntD",
          "Git", "Bitbucket", "Jira", "Microsoft Office",
          "Communication Skill", "Leadership"
        ],
      },
      {
        "key": "numeric_minds",
        "name": "Numeric Minds",
        "address": "Kathmandu, Nepal",
        "url": "https://www.numericmind.com",
        "icon": "numeric_mind.png",
        "company_info": "NumericMind is a statistical data solution company providing full statistical analysis services primarily to the clients from Biotech, Healthcare, and Pharmaceuticals industries.",
        "position": "Python Developer",
        "date": {
          "end": "2022-09-22",
          "start": "2021-10-21"
        },
        "task_performed": [
          "Worked with PyQt, in developing Desktop Clinical Analytics Application for report generation.",
          "Created library to convert rich text files (used mostly on the clinical domain) to pdf/doc format with python, to prepare processed reports.",
          "Worked with Django and reactJs on creating Report designer to facilitate automated clinical report generation(Table/ Listing / Figure - TFLs)•",
          "Worked on Low-Code solution for Report (Table/Listing/Figure) generation, through Template Editor to create a custom template.",
        ],
        "tech_stack": [
          "Django", "FastApi",
          "Python",
          "Docker", "Kubernetes",
          "Javascript", "ReactJs", "AntD",
          "Git", "Bitbucket", "Jira", "Microsoft Office",
        ],
      },
      {
        "key": "nimble-cr",
        "name": "Nimble Clinical Research.",
        "address": "New Jersey, USA",
        "url": "https://nimble-cr.com",
        "icon": "nimble.png",
        "company_info": "Nimble Clinical Research is a US-based research company dedicated towards creating cutting-edge AI based platform for pharmaceutical and biotech companies.\nNumeric Minds is Nepali partnered company for Nimble Clinical Research.",
        "position": "Software Developer",
        "date": {
          "end": "2023-08-11",
          "start": "2021-10-21"
        },
        "task_performed": [
          "Worked on Backend to create restful api for multi-tennant applications.",
          "Used Kubernetes to programmatically start and stop R server pod, reducing cost of operation.",
          "Mentored juniors on their task.",
          "Worked with celery to schedule the task of creating reports.",
          "Worked on ReactJs & AntDesign to create UI components.",
          "Worked with PyQt, in developing Desktop Clinical Analytics Application for report generation.",
          "Created library to convert rich text files (used mostly on the clinical domain) to pdf/doc format with python, to prepare processed reports.",
          "Worked with Django and reactJs on creating Report designer to facilitate automated clinical report generation(Table/ Listing / Figure - TFLs)•",
          "Worked on Low-Code solution for Report (Table/Listing/Figure) generation, through Template Editor to create a custom template.",
        ],
        "tech_stack": [
          "Django",
          "Python",
          "Javascript", "ReactJs", "AntD",
          "Git", "Bitbucket", "Jira", "Microsoft Office",
          "Communication Skill", "Leadership"
        ],
      },
    ],
  }

  const data = work.companies.map((worked_company, index) => {

    const company = {
      name: worked_company.name,
      url: worked_company.url
    }
    return (
      {
        title: <TimelineTitle
          name={worked_company.name}
          url={worked_company.url}
          position={worked_company.position}
          date={worked_company.date}
        />,
        cardTitle: <TimelineCardTitle
          position={worked_company.position}
          company={company}
        />,
        media:
          {
            name: worked_company.name,
            source: {
              url: logoMap[worked_company.key].src
            },
            type: "IMAGE"
          }
        ,
        cardSubtitle: worked_company.company_info,
        cardDetailedText:
          <TimelineCardDetailedText
            tasks={worked_company.task_performed}
            techStacks={worked_company.tech_stack}
          />
      }
    )
  })

  return (
    <Chrono
      mode="VERTICAL_ALTERNATING"
      focusActiveItemOnLoad
      cardHeight={200}
      slideShow
      enableDarkToggle
      items={data}
      activeItemIndex={7}
      className="m-4 p-4"
      theme={{
        secondary: "grey",
        cardDetailsColor: "dimgray"
      }}
    />
  );
}