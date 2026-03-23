import { GraduationCap, Briefcase, BookOpen, Trophy } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Students() {
  const studentCategories = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'College Students',
      description: 'Students pursuing degrees at Delhi University and other prestigious institutions',
      count: '20+',
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Working Professionals',
      description: 'Alumni now working in various fields, including EdTech companies',
      count: '15+',
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Board Exam Students',
      description: 'Students appearing for Class 10 and 12 Board examinations',
      count: '30+',
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'High School Students',
      description: 'Students progressing through high school education',
      count: '35+',
    },
  ];

  const sampleStudents = [
    {
      name: 'Shilpee',
      status: 'B.Com Hons, Sri Venkateswara College, Delhi University',
      achievement: 'Making steady progress in her studies and now tutoring younger students in her meantime',
      image: '',
    },
    {
      name: 'Raja Rathour',
      status: 'B.Tech in Computer Science, Delhi Technological University',
      achievement: 'Learning and growing well and aspiring for a career in tech despite financial hardships',
      image: '',
    },
    {
      name: 'Neha',
      status: 'Class 12th',
      achievement: 'Overcoming challenges to excel in her studies and preparing for competitive exams',
      image: '',
    },
    {
      name: 'Shivya',
      status: 'BSc, Statistics, Delhi University',
      achievement: 'Now tutoring younger students while managing her studies',
      image: '',
    },
    {
      name: 'Nitish Haldar',
      status: 'Started his own small business while pursuing his studies',
      achievement: 'Preparing for board exams with dedication and confidence',
      image: '',
    },
    {
      name: 'Pawan',
      status: 'Graduated and now working in companies with data entry jobs',
      achievement: 'Completed graduation and now working as a teacher',
      image: '',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="/OurStudents.png"
            alt="Our Students"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/40 to-green-800/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 font-bold">Our Students</h1>
            <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto text-green-100">
              From school to college to careers - Witness the transformative journey of our students
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 sm:py-14 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {studentCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-100 rounded-full p-3 sm:p-4 w-14 sm:w-16 h-14 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                  <div className="text-green-600 text-lg sm:text-xl">{category.icon}</div>
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl text-green-600 mb-2 font-bold">{category.count}</div>
                <h3 className="text-base sm:text-lg lg:text-lg mb-1 sm:mb-2 font-semibold">{category.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Profiles Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-4 font-bold">Meet Some of Our Students</h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600">
              Each story is a testament to determination and resilience
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {sampleStudents.map((student, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-40 sm:h-48">
                  <ImageWithFallback
                    src={student.image}
                    alt={student.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 sm:p-5 lg:p-6">
                  <h3 className="text-base sm:text-lg lg:text-xl mb-2 font-semibold">{student.name}</h3>
                  <p className="text-sm sm:text-base text-green-600 mb-2 sm:mb-3 font-medium">{student.status}</p>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600">{student.achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-8 sm:mb-12 lg:mb-12 text-center font-bold">Journey of Transformation</h2>
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-green-50 rounded-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl lg:text-2xl mb-3 sm:mb-4 font-bold">From Alphabets to University</h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-3 sm:mb-4">
                Children who were completely unfamiliar with the world of alphabets and numbers when they 
                joined Protsahan have now either completed their graduation or are currently pursuing degrees 
                from prestigious colleges at Delhi University.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700">
                Their achievements, despite a severe scarcity of financial and material resources, are truly 
                astounding. They now stand on the threshold of bright careers and futures.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl lg:text-2xl mb-3 sm:mb-4 font-bold">Giving Back to the Community</h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-3 sm:mb-4">
                Many of our students have begun tutoring younger children in their localities—either for free 
                or for a nominal fee—to support their families' modest incomes.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700">
                Even here at Protsahan, senior students assist their juniors while pursuing their own studies, 
                creating a culture of mentorship and support.
              </p>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl lg:text-2xl mb-3 sm:mb-4 font-bold">Building Confidence</h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-3 sm:mb-4">
                Our students have imbibed a positive, self-confident outlook and a "can-do" attitude, despite 
                the hardships they face in their daily lives.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700">
                Witnessing them grow into confident young men and women is truly wonderful. We have full faith 
                that they will emerge as role models within their community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative text-white py-10 sm:py-14 lg:py-16 overflow-hidden"
        style={{
          backgroundImage: "url('/Footer.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4 drop-shadow-lg font-bold">Be Part of Their Journey</h2>
          <p className="text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto drop-shadow-md">
            Support our students as they continue to break barriers and achieve their dreams
          </p>
        </div>
      </section>
    </div>
  );
}
