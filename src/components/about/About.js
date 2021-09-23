import { useState } from 'react';
import ReactDOM from 'react-dom';
import { pdfjs } from "react-pdf";
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import './About.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const About = () => {
    const [shown, setShown] = useState(false);
    const modalBody = () => (
        <div
            style={{
                backgroundColor: '#fff',
                flexDirection: 'column',
                overflow: 'hidden',
                overflowY: 'scroll',

                /* Fixed position */
                left: 0,
                position: 'fixed',
                top: 0,

                /* Take full size */
                height: '100%',
                width: '100%',

                /* Displayed on top of other elements */
                zIndex: 9999,
            }}
        >
            <div
                style={{
                    alignItems: 'center',
                    backgroundColor: '#000',
                    color: '#fff',
                    display: 'flex',
                    padding: '.5rem',
                }}
            >
                <div style={{ marginRight: 'auto' }}>CV_ZOUBIR_BARRAZ.pdf</div>
                <button
                    style={{
                        backgroundColor: '#357edd',
                        border: 'none',
                        borderRadius: '4px',
                        color: '#ffffff',
                        cursor: 'pointer',
                        padding: '8px',
                    }}
                    onClick={() => setShown(false)}
                >
                    Close
                </button>
            </div>
            <div
                style={{
                    flexGrow: 1,
                    overflow: 'hidden',
                }}
            >
                <Viewer fileUrl="assets/CV - ZOUBIR_BARRAZ.pdf" />
            </div>
        </div>
    );


    return (
        <section className="about" id="about">
            <div className="description">
                <div className="picture">
                    <img src="assets/Zoubir_Barraz1.png" alt="Zoubir BARRAZ" />
                </div>
                <div className="profile">
                    <h2>About Me</h2>
                    <p>Engineer in geomatics and land surveys, passionate about Photogrammetry and Computer Science which enabled me to create some applications that can develop further our domain of expertise. My graduation project and my personal projects have allowed me to develop my skills, among others, in the use of Python, Drone Photogrammetry, the AWS cloud environment and even web development (AboutSurveyors developer). Motivated, and able to learn new things fast. </p>
                    <div className="resume">
                        <button onClick={() => setShown(true)}>View Resume</button>
                        {shown && ReactDOM.createPortal(modalBody(), document.body)}
                        <a href="https://drive.google.com/file/d/1QXw_weWlo6GHy4sN0AkarPRiet_n5ogj/view?usp=sharing" role="button" target="_blank" rel="noopener noreferrer">Download Resume</a>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;