import './Contact.css'

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="contact-container">
                <h1>Get In Touch</h1>
                <div className="message">
                    <p>I'm currently looking for opportunities in Remote Sensing & Drone photogrammetry! If you know of any positions available, either PHD or full-time. Also, if you have any questions, or you just want to say hi, please feel free to email me at, <a href="mailto:zoubirbarraz@gmail.com">zoubirbarraz@gmail.com</a> </p>
                </div>
                <div className="signature">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-code" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <polyline points="7 8 3 12 7 16"></polyline>
                        <polyline points="17 8 21 12 17 16"></polyline>
                        <line x1="14" y1="4" x2="10" y2="20"></line>
                    </svg>
                    <span>with</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
                    </svg>
                    <span>by</span>
                    <a href="github.com/zoubirbarraz" rel="noopener noreferrer">Zoubir BARRAZ</a>
                    <span>using</span>
                    <img src="assets/logo512.png" alt="logo ract" />
                </div>
            </div>

        </section>
    );
}

export default Contact;