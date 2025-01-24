import {
    Accordion,
} from "@/components/ui/accordion"
import { AccordionCard } from "./AccordionCard"
import { getTributes } from "@/firebase/tributercaf100"
import { secondsUntilNextSaturday } from "@/helpers/functions/secondsUntilNextSaturday";

export const runtime = 'nodejs'
export const revalidate = secondsUntilNextSaturday();
interface AccordionRcafProps {
    name?: string
}
export async function AccordionRcaf({ name }: AccordionRcafProps) {
    let tributes = await getTributes();
    if (process.env.ENV == "PROD") {
        tributes = tributes.filter(tribute => tribute.release.toDate() <= new Date())
    }
    let defaultValue = "item-0";
    if (name) {
        defaultValue = `item-${name}`;
    }
    return (
        <Accordion type="single" collapsible className="w-full" defaultValue={defaultValue}>
            {
                tributes.map((tribute, index) => (
                    <AccordionCard key={index} {...tribute} index={name ? tribute.photo : index} />
                ))
            }
        </Accordion>

    )
}