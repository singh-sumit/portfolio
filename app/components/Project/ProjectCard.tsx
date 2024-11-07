import React from "react";
import {Button, Card, CardBody, CardFooter, CardHeader, Divider, Image, Link} from "@nextui-org/react";
import {GithubFilled} from "@ant-design/icons";

export const ProjectCard = ({projects}) => {
  // const contents = [1, 2, 3, 4]

  return (
    <div className="mx-auto flex-col align-center justify-around my-10">
      {
        projects.map((project, index) =>
          (index % 2 == 0) ?
            <div className="relative mb-24">
              <div
                className="w-[60%]"
              >
                <Image
                  alt="Project Image"
                  className="object-cover"
                  height={200}
                  isZoomed
                  isBlurred
                  shadow="sm"
                  loading="lazy"
                  src={project.image}
                  width="100%"
                />
              </div>
              <Card
                isBlurred
                className="border-none bg-background/60 light:bg-success-600/60 h-96 w-[45%] absolute left-[50%] top-[35%] z-10
                text-default-50
                "
                shadow="sm"
              >
                <CardHeader>
                  <div className="flex align-center justify-between w-full">
                    <Link
                      isExternal
                      showAnchorIcon
                      className="text-md text-default font-semibold underline underline-offset-4"
                      href={project.link.live??"#"}
                    >
                      {project.title}
                    </Link>
                    <div className="flex justify-between">
                      {project.link.live ? <Link
                        isExternal
                        showAnchorIcon
                        className="text-small text-default-100 tracking-widest underline underline-offset-4"
                        href={project.link.live}
                      >
                        Live
                      </Link> : <></>
                      }
                      {project.link.github ?
                        <Link
                          isExternal
                          showAnchorIcon
                          anchorIcon={<GithubFilled className="text-3xl"/>}
                          className="text-default-100"
                          href={project.link.github}
                        /> : <></>
                      }
                    </div>
                  </div>
                </CardHeader>
                <Divider/>
                <CardBody>
                  <h4>{project.short_intro}</h4>
                  <ul className="list-disc text-xs p-4 text-default-250">
                    {
                      project.description.map((descriptionPoint, indx)=>
                        <li>{descriptionPoint}</li>
                      )
                    }
                  </ul>
                </CardBody>
                <Divider/>
                <CardFooter>
                  <div className="my-5">
                    {
                      project.tech_stack.map((tech, index) => (
                        <Button color="default" variant="bordered" size="sm"
                                className="text-default m-1"
                        >
                          {tech}
                        </Button>
                      ))
                    }
                  </div>

                </CardFooter>
              </Card>
            </div> :
            <div className="relative mb-24 h-[35rem]">
              <Card
                isBlurred
                className="border-none bg-background/60 dark:bg-success-600/60 h-96 w-[45%] absolute  right-[50%] top-[35%] z-20 text-default-50"
                shadow="sm"
              >
                <CardHeader>
                  <div className="flex align-center justify-between w-full">
                    <Link
                      isExternal
                      showAnchorIcon
                      className="text-md text-default font-semibold underline underline-offset-4"
                      href={project.link.live??"#"}
                    >
                      {project.title}
                    </Link>
                    <div className="flex justify-between">
                      {project.link.live ? <Link
                        isExternal
                        showAnchorIcon
                        className="text-small text-default-100 tracking-widest underline underline-offset-4"
                        href={project.link.live}
                      >
                        Live
                      </Link> : <></>
                      }
                      {project.link.github ?
                        <Link
                          isExternal
                          showAnchorIcon
                          anchorIcon={<GithubFilled className="text-3xl"/>}
                          className="text-default-100"
                          href={project.link.github}
                        /> : <></>
                      }
                    </div>
                  </div>
                </CardHeader>
                 <Divider/>
                <CardBody>
                  <h4>{project.short_intro}</h4>
                  <ul className="list-disc text-xs p-4 text-default-250">
                    {
                      project.description.map((descriptionPoint, indx)=>
                        <li>{descriptionPoint}</li>
                      )
                    }
                  </ul>
                </CardBody>
                <Divider/>
                <CardFooter>
                  <div className="my-5">
                    {
                      project.tech_stack.map((tech, index) => (
                        <Button color="default" variant="bordered" size="sm"
                                className="text-default m-1"
                        >
                          {tech}
                        </Button>
                      ))
                    }
                  </div>

                </CardFooter>
              </Card>
              <div
                className="w-[60%] absolute right-0 top-0"
              >
                <Image
                  alt="Project Image"
                  className="object-cover"
                  height={200}
                  isZoomed
                  // isBlurred
                  shadow="sm"
                  loading="lazy"
                  src={project.image}
                  width="100%"
                />
              </div>
            </div>
        )
      }
    </div>
  );
}