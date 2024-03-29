import { FC, HTMLAttributes } from "react"
import { COLORS_BACKGROUND} from "./colors"

export const Card: FC<HTMLAttributes<HTMLDivElement>> = function Card(props) {
    return (<>
        <div className={`mx-auto p-4 mt-4 rounded-lg ${props.className}`}>
            {props.children}
        </div>
    </>)
};