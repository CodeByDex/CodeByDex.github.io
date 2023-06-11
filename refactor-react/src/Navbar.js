import "./Navbar.Color.css";
import "./Navbar.Layout.css";
import "./Navbar.Text.css"

function Navbar() {
    return (
        <header className="flex">
            <div>
                <h1>Code By Dex</h1>
            </div>
            <nav className="flex">
                <a className="link-text" href="#AboutMe">About Me</a>
                <a className="link-text" href="#Work">Work</a>
                <a className="link-text" href="#ContactMe">Contact Me</a>
                <a className="link-text" href="./assets/downloads/SpathResume.pdf" download>Resume</a>
            </nav>
        </header>
    )
}

export default Navbar;