function VideoGallery() {
  const videos = [
    {
      id: 'Q2-ChBVs6_w',
      title: 'Building Homes for Families'
    },
    {
      id: 'HUmfh99k7Vs',
      title: 'Educating Our Community'
    },
    {
      id: 'TgbTV8WLQ6M',
      title: 'Food Relief Distribution'
    }
  ]

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900">
            Watch Our Work
          </h2>
          <p className="text-gray-500 mt-3 text-lg">
            See the real impact we are making on the ground in Migori County
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                <iframe
                  src={"https://www.youtube.com/embed/" + video.id}
                  title={video.title}
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                  style={{ border: 'none' }}
                />
              </div>
              <div className="p-4 bg-green-50">
                <h3 className="font-semibold text-green-800">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://youtube.com/@otengajnr"
            target="_blank"
            rel="noreferrer"
            className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700"
          >
            View More on YouTube
          </a>
        </div>

      </div>
    </section>
  )
}

export default VideoGallery