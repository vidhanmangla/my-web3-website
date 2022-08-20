import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Vidhan Mangla" />

            <div className='header__content'>
                <h1>Hi, I'm Vidhan</h1>
                <p>
                Smart Contract & Blockchain Developer 
                </p>
                <br></br>
                        <a href='mailto:vidhanmangla@gmail.com' className='button'>Email</a>
                        <a href='https://calendly.com/vidhanmangla/meeting-with-vidhan' className='button'>Meeting</a>
                <br></br>
                <br></br>
                        <small><a href ="https://link.storjshare.io/juqq5o77dpbmmj3wvi6jpghnqyla/jobs-material%2FResume.pdf" attributes-list>Resume</a></small>
                <br></br>
                <br></br>        
                        <small><a href ="https://link.storjshare.io/ju6cy3hqvpnxr2tmtcfanlbkkttq/jobs-material%2FCover%20Letter.pdf" attributes-list>Covering Letter</a></small>
                <br></br>
                <br></br>
                        <small>This Web 3.0 portfolio website is proudly hosted on IPFS</small>
            </div>
        </section>
    );
}

export default Header;