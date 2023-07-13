import Image from "next/image"
import {localizePath} from "../utils/i18n"

interface Props {
    white?: boolean
}

export default function Logo(props: Props) {
    const src = props.white
        ? "/svg/logo-white.svg"
        : "/svg/logo.svg"

    return (
        <a href={localizePath("/")}>
            <Image
                alt="Logo"
                height="28"
                src={src}
                width="112" />
        </a>
    )
}
