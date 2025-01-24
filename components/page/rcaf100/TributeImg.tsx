import Image from "next/image";

import canadaFlag from "@/public/images/racf100/canadaFlag.png"
import { Direction } from "@/helpers/Enum/Direction.enum";

interface TributeImgProps {
    tributeName: string,
    tributeIMG: string,
    photoPosition?: Direction
}

function TributeImg({ tributeName, tributeIMG, photoPosition = Direction.RIGHT }: TributeImgProps) {
    const isBottom = photoPosition === Direction.BOTTOM;
    const isLeft = photoPosition === Direction.LEFT;

    const mainImageStyle = isBottom ? "w-full" : "w-[75%] sl-screen:w-[960px]";
    const secondaryImageStyle = isBottom ? "w-full" : "w-1/2";

    return (
        <div className="">
            <div className="relative">
                <Image
                    alt="The national flag of Canada featuring a stylized red maple leaf at the center, flanked by two vertical red bars on the sides and white background."
                    src={canadaFlag}
                    className={`h-auto ${isLeft ? "absolute right-4" : "ml-4"} ${mainImageStyle}`}
                />
                <img
                    alt=""
                    src={tributeIMG}
                    className={` ${isLeft ? "left-0" : "absolute right-0"} ${isBottom ? "bottom-0 left-4" : "top-0"} transform ${secondaryImageStyle} h-auto`}
                />
            </div>

        </div>
    );

}

export default TributeImg;