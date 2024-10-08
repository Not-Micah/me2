import Marquee from 'react-fast-marquee';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

interface Testimonial {
  name: string;
  role: string;
  rating: number;
  review: string;
}


const testimonials: Testimonial[] = [
  {
    name: "Olivia K.",
    role: "Student at Harvard University",
    rating: 4.5,
    review: "I was overwhelmed by all the university options, but Uniglow simplified everything. It's a must-use for any prospective student!"
  },
  {
    name: "Alex W.",
    role: "Freshman at MIT",
    rating: 5,
    review: "Uniglow's interface is so user-friendly, and the recommendations are incredibly accurate. It made my decision-making process a breeze!"
  },
  {
    name: "Emily R.",
    role: "High School Senior",
    rating: 5,
    review: "Thanks to Uniglow, I discovered universities that perfectly matched my career goals. It's an invaluable tool for any student!"
  },
  {
    name: "Daniel M.",
    role: "Graduate Student at Stanford",
    rating: 4.5,
    review: "Uniglow's comprehensive approach to matching students with universities is impressive. It considers every aspect of student life!"
  },
  {
    name: "Sarah L.",
    role: "Transfer Student at UCLA",
    rating: 5,
    review: "Uniglow made my university search so much easier! The personalized recommendations based on my preferences were spot-on."
  },
  {
    name: "Michael B.",
    role: "International Student at NYU",
    rating: 4.5,
    review: "As an international student, Uniglow helped me navigate the complex US university system. It's an excellent resource!"
  },
  {
    name: "Jessica T.",
    role: "Sophomore at UC Berkeley",
    rating: 5,
    review: "I wish I had known about Uniglow earlier! It would have saved me so much time and stress during my college application process."
  },
  {
    name: "Ryan K.",
    role: "High School Junior",
    rating: 4.5,
    review: "Uniglow is helping me plan my college applications strategically. It's like having a personal college counselor!"
  },
  {
    name: "Sophia L.",
    role: "Freshman at Columbia University",
    rating: 5,
    review: "Uniglow's recommendations were spot-on. I'm now attending my dream university thanks to their guidance!"
  },
  {
    name: "Ethan J.",
    role: "Student Athlete at Duke",
    rating: 4.5,
    review: "Uniglow considered my athletic aspirations alongside my academic goals. It found the perfect balance for me."
  }
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="flex flex-col space-y-4 mx-4 border border-black/10 rounded-[10px] p-6 w-[300px] h-[300px]">
    <div className="flex flex-col">
      <p className="text-xl font-medium text-black">{testimonial.name}</p>
      <p className="text-lg text-black">{testimonial.role}</p>
    </div>
    <div className="flex items-center">
      {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
        <FaStar key={i} className="text-[#f4b034]" />
      ))}
      {testimonial.rating % 1 !== 0 && <FaStarHalfAlt className="text-[#f4b034]" />}
    </div>
    <p className="text-base text-black/60">&quot;{testimonial.review}&quot;</p>
  </div>
);

const Testimonies: React.FC = () => {
  const halfIndex = Math.ceil(testimonials.length / 2);
  const firstRowTestimonials = testimonials.slice(0, halfIndex);
  const secondRowTestimonials = testimonials.slice(halfIndex);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="max-w-[1100px] w-full
      px-12 max-md:px-0
      flex justify-center items-center flex-col mx-auto gap-y-8 
      relative">
        <div className="dynamic-subheading font-bold font-header">
          Testimonials
        </div>
        <div className="flex flex-col gap-y-[40px] mx-auto w-full">
          <div className="relative w-full overflow-hidden">
            {/* First Row */}
            <Marquee direction="left" className="py-4 max-w-[100%]" pauseOnHover={true}>
              {firstRowTestimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </Marquee>
            {/* Second Row */}
            <Marquee direction="right" className="py-4 max-w-[100%]" pauseOnHover={true}>
              {secondRowTestimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </Marquee>
            {/* Edge Fade Effect */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 w-10 h-full bg-gradient-to-r from-white/90 to-transparent z-10"></div>
              <div className="absolute top-0 right-0 w-10 h-full bg-gradient-to-l from-white/90 to-transparent z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
