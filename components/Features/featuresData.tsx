import {
  FaRing,
  FaChild,
  FaBirthdayCake,
  FaHome,
  FaUsers,
  FaMusic,
  FaBookOpen,
  FaMicrophone,
  FaGuitar,
  FaBaby,
} from "react-icons/fa";
import { GiLoveSong, GiPartyPopper } from "react-icons/gi";
import { MdPregnantWoman, MdEventNote, MdMenuBook } from "react-icons/md";

const servicesData = [
  {
    id: 1,
    icon: <FaRing className="text-5xl text-pink-500 animate-bounce" />,
    title: "Wedding",
    paragraph: "Capturing timeless wedding moments with elegance and love.",
  },
  {
    id: 2,
    icon: <GiLoveSong className="text-5xl text-red-400 animate-pulse" />,
    title: "Engagement",
    paragraph: "Beautiful engagement stories told through cinematic frames.",
  },
  {
    id: 3,
    icon: <FaBookOpen className="text-5xl text-indigo-500 animate-spin-slow" />,
    title: "Stories",
    paragraph: "Personalized love and life stories woven into visuals.",
  },
  {
    id: 4,
    icon: <FaUsers className="text-5xl text-emerald-500 animate-float" />,
    title: "Reception",
    paragraph: "Joyful receptions captured with vibrant details.",
  },
  {
    id: 5,
    icon: <MdMenuBook className="text-5xl text-purple-500 animate-spin-slow" />,
    title: "Magazine",
    paragraph: "Creative magazine-style photography & design.",
  },
  {
    id: 6,
    icon: <FaMicrophone className="text-5xl text-yellow-500 animate-bounce-slow" />,
    title: "Podcast",
    paragraph: "Engaging podcasts to tell inspiring stories.",
  },
  {
    id: 7,
    icon: <FaBaby className="text-5xl text-pink-400 animate-wiggle" />,
    title: "Baby Shower",
    paragraph: "Cherishing the joy of parenthood with adorable clicks.",
  },
  {
    id: 8,
    icon: <FaHome className="text-5xl text-orange-400 animate-pulse" />,
    title: "House Warming",
    paragraph: "Memorable beginnings in your dream home.",
  },
  {
    id: 9,
    icon: <FaUsers className="text-5xl text-cyan-500 animate-float" />,
    title: "Get Together",
    paragraph: "Celebrating friendships and reunions in style.",
  },
  {
    id: 10,
    icon: <GiPartyPopper className="text-5xl text-fuchsia-500 animate-bounce" />,
    title: "Sangeeth",
    paragraph: "Vibrant music and dance nights captured beautifully.",
  },
  {
    id: 11,
    icon: <MdEventNote className="text-5xl text-teal-500 animate-spin-slow" />,
    title: "Blogs",
    paragraph: "Creative stories and experiences shared in blogs.",
  },
  {
    id: 12,
    icon: <FaBirthdayCake className="text-5xl text-rose-500 animate-wiggle" />,
    title: "Birthday",
    paragraph: "Fun and colorful birthday celebrations.",
  },
  {
    id: 13,
    icon: <FaGuitar className="text-5xl text-indigo-400 animate-bounce" />,
    title: "Concerts",
    paragraph: "Live concert energy captured with passion.",
  },
  {
    id: 14,
    icon: <MdPregnantWoman className="text-5xl text-pink-600 animate-float" />,
    title: "Maternity",
    paragraph: "Beautiful maternity moments filled with love & hope.",
  },
];

export default servicesData;
