"use client";
import React from "react";
import Image from "next/image";

import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";

import ExperienceLondon from "../public/images/racf100/tribute.png";
import LondonHeritageThroughCuisine1 from "../public/images/pics/bookyourflight.jpg";
import LondonHeritageThroughCuisine2 from "../public/images/pics/restoproj.jpg";
import LondonHeritageThroughCuisine3 from "../public/images/pics/restopics.jpg";
import LondonHeritageThroughCuisine4 from "../public/images/pics/explorerestos.jpg";
import LondonHeritageThroughCuisine5 from "../public/images/pics/gettinginvolved.jpg";
import LondonHeritageThroughCuisine6 from "../public/images/pics/getinvolvedtype.jpg";
import LondonHeritageThroughCuisine7 from "../public/images/pics/quote.jpg";
import Link from "next/link";
import { Paragraph } from "@/components/Text/Paragraph";

function Home() {
  return (
    <div className="text-center">
      {/* body */}
      <main className="py-8 px-4">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">
          RCAF 100 Tributes
        </h1>
        <div className="mb-8">
          <Link href="/rcaf100">
            <Image
              src="/images/racf100/tribute.png"
              className="rounded-lg shadow-lg mx-auto"
              width={800}
              height={400}
            />
          </Link>

          <p className="mt-4 text-lg">
            Join us as we honour a veteran or current RCAF member on our website
            and social media every month in 2024, celebrating their service and
            connection to the London area as part of the RCAF’s 100th
            anniversary.
          </p>
        </div>

        {/* the grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Section 1 */}
          <Link href="/collection" className="relative group">
            <Image
              src="/images/racf100/tribute.png" /* link of the photo here. ask where it is */
              alt="Our Collection"
              className="w-full h-64 object-cover rounded-lg"
              width={400}
              height={300}
            />
            <div className="absolute inset-0 bg-gray-800 bg-opacity-0 group-hover:bg-opacity-60 transition duration-300 flex justify-center items-center text-white text-center px-4">
              <h2 className="text-2xl font-bold">Our Collection</h2>
              <p className="mt-2">
                Explore our collection of aircrafts and artifacts, including a
                vast collection of military artifacts, documents, and
                aviation-related items.
              </p>
            </div>
          </Link>

          {/* section 2 */}
          <Link href="/collection" className="relative group">
            <Image
              src="/images/racf100/tribute.png" /* link of the photo here. ask where it is */
              alt="Restorations"
              className="w-full h-64 object-cover rounded-lg"
              width={400}
              height={300}
            />
            <div className="absolute inset-0 bg-gray-800 bg-opacity-0 group-hover:bg-opacity-60 transition duration-300 flex justify-center items-center text-white text-center px-4">
              <h2 className="text-2xl font-bold">Restorations</h2>
              <p className="mt-2">
                Countless volunteers contribute thousands of hours to help JAM
                return classics from the jet age to airworthiness. Learn how you
                can assist in this rewarding adventure!
              </p>
            </div>
          </Link>

          {/* section 3 */}
          <Link href="/flights" className="relative group">
            <Image
              src="/images/racf100/tribute.png" /* link of the photo here. ask where it is */
              alt="Book Your Flight"
              className="w-full h-64 object-cover rounded-lg"
              width={400}
              height={300}
            />
            <div className="absolute inset-0 bg-gray-800 bg-opacity-0 group-hover:bg-opacity-60 transition duration-300 flex justify-center items-center text-white text-center px-4">
              <h2 className="text-2xl font-bold">Book Your Flight!</h2>
              <p className="mt-2">
                As a gift or for yourself - try an exhilarating experience with
                a great view!
              </p>
            </div>
          </Link>

          {/* section 4 */}
          <Link href="/join" className="relative group">
            <Image
              src="/images/racf100/tribute.png" /* link of the photo here. ask where it is */
              alt="Get Involved"
              className="w-full h-64 object-cover rounded-lg"
              width={400}
              height={300}
            />
            <div className="absolute inset-0 bg-gray-800 bg-opacity-0 group-hover:bg-opacity-60 transition duration-300 flex justify-center items-center text-white text-center px-4">
              <h2 className="text-2xl font-bold">Get Involved</h2>
              <p className="mt-2">
                If you enjoy history, meeting great people, and being around
                awesome machines, there's a place for you with the museum.
              </p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Home;
