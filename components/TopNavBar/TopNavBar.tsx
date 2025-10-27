"use client"

interface Props {
  navbarRef: React.RefObject<HTMLDivElement | null>
  overviewRef: React.RefObject<HTMLDivElement | null>
  aboutRef: React.RefObject<HTMLDivElement | null>
  projectsRef: React.RefObject<HTMLDivElement | null>
  scrollToSection: (sectionRef: React.RefObject<HTMLDivElement | null>) => void
}

export default function TopNavBar({
  navbarRef, overviewRef, aboutRef, projectsRef, scrollToSection
}: Props) {
  return (
    <div
      ref={navbarRef}
      className="max-h-[60px] fixed top-0 left-0 right-0 flex flex-row justify-between text-lg px-[5%] lg:px-[10%] z-50 bg-black"
    >
      <div className="lg:p-4 p-1 font-bold">
        Quoc Vo
      </div>

      <div className="flex justify-center lg:gap-8 gap-2 lg:p-4 p-1">
        <button
          onClick={() => scrollToSection(overviewRef)}
          className="cursor-pointer"
        >
          Overview
        </button>
        <button
          onClick={() => scrollToSection(aboutRef)}
          className="cursor-pointer"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection(projectsRef)}
          className="cursor-pointer"
        >
          Projects
        </button>
      </div>
      
    </div>
  )
}