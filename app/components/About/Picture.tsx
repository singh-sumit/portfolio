"use client";
import React from "react";
// import Image from "next/image";
import {Image} from "@nextui-org/react";
import myProfileImage from "@/public/images/profile_img.png"

export const ProfilePicture = ({}) => {

  return (
      <Image
        // isBlurred
        width={550}
        src={myProfileImage.src}
        alt="Profile Picture"
        className="my-32"
      />
  )
}