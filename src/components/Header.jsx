import React from "react";

function Header() {
  return (
    <>
      <div className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-3 py-3">
          <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">Program Overview</p>
          <div className="flex items-start justify-between">
            <h4 className="text-4xl font-bold text-gray-900">
              About the Course –
              <span className="text-[#910000]"> Bachelor of Science in Computer Science (B.Sc.C.S.)</span>
            </h4>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 flex items-start justify-items-start py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-full w-full space-y-8 bg-white shadow-xl rounded-3xl">
          <div className="px-6 pt-8 pb-4">
            <div className="space-y-4 text-gray-700">
              <h3 className="text-xl font-semibold !text-[#910000] mb-4 underline">Overview</h3>
              <p className="text-base leading-relaxed">
                The Department of Information Technology and Computer Science came into being in 2001.
              </p>
              <p className="text-base leading-relaxed">
                The Department was started with the object of promoting specialized knowledge in the field of Computer Science and Computer Application. The Department strives to channelize talented youth of the region to this challenging and knowledge-intensive field by imparting quality technical knowledge and skills.
              </p>

              <div className="mt-6">
                <h3 className="text-xl font-semibold !text-[#910000] mb-4 underline">Eligibility Criteria</h3>
                <p className="text-base text-gray-700 mb-2">To be eligible for admission into our B.Sc.C.S program, candidates must:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Have completed 10+2 from any stream with Mathematics as a subject.</li>
                  <li>Achieved a minimum of 60% marks in the respective examination.</li>
                  <li>Appeared for the Maharashtra Common Entrance Test (Mah-CET), which is optional for admission.</li>
                </ul>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold !text-[#910000] underline mb-4">Duration</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>3-Year Degree Program</li>
                  <li>4-Year Honors Program</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 mb-6">
              <button className="bg-[#910000] text-white px-4 py-2 hover:bg-[#7a0000] transition-all duration-300 font-semibold !rounded-3xl">
                Inquire Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;