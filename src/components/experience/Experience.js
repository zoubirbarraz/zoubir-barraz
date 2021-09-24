import './Experience.css'

const Experience = () => {
    return (
        <section className="experience" id="experience">
            <h1>Previous Experiences</h1>
            <div class="container">
                {/* Left vertical line */}
                <div class="container__line"></div>

                {/* The timeline items container */}
                <ul class="container__items">
                    {/* Each timeline item */}

                    <li class="container__item">
                        {/* The circle and title */}
                        <div class="container__top">
                            {/* The circle */}
                            <div class="container__circle"></div>
                            {/* The title */}
                            <div class="container__title">
                                <h2>Cloud Computing of large UAV dataset for 3D photogrammetric reconstruction / IMAGE MAPPING</h2>
                            </div>
                        </div>
                        {/* The description  */}
                        <div class="container__desc">
                            <p>
                                Create an autonomous workflow for 3D photogrammetric reconstruction on MicMac for 3D reconstruction
                                of large UAV datasets.
                                <br />
                                It start with the clustring of the block into sub-blocks using our Python script. Then, each sub-block will
                                be sent, automatically using AWS Services and Python SDK, to a machine in the cloud to be processed.
                                <br />
                                <strong>Results: 75% gain of processing time in comparison to Agisoft photoscan.</strong> 
                                <br />
                            </p>
                            <p className="ps"><strong> Upcoming paper in Future Technologies Conference October 2021 in Vancouver.</strong></p>
                        </div>
                    </li>
                    <li class="container__item">
                        {/* The circle and title */}
                        <div class="container__top">
                            {/* The circle */}
                            <div class="container__circle"></div>
                            {/* The title */}
                            <div class="container__title">
                                <h2>Internship in MAPPING ENGINEERING</h2>
                            </div>
                        </div>
                        {/* The description  */}
                        <div class="container__desc">
                            <p>
                                I've participated in field mission like: Registration Surveys,Topographic control for a tunnel construction project in Casablanca, and construction sites' implementation
                                <br />
                                Also, i've had an introduction to the work in Bathymetry, and to the procedure to start a survey in Ports.
                                <br />
                                
                            </p>
                            <p className="ps"><strong>Acquired Skills: Bathymetry, Land Survey mission procedures.</strong></p>
                        </div>
                    </li>
                    <li class="container__item">
                        {/* The circle and title */}
                        <div class="container__top">
                            {/* The circle */}
                            <div class="container__circle"></div>
                            {/* The title */}
                            <div class="container__title">
                                <h2>Internship / IAV Hassan II</h2>
                            </div>
                        </div>
                        {/* The description  */}
                        <div class="container__desc">
                            <p>
                                Densification of the study area, survey and establishment of a regular plan, stereo-preparation, aero-triangulation, photogrammetric restitution, and establishment of a cartographic atlas.
                                <br />
                            </p>
                            <p className="ps"><strong>Acquired Skills: Photogrammetry, Land Survey, Communication, and Leadership </strong></p>
                        </div>
                    </li>

                    {/*Repeat other items */}
                </ul>
            </div>
        </section>
    );
}

export default Experience;