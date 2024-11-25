import { NavLink } from "react-router-dom";

export default function MainMenu() {
    return (
        <nav>
            <NavLink="/">home</NavLink>
            <NavLink="/books" > books</NavLink >
        <NavLink="/about" > about</NavLink >
            <NavLink="/contacts" > contacts</NavLink >

        </nav >
    )
}