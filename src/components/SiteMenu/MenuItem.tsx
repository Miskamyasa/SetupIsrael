import {localizePath} from "../../utils/i18n"

interface Props {
    href: string
    text: string
}


export default function MenuItem(props: Props) {
    return (
        <a
            className="inline-flex px-4 no-underline font-medium transition-colors hover:text-primary"
            href={localizePath(props.href)}>
            {props.text}
        </a>
    )
}
