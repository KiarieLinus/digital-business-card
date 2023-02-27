import profile from '../assets/profile.png';
import mail from '../assets/Mail.svg';

export default function Info() {
    return (
        <div className='info'>
            <img src={profile} />
            <h2>Linus Kiarie</h2>
            <h3>Frontend Developer</h3>
            <h4>linuskiarie.website</h4>

            <table border="0" cellSpacing="0" cellPadding="0">
                <tbody>
                    <tr>
                        <td align="center" className='info--tabledata'>
                            {/* <a rel="noopener" target="_blank" href="http://litmus.com">I am a button &rarr;</a> */}
                            <a className='mail' href='mailto: kiarielinus@gmail.com'>Email</a>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>)
}