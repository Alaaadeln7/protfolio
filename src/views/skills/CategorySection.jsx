import SkillCard from "./SkillCard";

export default function CategorySection({ category }) {
  const Icon = category.icon;

  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Icon className="w-6 h-6 text-blue-500" />
        <h2 className="text-xl font-bold text-gray-800">{category.name}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {category.skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} category={category} />
        ))}
      </div>
    </div>
  );
}
