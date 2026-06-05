import { useState } from 'react'

function MpesaForm() {
  const [phone, setPhone] = useState('')
  const [amount, setAmount] = useState('')
  const [name, setName] = useState('')
  const [confirmed, setConfirmed] = useState(false)

  const amounts = [100, 500, 1000, 2500, 5000, 10000]

  function handleConfirm(e) {
    e.preventDefault()
    const message = "Hello Robert, I have donated KES " + amount + " via M-Pesa. My name is " + name + " and my phone is " + phone + ". Please confirm receipt."
    const whatsappUrl = "https://wa.me/254724052665?text=" + encodeURIComponent(message)
    window.open(whatsappUrl, '_blank')
    setConfirmed(true)
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-green-600 text-white px-4 py-2 rounded-full font-bold">
          M-PESA
        </div>
        <h3 className="text-xl font-bold text-green-900">Donate via M-Pesa</h3>
      </div>

      {/* Step 1 - Paybill Info */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-6">

        {/* Step 1 - Send Money Info */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-6">
            <p className="text-green-800 font-bold mb-3">Step 1 — Send Money via M-Pesa</p>
            <div className="mb-3">
              <p className="text-xs text-gray-500 mb-1">Send Money To</p>
              <p className="text-2xl font-bold text-green-800">0724052665</p>
              <p className="text-sm text-green-700 font-medium">Robert Otieno Otenga</p>
            </div>
            <div className="bg-white rounded-lg p-3 text-sm text-gray-600 flex flex-col gap-1">
              <p>1. Go to M-Pesa on your phone</p>
              <p>2. Select <strong>Send Money</strong></p>
              <p>3. Enter number: <strong>0724052665</strong></p>
              <p>4. Enter your amount</p>
              <p>5. Enter your PIN and confirm</p>
            </div>
          </div>
      </div>

      {/* Step 2 - Confirm */}
      {confirmed ? (
        <div className="text-center py-8">
          <div className="text-6xl mb-4">🙏</div>
          <h3 className="text-xl font-bold text-green-800 mb-2">
            Thank You for Your Donation!
          </h3>
          <p className="text-gray-500">
            Your WhatsApp message has been sent to Robert. He will confirm your donation shortly.
          </p>
          <button
            onClick={() => { setConfirmed(false); setPhone(''); setAmount(''); setName('') }}
            className="mt-6 bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700"
          >
            Make Another Donation
          </button>
        </div>
      ) : (
        <form onSubmit={handleConfirm}>
          <p className="text-green-800 font-bold mb-4">Step 2 — Confirm Your Payment</p>

          {/* Quick Amounts */}
          <p className="text-sm font-semibold text-gray-600 mb-3">Select Amount (KES)</p>
          <div className="grid grid-cols-3 gap-3 mb-5">
            {amounts.map((a) => (
              <button
                key={a}
                type="button"
                onClick={() => setAmount(a.toString())}
                className={amount === a.toString()
                  ? "bg-green-600 text-white py-2 rounded-xl font-semibold"
                  : "bg-gray-100 text-gray-700 py-2 rounded-xl font-semibold hover:bg-green-100"}
              >
                {a.toLocaleString()}
              </button>
            ))}
          </div>

          <div className="mb-4">
            <label className="text-sm font-semibold text-gray-600 mb-1 block">
              Custom Amount (KES)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="e.g. 1500"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500"
              required
            />
            </div>

          <div className="mb-4">
            <label className="text-sm font-semibold text-gray-600 mb-1 block">
              Your Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. John Kamau"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="text-sm font-semibold text-gray-600 mb-1 block">
              Your M-Pesa Phone Number
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. 0712345678"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl text-lg"
          >
            ✅ I Have Sent Payment — Notify Robert
          </button>
        </form>
      )}
    </div>
  )
}

export default MpesaForm