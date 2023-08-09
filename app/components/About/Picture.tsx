"use client";
import React from "react";
// import Image from "next/image";
import {Image} from "@nextui-org/react";
import myProfileImage from "@/public/images/crop_img.png"

export const ProfilePicture = ({}) => {

  return (
    <div className="flex-none w-100 h-100">
      <Image
        isBlurred
        width={350}
        src={myProfileImage.src}
        alt="Profile Picture"
        className="my-28"
      />
    </div>
  )
}