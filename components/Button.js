import { AiOutlineArrowRight } from "react-icons/ai";

import { useRouter } from "next/router";

function Button(props) {
    const router = useRouter();
    return (
        <>
            <div
                className={`${props.className}  ${"button hover:cursor-pointer"} ${`color-[${props.color}]`} ${`before:bg-[${props.color}]`}`}
                style={{ color: props.color }}
                id={props.id}
                onClick={props.onClick ? props.onClick : () => router.push(props.link)}
            >
                {props.text}{" "}

                {
                    props.arrow ? 
                    <AiOutlineArrowRight size={28} className="pl-1" />
                    :
                    <></>
                }
            </div>
        </>
    );
}

export default Button;
