import MpesaForm from '../components/MpesaForm'
import InternationalDonate from '../components/InternationalDonate'

function Donate() {
  return (
    <div>

      {/* Hero Banner */}
      <div className="bg-green-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Donate</h1>
        <p className="text-green-200 text-lg max-w-2xl mx-auto">
          Your generosity builds homes, educates children and feeds families in Migori County
        </p>
      </div>

      {/* Donation Forms */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-green-900 mb-6">
              🇰🇪 Local Donation — M-Pesa
            </h2>
            <MpesaForm />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-green-900 mb-6">
              🌍 International Donation
            </h2>
            <InternationalDonate />
          </div>
        </div>
      </section>

    </div>
  )
}

export default Donate