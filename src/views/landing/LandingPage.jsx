import { ArrowDown } from "lucide-react";
import AboutSection from "./AboutSection";
import coolBackground from "../../assets/cool-background.png";
import PorjectsList from "../projects/PorjectsList";
import Skills from "../skills/Skills";
export default function LandingPage() {
  return (
    <>
      <div className="container h-screen relative">
        <div
          className={`background__landing__page absolute -z-50 background h-full w-full bg-purple-300 opacity-10`}
        >
          <img
            src={coolBackground}
            alt="background"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="h-full text flex justify-center items-center flex-col">
          <p className="text-xl font-semibold">Full Stack Web Developer</p>
          <h1 className="text-5xl font-bold text-purple-500">Alaa Adel</h1>
          <button
            className="btn btn-outline btn-primary mt-10 rounded-full animate-bounce"
            onClick={() =>
              window.scrollTo({
                top: document.querySelector(".about").offsetTop,
                behavior: "smooth",
              })
            }
          >
            <ArrowDown />
          </button>
        </div>
      </div>
      <AboutSection />
      <PorjectsList />
      <Skills />
    </>
  );
}
