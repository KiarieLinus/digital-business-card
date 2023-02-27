import profile from '../assets/profile.png';
import mail from '../assets/Mail.svg';

export default function Info() {
    return (
        <div className='info'>
            <img src={profile} />
            <h2>Linus Kiarie</h2>
            <h3>Frontend Developer</h3>
            <h4>linuskiarie.website</h4>

            <a className='mail' href='mailto: kiarielinus@gmail.com'>
                    <img src={mail}/>
                    Email    
            </a>

        </div>)
}