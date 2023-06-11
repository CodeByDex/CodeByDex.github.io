import "./Navbar.Color.css";
import "./Navbar.Layout.css";
import "./Navbar.Text.css"
import "./Navbar.Effect.css";

function Navbar({handleSectionChange}) {
    return (
        <header className="flex">
            <div>
                <h1>Code By Dex</h1>
            </div>
            <nav className="flex">
                <a className="link-text" href="#AboutMe" onClick={() => handleSectionChange('About')} >About Me</a>
                <a className="link-text" href="#Work" onClick={() => handleSectionChange('Projects')} >Work</a>
                <a className="link-text" href="#ContactMe" onClick={() => handleSectionChange('About')} >Contact Me</a>
                <a className="link-text" href="./public/downloads/SpathResume.pdf" download>Resume</a>
            </nav>
        </header>
    )
}

export default Navbar;