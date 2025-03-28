import React from "react";
import { Carousel } from "react-bootstrap";

function ComputerAssociation() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-light">
                {/* Description Section */}
                <div className="bg-white shadow-xl rounded-3xl p-6">
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold !text-[#910000] underline">Computer Association</h3>
                        <p className="text-base text-gray-700 leading-relaxed">
                            The Department has a "Computer Association". It gives a good platform to students for their overall personality development.
                            Various technical as well as social events are conducted under this banner.
                            All these events are organized by students of the department under the guidance of the teacher in-charge of the association.
                        </p>
                        <p className="text-base text-gray-700 leading-relaxed">
                        The Computer Association (CA) not only fosters technical excellence but also encourages students to explore their creativity, teamwork, and leadership skills. Through a wide array of activities such as coding competitions, hackathons, workshops, guest lectures, and group projects, students get the opportunity to enhance their technical expertise while collaborating with peers.
                        </p>
                    </div>
                </div>

                {/* Carousel Section */}
                <div className="bg-white shadow-lg rounded-3xl p-4">
                    <Carousel className="w-full">
                        <Carousel.Item>
                            <img
                                className="w-full h-96 object-contain mx-auto"
                                src="public/imgs/IMG_2492.JPG"
                                alt="First slide"
                            />
                            <Carousel.Caption className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                                <p className="text-gray-200">Batch 2021-24</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="w-full h-96 object-contain mx-auto"
                                src="public/imgs/IMG_8579.jpg"
                                alt="Second slide"
                            />
                            <Carousel.Caption className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                                <p className="text-gray-200">Batch 2022-25</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="w-full h-96 object-contain mx-auto"
                                src="public/imgs/img_212.png"
                                alt="Third slide"
                            />
                            <Carousel.Caption className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                                <p className="text-gray-200">Batch 2020-23</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="w-full h-96 object-contain mx-auto"
                                src="public/imgs/img_214.png"
                                alt="Fourth slide"
                            />
                            <Carousel.Caption className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                                <p className="text-gray-200">Batch 2017-19</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="w-full h-96 object-contain mx-auto"
                                src="public/imgs/img_213.png"
                                alt="Fifth slide"
                            />
                            <Carousel.Caption className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                                <p className="text-gray-200">Batch 2015-17</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="w-full h-96 object-contain mx-auto"
                                src="public/imgs/img_211.png"
                                alt="Sixth slide"
                            />
                            <Carousel.Caption className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                                <p className="text-gray-200">Batch 2022-25</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>

            {/* Social Media Widget (Optional) */}
            {typeof window !== 'undefined' && (
                <div className="mt-8">
                    <script src="https://static.elfsight.com/platform/platform.js" async></script>
                    <div className="elfsight-app-ae82b1da-5361-436e-8d85-ecfffae118ce" data-elfsight-app-lazy></div>
                </div>
            )}
        </div>
    );
}

export default ComputerAssociation;