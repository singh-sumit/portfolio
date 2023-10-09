"use client";
import {Button, Divider, Link, Tooltip} from "@nextui-org/react";
import React from "react";
import {
  GithubFilled,
  LinkedinFilled,
  MailFilled,
  MailOutlined,
  MediumCircleFilled, MediumOutlined,
  MediumSquareFilled
} from "@ant-design/icons";

const emailAddress = "hello@sumitsingh.com.np";

const socials = [
  {
    key: "github",
    link: "https://github.com/singh-sumit"
  },
  {
    key: "medium",
    link: "https://itstimus.medium.com/"
  },
  {
    key: "mail",
    link: "mailto:hello@sumitsingh.com.np"
  },
  {
    key: "linkedin",
    link: "https://www.linkedin.com/in/er-sumitsingh"
  }
]

const getIconComponentForSocial = (platformName) => {
  const iconMapToSocial = {
    "github": <GithubFilled/>,
    "mail": <MailOutlined />,
    "linkedin": <LinkedinFilled/>,
    "medium": <MediumOutlined/>
  }
  return iconMapToSocial[platformName]
}

export const Contact = ({}) => {

  return (
    <section
      id="contact"
      className="min-h-fit p-4 mt-36 mb-10 text-center"
    >
      <h2 className="text-3xl text-primary ">
        What's Next ?
        <Divider className="w-96 mx-auto"/>
      </h2>
      <p className="text-default-500 p-5 m-4">
        Whether there's an opportunity you'd like to discuss, a question on your mind, or a simple greeting you'd like
        to extend, I'll make every effort to respond as soon as possible!
      </p>
      <Tooltip
        content={emailAddress}>
        <Button
          color="primary"
          variant="ghost"
        >
          <Link
            isExternal
            showAnchorIcon
            href={`mailto:${emailAddress}`}
            className="text-white font-semibold tracking-widest hover:text-black"
          >
            Say Hello
          </Link>
        </Button>
      </Tooltip>

      <div className="flex justify-between mx-auto w-1/6 sm:w-1/3 my-10">
        {socials.map((social, index) => {
          return (
            <Link
              isExternal
              showAnchorIcon
              href={social.link}
              anchorIcon={getIconComponentForSocial(social.key)}
              className="text-3xl"
            />
          )
        })}
      </div>

    </section>
  )
}