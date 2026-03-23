import { GraduationCap, Users, Heart, Target, BookOpen, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Free Education',
      description: 'Quality education at no cost for children from low and middle-income families',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Mentorship',
      description: 'Dedicated teachers providing personalized guidance and support',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Career Guidance',
      description: 'Helping students navigate their path to successful careers',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Life Skills',
      description: 'Building confidence and self-reliance alongside academic excellence',
    },
  ];

  const stats = [
    { number: '10+', label: 'Years of Service' },
    { number: '300+', label: 'Families Impacted' },
    { number: '100+', label: 'Students Enrolled' },
    { number: '20+', label: 'College Students' },
  ];

  const testimonials = [
    {
      name: 'Nitish Haldar',
      role: 'College Student',
      text: 'Protsahan changed my life. From not knowing alphabets to now pursuing my graduation at Delhi University, this journey has been transformative.',
    },
    {
      name: 'Neha',
      role: 'Class 12 Student',
      text: 'The teachers here believe in us. They give us hope and confidence to dream big despite our circumstances.',
    },
    {
      name: 'Pawan',
      role: 'Corporate',
      text: 'Thanks to Protsahan, I am now interning at an online EdTech company. The education and values I received here made this possible.',
    },
  ];

  const heroImage = '/image.png';

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={heroImage}
            alt="Students engaged in learning"
            className="w-full h-full object-cover brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#d62828]/85 via-[#d62828]/75 to-[#b71c1c]/80" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-12 items-center">
            <div className="backdrop-blur-sm bg-[#d62828]/20 p-4 sm:p-6 rounded-xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 drop-shadow-sm font-bold">
                Empowering Children Through Education
              </h1>
              <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-red-50 drop-shadow">
                Transforming lives in Gejha Village, Noida since October 6, 2013. 
                Providing free, quality education to children from low and middle-income families.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to="/about"
                  className="bg-white text-[#d62828] px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold shadow text-center text-sm sm:text-base"
                >
                  Learn More
                </Link>
                <Link
                  to="/students"
                  className="border-2 border-white text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-white hover:text-[#d62828] transition-colors font-semibold backdrop-blur-sm text-center text-sm sm:text-base"
                >
                  Meet Our Students
                </Link>
              </div>
            </div>
            <div className="relative w-full rounded-lg overflow-hidden bg-white/10 backdrop-blur border border-white/30 shadow-xl">
              <ImageWithFallback
                src={heroImage}
                alt="Students engaged in learning"
                className="w-full h-auto object-contain p-3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl text-[#d62828] font-bold mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-4 text-[#d62828] font-bold">What We Offer</h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600">
              Comprehensive support for holistic development
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-4 sm:p-5 lg:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-[#d62828] hover:border-[#9bb54c]"
              >
                <div className="text-[#d62828] mb-3 sm:mb-4">{feature.icon}</div>
                <h3 className="text-base sm:text-lg lg:text-xl mb-2 font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden order-1 md:order-none">
              <ImageWithFallback
                src="/OurMission.png"
                alt="Happy students learning"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6 text-[#d62828] font-bold">Our Mission</h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-3 sm:mb-4">
                Our journey began on October 6, 2013, with the establishment of 'Protsahan.' 
                Our primary objective was to bring education to out-of-school children and dropouts, 
                particularly those from low and middle-income families in Gejha Village, Noida.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-4 sm:mb-6">
                Over the past decade, we have facilitated the enrollment of over a hundred children 
                into local government schools. With minimal financial resources, we have positively 
                impacted the lives of over 300 families in the village.
              </p>
              <Link
                to="/about"
                className="inline-block bg-[#d62828] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-[#b71c1c] transition-colors font-semibold text-sm sm:text-base"
              >
                Read Our Full Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#f7f2f2] py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-4 text-[#d62828] font-bold">Student Stories</h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600">
              Hear from our students about their transformative journey
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-4 sm:p-5 lg:p-6 rounded-lg shadow-md border-l-4 border-[#9bb54c]">
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 mb-3 sm:mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t pt-3 sm:pt-4">
                  <p className="font-semibold text-sm sm:text-base text-gray-900">{testimonial.name}</p>
                  <p className="text-xs sm:text-sm text-[#d62828] font-medium">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#d62828] to-[#b71c1c] text-white py-10 sm:py-14 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="bg-white rounded-lg shadow-lg p-2 sm:p-3">
              <img
                src="/protsahan-logo.png"
                alt="Protsahan logo"
                className="w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.src.endsWith('protsahan-logo.svg')) {
                    target.src = '/protsahan-logo.svg';
                  }
                }}
              />
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4 font-bold">Join Us in Making a Difference</h2>
          <p className="text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            Help us continue our mission of providing free, quality education to children in need. 
            Your support can change lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              to="/students"
              className="bg-white text-[#d62828] px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-sm sm:text-base text-center"
            >
              Meet Our Students
            </Link>
            <Link
              to="/timeline"
              className="border-2 border-white text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-white hover:text-[#d62828] transition-colors font-semibold text-sm sm:text-base text-center"
            >
              View Our Journey
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
