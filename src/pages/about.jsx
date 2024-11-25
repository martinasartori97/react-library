import MainMenu from "./components/MainMenu";

export default function About() {
    return (
        <>

            <header>
                <div className="logo">
                    LOGO
                </div>
                <MainMenu />
                <nav>
                    <a href="/">home</a>
                    <a href="/books">books</a>
                    <a href="/about">about</a>
                    <a href="/contacts">contacts</a>

                </nav>
            </header>

            <main>
                <h1>about page</h1>
            </main>

            <footer>
                <p>copyright 2024</p>
            </footer>
        </>


    )
}