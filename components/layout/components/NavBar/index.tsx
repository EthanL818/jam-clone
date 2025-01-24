import Link from "next/link"
import { BsAirplaneEngines } from "react-icons/bs"

type NavBarProps = {
    place: "mobile"
    page: string
    openingMenu: () => void
} | {
    place: "desk_top" | "acess"
    page: string
    openingMenu?: () => void
}

const styles = {
    link_desk_top: "",
    link_acess: "flex items-center group my-1 md:my-0",
    link_mobile: "",
    div_desk_top: "duration-300 text-white text-base font-bold border-b border-blue-dark cursor-point mx-5 s-screen:first:ml-0 sl-screen:first:ml-5  hover:border-white hover:text-blue-light",
    div_mobile: "duration-300 text-blue-dark text-base font-bold border-b border-blue-light cursor-point m-5 hover:border-white",
    div_acess: "duration-300 text-white border-b border-blue-dark font-bold cursor-point text-base hover:border-white hover:text-blue-light text-transform:uppercase",
}

function NavBar({ place, page, openingMenu }: NavBarProps) {
    function getHref(page: string) {
        if (page === "home") return ""
        return page.length == 1 ? page.toLowerCase() : page.replace(/ /g, "_").toLowerCase()
    }
    return (
        <div className={styles[`div_${place}`]} >
            <Link href={`/${getHref(page)}`} className={styles[`link_${place}`]} onClick={openingMenu}>
                {place == "acess" && <BsAirplaneEngines className='mr-1 group-hover:rotate-90 duration-700' />}
                {page.toUpperCase()}
            </Link>
        </div>
    )
}

export default NavBar;