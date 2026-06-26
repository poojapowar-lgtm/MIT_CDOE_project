import React from "react";

const KeyLeaders = [
    {
        name: "Rev. Prof. Dr. Vishwanath D. Karad",
        role: "Founder Father, President — MIT Art, Design and Technology University",
    },
    {
        name: "Dr. Mangesh T. Karad",
        role: "Executive President, MIT Art, Design and Technology University",
    },
    {
        name: "Dr. Sunita Karad",
        role: "Executive Director, MIT Art, Design and Technology University",
    },

    {
        name: "Prof. Dr. Rajesh Siddavatam",
        role: "Vice Chancellor, MIT Art, Design and Technology University",
    },
    {
        name: "Dr. Sayalee Gankar ",
        role: "Provost, MIT-ADT University"
    },
    {
        name: "Dr. Ramchandra Pujeri ",
        role: "Pro Vice Chancellor, MIT-ADT University"
    },
    {
        name: "Dr. Mohit Dubey ",
        role: "Pro Vice Chancellor, MIT-ADT University"
    },
    {
        name: "Dr. Mahesh Chopade ",
        role: "Registrar, MIT-ADT University"
    },
    {
        name: "Dr. Nachiket Thakur ",
        role: "Pro Vice Chancellor & Dean, Faculty of Design"
    },
    {
        name: "Dr. Dnyandeo Neelwarna ",
        role: "Controller of Examinations, MIT-ADT University"
    },
    {
        name: "Ms. Nayana Godse ",
        role: "Chief Finance & Accounts Officer, MIT-ADT University"
    },
]

const Leadership = () => {
    return (
        <>
            <h2 className="innerpage-title">Leadership</h2>
            <div className="board-body-container">
                {KeyLeaders.map((item, index) => (
                    <div key={index}>
                        {/* Card */}
                        <div className="board-card">
                            <p className="board-name">{item.name}</p>

                            <p
                                className="board-desg"
                                dangerouslySetInnerHTML={{ __html: item.role }}
                            ></p>

                            <p>{item.desc}</p>
                        </div>

                    </div>
                ))}
            </div>
        </>
    );
};

export default Leadership;
