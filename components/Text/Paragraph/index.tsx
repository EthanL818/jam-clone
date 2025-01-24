import { ReactNode } from "react";
interface paragraphProps {
    children: ReactNode,
    css?: string
}
export function Paragraph({ children, css }: paragraphProps) {
    return (
        <p className={` my-4 text-xl  text-blue-dark ${css}`}>
            {children}
        </p>
    )
}