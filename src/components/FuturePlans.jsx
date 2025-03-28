import React from "react";

function FuturePlans() {
    const plans = [
        {
            title: "Placement Enhancement",
            description: "Continuous efforts to improve placement rates through industry connections and skill development."
        },
        {
            title: "Industry Linkages",
            description: "Strengthening connections with leading tech companies for internships and collaborative projects."
        },
        {
            title: "Conference Organization",
            description: "Hosting state and national level conferences to promote academic and research excellence."
        },
        {
            title: "Student Internship",
            description: "Motivating and facilitating industry internships to provide real-world exposure."
        }
    ];

    return (
        <div className="bg-gray-50 py-4 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto bg-white rounded-2xl p-4 shadow-sm">
                <h3 className="text-2xl font-bold !text-[#910000] mb-6 underline">Future Plans</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {plans.map((plan, index) => (
                        <div 
                            key={index} 
                            className="bg-white shadow-xl rounded-3xl p-6 space-y-4 hover:shadow-2xl transition-all duration-300"
                        >
                            <h4 className="text-xl font-semibold text-[#910000] h-16">{plan.title}</h4>
                            <p className="text-base text-gray-700 leading-relaxed">{plan.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FuturePlans;