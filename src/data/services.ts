import haircutImg from "@/assets/images/haircut.jpg";
import hairColorImg from "@/assets/images/hair-color.jpg";
import hairSpaImg from "@/assets/images/hair-spa.jpg";
import beardTrimImg from "@/assets/images/beard-trim.jpg";
import stylingImg from "@/assets/images/styling.jpg";
import kidsCutImg from "@/assets/images/kids-cut.jpg";
import bridalImg from "@/assets/images/bridal.jpg";
import straighteningImg from "@/assets/images/straightening.jpg";
import extensionsImg from "@/assets/images/extensions.jpg";
import scalpImg from "@/assets/images/scalp-treatment.jpg";
import highlightsImg from "@/assets/images/highlights.jpg";

export interface Service {
  id: string;
  name: string;
  category: string;
  subCategory: string;
  description: string;
  price: number;
  originalPrice: number;
  duration: string;
  rating: number;
  reviews: number;
  image: string;
  salon: string;
  location: string;
  discount: number;
  availableSlots: string[];
}

export const services: Service[] = [
  {
    id: "1",
    name: "Classic Haircut",
    category: "Haircuts",
    subCategory: "Men",
    description: "A precision classic haircut tailored to your face shape and style preferences. Includes consultation, shampoo, cut, and styling.",
    price: 30,
    originalPrice: 50,
    duration: "45 min",
    rating: 4.8,
    reviews: 124,
    image: haircutImg,
    salon: "Hair Rap By YoYo",
    location: "New York, NY",
    discount: 40,
    availableSlots: ["9:00 AM", "10:00 AM", "11:30 AM", "1:00 PM", "2:30 PM", "4:00 PM", "5:30 PM"],
  },
  {
    id: "2",
    name: "Hair Coloring",
    category: "Coloring",
    subCategory: "Unisex",
    description: "Professional hair coloring with premium ammonia-free products. Full color, roots touch-up, or creative coloring options available.",
    price: 80,
    originalPrice: 120,
    duration: "90 min",
    rating: 4.7,
    reviews: 98,
    image: hairColorImg,
    salon: "Glamour Studio",
    location: "Brooklyn, NY",
    discount: 33,
    availableSlots: ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"],
  },
  {
    id: "3",
    name: "Hair Spa Treatment",
    category: "Treatments",
    subCategory: "Unisex",
    description: "Deep conditioning hair spa that nourishes and revitalizes damaged hair. Includes scalp massage and steam treatment.",
    price: 60,
    originalPrice: 90,
    duration: "60 min",
    rating: 4.9,
    reviews: 156,
    image: hairSpaImg,
    salon: "Serenity Salon",
    location: "Manhattan, NY",
    discount: 33,
    availableSlots: ["9:30 AM", "11:00 AM", "1:30 PM", "3:00 PM", "5:00 PM"],
  },
  {
    id: "4",
    name: "Beard Trim & Shape",
    category: "Grooming",
    subCategory: "Men",
    description: "Expert beard trimming and shaping to complement your facial features. Includes hot towel treatment and beard oil application.",
    price: 20,
    originalPrice: 35,
    duration: "30 min",
    rating: 4.6,
    reviews: 87,
    image: beardTrimImg,
    salon: "The Barber House",
    location: "Queens, NY",
    discount: 43,
    availableSlots: ["9:00 AM", "10:30 AM", "12:00 PM", "1:30 PM", "3:00 PM", "4:30 PM", "6:00 PM"],
  },
  {
    id: "5",
    name: "Blowout & Styling",
    category: "Styling",
    subCategory: "Women",
    description: "Professional blowout and styling for any occasion. Choose from straight, wavy, or curly finishes with heat protection.",
    price: 45,
    originalPrice: 70,
    duration: "45 min",
    rating: 4.8,
    reviews: 112,
    image: stylingImg,
    salon: "Chic Hair Studio",
    location: "SoHo, NY",
    discount: 36,
    availableSlots: ["10:00 AM", "11:30 AM", "1:00 PM", "3:00 PM", "4:30 PM"],
  },
  {
    id: "6",
    name: "Kids Haircut",
    category: "Haircuts",
    subCategory: "Kids",
    description: "Fun and gentle haircuts for children in a kid-friendly environment. Includes wash, cut, and style.",
    price: 18,
    originalPrice: 30,
    duration: "30 min",
    rating: 4.9,
    reviews: 203,
    image: kidsCutImg,
    salon: "Happy Cuts",
    location: "Upper East, NY",
    discount: 40,
    availableSlots: ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"],
  },
  {
    id: "7",
    name: "Bridal Hair Package",
    category: "Styling",
    subCategory: "Women",
    description: "Complete bridal hair package including trial, wedding day styling, and touch-up. Luxury products and accessories included.",
    price: 200,
    originalPrice: 350,
    duration: "120 min",
    rating: 5.0,
    reviews: 67,
    image: bridalImg,
    salon: "Elegance Bridal",
    location: "Fifth Ave, NY",
    discount: 43,
    availableSlots: ["8:00 AM", "10:00 AM", "1:00 PM"],
  },
  {
    id: "8",
    name: "Keratin Treatment",
    category: "Treatments",
    subCategory: "Women",
    description: "Professional keratin smoothing treatment that eliminates frizz for up to 3 months. Safe for colored hair.",
    price: 150,
    originalPrice: 250,
    duration: "150 min",
    rating: 4.7,
    reviews: 89,
    image: straighteningImg,
    salon: "Smooth & Shine",
    location: "Chelsea, NY",
    discount: 40,
    availableSlots: ["9:00 AM", "12:00 PM", "3:00 PM"],
  },
  {
    id: "9",
    name: "Hair Extensions",
    category: "Extensions",
    subCategory: "Women",
    description: "Premium quality tape-in or clip-in hair extensions. Natural-looking volume and length with color matching.",
    price: 250,
    originalPrice: 400,
    duration: "180 min",
    rating: 4.6,
    reviews: 45,
    image: extensionsImg,
    salon: "Luxe Locks",
    location: "Tribeca, NY",
    discount: 38,
    availableSlots: ["10:00 AM", "2:00 PM"],
  },
  {
    id: "10",
    name: "Scalp Treatment",
    category: "Treatments",
    subCategory: "Unisex",
    description: "Medical-grade scalp treatment for dandruff, dryness, or hair thinning. Includes analysis and personalized treatment plan.",
    price: 75,
    originalPrice: 110,
    duration: "60 min",
    rating: 4.5,
    reviews: 72,
    image: scalpImg,
    salon: "Derma Hair Clinic",
    location: "Midtown, NY",
    discount: 32,
    availableSlots: ["9:30 AM", "11:30 AM", "2:30 PM", "4:30 PM"],
  },
  {
    id: "11",
    name: "Highlights & Balayage",
    category: "Coloring",
    subCategory: "Women",
    description: "Hand-painted balayage or foil highlights for natural sun-kissed dimension. Customized to your skin tone.",
    price: 120,
    originalPrice: 180,
    duration: "120 min",
    rating: 4.8,
    reviews: 134,
    image: highlightsImg,
    salon: "Color Bar NYC",
    location: "West Village, NY",
    discount: 33,
    availableSlots: ["10:00 AM", "1:00 PM", "4:00 PM"],
  },
  {
    id: "12",
    name: "Premium Men's Cut",
    category: "Haircuts",
    subCategory: "Men",
    description: "Luxury men's grooming experience including hot towel, precision cut, beard lineup, and complimentary beverage.",
    price: 55,
    originalPrice: 85,
    duration: "60 min",
    rating: 4.9,
    reviews: 178,
    image: haircutImg,
    salon: "Gentlemen's Quarter",
    location: "Wall Street, NY",
    discount: 35,
    availableSlots: ["9:00 AM", "10:30 AM", "12:00 PM", "2:00 PM", "3:30 PM", "5:00 PM"],
  },
];

export const categories = ["Haircuts", "Coloring", "Treatments", "Styling", "Grooming", "Extensions"];
export const locations = ["New York, NY", "Brooklyn, NY", "Manhattan, NY", "Queens, NY", "SoHo, NY", "Upper East, NY", "Chelsea, NY", "Tribeca, NY", "Midtown, NY", "West Village, NY", "Fifth Ave, NY", "Wall Street, NY"];
