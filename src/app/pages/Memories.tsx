import { Camera, Heart, Users, Smile } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Memories() {
  const galleryImages = [
    {
      url: '',
      title: 'Classroom Sessions',
      description: 'Daily learning and growth',
    },
    {
      url: '',
      title: 'Happy Faces',
      description: 'The joy of learning',
    },
    {
      url: '',
      title: 'Study Materials',
      description: 'Tools for success',
    },
    {
      url: '',
      title: 'Graduation Day',
      description: 'Celebrating achievements',
    },
    {
      url: '',
      title: 'Group Study',
      description: 'Learning together',
    },
    {
      url: '',
      title: 'Mentorship',
      description: 'Guiding the next generation',
    },
  ];

  const memories = [
    {
      icon: <Users className="w-6 h-6" />,
      year: '2013',
      title: 'The Beginning',
      description: 'Started with a single room and handful of students in Gejha Village',
    },
    {
      icon: <Heart className="w-6 h-6" />,
      year: '2015',
      title: 'Growing Community',
      description: 'First batch of students enrolled in government schools',
    },
    {
      icon: <Smile className="w-6 h-6" />,
      year: '2018',
      title: 'Major Milestone',
      description: '100+ students attending morning and evening classes',
    },
    {
      icon: <Camera className="w-6 h-6" />,
      year: '2023',
      title: 'Decade of Impact',
      description: 'Celebrating 10 years of transforming lives through education',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="/OurMemories.png"
            alt="Memories"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/40 to-purple-800/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Camera className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 mx-auto mb-4 sm:mb-6" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 font-bold">Memories</h1>
            <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto text-purple-100">
              A visual journey through our cherished moments, celebrations, and daily life at Protsahan
            </p>
          </div>
        </div>
      </section>

      {/* Milestone Timeline */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-8 sm:mb-12 text-center font-bold">Memorable Milestones</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {memories.map((memory, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-5 sm:p-6 text-center">
                <div className="bg-purple-100 rounded-full p-2 sm:p-3 w-10 sm:w-12 h-10 sm:h-12 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                  <div className="text-purple-600">{memory.icon}</div>
                </div>
                <div className="text-xl sm:text-2xl text-purple-600 mb-2 font-bold">{memory.year}</div>
                <h3 className="text-base sm:text-lg mb-2 font-semibold">{memory.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{memory.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-4 font-bold">Photo Gallery</h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600">
              Capturing moments of joy, learning, and achievement
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="relative h-40 sm:h-48 lg:h-64 overflow-hidden w-full flex items-center justify-center">
                  <ImageWithFallback
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-3 sm:p-4 text-white">
                    <h3 className="text-base sm:text-lg font-semibold mb-1">{image.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-200">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-8 sm:mb-12 text-center font-bold">Special Events & Celebrations</h2>
          <div className="space-y-5 sm:space-y-6 lg:space-y-8">
            <div className="bg-white rounded-lg shadow-md p-5 sm:p-6 lg:p-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4 font-bold">Annual Celebrations</h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-3 sm:mb-4">
                Every October 6th, we celebrate our Foundation Day with students, families, and volunteers. 
                These gatherings remind us of how far we've come and inspire us for the journey ahead.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700">
                Students perform cultural programs, share their success stories, and we honor the dedication 
                of our teachers and supporters.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-5 sm:p-6 lg:p-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4 font-bold">Student Achievements</h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-3 sm:mb-4">
                From first-time readers to university graduates, every achievement is celebrated with equal 
                enthusiasm. Board exam results, college admissions, and first jobs are moments of collective joy.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700">
                These celebrations motivate younger students and show them that success is within their reach, 
                regardless of their circumstances.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-5 sm:p-6 lg:p-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4 font-bold">Daily Moments</h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-3 sm:mb-4">
                Beyond special events, our most cherished memories come from daily interactions - the "aha!" 
                moments when a concept clicks, the pride in a student's eyes when they solve a difficult problem, 
                or the warmth of seeing seniors patiently helping juniors.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700">
                These small moments of growth, kindness, and determination form the heart of Protsahan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section className="bg-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl mb-4">Creating Lasting Memories</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Every photograph tells a story of hope, perseverance, and transformation. 
            Together, we're not just creating memories - we're building futures.
          </p>
        </div>
      </section>
    </div>
  );
}
