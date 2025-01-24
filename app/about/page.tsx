"use client";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./page.css";
import { MdEmail } from "react-icons/md";
import { useState } from "react";

function About() {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  // State to control the visibility of each section
  const [isOpen, setIsOpen] = useState({
    diamond: false,
    gold: false,
    silver: false,
    bronze: false,
    starfighter: false,
    lifetime: false,
  });

  // Toggle function to handle collapsible sections
  interface SectionState {
    diamond: boolean;
    gold: boolean;
    silver: boolean;
    bronze: boolean;
    starfighter: boolean;
    lifetime: boolean;
  }

  const toggleSection = (section: keyof SectionState) => {
    setIsOpen((prev: SectionState) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="container mx-auto px-4">
      {/* Who We Are Section */}
      <section
        id="WhoWeAre"
        className="bg-gray-100 rounded-lg p-6 mb-10 shadow-lg"
      >
        <h1 className="text-4xl font-bold my-2 text-center text-red-600">
          Who We Are
        </h1>
        <Slider {...settings}>
          <div className="p-4">
            <h3>
              The <b>JET AIRCRAFT MUSEUM</b> (JAM) exists to create and maintain
              a dynamic and living history of the modern age Royal Canadian Air
              Force and to provide permanent honour for those valiant Canadian
              men and women who flew these aircraft with distinction in periods
              of war, peace, and peace keeping. In short, our mission is to
              “Preserve, Educate, and Soar”.
            </h3>
          </div>
          <div className="p-4">
            <h3>
              JAM is a Charitable Organization that has as its primary purposes
              the acquisition, display, preservation, maintenance and, most
              importantly, providing in flight demonstrations for the people of
              Canada now and for generations to come. The JAM mission is to
              combine the creation and operation of a museum, housing aircraft,
              historical artifacts, records, and salient memorabilia, while
              simultaneously keeping representative historic aircraft in the air
              whenever and wherever major aviation events are held across Canada
              and at appropriate international centres.
            </h3>
          </div>
          <div className="p-4">
            <h3>
              The Museum offers full voting membership to everyone interested in
              preserving Canada’s noble jet heritage. Governance is provided by
              a Board of Directors and Officers.
            </h3>
          </div>
          <div className="p-4">
            <h3>
              The Museum has been granted charitable status by the Canada
              Revenue Agency. With this status and our organization’s plans
              growing daily we continue to seek support through memberships,
              donations and sponsorships.
            </h3>
          </div>
        </Slider>
      </section>

      {/* Mandate Statements Section */}
      <section
        id="MandateStatements"
        className="bg-gray-100 rounded-lg p-6 mb-10 shadow-lg"
      >
        <h1 className="text-4xl font-bold my-2 text-center text-red-600">
          Our Mandate Statements
        </h1>
        <Slider {...settings}>
          <div className="p-4">
            <h3>
              Jet Aircraft Museum (JAM) will bring students, veterans, and the
              general public into contact with the science and technology of
              flight, the importance of aviation history and opportunities to
              witness and experience actual flight in a vintage jet aircraft.
            </h3>
          </div>
          <div className="p-4">
            <h3>
              Jet Aircraft Museum will restore, preserve, and maintain
              supportive exhibits in the tribute to the thousands of men and
              women who built, serviced, and flew these aircraft, and in memory
              of those who did not return.
            </h3>
          </div>
          <div className="p-4">
            <h3>
              Jet Aircraft Museum will maintain an education program to teach
              it’s members to restore, preserve, and service vintage jet
              aircraft, and teach grade-school students the properties of flight
              and structures by matching museum material to the Ontario Science
              Curriculum.
            </h3>
          </div>
        </Slider>
      </section>

      {/* History Section */}
      <section
        id="History"
        className="bg-gray-100 rounded-lg p-6 mb-10 shadow-lg"
      >
        <h1 className="text-4xl font-bold my-2 text-center text-red-600">
          Our History
        </h1>
        <Slider {...settings}>
          <div className="p-4">
            <h3>
              The model for the establishment of JAM is the immensely successful
              Canadian Harvard Aircraft Association (CHAA), which was created in
              1986 and has preserved, trained pilots for, and flown and
              continues to fly this legendary Air force training aircraft at
              important aviation events in both Canada and the U.S. It is
              significant that the founder (Bob Hewitt) of CHAA and many of its
              senior volunteer members are among the founding leadership of the
              Jet Aircraft Museum.
            </h3>
          </div>
          <div className="p-4">
            <h3>
              The organization that was to become the Jet Aircraft Museum
              started meeting in the late fall of 2007. An opportunity had
              materialized for the acquisition of six T-Bird jet aircraft from
              the Government of Canada and favourable financing has already been
              established to facilitate this acquisition. This two seater jet
              trainer, Canadian built by Canadair in Montreal was the workhorse
              trainer for Canada’s Armed Forces for some 50 years.
            </h3>
          </div>
          <div className="p-4">
            <h3>
              With the decision made by the original founders to approve the
              purchase of all 6 T-Birds the weight of the task was made clear.
              It was at this point through reaching out to the aviation
              community to create a volunteer group that the Jet Aircraft Museum
              was officially formed. These volunteers then became members and
              plans were created on finding a home for the T-Birds and then
              getting them in condition to fly there.
            </h3>
          </div>
          <div className="p-4">
            <h3>
              After much searching, a suitable home for the T-Birds and other
              aircraft was established at the London, Ontario International
              Airport in December 2008.
            </h3>
          </div>
          <div className="p-4">
            <h3>
              After much searching a suitable home for the T Birds and other
              aircraft as they are acquired was established at the London,
              Ontario International Airport on December 2008. The support from
              the Greater London International Airport Authority and local
              community was strong from the beginning with many of JAM’s
              membership coming from nearby areas.
            </h3>
          </div>
          <div className="p-4">
            <h3>
              With a home base in place the focused turned to preparation of the
              6 T-Birds for ferry flights to the hangar at the London Intl.
              Airport. Through late 2008 and all of 2009 crews of 6 members
              where sent up to work on all 6 planes at CFB Mountain View in
              eastern Ontario. After much hard work and dedication the first 2
              planes arrived home at the London Intl. Airport on April 15th
              2009. The rest of the year saw much more success as the final
              T-Bird completed its ferry flight on October 19th 2009.
            </h3>
          </div>
          <div className="p-4">
            <h3>
              The Museum has started ground and aircrew training programs and
              the establishment of rigorous maintenance, service, safety and
              operational control procedures. JAM anticipates that the T-Bird
              will be its main in-the-air demonstration aircraft until
              circumstances permit acquisition of other aircraft.
            </h3>
          </div>
          <div className="p-4">
            <h3>
              Looking to the future the ultimate objective of the Museum is to
              have one or more flyable versions of major jet aircraft used by
              Canada’s armed forces since we entered the military jet age in
              1944 and Jets from other countries as well. These include Canada’s
              first, the Vampire, the CT-133 T-Bird, CT-114 Tutor and others.
            </h3>
          </div>
        </Slider>
      </section>

      {/* Membership Call to Action */}
      <div className="text-center mb-10">
        <p className="text-blue-dark my-2">
          <b>Does this sound interesting to you?</b>
        </p>
        <Link
          href="/join"
          className="border-b border-blue-dark text-blue-dark hover:text-blue-light duration-300"
        >
          <b> Become a member now!</b>
        </Link>
      </div>

      {/* Board of Directors Section */}
      <section className="flex flex-wrap gap-8 mb-10">
        {/* Left Column */}
        <div className="flex-1 min-w-[300px]">
          <h1 className="text-4xl font-bold my-2 text-red-600 text-center">
            Board of Directors
          </h1>
          <p>
            <b>
              Congratulations and many thanks to the new board appointed at the
              recent AGM.
            </b>
          </p>
          {/* Board Members */}
          {[
            {
              name: "Scott Ellinor – President",
              email: "president@jetaircraftmuseum.ca",
            },
            {
              name: "Graham Rawlinson – Vice President",
              email: "vp@jetaircraftmuseum.ca",
            },
            {
              name: "Carol Ellinor – Treasurer",
              email: "accounting@jetaircraftmuseum.ca",
            },
            {
              name: "Dennis Carey – Director Aircraft Restorations",
              email: "restoration@jetaircraftmuseum.ca",
            },
            {
              name: "Jim Fisk – Director, Special Projects",
              email: "projects@jetaircraftmuseum.ca",
            },
            {
              name: "William Burns – Facilities",
              email: "facilities@jetaircraftmuseum.ca",
            },
            {
              name: "Ed Pilon – Director, Photos",
              email: "photos@jetaircraftmuseum.ca",
            },
            {
              name: "John Ducharme – Director, Maintenance",
              email: "maintenance@jetaircraftmuseum.ca",
            },
            {
              name: "Ken Mist - Director",
              email: "snaps@jetaircraftmuseum.ca",
            },
          ].map((member, idx) => (
            <div key={idx} className="my-2 flex items-center">
              <a href={`mailto:${member.email}`} className="mr-2">
                <MdEmail size={20} className="text-blue-dark" />
              </a>
              <p>{member.name}</p>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex-1 min-w-[300px] text-center">
          <h1 className="text-4xl font-bold my-2 text-red-600">
            Officers and Chairs
          </h1>
          {[
            {
              name: "Marti & Doug Acton – Education Committee Co-Chairs",
              email: "education@jetaircraftmuseum.ca",
            },
            { name: "Todd Culver - Chief Pilot", 
              email: "chiefpilot@jetaircraftmuseum.ca" 
            },
            { name: "Ken Kennedy – Front Desk", 
              email: "frontdesk@jetaircraftmuseum.ca" 
            },
            {
              name: "William Burns – Facilities",
              email: "facilities@jetaircraftmuseum.ca",
            },
            {
              name: "Jim Fisk / Edmilson E. M. Andrade - Co-Webmasters",
              email: "webmaster@jetaircraftmuseum.ca",
            },
          ].map((chair, idx) => (
            <div key={idx} className="my-2 flex items-center">
              <a href={`mailto:${chair.email}`} className="mr-2">
                <MdEmail size={20} className="text-blue-dark" />
              </a>
              <p>{chair.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 rounded-lg p-6 shadow-lg">
        <h1 className="text-4xl font-bold my-2 text-center text-red-600">
          We Can Fly Because Of You!
        </h1>
        <p className="text-center text-blue-dark mb-4">
          Thank you for the generous support of all our donors who believe that
          the Jet Aircraft Museum is a valuable part of our Canadian history.
          Are you interested in donating?
        </p>
        <p className="text-center text-blue-dark mb-4">
          Please contact <b>Scott Ellinor</b> by email at{" "}
          <a
            href="mailto:president@jetaircraftmuseum.ca"
            className="text-blue-dark font-bold border-b border-blue-dark hover:text-blue-light"
          >
            president@jetaircraftmuseum.ca
          </a>
        </p>

        <div className="flex flex-col gap-6">
          {/* Diamond Arrow */}
          <div>
            <button
              className="w-full text-left text-2xl font-bold py-2 text-center hover:bg-slate-200"
              onClick={() => toggleSection("diamond")}
              style={{
                color: "#5bb9e2",
                textShadow: "1px 1px 1px black",
              }}
            >
              Diamond Arrow ($100,000 +)
            </button>
            {isOpen.diamond && (
              <div className="pl-4 mt-2 text-center">
                <div className="text-blue-dark my-2">
                  Robert Hewitt (Founder)
                </div>
              </div>
            )}
          </div>

          {/* Gold Hornet */}
          <div>
            <button
              className="w-full text-left text-2xl font-bold py-2 text-center hover:bg-slate-200"
              onClick={() => toggleSection("gold")}
              style={{
                color: "#DAA520",
                textShadow: "1px 1px 1px black",
              }}
            >
              Gold Hornet ($50,000 - $100,000)
            </button>
            {isOpen.gold && (
              <div className="pl-4 mt-2 text-center">
                <div className="text-blue-dark my-2">Concorde Batteries</div>
                <div className="text-blue-dark my-2">
                  New Horizons For Seniors Program (Government Of Canada)
                </div>
                <div className="text-blue-dark my-2">
                  PPG Industries - Paint
                </div>
              </div>
            )}
          </div>

          {/* Silver Star */}
          <div>
            <button
              className="w-full text-left text-2xl font-bold py-2 text-center hover:bg-slate-200" 
              onClick={() => toggleSection("silver")}
              style={{
                color: "#C0C0C0",
                textShadow: "1px 1px 1px black",
              }}
            >
              Silver Star ($10,000 - $50,000)
            </button>
            {isOpen.silver && (
              <div className="pl-4 mt-2 text-center">
                <div className="text-blue-dark my-2">
                  Ontario Trillium Foundation
                </div>
                <div className="text-blue-dark my-2">
                  London Heritage Council
                </div>
                <div className="text-blue-dark my-2">Butler Parachutes</div>
                <div className="text-blue-dark my-2">
                  Sherwin Williams Aerospace
                </div>
                <div className="text-blue-dark my-2">
                  Miggsie Fund - Lawson Foundation
                </div>
                <div className="text-blue-dark my-2">
                  Northwind Aviation and Marine
                </div>
                <div className="text-blue-dark my-2">Takla Foundation</div>
                <div className="text-blue-dark my-2">
                  London Endowment for Heritage Fund
                </div>
                <div className="text-blue-dark my-2">
                  Westminster College Foundation
                </div>
              </div>
            )}
          </div>

          {/* Bronze Tutor */}
          <div>
            <button
              className="w-full text-left text-2xl font-bold py-2 text-center hover:bg-slate-200"
              onClick={() => toggleSection("bronze")}
              style={{
                color: "#2B547E",
                textShadow: "1px 1px 1px black",
              }}
            >
              Bronze Tutor ($5,000 – $9,999)
            </button>
            {isOpen.bronze && (
              <div className="pl-4 mt-2 text-center">
                <div className="text-blue-dark my-2">Good Foundation</div>
                <div className="text-blue-dark my-2">
                  Air Force Heritage Fund
                </div>
                <div className="text-blue-dark my-2">VersaBank</div>
              </div>
            )}
          </div>

          {/* Starfighter */}
          <div>
            <button
              className="w-full text-left text-2xl font-bold py-2 text-center hover:bg-slate-200"
              onClick={() => toggleSection("starfighter")}
              style={{
                color: "#2B547E",
                textShadow: "1px 1px 1px black",
              }}
            >
              Starfighter ($1,000 - $4,999)
            </button>
            {isOpen.starfighter && (
              <div className="pl-4 mt-2 text-center">
                <div className="text-blue-dark my-2">
                  Ministry of Tourism and Culture
                </div>
                <div className="text-blue-dark my-2">
                  Ninety-Nines Canadian Award in Aviation
                </div>
                <div className="text-blue-dark my-2">
                  Garrison Community Council
                </div>
              </div>
            )}
          </div>

          {/* Lifetime Membership */}
          <div>
            <button
              className="w-full text-left text-2xl font-bold py-2 text-center hover:bg-slate-200"
              onClick={() => toggleSection("lifetime")}
              style={{
                color: "#2B547E",
                textShadow: "1px 1px 1px black",
              }}
            >
              Lifetime Membership ($2,500)
            </button>
            {isOpen.lifetime && (
              <div className="pl-4 mt-2">
                {[
                  "Robert Hewitt",
                  "Louise Hendriks",
                  "Fern Villineuve",
                  "Al Clark",
                  "James Leslie",
                  "Vijay Mistry",
                  "William “Turbo” Tarling",
                  "Larry Ricker",
                  "Richard Cooper",
                  "Ken Mist",
                  "Ken Kennedy",
                  "Kevin W. Moore",
                  "David White",
                  "Simon Pont",
                  "Laura Pont",
                  "Rachel Pont",
                  "Giorgio Clementi",
                  "Anthony Salotti",
                  "Gordon Hughes",
                  "Lew Benvenuto",
                ].map((name, idx) => (
                  <div key={idx} className="text-blue-dark my-2 text-center">
                    {name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
