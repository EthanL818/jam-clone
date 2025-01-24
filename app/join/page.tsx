import React from "react";
import Benefits from "./components/Benefits";
import MembershipOptions from "./components/MembershipOptions";
import Volunteering from "./components/Volunteering";
import Testimonials from "./components/Testimonials";

function Join() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden p-8 space-y-8">
        <Benefits />
        <MembershipOptions />
        <Volunteering />
        <Testimonials />
      </div>
    </div>
  );
}

export default Join;
