import React from "react";
import { Accordion } from "react-bootstrap";

function StudentSupport() {
    const supportPractices = [
        {
            title: "Student – Student Mentoring",
            description: "A peer-to-peer support system where students guide and help each other in academic and personal development."
        },
        {
            title: "Guardian Teacher",
            description: "Dedicated faculty members assigned to provide personalized guidance, support, and mentorship to students."
        },
        {
            title: "Students Exchange Programme",
            description: "Opportunities for students to interact with and learn from peers in other institutions, broadening their perspectives."
        },
        {
            title: "Advance Learners",
            description: "Special programs and resources designed to challenge and support high-performing students in their academic journey."
        }
    ];

    return (
        <div className="bg-light py-4 px-4">
            <div className="container-fluid">
                <div className="bg-white shadow rounded-3xl p-4 mb-4">
                    <h3 className="!text-[#910000] underline mb-3">Student Support</h3>
                    <p className="text-muted">
                        Faculty members of the Department endeavor to be guides, counselors and facilitators to the students in order to sharpen their technical, leadership and organizational skills.
                    </p>
                    <p className="text-muted mt-2">
                        The department has adopted various practices for students' support:
                    </p>
                </div>
                
                <Accordion defaultActiveKey="0">
                    {supportPractices.map((practice, index) => (
                        <Accordion.Item eventKey={index.toString()} key={index} className="mb-3">
                            <Accordion.Header className="fw-bold text-description">
                                {practice.title}
                            </Accordion.Header>
                            <Accordion.Body>
                                {practice.description}
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </div>
        </div>
    );
}

export default StudentSupport;