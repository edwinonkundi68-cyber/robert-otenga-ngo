function StatsCounter() {
  const stats = [
    { number: '50+', label: 'Houses Built' },
    { number: '120+', label: 'Kids Sponsored' },
    { number: '500+', label: 'Families Fed' },
    { number: '5+', label: 'Years of Service' },
  ]

  return (
    <section className="bg-yellow-500 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-center border-r border-yellow-600 last:border-0"
          >
            <div className="text-5xl md:text-6xl font-extrabold text-green-900">
              {stat.number}
            </div>
            <div className="text-green-800 mt-2 font-semibold text-lg uppercase tracking-wide">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatsCounter