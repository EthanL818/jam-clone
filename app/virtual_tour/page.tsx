import Image from "next/image";

import { Paragraph } from "@/components/Text/Paragraph";
import { Title } from "@/components/Text/Title";

import { BiCircle } from "react-icons/bi"


function VirtualTour() {
    return (
        <div className="text-center flex flex-col items-center">

            <Title>Virtual Museum Tour</Title>
            <Paragraph css="font-bold text-2xl">Virtual Tour Legend</Paragraph>
            <Paragraph>
                In our Virtual Tour, you will find the following bullets to navigate and present information:
            </Paragraph>
            <div className="flex flex-col justify-center items-start">
                <div className="flex items-center m-1">
                    <BiCircle className="text-red-400 w-10 h-8" style={{ strokeWidth: "2" }} />
                    <Paragraph>
                        Go To JAM Webpage
                    </Paragraph>
                </div>
                <div className="flex items-center m-1">
                    <BiCircle className="text-green-400 w-10 h-8" style={{ strokeWidth: "2" }} />
                    <Paragraph>
                        Go To New Domain (JAM, Hangar Apron, Red Knight, etc.)
                    </Paragraph>
                </div>
                <div className="flex items-center m-1">
                    <BiCircle className="text-blue-400 w-10 h-8" style={{ strokeWidth: "2" }} />
                    <Paragraph>
                        Pop-up Item Text Description
                    </Paragraph>
                </div>
                <div className="flex items-center m-1">
                    <BiCircle className="text-yellow-400 w-10 h-8" style={{ strokeWidth: "2" }} />
                    <Paragraph>
                        Pop-up YouTube Video Of Aspects Of JAM
                    </Paragraph>
                </div>
            </div>
            <iframe width='853' height='480' src='https://my.matterport.com/show/?m=DcqmRqCZECy' allowFullScreen allow='xr-spatial-tracking'></iframe>

        </div>
    )
}
export default VirtualTour;