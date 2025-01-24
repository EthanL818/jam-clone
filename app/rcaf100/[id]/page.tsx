import Image from "next/image";

import { Paragraph } from "@/components/Text/Paragraph";

import rcaf from "@/public/images/rcaf.png"
import { AccordionRcaf } from "@/components/page/rcaf100/AccordionRcaf";

function RCAF100Tribute({
    params: { id },
}: {
    params: { id: string }
}) {
    const tributeText: string = `Thomas J. Froats was born in Dickins Landing near Cornwall, Ontario. He was eager to enlist when war broke out in 1939 but was only 16 years old so he waited, somewhat impatiently, for his 18th birthday to arrive. His plan was to become a pilot. His grade 10 education put a halt to that. In his diary, he wrote “ the best deal I could get for aircrew was air gunner. Oh well, at least I would be riding around in an airplane. Not a bad dream for a guy who was frightened to death of heights”. He reported to Manning Depot in  Quebec for air gunnery training in June of 1941. His first posting was as a Security Guard in St. John, New Brunswick. As he outlines in his diary, this is where he met his first “good buddy” in the RCAF. It’s as also where he got his first taste of Air Force discipline.\n<a href="https://www.jetaircraftmuseum.ca/docs/FroatsDiary.pdf" target="_blank" download ><img alt="Click HERE To read Warrant Officer Froats’ diary about his time as a gunner and a POW at Stalag IVB." title="Click HERE To read Warrant Officer Froats’ diary about his time as a gunner and a POW at Stalag IVB." src="https://www.jetaircraftmuseum.ca/docs/FroatsDiary.png" className="md:h-[75%] m-auto" />To read Warrant Officer Froats’ diary about his time as a gunner and a POW at Stalag IVB, CLICK HERE.</a>\nIt took several days for paperwork to be completed that would allow Froats to start the trip home. On May 6, 1945, he was flown to England from Leipzig an, in Bournemouth, he was debriefed, given suitable clothing and sent on leave. Froats and his girlfriend, Muriel, were married on May 30 in England and they moved to Canada.He found work in Northern Ontario at a variety of companies - in a gold mine in Kirkland Lake, in the meat department of the A&P, in his own fix-it shop and selling insurance door-to-door - before taking a job with Standard Brands. Later, the Froats family moved to London when he became a district Manager for the same firm.\nIn his later years, Froats continued to enjoy his favourite hobbies - fishing, golf and hockey. He played hockey for 22 years and reffed for 24. Froats was a founding member of London’s Huff and Puff Hockey. After he passed away on January 26, 2011, his family had a plaque added to a seat at the local hockey rink dedicated to their husband, father and grandfather.\n`
    const tributeTextArray: string[] = tributeText.split("\n")
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
                <AccordionRcaf name={id} />
            </div>
        </>
    )
}
export default RCAF100Tribute;
