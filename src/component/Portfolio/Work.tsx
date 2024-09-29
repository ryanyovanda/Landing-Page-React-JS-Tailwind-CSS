import { FC } from "react";

interface Work {
    href: string;
    text: string;
}

const Work: FC<WorkProps> =({href, title, description}) => {
    return <a class="no-underline text-black hover:scale-110" href={href}>{title}</a>
    <a className=""href={href}>{description}</a>
}

export default Work