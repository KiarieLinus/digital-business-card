import twitter from '../assets/Twitter.png'
import instagram from '../assets/Instagram.png'
import github from '../assets/Github.png'
import linkedin from '../assets/Linkedin.png'

export default function Footer(){
    return(
        <footer>
            <a href='https://twitter.com/KiarieLinus' target='_blank'>
                <img src={twitter}/>
            </a>

            <a href='https://www.instagram.com/kiarie.linus/' target='_blank'>
                <img src={instagram}/>
            </a>

            <a href='https://www.linkedin.com/in/linus-kiarie/' target='_blank'>
                <img src={linkedin}/>
            </a>

            <a href='https://github.com/KiarieLinus' target='_blank'>
                <img src={github}/>
            </a>

        </footer>
    )
}