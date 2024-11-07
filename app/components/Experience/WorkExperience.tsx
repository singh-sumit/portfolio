import React from "react";
import { Divider, Link } from "@nextui-org/react";
import { RoleTimeline } from "@/app/components/Experience/RoleTimeline";
import { Chrono } from "react-chrono";
import { TimelineCardDetailedText, TimelineCardTitle, TimelineTitle } from "@/app/components/Experience/TimelineTitle";

import numericMindsFlatLogo from "@/public/images/company/numeric_mind_flat.png";
import nimbleFlatLogo from "@/public/images/company/nimble-flat.png";
import elsightLogo from "@/public/images/company/elsight.jpeg";
import "./index.css";

const logoMap = {
  "numeric_minds": numericMindsFlatLogo,
  "nimble-cr": nimbleFlatLogo,
  "elsight": elsightLogo
}

export const WorkExperience = ({ }) => {

  const work = {
    "name": "Experience",
    "type": "work",
    "companies": [
      {
        "key": "elsight",
        "name": "Elsight",
        "address": "Tel Aviv, Israel",
        "url": "https://www.elsight.com",
        "icon": "numeric_mind.png",
        "company_info": "Elsight provides solutions for robust, reliable connectivity for beyond the visible line of sight (BVLOS) flights of unmanned aerial and ground systems even in the most challenging and remote areas.",
        "company_logo_key": "elsight",
        "position": "Backend Software Engineer",
        "date": {
          "end": null,
          "start": "2023-08"
        },
        "task_performed": [
          "Worked on Backend to create restful api for multi-tennant applications.",
          "Used Kubernetes to programmatically start and stop R server pod, reducing cost of operation.",
          "Mentored juniors on their task.",
          "Worked with celery to schedule the task of creating reports.",
          "Worked on ReactJs & AntDesign to create UI components.",
        ],
        "responsibilities": [
          "Ensure modular, reusable, and excellent quality code through TDD, code reviews, and implementation of best practices.",
          "Make architectural decisions in collaboration with technology experts, and ensure proper technical documentation (UML, sequence, use case, and system design diagrams).",
          "Actively involved in providing business logic to both web and mobile teams",
          "Conduct code reviews and provide constructive feedback to peers to uphold code quality standards",
          "Analyze current systems to maintain integrity and improve architecture.",
          "Collaborate with product owners to maintain action plans, task breakdown, and release planning",
          "Ensure scalability, performance, reliability, and security of the application."
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
        "company_logo_key": "numeric_minds",
        "position": "Software Developer",
        "date": {
          "end": "2023-08",
          "start": "2022-09"
        },
        "task_performed": [
          "Worked on Backend to create restful api for multi-tennant applications.",
          "Used Kubernetes to programmatically start and stop R server pod, reducing cost of operation.",
          "Mentored juniors on their task.",
          "Worked with celery to schedule the task of creating reports.",
          "Worked on ReactJs & AntDesign to create UI components.",
        ],
        "responsibilities": [],
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
        "company_logo_key": "numeric_minds",
        "position": "Python Developer",
        "date": {
          "end": "2022-09",
          "start": "2021-10"
        },
        "task_performed": [
          "Worked with PyQt, in developing Desktop Clinical Analytics Application for report generation.",
          "Created library to convert rich text files (used mostly on the clinical domain) to pdf/doc format with python, to prepare processed reports.",
          "Worked with Django and reactJs on creating Report designer to facilitate automated clinical report generation(Table/ Listing / Figure - TFLs)•",
          "Worked on Low-Code solution for Report (Table/Listing/Figure) generation, through Template Editor to create a custom template.",
        ],
        "responsibilities": [],
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
        "company_logo_key": "nimble-cr",
        "position": "Software Developer",
        "date": {
          "end": "2023-08",
          "start": "2021-10"
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
        "responsibilities": [],
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
            url: logoMap[worked_company.company_logo_key]?.src
          },
          type: "IMAGE"
        }
        ,
        cardSubtitle: worked_company.company_info,
        cardDetailedText:
          <TimelineCardDetailedText
            tasks={worked_company.task_performed}
            responsibilities={worked_company.responsibilities}
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
      classNames = {{
        cardMedia: "company-logo"
      }}
      theme={{
        secondary: "grey",
        cardDetailsColor: "dimgray"
      }}
    />
  );
}