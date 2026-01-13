import { useState, useMemo } from "react"
import { Navigation } from "../components/header/nav"
import { Footer } from "../components/footer/foot"
import { ReviewCard } from "../components/review/reviewcard"
import { mockReviews } from "../components/mockdata/review"
import { LuSearch } from "react-icons/lu";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredReviews = useMemo(() => {
    return mockReviews.filter((review) => {
      const matchesSearch =
        review.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        review.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory =
        !selectedCategory || selectedCategory === "All Categories" || review.category === selectedCategory.toLowerCase()
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  return (
    <div className="min-h-screen flex flex-col bg-black text-white selection:bg-white selection:text-black">
      <Navigation />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sidebar / Directory Navigation */}
          <aside className="w-full lg:w-64 space-y-8">
            <div>
              <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 mb-8 italic">
                Marketplace
              </h2>
              <nav className="flex flex-col gap-1">
                {["All Categories", "Restaurants", "Books", "Shows"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-left px-4 py-2.5 rounded-lg text-sm transition-all ${
                      selectedCategory === cat
                        ? "bg-white/10 text-white font-medium italic"
                        : "text-white/50 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1 space-y-12">
            <header className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-serif italic tracking-tight font-light leading-tight">
                Reviewing the <br />
                <span className="text-white/40">culture around us.</span>
              </h1>

              <div className="relative group max-w-xl">
                <LuSearch
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-white transition-colors"
                  size={18}
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search reviews, authors, places..."
                  className="w-full bg-[#0a0a0a] border border-white/5 rounded-xl pl-12 pr-4 py-4 text-sm focus:outline-none focus:border-white/20 transition-all placeholder:text-white/20"
                />
              </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
              {(filteredReviews.length > 0 ? filteredReviews : mockReviews).map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
