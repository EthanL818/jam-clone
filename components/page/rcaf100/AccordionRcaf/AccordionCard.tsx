import { Playfair_Display as PlayfairDisplay, } from 'next/font/google'
import HTMLReactParser from "html-react-parser/lib/index";
import Image from "next/image";

import canadaFlag from "@/public/images/racf100/canadaFlag.png"

import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { getTributeImage } from "@/firebase/tributercaf100"
import { Direction } from "@/helpers/Enum/Direction.enum"
import { TributeCollection } from "@/types/TributeCollection"
import TributeImg from "../TributeImg"
import { Paragraph } from "@/components/Text/Paragraph"
import { secondsUntilNextSaturday } from '@/helpers/functions/secondsUntilNextSaturday'

type AccordionCardProps = TributeCollection & {
    index: any
}

const playfairDisplay = PlayfairDisplay({
    weight: '700',
    subsets: ['latin']
})
export const runtime = 'nodejs'
export const revalidate = secondsUntilNextSaturday();

export async function AccordionCard({ name, photoDirection, photo, release, tributeText, index }: AccordionCardProps) {
    const photosURL: string[] = await getTributeImage();
    const tributeTextArray: string[] = tributeText.split("\\n");
    return (
        <AccordionItem value={`item-${index}`}>
            <AccordionTrigger className={`text-4xl ${playfairDisplay.className}`}>
                {name}
            </AccordionTrigger>
            <AccordionContent>
                {
                    photo &&
                        photoDirection ?
                        <TributeImg tributeIMG={photosURL.find(url => url.includes(photo)) || photosURL[0]} tributeName={name} photoPosition={Direction[photoDirection.toUpperCase() as keyof typeof Direction]} />
                        :
                        <Image
                            alt="The national flag of Canada featuring a stylized red maple leaf at the center, flanked by two vertical red bars on the sides and white background."
                            src={canadaFlag}
                            className={`h-auto w-full m-auto sl-screen:w-[960px]`}
                        />

                }
                <div className="p-5">
                    <div>
                        {tributeTextArray.map((paragraph, index) => (
                            paragraph.includes('</a>') ? (
                                <div key={index} className="text-center text-blue-600">
                                    {HTMLReactParser(paragraph)}
                                </div>
                            ) : (
                                <Paragraph key={index}>{paragraph}</Paragraph>
                            )
                        ))}
                    </div>
                </div>
            </AccordionContent>
        </AccordionItem>
    )
}

