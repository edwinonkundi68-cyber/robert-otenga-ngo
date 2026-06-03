function ProjectCard({ title, description, before, after, category }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      
      {/* Category Badge */}
      <div className="px-6 pt-5">
        <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
          {category}
        </span>
      </div>

      {/* Before and After Images */}
      <div className="grid grid-cols-2 gap-2 p-4">
        <div>
          <p className="text-xs text-gray-400 font-semibold mb-1 text-center">BEFORE</p>
          <img
            src={before}
            alt="Before"
            className="w-full h-40 object-cover rounded-xl"
          />
        </div>
        <div>
          <p className="text-xs text-gray-400 font-semibold mb-1 text-center">AFTER</p>
          <img
            src={after}
            alt="After"
            className="w-full h-40 object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-6">
        <h3 className="text-xl font-bold text-green-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>

    </div>
  )
}

export default ProjectCard