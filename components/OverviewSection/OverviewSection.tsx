import Image from "next/image";
import { Button } from "../ui/button";
import { Github, Linkedin } from "lucide-react";

export default function OverviewSection() {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:p-[100px] p-[50px] border-b-[0.5px]">
      <div className="lg:max-w-[500px] font-bold text-7xl flex flex-col">
        <p>Hi, I am</p>
        <p>Quoc Vo</p>

        <p className="font-normal text-xl mt-2">
          A front-end developer passionate about building accessible and user friendly websites.
        </p>

        <div className="flex flex-row mt-10 gap-5">
          <div
            className="bg-[#D3E97A] lg:py-5 lg:px-10 p-2 items-center flex rounded-full text-black text-sm font-bold"
          >
            CONTACT ME VIA
          </div>

          <div className="text-[#D3E97A] w-[60px] h-[60px] flex items-center justify-center bg-[#222222] rounded-full cursor-pointer hover:bg-[#535151] transition-all duration-300"
            onClick={() => window.open('https://www.linkedin.com/in/quoc-vo-103b9b279/', '_blank')}
          >
            <Linkedin />
          </div>

          <div className="text-[#D3E97A] w-[60px] h-[60px] flex items-center justify-center bg-[#222222] rounded-full cursor-pointer hover:bg-[#535151] transition-all duration-300"
            onClick={() => window.open('https://github.com/QuocVoHoang', '_blank')}
          >
            <Github />
          </div>
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