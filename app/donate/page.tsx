import React from "react";

function Donate() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 bg-white rounded-lg shadow-lg space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-red-600">Make A Donation</h1>
        <p className="text-lg text-gray-600 mt-4">
          Your generosity helps preserve Canadian Military Jet Aircraft History
          for future generations. Every donation, big or small, makes a
          difference!
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="bg-red-50 p-6 rounded-lg shadow-md border-t-4 border-red-500 ">
          <h2 className="text-2xl font-bold text-red-800 text-center">
            Donate via PayPal
          </h2>
          <p className="text-gray-600 text-center mt-4">
            Make a quick and secure donation through PayPal.
          </p>
          <form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_blank"
            className="flex justify-center mt-6"
          >
            <input type="hidden" name="cmd" value="_xclick" />
            <input
              type="hidden"
              name="business"
              value="accounting@jetaircraftmuseum.ca"
            />
            <input type="hidden" name="lc" value="US" />
            <input type="hidden" name="item_name" value="Donation" />
            <input type="hidden" name="currency_code" value="CAD" />
            <input type="hidden" name="button_subtype" value="services" />
            <input
              type="image"
              src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
              name="submit"
              alt="PayPal - The safer, easier way to pay online!"
              className="hover:opacity-80 transition-opacity"
            />
          </form>
        </div>

        <div className="bg-red-50 p-6 rounded-lg shadow-md border-t-4 border-red-500">
          <h2 className="text-2xl font-bold text-red-800 text-center">
            Donate via E-Transfer
          </h2>
          <p className="text-gray-600 text-center mt-4">
            Send your donation directly to:
          </p>
          <a
            href="mailto:accounting@jetaircraftmuseum.ca"
            className="block text-xl font-semibold text-red-900 text-center mt-2 hover:underline transition-all"
          >
            accounting@jetaircraftmuseum.ca
          </a>
        </div>
      </section>

      <section className="bg-gray-50 p-6 rounded-lg shadow-md border-t-4 border-gray-400">
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Tax Receipt Information
        </h2>
        <p className="text-gray-700 text-center mt-4">
          After making your donation, please email us your{" "}
          <span className="font-semibold">Full Name</span>,
          <span className="font-semibold"> Email Address</span>, and{" "}
          <span className="font-semibold"> Phone Number</span>. We provide tax
          receipts for donations of $20 and above.
        </p>
        <div className="text-center mt-6">
          <a
            href="mailto:accounting@jetaircraftmuseum.ca"
            className="text-blue-600 hover:text-blue-800 font-semibold text-lg"
          >
            Email Your Contact Information
          </a>
        </div>
      </section>

      <footer className="bg-red-50 p-6 rounded-lg shadow-md border-t-4 border-red-500 text-center">
        <h2 className="text-3xl font-bold text-red-700">
          Thank You For Your Donation!
        </h2>
      </footer>
    </div>
  );
}

export default Donate;
