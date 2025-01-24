import Image from "next/image";

import { Paragraph } from "@/components/Text/Paragraph";

import rcaf from "@/public/images/rcaf.png"
import { AccordionRcaf } from "@/components/page/rcaf100/AccordionRcaf";
import { secondsUntilNextSaturday } from "@/helpers/functions/secondsUntilNextSaturday";

export const revalidate = secondsUntilNextSaturday();

function RCAF100() {
    return (
        <>
            <div className="flex flex-col justify-center items-center md:flex-row">
                <Image alt="Royal Canadian Air Force Logo: Stylized eagle in the center, symbolizing strength and agility, with maple leaves and blue and white colors to represent Canadian identity." src={rcaf} />
                <div>
                    <Paragraph>
                        With immense honor and respect, we celebrate the centenary of the Royal Canadian Air Force (RCAF), an institution that embodies courage, excellence, and dedication to service over a remarkable century. Since its founding in 1924, the RCAF has played a crucial role in defending and promoting peace, shaping history, and inspiring generations.
                    </Paragraph>
                    <Paragraph>
                        Over a hundred years, the men and women of the RCAF have fearlessly taken to the skies, defending the ideals of freedom and justice that are fundamental to the Canadian identity. Their bravery in times of conflict, such as during World War II, where RCAF pilots significantly contributed to the Allied victory, is a testament to the courage and commitment of this exceptional air force.
                    </Paragraph>
                    <Paragraph>
                        Beyond combat moments, the RCAF has been a vital force in responding to natural disasters, humanitarian missions, and protecting Canadian airspace. Its legacy extends beyond geographical boundaries, touching lives and communities worldwide.
                    </Paragraph>
                    <Paragraph>
                        On the centenary of the RCAF, we pay tribute not only to the aviators and support personnel but also to the families who, with patience and resilience, supported their loved ones in service. We recognize the sacrifice and devotion that have permeated each decade of this extraordinary journey.
                    </Paragraph>
                    <Paragraph>
                        To the Royal Canadian Air Force, we express sincere gratitude for its exemplary service, continuous innovation, and vital role in defending the sovereignty and security of Canada. May this centenary be a moment of celebration, reflection, and inspiration for future generations who will continue to carry forward the impressive legacy of the RCAF. May the wings of the RCAF continue to soar high, defending freedom and peace for many more years. Congratulations on 100 years of exemplary service!
                    </Paragraph>
                </div>
            </div>
            <div>
                <AccordionRcaf />
            </div>
        </>
    )
}
export default RCAF100;
