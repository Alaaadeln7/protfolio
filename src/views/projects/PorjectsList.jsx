import { projectsData } from "./porjectsData";
import Project from "./Project";

export default function PorjectsList() {
  const data = projectsData || [];

  const printProjects = data.map((item) => (
    <Project
      key={item.id}
      title={item.title}
      description={item.description}
      linkes={item.linkes}
      image={item.image}
    />
  ));
  return (
    <div className="my-10">
      <div className="flex justify-center items-center my-8 py-6">
        <h1 className="text-5xl">projects</h1>
      </div>
      <div className="flex justify-center items-center gap-4 flex-wrap ">
        {printProjects}
      </div>
    </div>
  );
}
