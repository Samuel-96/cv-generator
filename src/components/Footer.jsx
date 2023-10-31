import Logo from "../assets/github-logo.png"
import "../styles/footer.css"
export default function Footer(){

    return(
        <footer>
            <p>Copyright © 2023 Samuel-96</p>
            <a href="https://github.com/Samuel-96" target="_blank" rel="noreferrer">
                <img src={Logo}/>
            </a> 
    </footer>
    )
}