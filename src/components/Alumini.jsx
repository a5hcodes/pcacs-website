import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function Alumni() {
    const alumniProfiles = [
        {
            name: "Rahul Sharma",
            designation: "Senior Software Engineer, Google",
            quote: "The robust curriculum and supportive faculty were instrumental in shaping my tech career.",
            image: "https://t3.ftcdn.net/jpg/02/48/15/86/360_F_248158608_0ErNeAWWx6GZVDCg66jNRoPGEhHCSpaJ.jpg"
        },
        {
            name: "Priya Patel",
            designation: "Data Scientist, Amazon",
            quote: "Our department's focus on practical skills gave me a competitive edge in the industry.",
            image: "https://www.aljazeera.com/wp-content/uploads/2022/01/Ragini-Das-Co-founder-leap.club_.jpg?resize=770%2C513&quality=80"
        },
        {
            name: "Amit Deshmukh",
            designation: "UX Design Lead, Uber",
            quote: "The comprehensive training prepared me to excel in complex technological environments.",
            image: "https://static.vecteezy.com/system/resources/thumbnails/048/632/363/small/male-doctor-in-gray-suit-and-tie-with-neutral-gray-background-free-photo.jpg"
        },
        {
            name: "Sneha Kapoor",
            designation: "Cloud Architect, Microsoft",
            quote: "Learning here was not just about technical skills, but about holistic professional development.",
            image: "https://img.freepik.com/free-photo/happy-businesswoman-with-hand-chin_1262-20885.jpg?semt=ais_hybrid"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex + 1) % alumniProfiles.length
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? alumniProfiles.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center !text-[#910000] mb-10 underline">
                    Our Successful Alumni
                </h2>
                
                <div className="relative w-full max-w-4xl mx-auto">
                    <div className="overflow-hidden rounded-3xl shadow-xl">
                        <div 
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {alumniProfiles.map((alumni, index) => (
                                <div 
                                    key={index} 
                                    className="w-full flex-shrink-0 flex items-center bg-white"
                                >
                                    <div className="w-1/3 p-8">
                                        <img 
                                            src={alumni.image} 
                                            alt={alumni.name} 
                                            className="w-full h-64 object-cover rounded-2xl"
                                        />
                                    </div>
                                    <div className="w-2/3 p-8">
                                        <p className="text-lg italic text-gray-600 mb-4">
                                            "{alumni.quote}"
                                        </p>
                                        <div>
                                            <h3 className="text-xl font-bold text-[#910000]">
                                                {alumni.name}
                                            </h3>
                                            <p className="text-gray-500">
                                                {alumni.designation}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button 
                        onClick={prevSlide} 
                        className="absolute top-1/2 left-0 transform -translate-y-1/2 
                        bg-[#910000] text-white p-2 !rounded-full m-4 hover:bg-[#7a0000] transition-colors"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button 
                        onClick={nextSlide} 
                        className="absolute top-1/2 right-0 transform -translate-y-1/2 
                        bg-[#910000] text-white p-2 !rounded-full m-4 hover:bg-[#7a0000] transition-colors"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Dots Navigation */}
                    <div className="flex justify-center mt-6">
                        {alumniProfiles.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-3 w-3 ! rounded-full mx-2 ${
                                    currentIndex === index 
                                        ? 'bg-[#910000]' 
                                        : 'bg-gray-300'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Alumni;