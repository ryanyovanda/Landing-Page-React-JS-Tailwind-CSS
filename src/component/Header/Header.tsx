import { FC } from "react";
import NavLink from "./NavLink";

const Header:FC = () =>{
    return(
        <>
        <header className="absolute top-0 left-0 py-2 px-6 z-[2] w-full"> 
            <nav className="flex justify-between text-lg font-normal">
                <div>
                    @Ryan Yovanda
                </div>
                <div class="flex gap-10">
                    <NavLink href="/public" text="About"/>
                    <NavLink href="/public" text="About"/>
                    <NavLink href="/public" text="About"/>
                    <NavLink href="/public" text="About"/>
                    <NavLink href="/public" text="About"/>
                </div>

            </nav>
            
        </header>
        </>
    )
}

export default Header;