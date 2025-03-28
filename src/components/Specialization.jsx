import React from "react";

function Specialization() {
    const specializations = [
        {
            title: "Full Stack Development",
            description: "Comprehensive training in both front-end and back-end development."
        },
        {
            title: "Data Science",
            description: "Focus on data analysis, statistical modeling, and machine learning."
        },
        {
            title: "UI/UX Design",
            description: "Emphasis on user interface and user experience design principles."
        }
    ];

    return (
        <div className="bg-gray-50 py-4 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto bg-white rounded-2xl p-4 shadow-sm">
                <h3 className="text-2xl font-bold !text-[#910000] mb-6 underline">Specializations Offered</h3>
                <p className="text-gray-700 mb-6">
                    Our B.Sc.C.S program allows students to choose from the following specializations:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {specializations.map((spec, index) => (
                        <div 
                            key={index} 
                            className="bg-white shadow-xl rounded-3xl p-6 space-y-4 hover:shadow-2xl transition-all duration-300"
                        >
                            <h4 className="text-xl font-semibold text-[#910000] h-16 flex items-center">
                                {spec.title}
                            </h4>
                            <p className="text-base text-gray-700 leading-relaxed">
                                {spec.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Specialization;