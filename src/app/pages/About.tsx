import { Heart, Target, Users, Award, TrendingUp, BookOpen } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function About() {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Compassion',
      description: 'We believe in nurturing every child with care and understanding',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Excellence',
      description: 'Committed to providing quality education and holistic development',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community',
      description: 'Building a supportive environment where everyone contributes',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Achievement',
      description: 'Celebrating every milestone, big or small, in our students journey',
    },
  ];

  const achievements = [
    'Enrolled over 100 children into local government schools',
    'Impacted over 300 families with minimal financial resources',
    'Several students graduated from Delhi University',
    'Students currently interning at EdTech companies',
    'Many students appearing for Class 10 and 12 Board exams',
    'Senior students mentoring juniors while pursuing their studies',
    'Students tutoring younger children in their localities',
    'Created awareness about importance of education in the community',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="/AboutProtsahan.png"
            alt="About Protsahan"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-blue-800/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 font-bold">About Protsahan</h1>
            <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto text-blue-100">
              A decade of transforming lives through education
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center mb-12 sm:mb-16 lg:mb-16">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6 font-bold">Our Journey</h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-3 sm:mb-4">
                Our journey began a decade ago on <strong>October 6, 2013</strong>, with the establishment of 
                'Protsahan.' Our primary objective was to bring education to out-of-school children and dropouts, 
                particularly those from low and middle-income families in Gejha Village, Noida.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-3 sm:mb-4">
                We launched our operations from a single room in the village to fulfill this core mission. 
                Over the past ten years, we have facilitated the enrollment of over a hundred children into 
                local government schools.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700">
                Prior to the onset of the COVID-19 pandemic in March 2020, our morning and evening classes 
                saw attendance from over a hundred students.
              </p>
            </div>
            <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl order-1 md:order-none">
              <ImageWithFallback
                src="/OurJourney.png"
                alt="Education books"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 sm:p-8 mb-12 sm:mb-16 lg:mb-16">
            <h3 className="text-2xl sm:text-3xl lg:text-3xl mb-4 sm:mb-6 text-center font-bold">Our Impact</h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-3 sm:mb-4">
              With minimal financial resources, we have positively impacted the lives of over 300 families 
              in the village. However, our pride lies not merely in the statistics—the number of households 
              reached or students enrolled—but in the success, outcomes, and tangible impact of our efforts 
              on the lives of these children.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700">
              Children who were completely unfamiliar with the world of alphabets and numbers when they 
              joined Protsahan have now either completed their graduation or are currently pursuing degrees 
              from prestigious colleges at Delhi University. Their achievements, despite a severe scarcity 
              of financial and material resources, are truly astounding.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-4 font-bold">Our Values</h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600">
              The principles that guide our work
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-4 sm:p-5 lg:p-6 rounded-lg shadow-md text-center"
              >
                <div className="text-blue-600 mx-auto mb-3 sm:mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl mb-2 font-bold">{value.title}</h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6 font-bold">Our Achievements</h2>
              <div className="space-y-3 sm:space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                    <div className="bg-blue-100 rounded-full p-1 mt-1 flex-shrink-0">
                      <TrendingUp className="w-3 sm:w-4 h-3 sm:h-4 text-blue-600" />
                    </div>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-700">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6 font-bold">Beyond Academics</h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-3 sm:mb-4">
                Our most significant achievement is the <strong>awareness regarding the importance of education</strong> that 
                we have cultivated among students, their parents, and the neighborhood. As results became visible, 
                this awareness gained its own momentum.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-3 sm:mb-4">
                Another source of immense satisfaction and pride is the set of <strong>values we have instilled</strong> in our 
                students. Many of them have begun tutoring younger children in their localities—either for free or 
                for a nominal fee—to support their families' modest incomes.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-3 sm:mb-4">
                Even here at Protsahan, senior students assist their juniors while pursuing their own studies, 
                embodying the spirit of community and giving back.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700">
                Another quality our students have imbibed is a <strong>positive, self-confident outlook</strong> and a 
                "can-do" attitude, despite the hardships they face in their daily lives. Witnessing them grow 
                into confident young men and women is truly wonderful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-blue-600 text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <BookOpen className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 mx-auto mb-4 sm:mb-6" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6 font-bold">Our Vision for the Future</h2>
            <p className="text-base sm:text-lg lg:text-xl mb-4 sm:mb-6">
              Protsahan extends its heartiest best wishes to our students for all their future endeavors. 
              They truly deserve it. We have full faith that they will emerge as <strong>role models within 
              their community</strong>.
            </p>
            <p className="text-base sm:text-lg lg:text-xl italic">
              Protsahan is evolving into a movement.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
