"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";


function Events() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
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
      {/* <div className="flex justify-right ">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/jam-develop.appspot.com/o/events%2Fevent.jpg?alt=media&token=669c51f2-71ca-4259-9280-4258087b8dd6"
          alt=""
        />
      </div> */}
      <div
        className="bg-gray-200 p-6"
        style={{
          width: "60%",
          marginLeft: "auto",
          marginRight: "0",
          borderRadius: "8px",
          textAlign: "left"
        }}
      >
        <h1 className="text-4xl font-bold my-2 text-red-title">
          The Jet Aircraft Museum Event Centre
        </h1>
        <Swiper slidesPerView={1} pagination={{ clickable: true }}>
          <SwiperSlide>
            <p className="my-1">
              The Jet Aircraft Museum Event Centre is committed to providing a
              conference and banquet facility that will exceed your expectations
              and is ready to host your special occasion, event or meeting. We
              offer over 8,000*** square feet of open space which can be used
              for a variety of events including corporate functions,
              fundraisers, dinners, weddings, dances, business meetings or
              parties. Our main event hall can accommodate groups of up to
              400*** people. We also offer a large meeting room which is
              available separately or can be booked in conjunction with the
              event hall. Our meeting room can accommodate up to 40 people and
              includes access to our kitchen facilities located within the
              building. The Event Centre and meeting room are fully heated and
              wheelchair accessible and include an accessible washroom in close
              proximity to the event area.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="my-1">
              The Silver Star Event Centre offers a unique setting for your
              event as it is also an aircraft hangar that houses the Jet
              Aircraft Museum’s vintage T-33 jet aircraft. Our vintage jets can
              be booked for display during your event and include two museum
              volunteers in uniform to assist with the display for your guests.
              The multi-room hangar banquet facility is unique in the area,
              boasting a maximum seating capacity of 400*** people for banquets
              and corporate functions. Our two conjoining areas*** offer the
              functionality needed for almost any type of event.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="my-1">
              <b>***IMPORTANT NOTE</b> – Due to circumstances, Jet Aircraft
              Museum has moved the Maintenance Operation into our main hangar
              and exhibit area. Unfortunately, this reduces the space available,
              and the size of the function that we can presently host. For 2016,
              and perhaps longer, the maximum number we are able to host in the
              main event hall is limited to 100, and the two conjoining areas
              are not available.
            </p>
          </SwiperSlide>
        </Swiper>

        <div>
          <h3 className="text-2xl font-bold my-2 text-red-title">
            Corporate Functions:
          </h3>
          <p className="my-1">
            Our event centre is ideal for private or corporate functions. The
            Museum’s location at London International Airport makes it
            convenient for conducting business meetings, as out-of-town
            attendees can fly directly into London Airport. Arrangements can be
            made with the Museum for parking of private or corporate aircraft at
            the Museum’s ramp which allows direct access to our Event Facilities
            for guests flying in privately.
          </p>
          <p className="my-1">
            The Meeting Room is ideal for business meetings, board meetings or
            smaller gatherings and can accommodate up to 40 persons. The room is
            wheelchair accessible, fully heated and air-conditioned. The meeting
            room can be accessed from our main event facility or from a separate
            private entrance. Kitchen facilities are located close-by and can be
            used for catering setup if required for your meeting or gathering.
          </p>
          <p className="my-1">
            Our event centre has ample space for both seated functions and
            standing areas for bars, silent auctions or dances for combined or
            separate event setups.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold my-2 text-red-title">
            Birthday Parties at the Jet Aircraft Museum
          </h3>
          <p className="my-1">
            Make That Special Occasion, EXTRA Special. Our helpful, trained
            volunteers will give you and your guests that chance to get close to
            real jet aircraft and try your hand on our networked flight
            simulators. Our unique venue, just north of the London Airport
            Terminal, has ample parking and includes a private party room for 2
            hours for you and your guests.
          </p>
          <p className="my-1">
            <b>PLEASE NOTE:</b> Due to the complexity of our computer hardware,
            software and skill level required, our flight simulators are only
            suitable for guests aged 10 or older.
          </p>
          <p className="my-1">
            <b>Party Timing:</b> Normal party hours are 5:00pm – 8:00pm,
            Thursday, Friday or Saturday (other days and hours may require a
            $50.00 surcharge). On party day, we ask that organizers arrive after
            4:30pm, and that party guests arrive at 5:00pm or after. This allows
            us to prepare the museum premises after being open all day.
          </p>
        </div>

        <div>
          <div className="list-className: none;">
            <h3 className="text-2xl font-bold my-2 text-red-title">
              Jet Aircraft Museum birthday party packages include:
            </h3>
            <p className="my-1">A 2-hour party in a private room</p>
            <p className="my-1">A party room and use of refrigerator</p>
            <p className="my-1">Uniformed staff (wearing flight suits)</p>
            <p className="my-1">
              A guided tour of the Jet Aircraft Museum tour during the party
            </p>
            <p className="my-1">
              A photo opportunity in the cockpit of a “flyable” classic Canadian
              Air Force Jet Trainer for all guests
            </p>
            <p className="my-1">
              Lots of fun flying in our flight simulators (for guests aged 10
              and older)
            </p>
            <p className="my-1">An opportunity to visit our Gift Shop</p>
          </div>
          <div className="list-className: none;">
            <h3 className="text-2xl font-bold my-2 text-red-title">
              You Provide:
            </h3>
            <p className="my-1">A maximum of 16 partygoers</p>
            <p className="my-1">
              A minimum of 1 adult per 4 partygoers to help supervision (for
              children’s parties)
            </p>
            <p className="my-1">Your own food and drink</p>
            <p className="my-1">
              Any decoration you care to do in the party room
            </p>
            <p className="my-1">Party room cleanup</p>
          </div>
          <p className="my-1"></p>
          <div className="list-className: none;">
            <h3 className="text-2xl font-bold my-2 text-red-title">Payment:</h3>
            <p className="my-1">
              Price: $200.00 for the first ten (10) partygoers
            </p>
            <p className="my-1">
              Additional partygoers are welcome for an additional fee of $20.00
              per person, up to a maximum of sixteen (16) partygoers. This
              additional fee is applicable to both the Member and Non-Member
              Rate.
            </p>
            <p className="my-1">
              A non-refundable deposit of $100.00 due at time of booking.
            </p>
            <p className="my-1">
              The remainder of the fee for your party is due upon your arrival
              to the museum on the party date.
            </p>
          </div>
          <p className="my-1"></p>
          <p className="my-1">
            <b>To request a quote or book:</b>
          </p>
          <p className="my-1">Please contact us at</p>
          <p className="my-1"> E-mail: frontdesk@jetaircraftmuseum.ca</p>
          <p className="my-1"> Phone: 519-453-7000</p>
          <p className="my-1"> Mailing Address:</p>
          <p className="my-1"> Jet Aircraft Museum</p>
          <p className="my-1"> Silver Star Event Centre</p>
          <p className="my-1"> 2465 Aviation Lane</p>
          <p className="my-1"> London, Ontario</p>
          <p className="my-1"> N5V 3Z9</p>
          <p className="my-1"> Canada</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold my-2 text-red-title">
            Jet Blast Days
          </h3>
          A “Jet Blast” is a fly day where we will take museum or visiting jets
          out flying. This means that during these “Jet Blasts” you also have
          the chance to sponsor one of the jets and go for a flight as well!
          <p className="my-1"></p>
          Our museum on Jet Blasts days are the only place in Canada that you
          can go for a flight in a vintage RCAF CT-133 jet.
          <p className="my-1"></p>
          If you are interested, go to the Booking a Flight page. If you
          purchase a flight online, be sure to e-mail Flight Operations
          (flightops@jetaircraftmuseum.ca) to schedule your flight. We advise
          you to schedule your flight as soon as possible, as seats and time
          slots go quickly!
          <p className="my-1"></p>
          Watch our Events Calendar above for upcoming Jet Blast days and other
          events!
        </div>

        <div>
          <p className="my-1"></p>
          <h3 className="text-2xl font-bold my-2 text-red-title">
            Doors Open London
          </h3>
          Every Fall, the Jet Aircraft Museum is proud to participate in Doors
          Open London. For a full weekend the museum opens its doors and
          welcomes everyone to come and see our aircraft, both in the air and on
          the ground, see our artifacts, and talk to our knowledgeable members.
          Throughout the weekend we also have lots of friends who come to
          display their artifacts, tell their stories, and fly their aircraft.
          For an adrenaline rush, you can purchase a flying membership in the
          CT-133 Red Knight, or other aircraft possibly attending; stay tuned
          for details!
          <p className="my-1"></p>
          We look forward to seeing everyone at this year's Doors Open London!
          For regular museum hours, please see our contact information at the
          bottom of this site.
          <p className="my-1"></p>
          <h3 className="text-2xl font-bold my-2 text-red-title">Air Shows</h3>
          The Jet Aircraft Museum has a one-of-a-kind collection of flying jets.
          Every year our aircraft can be seen performing at various air shows,
          fly overs, and public/private events throughout the country.
          <p className="my-1"></p>
          Check out our calendar above for more details on shows we’ll be
          performing at this year!
          <p className="my-1"></p>
          The Jet Aircraft Museum is also the proud organizers of the debut
          Legends Over London Jet Festival that happened at the London
          International Airport (CYXU) in July 2014.
          <p className="my-1"></p>
          Are you interested in booking us for your airshow, event, or flyover?
          Please use the email form below to contact us today!
          <p className="my-1"></p>
        </div>
      </div>
    </div>
  );
}
export default Events;
