import React from "react";

export default function Volunteering() {
  const opportunities = [
    {
      title: "Tour Guides",
      description:
        "The museum gets quite busy and we are looking for volunteers to be the 'Face of JAM'. Give guided tours and answer questions about the history of jet aviation! No previous knowledge is required.",
    },
    {
      title: "Marketing",
      description:
        "JAM is in need of volunteers who have experience in marketing. We are looking to expand our publicity, and improve the museum marketing platforms.",
    },
    {
      title: "Simulation",
      description:
        "Are you interested in flight simulation? JAM has a set of nine flight simulators and we are looking for volunteers to help us run, maintain, and improve our flight simulators.",
    },
    {
      title: "Education Program",
      description:
        "JAM's Education Program allows for Grade 6 classes to visit the museum to learn about the theory of flight, as per The Ontario Curriculum. We need volunteers to assist us with running this program when we have classes visiting. No prior experience with education is required.",
    },
  ];

  const additionalAreas = [
    "Membership",
    "Tours",
    "Archives",
    "Fundraising",
    "Building Maintenance",
    "Events",
    "Airshows",
    "Gift Shop",
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-red-700 text-center">
        Volunteering
      </h2>
      <p className="text-gray-600 text-center mb-6">
        Volunteers are the heart and soul of the Jet Aircraft Museum! Without
        volunteers, we could not find, save, restore, and fly these incredibly
        important pieces of Canadian History. Every aspect of the museum is run
        with the leadership and assistance of volunteers. Want to get involved?
        Simply contact us at
        <span className="text-blue-500"> membership@jetaircraftmuseum.ca </span>
        or stop by and fill out a Volunteer Contact form.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-red-700 mb-4">
            Volunteer Opportunities
          </h3>
          {opportunities.map((opportunity, index) => (
            <div key={index} className="mb-4">
              <h4 className="font-bold text-blue-700">{opportunity.title}</h4>
              <p className="text-gray-600">{opportunity.description}</p>
            </div>
          ))}
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-red-700 mb-4">
            Additional Areas
          </h3>
          <p className="text-gray-600 mb-4">
            All areas that can be worked in include:
          </p>
          <div className="grid grid-cols-2 gap-2 mb-12">
            {additionalAreas.map((area, index) => (
              <p key={index} className="text-blue-700">
                {area}
              </p>
            ))}
          </div>
          <div>
            <h4 className="text-2xl font-bold text-red-700 mb-3">
              Ready to Join?
            </h4>
            <p className="text-gray-600 mb-2">
              If you're ready to volunteer, we would love to have you join our
              team! Contact us at:
            </p>
            <p className="text-blue-500 mt-7 font-semibold mb-6">
              membership@jetaircraftmuseum.ca
            </p>
            <div className="flex flex-col items-center">
              <p className="text-gray-600 mt-2 font-medium mb-4">
                Join our amazing team of volunteers today and help preserve
                Canadian aviation history!
              </p>
              <a
                href="mailto:membership@jetaircraftmuseum.ca"
                className="w-full px-6 py-4 mt-5 bg-red-700 text-white text-lg font-bold rounded-lg hover:bg-red-800 transition-colors duration-200 text-center"
              >
                Become a Volunteer Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
