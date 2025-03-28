import React from 'react';
import { BookCheck, ExternalLink, GraduationCap, Users, Globe } from 'lucide-react';

const Propulsion = () => {
  const propulsionItems = [
    {
      title: 'Unbiased Paper Assessment',
      description: 'Implementing a fair and transparent evaluation process that ensures objective assessment of student performance.',
      icon: <BookCheck className="w-12 h-12 text-[#910000]" />
    },
    {
      title: 'Exit Feedback from T.Y. Students',
      description: 'Collecting comprehensive feedback from third-year students to continuously improve the academic experience.',
      icon: <ExternalLink className="w-12 h-12 text-green-600" />
    },
    {
      title: 'Training for MH-CET for M.C.A. Course',
      description: 'Providing specialized coaching and preparation for the Maharashtra Common Entrance Test for Master of Computer Applications.',
      icon: <GraduationCap className="w-12 h-12 text-red-600" />
    },
    {
      title: 'Alumni Associates',
      description: 'Leveraging the expertise and network of successful alumni to provide guidance and opportunities for current students.',
      icon: <Users className="w-12 h-12 text-yellow-600" />
    },
    {
      title: 'Students Exchange Programme',
      description: 'Facilitating international and inter-institutional exchange programs to broaden students\' academic and cultural perspectives.',
      icon: <Globe className="w-12 h-12 text-teal-600" />
    }
  ];

  return (
    <div className="bg-gray-50 py-12 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Ways to Remain Focused on <span className="text-[#910000] underline">Propulsion</span>
        </h3>

        {/* Scrolling Container */}
        <div className="relative w-full overflow-hidden">
          <div className="flex space-x-6 animate-scroll">
            {/* Duplicate cards for seamless scrolling */}
            {[...propulsionItems, ...propulsionItems].map((item, index) => (
              <div 
                key={index}
                className="min-w-[340px] max-w-[340px] bg-white rounded-xl shadow-md p-6 
                  transform transition-all duration-300 hover:scale-105 hover:shadow-lg 
                  flex flex-col items-start border border-gray-200"
              >
                <div className="mb-4 flex items-center">
                  {item.icon}
                  <h4 className="ml-4 text-lg font-semibold text-gray-800">{item.title}</h4>
                </div>
                <p className="text-gray-600 flex-grow">{item.description}</p>
                <div className="mt-4 w-full h-1 bg-gradient-to-r !from-[#910000] to-gray-900 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Propulsion;
