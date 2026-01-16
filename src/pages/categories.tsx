import { useState, useMemo } from "react"
import { Navigation } from "../components/header/nav"
import { Footer } from "../components/footer/foot"
import { ReviewCard } from "../components/review/reviewcard"
import { mockReviews, categories } from "../components/mockdata/review"
import { FaChevronDown } from "react-icons/fa6";

export default function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<"rating" | "date">("date")

  const filteredReviews = useMemo(() => {
    let reviews = selectedCategory ? mockReviews.filter((r) => r.category === selectedCategory) : mockReviews

    if (sortBy === "rating") {
      reviews = [...reviews].sort((a, b) => b.rating - a.rating)
    } else {
      reviews = [...reviews].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    }

    return reviews
  }, [selectedCategory, sortBy])

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-secondary/30 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl font-bold text-foreground mb-4">Browse Reviews</h1>
            <p className="text-muted-foreground text-lg">Explore our collection of reviews across all categories</p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === null
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-foreground border border-border hover:border-primary"
                  }`}
                >
                  All
                </button>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedCategory === category.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-card text-foreground border border-border hover:border-primary"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-foreground hover:border-primary transition-colors">
                  Sort by: {sortBy === "rating" ? "Rating" : "Date"}
                  <FaChevronDown size={16} />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg hidden group-hover:block">
                  <button
                    onClick={() => setSortBy("date")}
                    className="w-full text-left px-4 py-2 hover:bg-secondary text-foreground"
                  >
                    Most Recent
                  </button>
                  <button
                    onClick={() => setSortBy("rating")}
                    className="w-full text-left px-4 py-2 hover:bg-secondary text-foreground border-t border-border"
                  >
                    Highest Rated
                  </button>
                </div>
              </div>
            </div>

            {/* Sort Buttons (Mobile-friendly alternative) */}
            <div className="flex gap-2 mt-4 sm:hidden">
              <button
                onClick={() => setSortBy("date")}
                className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                  sortBy === "date"
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-foreground border border-border"
                }`}
              >
                Recent
              </button>
              <button
                onClick={() => setSortBy("rating")}
                className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                  sortBy === "rating"
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-foreground border border-border"
                }`}
              >
                Top Rated
              </button>
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredReviews.length > 0 ? (
              <>
                <p className="text-muted-foreground mb-8">
                  Showing {filteredReviews.length} review{filteredReviews.length !== 1 ? "s" : ""}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredReviews.map((review) => (
                    <ReviewCard key={review.id} review={review} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">No reviews found in this category.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}