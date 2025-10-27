import { useRef} from "react"

export const useHome = () => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const overviewRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement | null>) => {
    const section = sectionRef.current;
    const navbar = navbarRef.current;
    if (!section) return;

    const navbarHeight = navbar?.offsetHeight ?? 0;
    const sectionTop = section.getBoundingClientRect().top;
    const offset = sectionTop + window.pageYOffset - navbarHeight;

    window.scrollTo({
      top: offset,
      behavior: 'smooth',
    });
  };

  return {
    navbarRef,
    overviewRef,
    aboutRef,
    projectsRef,

    scrollToSection
  }
}