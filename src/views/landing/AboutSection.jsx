import { useContext } from "react";
import myImage from "../../assets/myImage.jpg";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="about bg-gray-100 py-16 px-6 md:px-12 lg:px-20 flex flex-col items-center"
    >
      <div className="container max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-10">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg">
            <img
              src={myImage}
              alt="Alaa Adel"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-8 md:mt-0 text-gray-700 md:text-left">
            <p className="mb-4">
              Hello! I'm
              <span className="font-semibold text-gray-800 mx-3">
                Alaa Adel
              </span>
              a passionate front-end developer with expertise in crafting
              engaging, user-friendly web experiences. I have a solid foundation
              in React, Redux Toolkit, Node.js , Express.js , MongoDB and
              various front-end and backend technologies, complemented by
              backend knowledge.
            </p>
            <p className="mb-4">
              My goal is to continually learn, improve, and deliver exceptional
              projects that solve real-world problems. I'm excited to explore
              new technologies, collaborate with amazing teams, and contribute
              to impactful projects.
            </p>
            <p>
              I am learning data structures, object-oriented programming (OOP),
              and algorithms to become a professional programmer and become a
              senior.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
