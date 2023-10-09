"use client";
import {Divider} from "@nextui-org/react";
import {ProjectCard} from "@/app/components/Project/ProjectCard";

export const Project = ({}) => {

  const projects = {
    "contract": [
      {
        "image": "https://camo.githubusercontent.com/c612c34bf857840d4c9a97051eae4186f4fdc0299519ea7db4c69630f85a8040/68747470733a2f2f696d6775722e636f6d2f77655a766546312e6a7067",
        "title": "Nimble Workspace",
        "link": {
          "github": null,
          "live": "https://nimble-cr.com/nimble-workspace/"
        },
        "short_intro": "Make beautiful websites regardless of your design experience.",
        "description": [
          "Some functionality",
          "Some functionality",
          "Some functionality",
          "Some functionality",
          "Some functionality",
          "Some functionality",
          "Some functionality",
          "Some functionality",
          "Some functionality",
          "Some functionality",
          "Some functionality",
          "Some functionality",
          "Some functionality",
          "Some functionality",
          "Some functionality",
        ],
        "tech_stack": [
          "Django", "FastApi",
          "Python",
          "Docker", "Kubernetes",
          "Javascript", "ReactJs", "AntD",
          "Git", "Bitbucket", "Jira", "Microsoft Office",
        ]
      },
      {
        "image": "https://camo.githubusercontent.com/c612c34bf857840d4c9a97051eae4186f4fdc0299519ea7db4c69630f85a8040/68747470733a2f2f696d6775722e636f6d2f77655a766546312e6a7067",
        "title": "Nimble Workspace",
        "link": {
          "github": null,
          "live": "test.nwork.space"
        },
        "short_intro": "Make beautiful websites regardless of your design experience.",
        "description": [
          "Some functionality",
          "Some functionality",
          "Some functionality",
          "Some functionality",
          "Some functionality",
          "Some functionality",
          "Some functionality",
          "Some functionality",
          "Some functionality",
          "Some functionality",
          "Some functionality",
          "Some functionality",
          "Some functionality",
          "Some functionality",
          "Some functionality",
        ],
        "tech_stack": [
          "Django", "FastApi",
          "Python",
          "Docker", "Kubernetes",
          "Javascript", "ReactJs", "AntD",
          "Git", "Bitbucket", "Jira", "Microsoft Office",
        ]
      }
    ],
    "personal": [
      {
        "image": "https://camo.githubusercontent.com/c612c34bf857840d4c9a97051eae4186f4fdc0299519ea7db4c69630f85a8040/68747470733a2f2f696d6775722e636f6d2f77655a766546312e6a7067",
        "title": "Multi-Vendor E-commerce Web App",
        "link": {
          "github": "https://github.com/singh-sumit/django-ecommerce-project",
          "live": "http://iamsumit.pythonanywhere.com/"
        },
        "short_intro": "Make beautiful websites regardless of your design experience.",
        "description": [
          "Some functionality",
          "Some functionality",
          "Some functionality",
          "Some functionality",
          "Some functionality",
          "Some functionality",
          "Some functionality",
          "Some functionality",
          "Some functionality",
          "Some functionality",
          "Some functionality",
          "Some functionality",
          "Some functionality",
          "Some functionality",
          "Some functionality",
        ],
        "tech_stack": [
          "Django", "FastApi",
          "Python",
          "Docker", "Kubernetes",
          "Javascript", "ReactJs", "AntD",
          "Git", "Bitbucket", "Jira", "Microsoft Office",
        ]
      },
      {
        "image": "https://camo.githubusercontent.com/18740a00a627f6a661825eb786847cfa8ef733e0ca5310af14ca10b31cac047b/68747470733a2f2f696d6775722e636f6d2f50587a5a4775422e6a7067",
        "title": "Vehicle Renting Web App",
        "link": {
          "github": "https://github.com/singh-sumit/django-ecommerce-project",
          "live": "http://iamsumit.pythonanywhere.com/"
        },
        "short_intro": "Make beautiful websites regardless of your design experience.",
        "description": [
          "Some functionality",
          "Some functionality",
          "Some functionality",
          "Some functionality",
          "Some functionality",
          "Some functionality",
          "Some functionality",
          "Some functionality",
          "Some functionality",
          "Some functionality",
          "Some functionality",
          "Some functionality",
          "Some functionality",
          "Some functionality",
          "Some functionality",
        ],
        "tech_stack": [
          "Django", "FastApi",
          "Python",
          "Docker", "Kubernetes",
          "Javascript", "ReactJs", "AntD",
          "Git", "Bitbucket", "Jira", "Microsoft Office",
        ]
      }
    ]
  }

  return (
    <section
      id="projects"
      className="min-h-screen p-4 mt-36"
    >
      <h2 className="text-3xl text-primary text-center mb-9">
        Noteworthy Projects Worked On
        <Divider className="w-[70%] mx-auto"/>
      </h2>
      <ProjectCard
        projects={projects.contract}
      />
      <h2 className="text-3xl text-primary text-center mb-9">
        Personal Projects
        <Divider className="w-[25%] mx-auto"/>
      </h2>
       <ProjectCard
        projects={projects.personal}
       />
    </section>
  )
}