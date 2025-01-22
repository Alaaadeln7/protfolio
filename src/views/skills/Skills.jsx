import CategorySection from "./CategorySection";
import { skillCategories } from "./skillsData";

export default function Skills() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise, certifications,
            and project experience
          </p>
        </div>

        <div className="space-y-8">
          {skillCategories.map((category, index) => (
            <CategorySection key={index} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}
