export interface Review {
  id: string
  title: string
  category: "book" | "show" | "restaurant"
  rating: number
  excerpt: string
  author: string
  date: string
  image: string
  content: string
}

export const mockReviews: Review[] = [
  {
    id: "1",
    title: "The Midnight Library",
    category: "book",
    rating: 5,
    excerpt:
      "A captivating exploration of life choices and second chances. Matt Haig crafts a beautiful narrative that resonates deeply.",
    author: "Sarah Chen",
    date: "2025-01-15",
    image: "/pexels-minan1398-694740.jpg",
    content:
      "The Midnight Library is a masterpiece of contemporary fiction. Through the eyes of Nora Seed, we explore infinite possibilities and the weight of our choices. Haig's prose is both poetic and accessible, making this a must-read for anyone seeking meaning and hope.",
  },
  {
    id: "2",
    title: "Severance",
    category: "show",
    rating: 5,
    excerpt:
      "A mind-bending thriller that redefines workplace drama. Adam Scott delivers a career-best performance in this Apple TV+ masterpiece.",
    author: "Marcus Johnson",
    date: "2025-01-10",
    image: "/pexels-koolshooters-8104843.jpg",
    content:
      "Severance is television at its finest. The premise alone is intriguing, but the execution is flawless. Every episode leaves you wanting more, and the cinematography is absolutely stunning.",
  },
  {
    id: "3",
    title: "Osteria Francescana",
    category: "restaurant",
    rating: 5,
    excerpt:
      "An unforgettable culinary journey in Modena. Chef Massimo Bottura creates edible art that transcends traditional dining.",
    author: "Elena Rodriguez",
    date: "2025-01-08",
    image: "/pexels-evonics-1058277.jpg",
    content:
      "Dining at Osteria Francescana is a transformative experience. Each course tells a story, and the attention to detail is extraordinary. This is not just a meal; it's an artistic expression.",
  },
  {
    id: "4",
    title: "Project Hail Mary",
    category: "book",
    rating: 4.5,
    excerpt:
      "A thrilling sci-fi adventure with heart. Andy Weir combines humor, science, and genuine emotion in this page-turner.",
    author: "James Wilson",
    date: "2025-01-05",
    image: "/pexels-minan1398-694740.jpg",
    content:
      "Project Hail Mary is an absolute blast to read. The protagonist is charming and witty, and the science feels grounded despite the fantastical premise. A perfect escape into space adventure.",
  },
  {
    id: "5",
    title: "The Bear",
    category: "show",
    rating: 4.5,
    excerpt:
      "Intense, emotional, and utterly captivating. Jeremy Allen White leads an ensemble cast in this restaurant drama like no other.",
    author: "Lisa Park",
    date: "2025-01-02",
    image: "/pexels-koolshooters-8104843.jpg",
    content:
      "The Bear is a visceral experience. The kitchen scenes are chaotic and real, and the character development is exceptional. This show will stay with you long after the credits roll.",
  },
  {
    id: "6",
    title: "Noma",
    category: "restaurant",
    rating: 4.5,
    excerpt: "Nordic cuisine reimagined. A dining experience that celebrates nature and innovation in equal measure.",
    author: "David Kim",
    date: "2024-12-28",
    image: "/pexels-evonics-1058277.jpg",
    content:
      "Noma represents the pinnacle of modern gastronomy. The use of foraged ingredients and seasonal menus creates a unique experience every visit. Truly world-class.",
  },
]

export const categories = [
  { id: "book", name: "Books", icon: "📚" },
  { id: "show", name: "Shows", icon: "📺" },
  { id: "restaurant", name: "Restaurants", icon: "🍽️" },
]