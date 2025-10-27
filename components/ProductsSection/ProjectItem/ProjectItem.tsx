import { IProject } from "@/type/project.interface"
import { Github, MoveUpRight } from "lucide-react"
import Image from "next/image"

export default function ProjectItem({
  title, image, description, year, role, liveDemo, githubProject
}: IProject) {
  return (
    <div className="w-full flex lg:flex-row flex-col mt-15">
      <div className="relative w-full h-[200px] overflow-hidden rounded-2xl lg:hidden">
        <Image
          alt={title}
          src={image}
          className="object-contain bg-[#C7C7C7]"
          fill
          unoptimized
        />
      </div>

      <div className="relative w-1/3 overflow-hidden rounded-2xl hidden lg:block">
        <Image
          alt={title}
          src={image}
          className="object-contain bg-[#C7C7C7]"
          fill
          unoptimized
        />
      </div>

      <div className="lg:w-2/3 w-full flex flex-col lg:px-15">
        <div className="w-full flex flex-col">
          <p className="text-2xl font-bold">
            {title}
          </p>
          <p className="mt-2">
            {description}
          </p>
          <p className="border-b-[0.5px] h-[50px] mt-2 flex items-center font-semibold">
            PROJECT INFO
          </p>
          <div className="border-b-[0.5px] flex flex-row justify-between items-center h-[50px] font-semibold">
            <p>Year</p>
            <p className="font-normal">{year}</p>
          </div>
          <div className="border-b-[0.5px] flex flex-row justify-between items-center h-[50px] font-semibold">
            <p>Role</p>
            <p className="font-normal">{role}</p>
          </div>
        </div>

        <div className="flex flex-row mt-10 gap-5">
          {liveDemo &&
            <div className="flex flex-row text-md border rounded-lg underline cursor-pointer font-bold text-[#D3E97A] transition-all duration-300 py-2 px-5 hover:text-white"
              onClick={() => window.open(liveDemo, "_blank",)}
            >
              LIVE DEMO <MoveUpRight />
            </div>
          }
          {githubProject &&
            <div className="flex flex-row text-md border rounded-lg underline cursor-pointer font-bold text-[#D3E97A] transition-all duration-300 py-2 px-5 hover:text-white"
              onClick={() => window.open(githubProject, "_blank")}
            >
              SEE ON GITHUB <Github />
            </div>
          }
        </div>
      </div>
    </div>
  )
}