import TeamCard from '../components/TeamCard'

function About() {
  return (
    <div>

      {/* Hero Banner */}
      <div className="bg-green-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="text-green-200 text-lg max-w-2xl mx-auto">
          Learn about our mission, our founder, and the communities we serve
        </p>
      </div>

      {/* Robert's Story */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img
            src="/otenga.jpg"
            alt="Robert Otenga"
            className="rounded-2xl shadow-lg w-full h-96 object-cover"
          />
          <div>
            <h2 className="text-3xl font-bold text-green-900 mb-4">
              Who is Robert Otenga?
            </h2>
            <p className="text-gray-600 mb-4">
              Robert Otenga JNR is a Kenyan humanitarian and community builder based in Kitembe Village, Rongo Constituency, Migori County. Driven by a deep passion for his community, Robert founded the Otenga JNR Foundation to address the most urgent needs of vulnerable families across the region.
            </p>
            <p className="text-gray-600 mb-4">
              With support from well-wishers across Kenya and internationally, Robert has built and renovated homes for elderly and vulnerable families, sponsored children's education, and distributed food and relief to those in need.
            </p>
            <p className="text-gray-600">
              His work is documented on YouTube where thousands of followers witness the real impact being made on the ground every day.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-yellow-50 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-900 mb-6">Our Mission</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            To educate, empower, and sustain vulnerable communities in Migori County by providing housing, education sponsorship, and food relief — building a future where every family has dignity, shelter, and opportunity.
          </p>
        </div>
      </section>

      {/* Region */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                    <img src="/kitembe.jpg" alt="Kitembe Village" className="w-full h-48 object-cover" />
                    <div className="bg-green-800 text-white p-5 text-center">
                    <h3 className="font-bold text-xl">Kitembe Village</h3>
                    <p className="text-green-200 mt-2">Our home base</p>
                    </div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                    <img src="/rongo.jpg" alt="Rongo Constituency" className="w-full h-48 object-cover" />
                    <div className="bg-green-700 text-white p-5 text-center">
                    <h3 className="font-bold text-xl">Rongo Constituency</h3>
                    <p className="text-green-200 mt-2">Our constituency</p>
                    </div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                    <img src="/migori.jpg" alt="Migori County" className="w-full h-48 object-cover" />
                    <div className="bg-green-600 text-white p-5 text-center">
                    <h3 className="font-bold text-xl">Migori County</h3>
                    <p className="text-green-200 mt-2">Our county</p>
                    </div>
                </div>
                </div>
        </section>        

      {/* Team */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-900">Meet Our Team</h2>
            <p className="text-gray-500 mt-3">The people behind the mission</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamCard
            name="Team Member"
              role="Field Coordinator"
              image="/team8.jpg"
            />
            <TeamCard
              name="Team Member"
              role=" Our Office"
              image="/team7.jpg"
            />
            <TeamCard
              name="Team Member"
              role="Community Liaison"
              image="/com.jpg"
            />
          </div>
        </div>
      </section>

    </div>
  )
}

export default About