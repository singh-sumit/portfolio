"use client";
import React from "react";
import {Image} from "@nextui-org/react";
import numericMindsFlatLogo from "@/public/images/company/numeric_mind_flat.png";
import nimbleFlatLogo from "@/public/images/company/nimble-flat.png";

const logoMap = {
  "numeric_minds": numericMindsFlatLogo,
  "nimble-cr": nimbleFlatLogo
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