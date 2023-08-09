"use client";
import React from "react";
import {Image} from "@nextui-org/react";
import numericMindsLogo from "@/public/images/company/numeric_mind.jpeg";
import nimbleLogo from "@/public/images/company/nimble.jpeg";

const logoMap = {
  "numeric_minds": numericMindsLogo,
  "nimble-cr": nimbleLogo
}

export const CompanyIcon = ({companyKey}) => {

  return (
    <div className="flex-none w-100 h-100">
      <Image
        isBlurred
        width={350}
        src={logoMap[companyKey].src}
        alt="Profile Picture"
        className="my-28"
      />
    </div>
  )
}