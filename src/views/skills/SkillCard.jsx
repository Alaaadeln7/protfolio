import { useState } from "react";

export default function SkillCard({ skill }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className="group bg-white rounded-lg p-4 shadow-md transition-all duration-500 ease-in-out hover:shadow-xl hover:-translate-y-2 hover:bg-blue-50/30 cursor-pointer relative overflow-hidden"
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
            {skill.name}
          </h3>
          {skill.certified && (
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full transform group-hover:scale-105 transition-transform duration-300">
              Certified
            </span>
          )}
        </div>

        <div className="relative h-2 bg-gray-200 rounded-full mb-4 overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-blue-500 rounded-full transition-all duration-700 ease-out group-hover:bg-blue-600"
            style={{ width: `${skill.level}%` }}
          >
            {/* Animated shine effect */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
          </div>
        </div>

        <div
          className={`mt-3 text-sm transform transition-all duration-500 ease-in-out ${
            showDetails
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 absolute"
          }`}
        >
          <p className="font-medium text-gray-700 mb-2">properties:</p>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {skill.projects.map((project, index) => (
              <li
                key={index}
                className="transform hover:translate-x-1 transition-transform duration-200"
              >
                {project}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
