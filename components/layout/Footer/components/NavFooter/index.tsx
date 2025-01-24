import navProps from '@/helpers/interface/navProps'
import NavBar from '../../../components/NavBar'
import { ButtonHeader } from '@/components/layout/components/ButtonEmphasis'

export function NavFooter({ pages }: navProps) {

    return (
        <div className="flex flex-col justify-between md:w-[25%]">
            <h1 className="text-center text-[1.5rem] font-bold">Access</h1>
            <NavBar place='acess' page='home' />
            {
                pages.map((page, index) => (
                    <NavBar place='acess' page={page} key={index} />
                ))

            }
            <ButtonHeader action="Donate" />

        </div>
    )
}