import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const EASE_EXPO = [0.16, 1, 0.3, 1] as const;
export const EASE_CIRC = [0.76, 0, 0.24, 1] as const;

export const STATS = [
  { value: 700, suffix: "+", label: "Students Enrolled" },
  { value: 50, suffix: "+", label: "Dedicated Staff" },
  { value: 1996, suffix: "", label: "Year Founded" },
  { value: 28, suffix: "+", label: "Years of Excellence" },
];

export const PILLARS = [
  {
    id: "academics",
    label: "Academics",
    title: "Academic Excellence",
    description:
      "El-Shaddai Academy prides itself on delivering high-quality education, focused on nurturing each student’s intellectual curiosity and critical thinking skills. Our academic program is designed to challenge and engage students while providing them with the tools they need to succeed in a rapidly changing world. With a dedicated team of teachers, small class sizes, and personalized attention, we emphasize not only academic excellence but also the holistic development of our students, ensuring they are equipped to face the challenges of tomorrow.",
    image: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-23-768x512.jpg",
    alt: "Students engaged in class",
  },
  {
    id: "school-life",
    label: "School Life",
    title: "Vibrant School Life",
    description:
      "At El-Shaddai Academy, school life is centered around a vibrant and inclusive community where students are encouraged to explore their passions and talents. We foster an environment where every child can grow holistically, learning not only from textbooks but also from experiences that shape their character. With a focus on building life skills, confidence, and responsibility, we provide a balanced approach to education, ensuring that students are well-prepared for the future, both personally and academically.",
    image: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-25-768x1154.jpg",
    alt: "Students in campus activities",
  },
  {
    id: "sports",
    label: "Sports",
    title: "Sports & Life Skills",
    description:
      "Sports play a vital role in the physical and mental development of students at El-Shaddai Academy. Our sports programs are designed to promote teamwork, discipline, and resilience. We encourage students to participate in a variety of sports, helping them develop their athletic abilities while also fostering a spirit of healthy competition and cooperation. By balancing academics with physical education, we ensure that our students grow into well-rounded individuals, both on and off the field.",
    image: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-22-768x512.jpg",
    alt: "Students playing sports",
  },
];

export const ADMISSION_STEPS = [
  {
    step: "01",
    title: "Registration",
    description:
      "Registration is only through Admission Forms available at the school office from 8:30 AM to 2:30 PM, Monday to Friday. Please check with the school office regarding Saturday operations.",
  },
  {
    step: "02",
    title: "Submission of Admission Form and Documents",
    description:
      "Please refer to the Checklist of Documents attached with the Admission Form and submit all documents within the due date stated. Admission forms are processed on a first‑come, first‑served basis, so early submission is advised.",
  },
  {
    step: "03",
    title: "Entrance Test & Interaction",
    description:
      "Preschool & LKG applicants attend an interaction with both parents. UKG to Class 8 applicants sit a written test in English Grammar and Mathematics (paper based at the applicant’s current class level), followed by an interaction assessing etiquette, communication, and critical thinking. Parents of eligible applicants are invited for an interaction with a head of school.",
  },
  {
    step: "04",
    title: "Offer of Admission",
    description:
      "An offer of admission is given to selected applicants and must be confirmed with full payment of the Admission Fee within 3 working days. Parents must accept the terms and conditions of admission. The school reserves the right to offer the seat to the next candidate if payment is not received within the stated time.",
  },
];

export const GALLERY_IMAGES = [
  {
    src: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-25-768x1154.jpg",
    full: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-25-scaled.jpg",
    alt: "Gallery image 25",
  },
  {
    src: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-24-768x511.jpg",
    full: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-24-scaled.jpg",
    alt: "Gallery image 24",
  },
  {
    src: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-23-768x512.jpg",
    full: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-23-scaled.jpg",
    alt: "Gallery image 23",
  },
  {
    src: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-22-768x512.jpg",
    full: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-22-scaled.jpg",
    alt: "Gallery image 22",
  },
  {
    src: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-21-768x512.jpg",
    full: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-21-scaled.jpg",
    alt: "Gallery image 21",
  },
  {
    src: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-20-768x512.jpg",
    full: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-20-scaled.jpg",
    alt: "Gallery image 20",
  },
  {
    src: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-19-768x512.jpg",
    full: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-19-scaled.jpg",
    alt: "Gallery image 19",
  },
  {
    src: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-18-768x512.jpg",
    full: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-18-scaled.jpg",
    alt: "Gallery image 18",
  },
  {
    src: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-17-768x512.jpg",
    full: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-17-scaled.jpg",
    alt: "Gallery image 17",
  },
  {
    src: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-16-768x512.jpg",
    full: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-16-scaled.jpg",
    alt: "Gallery image 16",
  },
  {
    src: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-15-768x512.jpg",
    full: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-15-scaled.jpg",
    alt: "Gallery image 15",
  },
  {
    src: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-14-768x512.jpg",
    full: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-14-scaled.jpg",
    alt: "Gallery image 14",
  },
  {
    src: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-13-768x1024.jpg",
    full: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-13-scaled.jpg",
    alt: "Gallery image 13",
  },
  {
    src: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-12-768x512.jpg",
    full: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-12-scaled.jpg",
    alt: "Gallery image 12",
  },
  {
    src: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-11-768x1024.jpg",
    full: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-11-scaled.jpg",
    alt: "Gallery image 11",
  },
  {
    src: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-10-768x512.jpg",
    full: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-10-scaled.jpg",
    alt: "Gallery image 10",
  },
  {
    src: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-9-768x1663.jpg",
    full: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-9-scaled.jpg",
    alt: "Gallery image 9",
  },
  {
    src: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-8-768x512.jpg",
    full: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-8-scaled.jpg",
    alt: "Gallery image 8",
  },
  {
    src: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-7-768x576.jpg",
    full: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-7-scaled.jpg",
    alt: "Gallery image 7",
  },
  {
    src: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-6-768x512.jpg",
    full: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-6-scaled.jpg",
    alt: "Gallery image 6",
  },
  {
    src: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-5-768x577.jpg",
    full: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-5-scaled.jpg",
    alt: "Gallery image 5",
  },
  {
    src: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-4-768x512.jpg",
    full: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-4-scaled.jpg",
    alt: "Gallery image 4",
  },
  {
    src: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-3-768x512.jpg",
    full: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-3-scaled.jpg",
    alt: "Gallery image 3",
  },
  {
    src: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-2-768x576.jpg",
    full: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-2-scaled.jpg",
    alt: "Gallery image 2",
  },
  {
    src: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-1-768x511.jpg",
    full: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-1-scaled.jpg",
    alt: "Gallery image 1",
  },
  {
    src: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/Classroom-Uniform-5-768x512.jpg",
    full: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/Classroom-Uniform-5-scaled.jpg",
    alt: "Classroom uniform 5",
  },
  {
    src: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/Classroom-Uniform-4-768x512.jpg",
    full: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/Classroom-Uniform-4-scaled.jpg",
    alt: "Classroom uniform 4",
  },
  {
    src: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/Classroom-Uniform-3-768x512.jpg",
    full: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/Classroom-Uniform-3-scaled.jpg",
    alt: "Classroom uniform 3",
  },
  {
    src: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/Classroom-Uniform-2-768x512.jpg",
    full: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/Classroom-Uniform-2-scaled.jpg",
    alt: "Classroom uniform 2",
  },
  {
    src: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/Classroom-Uniform-1-768x512.jpg",
    full: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/Classroom-Uniform-1-scaled.jpg",
    alt: "Classroom uniform 1",
  },
];

export const LOGO_URL =
  "https://elshaddaiacademy.org/wp-content/uploads/2024/09/El-Shaddai-Logo-Transparent.png";
