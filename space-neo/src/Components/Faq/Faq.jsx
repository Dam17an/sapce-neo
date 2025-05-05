import React from 'react';
import './Faq.css';
import moonPhases from './moon-phases.png';

const Faq = () => {
    return (
        <div className="faq-container">
            <img src={moonPhases} alt="Moon Phases" className="moon-phases" />

            <div className="faq-wrapper">
                <h1 className="faq-title">FAQs</h1>

                <div className="faq-section">
                    <h2>WHEN IS THE NEXT LAUNCH?</h2>
                    <p>
                        Lorem ipsum text as placeholder for this section of text. To be filled in later with something meaningful and space themed. Lorem ipsum text as placeholder for this section of text.
                    </p>
                    <p>
                        Lorem ipsum text as placeholder for this section of text. To be filled in later with something meaningful and space themed. Lorem ipsum text as placeholder for this section of text.
                    </p>
                </div>

                <div className="faq-section">
                    <h2>IS THERE A RIDESHARE?</h2>
                    <p>
                        Lorem ipsum text as placeholder for this section of text. To be filled in later with something meaningful and space themed. Lorem ipsum text as placeholder for this section of text.
                    </p>
                    <p>
                        Lorem ipsum text as placeholder for this section of text. To be filled in later with something meaningful and space themed. Lorem ipsum text as placeholder for this section of text.
                    </p>
                </div>

                <div className="faq-section">
                    <h2>HOW LONG IS EACH TRIP?</h2>
                    <p>
                        Lorem ipsum text as placeholder for this section of text. To be filled in later with something meaningful and space themed. Lorem ipsum text as placeholder for this section of text.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Faq;