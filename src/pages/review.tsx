import { Navigation } from "../components/header/nav"
import { Footer } from "../components/footer/foot"
import { ReviewCard } from "../components/review/reviewcard"
import { mockReviews } from "../components/mockdata/review"
import { FaHeart } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router"
import { useState } from "react"
import{ useParams } from "react-router-dom";

export default function ReviewDetailPage() {
   const { id } = useParams<{ id: string }>();
  const review = mockReviews.find((r) => r.id === id);
  const [isLiked, setIsLiked] = useState(false)
  const [likes, setLikes] = useState(Math.floor(Math.random() * 500) + 50)

  if (!review) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-3xl font-bold text-foreground mb-4">Review Not Found</h1>
            <Link to="/" className="text-primary hover:underline">
              Return to Home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const categoryLabels = {
    book: "Book",
    show: "Show",
    restaurant: "Restaurant",
  }

  const relatedReviews = mockReviews.filter((r) => r.category === review.category && r.id !== review.id).slice(0, 3)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikes(isLiked ? likes - 1 : likes + 1)
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Back Button */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Link
            to="/categories"
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mb-8"
          >
            <FaArrowLeft size={20} />
            Back to Reviews
          </Link>
        </div>

        {/* Review Header */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Image */}
            <div className="md:col-span-1">
              <div className="rounded-xl overflow-hidden bg-muted h-80">
                <img
                  src={review.image || "/placeholder.svg"}
                  alt={review.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                    {categoryLabels[review.category]}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {new Date(review.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <h1 className="font-serif text-4xl font-bold text-foreground mb-4">{review.title}</h1>
                <p className="text-lg text-muted-foreground mb-6">{review.excerpt}</p>
              </div>

              {/* Rating */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <CiStar
                        key={i}
                        size={24}
                        className={
                          i < Math.floor(review.rating) ? "fill-primary text-primary" : "text-muted-foreground"
                        }
                      />
                    ))}
                  </div>
                  <span className="text-2xl font-bold text-foreground">{review.rating}</span>
                </div>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Reviewed by</span> {review.author}
                </p>
              </div>

              {/* Like Button */}
              <button
                onClick={handleLike}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-foreground hover:border-primary transition-colors"
              >
                <FaHeart size={20} className={isLiked ? "fill-primary text-primary" : ""} />
                <span>{likes}</span>
              </button>
            </div>
          </div>
        </section>

        {/* Full Review Text */}
        <section className="bg-secondary/30 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Full Review</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-foreground leading-relaxed whitespace-pre-wrap">{review.content}</p>
            </div>
          </div>
        </section>

        {/* Comments Section */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-8">Comments</h2>
            <div className="space-y-6">
              {/* Comment Form */}
              <div className="bg-card border border-border rounded-xl p-6">
                <textarea
                  placeholder="Share your thoughts on this review..."
                  className="w-full bg-background text-foreground border border-border rounded-lg p-4 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  rows={4}
                />
                <button className="mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
                  Post Comment
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Reviews */}
        {relatedReviews.length > 0 && (
          <section className="py-16 bg-secondary/30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-12">
                More {categoryLabels[review.category]} Reviews
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedReviews.map((relatedReview) => (
                  <ReviewCard key={relatedReview.id} review={relatedReview} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}