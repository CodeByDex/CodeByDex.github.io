import "./Footer.Color.css";
// import "./Navbar.Text.css";
// import "./Navbar.Effect.css";

function Footer({ }) {
    return (
        <footer className="flex" style={{justifyContent: "center"}}>
            <div>
            </div>
            <div>
                <a class="link-text" href="tel:123-456-7890">123-456-7890</a>
                <a class="link-text" href="mailto:mailme@notmyemail.com">mailme@notmyemail.com</a>
                <a class="link-text" href="https://github.com/CodeByDex" target="_blank">github</a>
                <a class="link-text" href="https://www.linkedin.com/in/ryanspath/" target="_blank">LinkedIn</a>
            </div>
            <div>
            </div>
        </footer>
    )
}

export default Footer;