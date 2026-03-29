import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const EASE_EXPO = [0.16, 1, 0.3, 1] as const;
export const EASE_CIRC = [0.76, 0, 0.24, 1] as const;

export const STATS = [
  { value: 3, suffix: "", label: "Core Pillars" },
  { value: 4, suffix: "", label: "Admission Steps" },
  { value: 1, suffix: "", label: "School Campus" },
  { value: 100, suffix: "%", label: "Holistic Focus" },
];

export const PILLARS = [
  {
    id: "academics",
    label: "Academics",
    title: "Academic Excellence",
    description:
    "Mount Mary Higher Secondary School fosters a student-centered learning environment that develops strong academic foundations, curiosity, and the confidence to keep growing in every stage of school life.",
    image: "https://mountmaryhsschool.in/wp-content/uploads/2021/03/11.jpg",
  alt: "Teachers guiding students at Mount Mary Higher Secondary School",
  },
  {
    id: "school-life",
    label: "School Life",
    title: "Vibrant School Life",
    description:
    "School life at Mount Mary Higher Secondary School is shaped by sharing, care, discipline, and participation, helping students grow socially, emotionally, and personally alongside their studies.",
    image: "https://mountmaryhsschool.in/wp-content/uploads/2021/03/3.jpg",
  alt: "Higher secondary students at Mount Mary Higher Secondary School",
  },
  {
    id: "events",
    label: "Events",
    title: "Culture, Events & Expression",
    description:
      "Events and themed celebrations give students opportunities to express talent, build teamwork, and stay connected to culture and community in a lively school atmosphere.",
    image: "https://mountmaryhsschool.in/wp-content/uploads/2021/03/19.jpg",
  alt: "Themed event at Mount Mary Higher Secondary School",
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
    src: "https://mountmaryhsschool.in/wp-content/uploads/2021/03/11.jpg",
    full: "https://mountmaryhsschool.in/wp-content/uploads/2021/03/11.jpg",
  alt: "Teaching students at Mount Mary Higher Secondary School",
  },
  {
    src: "https://mountmaryhsschool.in/wp-content/uploads/2021/03/3.jpg",
    full: "https://mountmaryhsschool.in/wp-content/uploads/2021/03/3.jpg",
  alt: "Higher secondary students at Mount Mary Higher Secondary School",
  },
  {
    src: "https://mountmaryhsschool.in/wp-content/uploads/2021/03/19.jpg",
    full: "https://mountmaryhsschool.in/wp-content/uploads/2021/03/19.jpg",
  alt: "Themed event at Mount Mary Higher Secondary School",
  },
  {
    src: "https://mountmaryhsschool.in/wp-content/uploads/2021/03/15.jpg",
    full: "https://mountmaryhsschool.in/wp-content/uploads/2021/03/15.jpg",
  alt: "Christmas event at Mount Mary Higher Secondary School",
  },
  {
    src: "https://mountmaryhsschool.in/wp-content/uploads/2021/03/11.jpg",
    full: "https://mountmaryhsschool.in/wp-content/uploads/2021/03/11.jpg",
  alt: "Classroom interaction at Mount Mary Higher Secondary School",
  },
  {
    src: "https://mountmaryhsschool.in/wp-content/uploads/2021/03/3.jpg",
    full: "https://mountmaryhsschool.in/wp-content/uploads/2021/03/3.jpg",
  alt: "Senior students on campus at Mount Mary Higher Secondary School",
  },
  {
    src: "https://mountmaryhsschool.in/wp-content/uploads/2021/03/19.jpg",
    full: "https://mountmaryhsschool.in/wp-content/uploads/2021/03/19.jpg",
    alt: "Student performance during a themed event",
  },
  {
    src: "https://mountmaryhsschool.in/wp-content/uploads/2021/03/15.jpg",
    full: "https://mountmaryhsschool.in/wp-content/uploads/2021/03/15.jpg",
  alt: "Christmas celebration at Mount Mary Higher Secondary School",
  },
  {
    src: "https://mountmaryhsschool.in/wp-content/uploads/2021/03/11.jpg",
    full: "https://mountmaryhsschool.in/wp-content/uploads/2021/03/11.jpg",
  alt: "Learning moment at Mount Mary Higher Secondary School",
  },
];

export const LOGO_URL =
  "https://play-lh.googleusercontent.com/DN3A5aCtTXt30EhnBqJ24kIrlPyUqlGFXK3IH4Mr_noPMXJ9RJLo7xqCiEDnLa0dt7A=w240-h480-rw";
