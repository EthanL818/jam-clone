import Image from "next/image";
import Jamed1 from "../../public/images/pics/jamed1.jpg";
import Jamed3 from "../../public/images/pics/jamed3.png";
import Jamed4 from "../../public/images/pics/jamed4.jpg";
import Jamed4PNG from "../../public/images/pics/jamed4.png";
import Jamed5 from "../../public/images/pics/jamed5.png";
import Jamed6 from "../../public/images/pics/jamed6.png";
import VisitApp from "../../public/images/pics/VisitApp2023.jpg";
import TomLawsonFlyingHighProgram from "../../public/images/pics/education/TomLawsonFlyingHighProgram.png";
import Link from "next/link";

function Education() {
  return (
    <div className="text-center">
      {/* put header here */}
      <h1 className="text-4xl font-bold my-6 text-red">Education</h1>

      {/* body where each link will take us to new page .pdf */}
      <div className="flex flex-col items-center space-y-8 px-4 md:px-8">
        {/* section 1 */}
        <a
          href="/education-brochure"
          className="relative group w-full max-w-4xl h-80 overflow-hidden rounded-lg"
        >
          <img
            src="/images/pics/jamed1.jpg" // put image here when you have it
            alt="Learn about flight at J.A.M."
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-800 bg-opacity-0 group-hover:bg-opacity-60 transition duration-300 flex flex-col justify-center items-center text-white">
            <h2 className="text-2xl font-bold mb-2">
              Learn About Flight at J.A.M.
            </h2>
            <p className="text-center px-4">
              J.A.M. offers students a hands-on aviation experience with museum
              tours, simulator flights, and learning from experienced pilots.
              Download the brochure now!
            </p>
          </div>
        </a>

        {/* section 2 */}
        <a
          href="/docs/TomLawsonFlyingHighProgram.pdf"
          className="relative group w-full max-w-4xl h-80 overflow-hidden rounded-lg"
          target="_blank"
        >
          <img
            src="/images/pics/AvroDraftTable.jpg" // put image here when you have it
            alt="Tom Lawson Flying High Program"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-800 bg-opacity-0 group-hover:bg-opacity-60 transition duration-300 flex flex-col justify-center items-center text-white">
            <h2 className="text-2xl font-bold mb-2">
              Tom Lawson Flying High Program
            </h2>
            <p className="text-center px-4">
              Selected schools in economically challenged areas will be offered
              free admission and transportation to attend this unique program.
            </p>
          </div>
        </a>

        {/* section 3 */}
        <a
          href="/docs/VisitApp2023.pdf"
          className="relative group w-full max-w-4xl h-80 overflow-hidden rounded-lg"
          target="_blank"
        >
          <img
            src="/images/pics/VisitApp2023.jpg" // put image here when you have it
            alt="School Visit Application Form"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-800 bg-opacity-0 group-hover:bg-opacity-60 transition duration-300 flex flex-col justify-center items-center text-white">
            <h2 className="text-2xl font-bold mb-2">
              School Visit Application Form
            </h2>
            <p className="text-center px-4">
              Plan a school visit to inspire students with a hands-on STEM
              adventure in aviation at J.A.M. Download the form now.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Education;
