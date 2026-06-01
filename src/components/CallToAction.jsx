import { Link } from 'react-router-dom'

function CallToAction() {
  return (
    <section className="bg-yellow-500 py-20 px-6 text-green-900 text-center">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-green-900">
          Ready to Change a Life Today?
        </h2>

        <p className="text-green-800 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Your donation builds homes, sends children to school, and feeds families in Kitembe village, Ronge Constituency, Migori County. Every shilling counts. Every dollar matters.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/donate"
            className="bg-green-800 hover:bg-green-900 text-white font-bold px-10 py-4 rounded-full text-lg"
          >
            Donate Now
          </Link>
          <a
            href="https://youtube.com/@otengajnr"
            target="_blank"
            rel="noreferrer"
            className="border-2 border-white hover:bg-white hover:text-green-900 text-white font-bold px-10 py-4 rounded-full text-lg"
          >
            Subscribe on YouTube
          </a>
        </div>

      </div>
    </section>
  )
}

export default CallToAction