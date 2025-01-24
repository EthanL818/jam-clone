import { ReactNode } from "react";

interface titleProps {
    children: ReactNode,
    css?: string
}
export function Title({ children, css }: titleProps) {
    return (
        <p className={`text-4xl font-bold my-2 text-red-600 ${css}`}>
            {children}
        </p>
    )
}