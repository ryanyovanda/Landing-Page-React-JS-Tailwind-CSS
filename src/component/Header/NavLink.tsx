import { FC } from "react";

interface NavLinkProps {
    href: string;
    text: string;
}

const NavLink: FC<NavLinkProps> =({href, text}) => {
    return <a class="no-underline text-black hover:scale-110" href={href}>{text}</a>
}

export default NavLink