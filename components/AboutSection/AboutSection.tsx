import { Github, Linkedin } from "lucide-react";

const skills: string[] = [
  "HTML", "css", "Javascript", "ReactJS", "NextJS", "Redux", "Jotai", "Zustand", "MUI", "Tailwindcss", "Python", "FastAPI", "Git", "Jira", "PostgresQL", "AWS", "GGCP"
]

export default function AboutSection() {
  return (
    <div className="flex flex-col lg:p-[100px] p-[50px] border-b-[0.5px] min-h-[h-screen-minus-header] lg:space-y-50 space-y-20">
      {/* about me */}
      <div className="flex lg:flex-row flex-col items-start">
        <div className="lg:w-1/3 w-full flex justify-start items-start">
          <p className="font-bold text-5xl ">ABOUT ME</p>
        </div>
        <div className="lg:w-2/3 w-full flex flex-col">
          <p className="font-bold text-xl">
            I am a Frontend Developer based in Ho Chi Minh city.
          </p>
          <p className="font-normal mt-3">
            As an Frontend Developer, I seek opportunities to apply and expand my knowledge of frontend and
            backend technologies in real- world projects.
          </p>
          <p>
            My long-term goal is to grow into a well-rounded developer capable of
            building scalable, user-focused web applications and contributing
            meaningfully to a collaborative development team.
          </p>

          <div className="flex flex-row mt-10 gap-5">
            <div
              className="bg-[#D3E97A] lg:p-5 lg:px-10 px-2 flex items-center cursor-pointer rounded-full text-black hover:bg-[#a1b93a] transition-all duration-300 text-sm font-bold"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/files/vohoangquoc_cv.pdf";
                link.download = "cv.pdf";
                link.click();
              }}
            >
              DOWNLOAD RESUME
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
      </div>

      {/* my education */}
      <div>
        <div className="flex lg:flex-row flex-col items-start">
          <div className="lg:w-1/3 w-full flex justify-start items-start mb-5 lg:mb-0">
            <p className="font-bold text-5xl ">EDUCATION</p>
          </div>

          <div className="lg:w-2/3 w-full">
            <div className="flex mb-6 border-b border-gray-200 pb-4">
              <div className="w-1/4 pr-4 border-r border-gray-400">
                <p className="font-bold text-lg text-white">2019 - 2023</p>
              </div>

              <div className="w-3/4 pl-6">
                <h3 className="text-xl font-semibold text-[#D3E97A] mb-1">Ho Chi Minh University of Technology and Education</h3>
                <p className="text-white mb-1">Electronics and Telecommunications</p>
                <p className="text-sm text-white">GPA: 2.97/4</p>
              </div>
            </div>

            <div className="flex mb-6">
              <div className="w-1/4 pr-4 border-r border-gray-400">
                <div className="font-bold text-lg text-white">2024 - present <br /> <p className="text-sm lg:text-lg">(expexted: 6-2026)</p></div>
              </div>
              <div className="w-3/4 pl-6">
                <h3 className="text-xl font-semibold text-[#D3E97A] mb-1">Ho Chi Minh University of Technology</h3>
                <p className="text-white mb-1">Master of Computer Science.</p>
                <p className="text-sm text-white">3.2/4</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* my certification */}
      <div className="flex lg:flex-row flex-col items-start">
        <div className="lg:w-1/3 w-full flex justify-start items-start">
          <p className="font-bold text-5xl ">CERTIFICATION</p>
        </div>
        <div className="lg:w-2/3 w-full ml-5 flex flex-col">
          <div className="w-full flex flex-col">
            <p className="font-bold text-lg text-white">
              Toeic 4 skills
            </p>
            <p>- Listening: 410</p>
            <p>- Reading: 320</p>
            <p>- Speaking: 130</p>
            <p>- Writing: 180</p>
          </div>
          <div
            className="mt-3 w-fit bg-[#D3E97A] py-3 px-5 cursor-pointer rounded-full text-black hover:bg-[#a1b93a] transition-all duration-300 text-sm font-bold"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/files/toeic.pdf";
              link.download = "toeic.pdf";
              link.click();
            }}
          >
            CLICK TO VIEW
          </div>
        </div>
      </div>

      {/* my capabilities */}
      <div className="flex lg:flex-row flex-col items-start">
        <div className="lg:w-1/3 w-full flex justify-start items-start">
          <p className="font-bold text-5xl ">MY CAPABILITIES</p>
        </div>
        <div className="lg:w-2/3 w-full flex flex-col">
          <p>
            I am always looking to add more skills. I am a fast learner, committed to professional growth, and enjoy applying new competencies to achieve project goals and drive innovation.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="border rounded-2xl px-5 py-2 font-semibold"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* my exp */}
      <div>
        <div className="flex lg:flex-row flex-col items-start">
          <div className="lg:w-1/3 w-full flex justify-start items-start mb-5 lg:mb-0">
            <p className="font-bold text-5xl ">EXPERIENCE</p>
          </div>

          <div className="lg:w-2/3 w-full">
            <div className="flex mb-6 border-b border-gray-200 pb-4">
              <div className="w-1/4 pr-4 border-r border-gray-400">
                <p className="font-bold lg:text-lg text-sm text-white">06/2022 - 09/2022</p>
              </div>

              <div className="w-3/4 pl-6">
                <h3 className="text-xl font-semibold text-[#D3E97A] mb-1">Ban Vien Corporation</h3>
                <p className="text-white mb-1">Mobile Developer Intern</p>
                <p className="text-sm text-white">
                  Mobile (Android) Developer Intern — Assists in designing, developing, testing, and maintaining Android applications.
                  Works closely with senior developers to implement new features, fix bugs, and optimize app performance.
                  Gains hands-on experience with Android SDK, Kotlin/Java, REST APIs,
                  and UI/UX best practices while contributing to real-world mobile projects.
                </p>
              </div>
            </div>

            <div className="flex mb-6 pb-4">
              <div className="w-1/4 pr-4 border-r border-gray-400">
                <p className="font-bold lg:text-lg text-sm text-white">03/2024 - 05/2025</p>
              </div>

              <div className="w-3/4 pl-6">
                <h3 className="text-xl font-semibold text-[#D3E97A] mb-1">viAct.ai</h3>
                <p className="text-white mb-1">Frontend Developer</p>
                <p className="text-sm text-white">
                  Frontend Developer — Builds and maintains user interfaces for web applications using modern technologies
                  like HTML, CSS, JavaScript, and frameworks such as React or Next.js.
                  Works closely with designers and backend developers to create responsive, accessible, and
                  high-performance web experiences. Responsible for implementing UI/UX designs, optimizing performance,
                  and ensuring cross-browser compatibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}