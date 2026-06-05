function InternationalDonate() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h3 className="text-xl font-bold text-green-900 mb-6">
        Donate from Anywhere in the World
      </h3>

      <div className="flex flex-col gap-4">


        {/* Bank Transfer */}
<div className="bg-gray-50 border border-gray-200 rounded-xl px-6 py-4">
  <p className="font-semibold text-gray-800 mb-3">🏦 Bank Transfer</p>
  <div className="text-sm text-gray-600 flex flex-col gap-2">
    <div className="flex justify-between">
      <span className="font-medium">Bank:</span>
      <span>Equity Bank Kenya Limited</span>
    </div>
    <div className="flex justify-between">
      <span className="font-medium">Account Name:</span>
      <span>Robert Otieno Otenga</span>
    </div>
    <div className="flex justify-between">
      <span className="font-medium">Account No:</span>
      <span className="font-bold text-green-800">7770166729365</span>
    </div>
    <div className="flex justify-between">
      <span className="font-medium">Location:</span>
      <span>Kenya</span>
    </div>
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