import React from "react";

export default function Benefits() {
  const benefits = [
    "Hands on servicing of aircraft; as part of formal training program",
    "Attend and complete ground schools for maintenance and pilot training",
    "Ability to upgrade membership to include back seat flights in jet aircraft",
    "Volunteer opportunities throughout many parts of the organization",
    "Serve on a variety of committees, both as members and chairpersons",
    "Enjoying the camaraderie of fellow aviation enthusiasts",
    "Voting rights at annual elections",
  ];

  const methods = [
    "Stop by the museum to sign up",
    "Contact membership@jetaircraftmuseum.ca",
    "E-Transfer to accounting@jetaircraftmuseum.ca",
    "Enroll online below using PayPal",
  ];

  const CheckmarkIcon = () => (
    <svg
      className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 20 20"
    >
      <polyline
        points="4 10 8 14 16 6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-red-700 mb-4">
          Become A Member
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mb-8">
          As a non-profit organization, the Jet Aircraft Museum relies on
          dedicated volunteers and people like you who have a love and passion
          for aviation. A great first step to becoming involved or supporting
          the Museum would be to sign up for a membership. There are many
          benefits to becoming a member of the Museum, with more always in the
          works.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <div className="bg-blue-50 p-4 sm:p-6 rounded-lg shadow-md flex flex-col">
          <h3 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
            Benefits of membership include:
          </h3>
          <ul className="space-y-3 flex-grow">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex items-start text-sm sm:text-base text-gray-700"
              >
                <CheckmarkIcon />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-blue-50 p-4 sm:p-6 rounded-lg shadow-md flex flex-col">
          <h3 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
            How to Become a Member:
          </h3>
          <ul className="space-y-3 flex-grow">
            {methods.map((method, index) => (
              <li
                key={index}
                className="flex items-start text-sm sm:text-base text-gray-700"
              >
                <CheckmarkIcon />
                <span>{method}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
