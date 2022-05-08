import React from 'react';
import { Accordion } from 'react-bootstrap';
import './FAQ.css';

const FAQ = () => {
    return (
        <div className='container'>
            <div>
                <h1 className='section-title my-4 p-2'>FAQs</h1>
            </div>
            <div>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Why is registering compulsory to add product?</Accordion.Header>
                        <Accordion.Body>
                            A user has to be registerd to addd product because, in the My Items page, the items added by the user is shown acccording to the email that was used while adding the product.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Where can I get online links for images?</Accordion.Header>
                        <Accordion.Body>
                            You can use the{" "}
                            <a href="https://imgbb.com/" target="_blank">
                                ImgBB
                            </a>{" "}
                            website to save photographs online and obtain URL links if
                            necessary.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>How can I reduce item quantity more than once at a time?</Accordion.Header>
                        <Accordion.Body>
                            At this moment, quantity of item can only be reduced by one item at a time.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

        </div>
    );
};

export default FAQ;