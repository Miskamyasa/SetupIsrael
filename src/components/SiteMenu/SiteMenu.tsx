import MenuItem from "./MenuItem"

export default function SiteMenu() {
    return (
        <nav className="mx-4 grow flex">
            <MenuItem
                href={"/about"}
                text="About" />
        </nav>
    )
}
