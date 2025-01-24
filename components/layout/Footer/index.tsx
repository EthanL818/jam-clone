
import navProps from "@/helpers/interface/navProps";
import { ContactUs } from "./components/ContactUs";
import { HourOperation } from "./components/HourOperation";
import { Location } from "./components/Location";
import { NavFooter } from "./components/NavFooter";

export function Footer({ pages }: navProps) {
    return (
        <footer className='w-full bg-blue-dark text-white'>
            <div className="sl-screen:w-[1280px] sl-screen:mx-auto md:flex  justify-between p-4">
                <div className="flex flex-col md:w-[25%]">
                    <HourOperation />
                    <ContactUs />
                </div>
                <Location />
                <NavFooter pages={pages} />
            </div>
        </footer>
    )
}