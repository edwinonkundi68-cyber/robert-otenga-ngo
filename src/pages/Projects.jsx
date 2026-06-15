import ProjectCard from '../components/ProjectCard'

function Projects() {
  return (
    <div>

      {/* Hero Banner */}
      <div className="bg-green-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
        <p className="text-green-200 text-lg max-w-2xl mx-auto">
          Real work. Real impact. See what we have built together for the community
        </p>
      </div>

      {/* Housing Projects */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <div className="bg-green-700 text-white px-4 py-2 rounded-full font-bold text-lg">
            🏠 Housing
          </div>
          <h2 className="text-2xl font-bold text-green-900">Homes We Have Built</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            category="Housing"
            title="Family Home — Kitembe Village"
            description="Renovated a mud house into a proper stone home for a vulnerable elderly family, providing safety and dignity."
            before="/before.jpg"
            after="/babatulu.jpg"
          />
          <ProjectCard
            category="Housing"
            title="Building Materials from USA"
            description="Received cement, iron sheets and building materials from donors in the USA to construct homes for families in need."
            before="/before usa.jpg"
            after="/matirials from usa.jpg"
          />
        </div>
      </section>

      {/* Education Projects */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="bg-yellow-500 text-green-900 px-4 py-2 rounded-full font-bold text-lg">
              🎓 Education
            </div>
            <h2 className="text-2xl font-bold text-green-900">Children We Have Sponsored</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              category="Education"
              title="School Sponsorship Program"
              description="Sponsoring school fees, uniforms and supplies for over 120 children across Kitembe Village primary schools."
              before="/childbefore.jpg"
              after="/backto.jpg"
            />
            <ProjectCard
              category="Education"
              title="Back to School Drive"
              description="Annual back to school drive providing books, bags, uniforms and stationery to children from poor families."
              before="/child.jpg"
              after="/backto1.jpg"
            />
          </div>
        </div>
      </section>

      {/* Food Relief */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <div className="bg-red-500 text-white px-4 py-2 rounded-full font-bold text-lg">
            🍽️ Food Relief
          </div>
          <h2 className="text-2xl font-bold text-green-900">Families We Have Fed</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            category="Food Relief"
            title="Monthly Food Distribution"
            description="Monthly distribution of maize, beans, cooking oil and other essentials to over 500 families across the region."
            before="/hero3.jpg"
            after="/food.jpeg"
          />
          <ProjectCard
            category="Food Relief"
            title="Emergency Relief Packages"
            description="Emergency food and medical relief packages delivered to families facing extreme hardship and hunger."
            before="/month.jpg"
            after="/month1.jpg"
          />
        </div>
      </section>

    </div>
  )
}

export default Projects