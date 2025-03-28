import React from "react";

function VisionMission() {
    return (
        <div className="bg-gray-50 py-4 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Vision Section */}
                <div className="bg-white shadow-xl rounded-3xl p-6">
                    <h3 className="text-2xl font-bold !text-[#910000] mb-4 underline">Vision</h3>
                    <p className="text-base leading-relaxed text-gray-700">
                        Creating competent professionals capable of taking leading role in the industry. 
                        To provide the community with the graduates, who will practice the profession 
                        with ethics, integrity and social responsibility.
                    </p>
                </div>

                {/* Mission Section */}
                <div className="bg-white shadow-xl rounded-3xl p-6">
                    <h3 className="text-2xl font-bold !text-[#910000] mb-4 underline">Mission</h3>
                    <p className="text-base leading-relaxed text-gray-700">
                        Persistently strive, to inculcate the requisite skills in the budding I.T. 
                        professionals, innovators and entrepreneurs. Making them competent professionals, 
                        enabling them to take up any kind of challenges in any of the industry. Also, 
                        to sensitize them towards their social and moral responsibilities.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default VisionMission;