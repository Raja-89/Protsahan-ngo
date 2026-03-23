import { Calendar, TrendingUp, Users, Award, Heart, Star, BookOpen, Briefcase } from 'lucide-react';

export function Timeline() {
  const timelineEvents = [
    {
      year: '2013',
      month: 'October',
      icon: <Star className="w-6 h-6" />,
      title: 'Protsahan Founded',
      description: 'Established on October 6, 2013, in a single room in Gejha Village, Noida. Started with the mission to provide free education to out-of-school children and dropouts.',
      impact: 'Foundation laid for a decade of transformation',
      color: 'blue',
    },
    {
      year: '2014',
      month: 'March',
      icon: <Users className="w-6 h-6" />,
      title: 'First Batch of Enrollments',
      description: 'Successfully enrolled the first group of children into local government schools. Established morning and evening classes.',
      impact: '25+ children began their educational journey',
      color: 'green',
    },
    {
      year: '2015',
      month: 'December',
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Expanded Operations',
      description: 'Increased capacity to accommodate more students. Introduced structured curriculum and regular assessments.',
      impact: 'Student count reached 50+',
      color: 'purple',
    },
    {
      year: '2017',
      month: 'May',
      icon: <Award className="w-6 h-6" />,
      title: 'First Board Exam Success',
      description: 'First batch of students successfully completed Class 10 board examinations with commendable results.',
      impact: 'Proved that quality education can overcome resource constraints',
      color: 'yellow',
    },
    {
      year: '2018',
      month: 'August',
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Milestone Achievement',
      description: 'Reached peak attendance of 100+ students in morning and evening classes. Expanded teaching team.',
      impact: '100+ students attending regularly',
      color: 'red',
    },
    {
      year: '2019',
      month: 'June',
      icon: <Heart className="w-6 h-6" />,
      title: 'Community Impact Recognized',
      description: 'Created awareness about importance of education among 300+ families. Students began tutoring younger children.',
      impact: 'Community-wide educational movement',
      color: 'pink',
    },
    {
      year: '2020',
      month: 'March',
      icon: <Users className="w-6 h-6" />,
      title: 'Adapting to Challenges',
      description: 'COVID-19 pandemic begins. Adapted teaching methods while maintaining student engagement and support.',
      impact: 'Continued education despite unprecedented challenges',
      color: 'orange',
    },
    {
      year: '2021',
      month: 'September',
      icon: <Award className="w-6 h-6" />,
      title: 'University Admissions',
      description: 'First students from Protsahan gained admission to Delhi University. Children who started with no knowledge of alphabets now pursuing higher education.',
      impact: 'Dream of university education became reality',
      color: 'indigo',
    },
    {
      year: '2022',
      month: 'January',
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Career Milestones',
      description: 'First student secured internship at an EdTech company. Others preparing for competitive exams and professional courses.',
      impact: 'Students entering professional world',
      color: 'cyan',
    },
    {
      year: '2023',
      month: 'October',
      icon: <Star className="w-6 h-6" />,
      title: 'Decade of Impact',
      description: 'Celebrated 10 years of Protsahan. Students graduated from universities, secured jobs, and emerged as role models in their community.',
      impact: 'Protsahan evolved into a movement',
      color: 'blue',
    },
    {
      year: '2024',
      month: 'Present',
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Continuing the Journey',
      description: 'Multiple students in college, high school students excelling in board exams, and alumni giving back to the community.',
      impact: 'Building on success, reaching new heights',
      color: 'green',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-600' },
      green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-600' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-600' },
      yellow: { bg: 'bg-yellow-100', text: 'text-yellow-600', border: 'border-yellow-600' },
      red: { bg: 'bg-red-100', text: 'text-red-600', border: 'border-red-600' },
      pink: { bg: 'bg-pink-100', text: 'text-pink-600', border: 'border-pink-600' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-600' },
      indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', border: 'border-indigo-600' },
      cyan: { bg: 'bg-cyan-100', text: 'text-cyan-600', border: 'border-cyan-600' },
    };
    return colors[color] || colors.blue;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0">
          <img
            src="/Timeline.png"
            alt="Our Timeline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/40 to-indigo-800/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Calendar className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 mx-auto mb-4 sm:mb-6" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 font-bold">Our Timeline</h1>
            <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto text-indigo-100">
              A decade of dedication, growth, and transformation - from October 6, 2013 to today
            </p>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="bg-white py-10 sm:py-14 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl text-indigo-600 mb-1 sm:mb-2 font-bold">10+</div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-600">Years of Service</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl text-indigo-600 mb-1 sm:mb-2 font-bold">300+</div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-600">Families Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl text-indigo-600 mb-1 sm:mb-2 font-bold">100+</div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-600">Students Enrolled</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl text-indigo-600 mb-1 sm:mb-2 font-bold">20+</div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-600">In College/Jobs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-10 sm:mb-14 lg:mb-16 text-center font-bold">Journey Through the Years</h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 sm:left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300"></div>

            {/* Timeline Events */}
            <div className="space-y-8 sm:space-y-10 lg:space-y-12">
              {timelineEvents.map((event, index) => {
                const colorClasses = getColorClasses(event.color);
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className={`relative flex items-center ${
                      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-col md:gap-8`}
                  >
                    {/* Timeline Dot */}
                    <div
                      className={`absolute left-6 sm:left-8 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full ${colorClasses.bg} border-4 ${colorClasses.border} z-10`}
                    ></div>

                    {/* Content */}
                    <div
                      className={`w-full md:w-5/12 ${
                        isLeft ? 'md:text-right md:pr-16' : 'md:pl-16'
                      } pl-16 md:pl-0`}
                    >
                      <div className="bg-white rounded-lg shadow-md p-4 sm:p-5 lg:p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-center gap-2 mb-2 sm:mb-3">
                          <div className={`${colorClasses.bg} ${colorClasses.text} p-1.5 sm:p-2 rounded-full flex-shrink-0`}>
                            {event.icon}
                          </div>
                          <div className={`text-xs sm:text-sm ${colorClasses.text}`}>
                            {event.month} {event.year}
                          </div>
                        </div>
                        <h3 className="text-base sm:text-lg lg:text-2xl mb-2 sm:mb-3 font-bold">{event.title}</h3>
                        <p className="text-xs sm:text-sm lg:text-base text-gray-700 mb-2 sm:mb-3">{event.description}</p>
                        <div className={`${colorClasses.bg} ${colorClasses.text} px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg inline-block`}>
                          <p className="text-xs sm:text-sm">Impact: {event.impact}</p>
                        </div>
                      </div>
                    </div>

                    {/* Spacer for desktop */}
                    <div className="hidden md:block md:w-5/12"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Key Milestones Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-8 sm:mb-12 lg:mb-12 text-center font-bold">Key Achievements</h2>
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-5 sm:p-6 lg:p-8 text-center">
              <Award className="w-10 sm:w-11 lg:w-12 h-10 sm:h-11 lg:h-12 text-blue-600 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg lg:text-2xl mb-2 sm:mb-3 font-bold">Educational Excellence</h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-700">
                From no knowledge of alphabets to pursuing degrees at Delhi University
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-5 sm:p-6 lg:p-8 text-center">
              <Users className="w-10 sm:w-11 lg:w-12 h-10 sm:h-11 lg:h-12 text-green-600 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg lg:text-2xl mb-2 sm:mb-3 font-bold">Community Building</h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-700">
                Created awareness and inspired 300+ families about importance of education
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-5 sm:p-6 lg:p-8 text-center">
              <Heart className="w-10 sm:w-11 lg:w-12 h-10 sm:h-11 lg:h-12 text-purple-600 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg lg:text-2xl mb-2 sm:mb-3 font-bold">Values & Character</h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-700">
                Instilled confidence, self-reliance, and a spirit of giving back
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <TrendingUp className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl mb-4">Looking Ahead</h2>
          <p className="text-xl max-w-3xl mx-auto mb-6">
            As we continue our journey, we remain committed to our mission of transforming lives 
            through education. The best is yet to come.
          </p>
          <p className="text-2xl italic">
            "Protsahan is evolving into a movement"
          </p>
        </div>
      </section>
    </div>
  );
}
