import Image from "next/image";
import { AiOutlineMail, AiOutlinePhone, AiOutlineWarning } from "react-icons/ai"

export function ContactUs() {
    return (
        <div className="">
            <div>
                <h1 className="text-center text-[1.5rem] font-bold">
                    Contact Us
                </h1>
                <p className="flex items-center">
                    <AiOutlinePhone className="mr-2" /> 519 453.7000
                </p>
                <p className="flex items-center">
                    <AiOutlineMail className="mr-2" /> info@jetaircraftmuseum.ca
                </p>
            </div>
        </div>
    )
}