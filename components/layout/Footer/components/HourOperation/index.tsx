import { AiOutlineWarning } from "react-icons/ai"
export function HourOperation() {
    return (
        <div className="pb-2">
            <h1 className="text-center text-[1.5rem] font-bold">
                Hours of Operation
            </h1>
            <p>
                Thursday 10:00-16:00
            </p>
            <p>
                Friday 10:00-16:00
            </p>
            <p>
                Saturday 10:00-16:00
            </p>
            <p className="flex items-center outline-dotted outline-2 outline-offset-2 rounded p-1 mt-3 justify-center">
                <AiOutlineWarning className="mr-2 text-red-400" /> Admission By Donation
            </p>
        </div>
    )
}