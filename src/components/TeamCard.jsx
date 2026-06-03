function TeamCard({ name, role, image }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden text-center hover:shadow-xl transition-shadow">
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover object-top"
      />
      <div className="p-5">
        <h3 className="text-lg font-bold text-green-800">{name}</h3>
        <p className="text-gray-500 text-sm mt-1">{role}</p>
      </div>
    </div>
  )
}

export default TeamCard