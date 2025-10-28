"use client";

import Image from "next/image";
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { Github, Linkedin } from "lucide-react";
import { TypingAnimation } from "../ui/typing-animation";

export default function OverviewSection() {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:p-[100px] p-[50px] border-b-[0.5px] z-50">
      <div className="lg:max-w-[500px] font-bold text-7xl flex flex-col">

        <div className="h-40">
          <TypingAnimation
            words={["Hi, I am\nQuoc Vo"]}
            className="whitespace-pre-line h-[100px]"
            typeSpeed={50}
            deleteSpeed={150}
            pauseDelay={2000}
            loop
            startOnView
          />
        </div>

        <p className="font-normal text-xl mt-2">
          A front-end developer passionate about building accessible and user friendly websites.
        </p>

        <div className="flex flex-row mt-10 gap-5">
          <div
            className="bg-[#D3E97A] lg:py-5 lg:px-10 p-2 items-center flex rounded-full text-black text-sm font-bold"
          >
            CONTACT ME VIA
          </div>

          <ShimmerButton
            className="shadow-2xl w-[60px] h-[60px] p-0"
            onClick={() => window.open('https://www.linkedin.com/in/quoc-vo-103b9b279/', '_blank')}
          >
            <div className="text-[#D3E97A]  flex items-center justify-center bg-[#222222] rounded-full cursor-pointer hover:bg-[#535151] transition-all duration-300" >
              <Linkedin />
            </div>
          </ShimmerButton>

          <ShimmerButton
            className="shadow-2xl w-[60px] h-[60px] p-0"
            onClick={() => window.open('https://github.com/QuocVoHoang', '_blank')}
          >
            <div className="text-[#D3E97A]  flex items-center justify-center bg-[#222222] rounded-full cursor-pointer hover:bg-[#535151] transition-all duration-300">
              <Github />
            </div>
          </ShimmerButton>
        </div>
      </div>

      <div className="relative lg:w-[450px] lg:h-[600px] w-[300px] h-[300px] mt-5 lg:mt-0 overflow-hidden lg:rounded-2xl rounded-full lg:ml-[50px]">
        <Image
          alt="avatar"
          src="/images/34.png"
          className="object-contain bg-[#C7C7C7]"
          fill
          unoptimized
        />
      </div>
    </div>
  )
}