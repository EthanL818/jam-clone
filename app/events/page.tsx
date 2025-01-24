"use client";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import Slider from "react-slick";
import { FaPlane } from "react-icons/fa";

function Events() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const isSectionOpen = (section) => openSections[section] || false;

  const settings = {
    dots: true, // Enable pagination dots
    infinite: true, // Loop through slides
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    arrows: true, // Enable navigation arrows
  };

  return (
    <div className="margin-auto text-center text-blue-dark">
      <div className="width:60%; margin-left:auto; margin-right:auto;">
        <p className="my-1">
          With the re-launch of our popular “JAM Sessions” this summer, the
          Museum is already planning our Fall of 2024 JAM Session (#6). We will
          be featuring a presentation from RCAF LCol. (ret’d) Rae Simpson!
        </p>
      </div>

      <div
        className="bg-gray-200 p-6"
        style={{
          width: "60%",
          marginLeft: "auto",
          marginRight: "0",
          borderRadius: "8px",
        }}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold my-2 text-red-600">
            The Jet Aircraft Museum Event Centre
          </h1>
          <Slider {...settings}>
            <div>
              <p className="my-1">
                The Jet Aircraft Museum Event Centre is committed to providing a
                conference and banquet facility that will exceed your
                expectations and is ready to host your special occasion, event
                or meeting. We offer over 8,000*** square feet of open space
                which can be used for a variety of events including corporate
                functions, fundraisers, dinners, weddings, dances, business
                meetings or parties.
              </p>
            </div>
            <div>
              <p className="my-1">
                The Silver Star Event Centre offers a unique setting for your
                event as it is also an aircraft hangar that houses the Jet
                Aircraft Museum’s vintage T-33 jet aircraft. Our vintage jets
                can be booked for display during your event and include two
                museum volunteers in uniform to assist with the display for your
                guests.
              </p>
            </div>
          </Slider>
        </div>
        {/* Collapsible Sections */}
        <div className="text-left">
          {[
            {
              title: "Corporate Functions",
              content: (
                <>
                  <ul className="list-disc ml-5 my-1">
                    <li>
                      Ideal for private or corporate functions at London
                      International Airport, making it convenient for
                      out-of-town attendees.
                    </li>
                    <li>
                      The Meeting Room is perfect for business meetings, board
                      meetings, or smaller gatherings.
                    </li>
                    <li>
                      Accommodates up to 40 people and is wheelchair accessible,
                      fully heated, and air-conditioned.
                    </li>
                  </ul>
                  <p className="my-1">
                    Our location ensures ease of access for both local and
                    international attendees, providing a professional and
                    comfortable setting for all corporate needs.
                  </p>
                </>
              ),
            },
            {
              title: "Birthday Parties at the Jet Aircraft Museum",
              content: (
                <>
                  <p className="my-1">
                    Celebrate your special occasion with an unforgettable
                    experience!
                  </p>
                  <ul className="list-disc ml-5 my-1">
                    <li>
                      Get up close to real jet aircraft and enjoy hands-on
                      experiences with our networked flight simulators (for ages
                      10 and older).
                    </li>
                    <li>
                      Take photos in the cockpit of a classic Canadian Air Force
                      Jet Trainer.
                    </li>
                    <li>
                      Trained museum volunteers available to assist with
                      activities.
                    </li>
                  </ul>
                  <p className="font-bold">Birthday Party Package Includes:</p>
                  <ul className="list-disc ml-5">
                    <li>
                      Photo opportunities for all guests in the cockpit of a
                      jet.
                    </li>
                    <li>
                      Fun-filled sessions with flight simulators for ages 10 and
                      above.
                    </li>
                  </ul>
                  <p className="font-bold">You Provide:</p>
                  <ul className="list-disc ml-5">
                    <li>
                      Up to 16 partygoers, with 1 adult supervisor per 4
                      children.
                    </li>
                    <li>Your own food, drinks, and party supplies.</li>
                  </ul>
                  <p className="font-bold">Payment Details:</p>
                  <ul className="list-disc ml-5">
                    <li>$200.00 for the first 10 guests.</li>
                    <li>
                      Additional guests are welcome for $20.00 per person, up to
                      a maximum of 16 attendees.
                    </li>
                    <li>
                      A $100.00 non-refundable deposit is required at the time
                      of booking.
                    </li>
                  </ul>
                  <p className="my-1">
                    Make your event truly special with a one-of-a-kind jet
                    aircraft experience!
                  </p>
                </>
              ),
            },
            {
              title: "Jet Blast Days",
              content: (
                <>
                  <p className="my-1">
                    Experience the thrill of aviation with our “Jet Blast” fly
                    days!
                  </p>
                  <ul className="list-disc ml-5 my-1">
                    <li>
                      Watch museum or visiting jets take to the skies in a
                      thrilling display.
                    </li>
                    <li>
                      Sponsor a jet and enjoy the unique opportunity to go for a
                      flight yourself.
                    </li>
                  </ul>
                  <p className="my-1">
                    These events are perfect for aviation enthusiasts and anyone
                    looking for a memorable experience.
                  </p>
                </>
              ),
            },
            {
              title: "Doors Open London",
              content: (
                <>
                  <p className="my-1">
                    Join us during Doors Open London and explore the Jet
                    Aircraft Museum!
                  </p>
                  <ul className="list-disc ml-5 my-1">
                    <li>
                      Every Fall, the museum opens its doors to welcome visitors
                      for an exciting weekend.
                    </li>
                    <li>
                      See our vintage aircraft up close and learn about their
                      history and significance.
                    </li>
                    <li>
                      Explore artifacts, meet our dedicated volunteers, and
                      immerse yourself in aviation history.
                    </li>
                  </ul>
                  <p className="my-1">
                    A fantastic event for families, history enthusiasts, and
                    anyone curious about aviation!
                  </p>
                </>
              ),
            },
            {
              title: "Air Shows",
              content: (
                <>
                  <p className="my-1">
                    Witness the Jet Aircraft Museum’s incredible flying jets in
                    action!
                  </p>
                  <ul className="list-disc ml-5 my-1">
                    <li>
                      Our unique collection of jets performs at various air
                      shows, flyovers, and events across the country.
                    </li>
                    <li>
                      Get a front-row seat to breathtaking aerial displays by
                      skilled pilots.
                    </li>
                    <li>
                      Learn more about our aircraft and their rich history
                      during these events.
                    </li>
                  </ul>
                  <p className="my-1">
                    Air shows are a must-see for aviation enthusiasts and anyone
                    fascinated by the art of flying.
                  </p>
                </>
              ),
            },
          ].map((section, index) => (
            <div key={index}>
              <h3
                className="text-2xl font-bold my-2 text-blue-900 cursor-pointer flex items-center"
                onClick={() => toggleSection(section.title)}
              >
                {section.title}
                <span className="ml-2">
                  <FaPlane
                    className={`text-red-600 transition-transform duration-300 ${
                      isSectionOpen(section.title) ? "rotate-90" : "rotate-0"
                    }`}
                  />
                </span>
              </h3>
              {isSectionOpen(section.title) && <div>{section.content}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Events;
