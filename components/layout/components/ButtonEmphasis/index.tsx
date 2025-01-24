import Link from "next/link";

type ButtonHeaderProps = {
    action: string
}
export function ButtonHeader({ action }: ButtonHeaderProps) {
    return (
        <button className="
        font-bold  text-white 
        bg-red-light border border-red-light rounded-full px-4
                        hover:bg-blue-dark duration-300
                        max-ms-screen:ml-4">
            <Link href={`/${action.toLocaleLowerCase()}`}>{action}</Link>
        </button>
    )
}