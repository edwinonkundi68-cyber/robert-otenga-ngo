import { Link } from 'react-router-dom'

function CorePillars() {
  const pillars = [
    {
      image: '/housing.jpeg',
      title: 'Housing',
      description: 'We build and renovate homes for vulnerable families in Migori County, giving them safety, dignity and a place to call home.',
      link: '/projects'
    },
    {
      image: '/educating.jpeg',
      title: 'Education',
      description: 'We sponsor school fees, uniforms and supplies for children who cannot afford education, investing in the next generation.',
      link: '/projects'
    },
    {
      image: '/food.jpeg',
      title: 'Food & Relief',
      description: 'We distribute food, medicine and emergency relief to families facing hunger and hardship across Kitembe Village.',
      link: '/projects'
    },
  ]

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900">
            What We Do
          </h2>
          <p className="text-gray-500 mt-3 text-lg max-w-2xl mx-auto">
            Our work is built on three core pillars that address the most urgent needs of our community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={pillar.image}
                alt={pillar.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 text-sm mb-5">
                  {pillar.description}
                </p>
                <Link
                  to={pillar.link}
                  className="inline-block bg-green-700 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-green-900 transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default CorePillars