import Logo from "../assets/github-logo.png"
import "../styles/footer.css"

const date = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="footer">
            <p>© {date} Samuel-96. Todos los derechos reservados.</p>

            <a
                href="https://github.com/Samuel-96"
                target="_blank"
                rel="noreferrer"
                aria-label="Visitar mi perfil de GitHub"
            >
                <img src={Logo} alt="GitHub" />
                <span>GitHub</span>
            </a>
        </footer>
    )
}
