import Logo from "./Logo"
import SiteMenu from "./SiteMenu/SiteMenu"


export default function SiteHeader() {
    return (
        <div className="shrink-0">
            <header className="py-9 relative z-20 container row gap-2">
                <Logo />
                <SiteMenu />
            </header>
        </div>
    )
}
