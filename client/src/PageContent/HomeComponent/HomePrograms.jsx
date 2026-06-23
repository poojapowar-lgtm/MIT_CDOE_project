import React from "react";
import "./HomePrograms.css";

const HomePrograms = () => {
    return (
        <section className="programs">
            <h1 className="title">Our Programs</h1>
            <h2 className="subtitle">
                UGC-DEB Approved Distance & Online Programs
            </h2>

            <div className="programs-container">
                {/* MBA CARD */}
                <div className="card blue">
                    <div className="overlay"></div>
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                        alt="MBA"
                    />

                    <div className="content">
                        <h3>MBA Programmes</h3>
                        <p>
                            The Master of Business Administration (MBA) programme is offered
                            through Distance and Online mode as per UGC-DEB regulations and
                            duly approved by the Distance Education Bureau, UGC, New Delhi.
                        </p>

                        <ul>
                            <li>Finance Technology <span>2 Years</span></li>
                            <li>Logistics & Supply Chain <span>2 Years</span></li>
                            <li>Human Resource Management <span>2 Years</span></li>
                            <li>Marketing Management <span>2 Years</span></li>
                        </ul>
                    </div>
                </div>

                {/* BBA CARD */}
                <div className="card green">
                    <div className="overlay"></div>
                    <img
                        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                        alt="BBA"
                    />

                    <div className="content">
                        <h3>BBA Programmes</h3>
                        <p>
                            The Bachelor of Business Administration (BBA) programme is offered
                            through Distance and Online mode as per UGC-DEB regulations and
                            duly approved by the Distance Education Bureau, UGC, New Delhi.
                        </p>

                        <ul>
                            <li>Digital Marketing <span>3 Years</span></li>
                            <li>International Business <span>3 Years</span></li>
                            <li>B.Com Computer Applications <span>3 Years</span></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Equivalence Section */}
            <div className="advantages">
                <h1 className="title">Advantages of CDOE</h1>
                <p style={{ textAlign: "center" }}>
                    Degrees earned through UGC-DEB approved Distance & Online programs are
                    equivalent to regular degrees and valid for government jobs, higher
                    studies, and global opportunities.
                </p>

                <div className="badges">
                    <span>100% Online Programme</span>
                    <span>Live Online Interactive Sessions</span>
                    <span>Peer-to-Peer Doubt Sharing & Solving Sessions</span>
                    <span>24×7 Access to World Class Advanced Learning Management System</span>
                    <span>Online Degree Equally Credible as Offline Degree</span>
                    <span>Online Assessments as per UGC Guidelines</span>
                    <span>Access to Recorded Sessions to Learn at Your Own Pace</span>
                </div>
            </div>
        </section>
    );
};

export default HomePrograms;