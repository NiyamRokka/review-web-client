import type React from "react"
import { useState } from "react"
import { Navigation } from "../components/header/nav"
import { Footer } from "../components/footer/foot"
import { FaStar } from "react-icons/fa";

export default function WriteReviewPage() {
  const [formData, setFormData] = useState({
    title: "",
    category: "book",
    rating: 5,
    reviewText: "",
    authorName: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === "rating" ? Number.parseInt(value) : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        title: "",
        category: "book",
        rating: 5,
        reviewText: "",
        authorName: "",
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-12">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl font-bold text-foreground mb-4">Share Your Review</h1>
            <p className="text-lg text-muted-foreground">
              Tell us what you think about your favorite books, shows, and restaurants.
            </p>
          </div>
        </section>

        {/* Form */}
        <section className="py-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            {submitted ? (
              <div className="bg-secondary border border-border rounded-xl p-8 text-center">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Thank You!</h2>
                <p className="text-muted-foreground">Your review has been submitted successfully.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Title */}
                <div>
                  <label htmlFor="title" className="block text-sm font-semibold text-foreground mb-2">
                    Title <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="e.g., A Masterpiece of Modern Fiction"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Author Name */}
                <div>
                  <label htmlFor="authorName" className="block text-sm font-semibold text-foreground mb-2">
                    Your Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="authorName"
                    name="authorName"
                    value={formData.authorName}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Category */}
                <div>
                  <label htmlFor="category" className="block text-sm font-semibold text-foreground mb-2">
                    Category <span className="text-primary">*</span>
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="book">Book</option>
                    <option value="show">Show</option>
                    <option value="restaurant">Restaurant</option>
                  </select>
                </div>

                {/* Rating */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-4">
                    Rating <span className="text-primary">*</span>
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormData((prev) => ({ ...prev, rating: star }))}
                        className="transition-transform hover:scale-110"
                      >
                        <FaStar
                          size={32}
                          className={star <= formData.rating ? "fill-primary text-primary" : "text-muted-foreground"}
                        />
                      </button>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{formData.rating} out of 5 stars</p>
                </div>

                {/* Review Text */}
                <div>
                  <label htmlFor="reviewText" className="block text-sm font-semibold text-foreground mb-2">
                    Your Review <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="reviewText"
                    name="reviewText"
                    value={formData.reviewText}
                    onChange={handleChange}
                    placeholder="Share your thoughts, what did you like or dislike? What would you recommend to others?"
                    required
                    rows={8}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                  <p className="text-xs text-muted-foreground mt-2">{formData.reviewText.length} characters</p>
                </div>

                {/* Submit Button */}
                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
                  >
                    Submit Review
                  </button>
                  <button
                    type="reset"
                    className="px-8 py-3 border border-border bg-card text-foreground rounded-lg font-semibold hover:border-primary transition-colors"
                  >
                    Clear
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>

        {/* Tips Section */}
        <section className="bg-secondary/30 py-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-8">Tips for Writing a Great Review</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">Be Specific</h3>
                <p className="text-muted-foreground">
                  Mention specific scenes, characters, or dishes that stood out to you.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">Be Honest</h3>
                <p className="text-muted-foreground">Share your genuine opinion, whether positive or negative.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">Avoid Spoilers</h3>
                <p className="text-muted-foreground">
                  Keep major plot points secret so others can enjoy the experience.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">Be Respectful</h3>
                <p className="text-muted-foreground">
                  Remember that others may have different opinions and preferences.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}