function InternationalDonate() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h3 className="text-xl font-bold text-green-900 mb-6">
        Donate from Anywhere in the World
      </h3>

      <div className="flex flex-col gap-4">

        {/* PayPal */}
        <a
          href="https://paypal.me/otengajnr"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl px-6 py-4 transition-colors"
        >
          <div className="bg-blue-600 text-white font-bold px-3 py-1 rounded-lg text-sm">
            PayPal
          </div>
          <div>
            <p className="font-semibold text-gray-800">Donate via PayPal</p>
            <p className="text-sm text-gray-500">Fast and secure international payment</p>
          </div>
          <span className="ml-auto text-blue-600 font-bold">→</span>
        </a>

        {/* GoFundMe */}
        <a
          href="https://gofundme.com/otenga-foundation"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 bg-green-50 hover:bg-green-100 border border-green-200 rounded-xl px-6 py-4 transition-colors"
        >
          <div className="bg-green-600 text-white font-bold px-3 py-1 rounded-lg text-sm">
            GoFundMe
          </div>
          <div>
            <p className="font-semibold text-gray-800">Donate via GoFundMe</p>
            <p className="text-sm text-gray-500">Support our fundraising campaign</p>
          </div>
          <span className="ml-auto text-green-600 font-bold">→</span>
        </a>

        {/* Bank Transfer */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl px-6 py-4">
          <p className="font-semibold text-gray-800 mb-2">Bank Transfer</p>
          <div className="text-sm text-gray-600 flex flex-col gap-1">
            <p><span className="font-medium">Bank:</span> Equity Bank Kenya</p>
            <p><span className="font-medium">Account Name:</span> Otenga JNR Foundation</p>
            <p><span className="font-medium">Account No:</span> 0000000000000</p>
            <p><span className="font-medium">Branch:</span> Rongo Branch</p>
          </div>
        </div>

        {/* WhatsApp */}
        <a
          href="https://wa.me/254724052665"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 bg-green-50 hover:bg-green-100 border border-green-200 rounded-xl px-6 py-4 transition-colors"
        >
          <div className="bg-green-500 text-white font-bold px-3 py-1 rounded-lg text-sm">
            WhatsApp
          </div>
          <div>
            <p className="font-semibold text-gray-800">Contact via WhatsApp</p>
            <p className="text-sm text-gray-500">Chat with us to arrange your donation</p>
          </div>
          <span className="ml-auto text-green-600 font-bold">→</span>
        </a>

      </div>
    </div>
  )
}

export default InternationalDonate