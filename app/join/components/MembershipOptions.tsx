export default function MembershipOptions() {
  const memberships = [
    { price: "50", title: "Student Membership", type: "student" },
    {
      price: "100",
      title: "1 Year Membership Or Renewal",
      type: "regular",
    },
    { price: "2500", title: "Lifetime Membership", type: "lifetime" },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-gray-100 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-red-700 text-center mb-6">
          Online Membership Enrollment
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {memberships.map((membership) => (
            <div
              key={membership.type}
              className="bg-white p-6 rounded-lg shadow-md text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="text-3xl font-bold text-blue-700 mb-2">
                $ {membership.price}
              </div>
              <div className="text-gray-600 mb-4 font-semibold">
                {membership.title}
              </div>
              <div className="text-gray-500 mb-4">PayPal</div>
              <form
                action="https://www.paypal.com/cgi-bin/webscr"
                method="post"
                target="_blank"
                className="flex justify-center"
              >
                <input type="hidden" name="cmd" value="_xclick" />
                <input
                  type="hidden"
                  name="business"
                  value="accounting@jetaircraftmuseum.ca"
                />
                <input type="hidden" name="lc" value="US" />
                <input
                  type="hidden"
                  name="item_name"
                  value={membership.title}
                />
                <input
                  type="hidden"
                  name="amount"
                  value={`${membership.price}.00`}
                />
                <input type="hidden" name="currency_code" value="CAD" />
                <input type="hidden" name="button_subtype" value="services" />
                <input type="hidden" name="no_note" value="0" />
                <input
                  type="hidden"
                  name="bn"
                  value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest"
                />
                <input
                  type="image"
                  src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif"
                  name="submit"
                  alt="PayPal - The safer, easier way to pay online!"
                  className="hover:opacity-80 transition-opacity"
                />
              </form>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-100 p-6 rounded-lg text-center">
        <p className="text-gray-700 mb-4">
          Once you have made your payment via PayPal or Email Transfer at the
          Membership Level you have chosen, please{" "}
          <strong>
            send an email including your Full Name, Email Address, and Phone
            Number
          </strong>
          .
        </p>
        <a
          href="mailto:accounting@jetaircraftmuseum.ca"
          className="inline-block bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-800 transition-colors"
        >
          Email Your Contact Information
        </a>
      </div>
    </div>
  );
}
