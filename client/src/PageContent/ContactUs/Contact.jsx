import React from "react";
import { TbArrowBadgeRightFilled } from "react-icons/tb";

const contactData = [
    {
        title: "Contact",
        name: "Pratibha Tiwari",
        phone: "7567437594"
    },
    {
        title: "Contact",
        name: "Ravindra Bohra",
        phone: "8830526490"
    },
    {
        title: "Email",
        email: "cdoe@mituniversity.edu.in"
    },
    {
        title: "Website",
        website: "www.mituniversity.ac.in"
    }
];

const Contact = () => {
    return (
        <div>
            <h2 className="innerpage-title">Contact Us</h2>

            <p>MIT Art, Design & Technology University, Pune
                Rajbaugh, Solapur – Pune Highway, near Bharat Petrol Pump, Loni Kalbhor, Maharashtra 412201
            </p>

            <ul className="icon-list">
                {contactData.map((item, index) => (
                    <li key={index}>
                        <div className="list-title">
                            <TbArrowBadgeRightFilled className="icon" />
                            {item.title}:
                        </div>

                        <p>
                            {item.phone ? (
                                <>
                                    {item.name}:{" "}
                                    <a href={`tel:${item.phone}`} className="link">
                                        {item.phone}
                                    </a>
                                </>
                            ) : item.email ? (
                                <a href={`mailto:${item.email}`} className="link">
                                    {item.email}
                                </a>
                            ) : item.website ? (
                                <a
                                    href={`https://${item.website}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="link"
                                >
                                    {item.website}
                                </a>
                            ) : null}
                        </p>
                    </li>
                ))}
            </ul>

        </div>
    );

};

export default Contact;
