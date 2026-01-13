import { Navigation } from "../components/header/nav"
import { Footer } from "../components/footer/foot"
import { FaUsers } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { LuTarget } from "react-icons/lu";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">About Tasted & Tales</h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              A community dedicated to sharing thoughtful reviews and discovering new favorites in books, shows, and
              restaurants.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <LuTarget className="text-primary" size={32} />
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">Our Mission</h3>
                <p className="text-muted-foreground">
                  To create a welcoming space where readers, viewers, and food enthusiasts can share their experiences
                  and discover new favorites.
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                    <FaUsers className="text-accent" size={32} />
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">Our Community</h3>
                <p className="text-muted-foreground">
                  Join thousands of passionate reviewers who believe that great recommendations come from genuine
                  experiences and honest opinions.
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-secondary/30 flex items-center justify-center">
                    <FaHeart className="text-primary" size={32} />
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">Our Values</h3>
                <p className="text-muted-foreground">
                  Authenticity, respect, and a genuine love for books, shows, and great food drive everything we do.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="bg-secondary/30 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Our Story</h2>
            <div className="space-y-6 text-lg text-foreground leading-relaxed">
              <p>
                Tasted & Tales was born from a simple idea: the best recommendations come from people who genuinely care
                about what they're sharing. Whether it's a life-changing novel, a binge-worthy series, or an
                unforgettable meal, we believe these experiences deserve to be celebrated and discussed.
              </p>
              <p>
                We started as a small group of friends who loved sharing our favorite discoveries. We realized that
                finding trustworthy reviews was challenging, and many platforms felt impersonal or overly commercial. We
                wanted to create something different—a space where authentic voices could shine and help others make
                meaningful choices.
              </p>
              <p>
                Today, Tasted & Tales is a thriving community of reviewers from around the world. Our members come from
                diverse backgrounds and perspectives, but we all share a passion for great storytelling, compelling
                narratives, and memorable experiences. Every review on our platform represents someone's genuine
                perspective and love for their subject.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-xl p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary text-primary-foreground font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Browse Reviews</h3>
                    <p className="text-muted-foreground">
                      Explore reviews across books, shows, and restaurants. Filter by category or search for specific
                      titles.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary text-primary-foreground font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Read Detailed Reviews</h3>
                    <p className="text-muted-foreground">
                      Get in-depth insights from our community members. See ratings, full reviews, and comments from
                      other readers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary text-primary-foreground font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Share Your Opinion</h3>
                    <p className="text-muted-foreground">
                      Write your own reviews and share your experiences. Help others discover their next favorite book,
                      show, or restaurant.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary text-primary-foreground font-bold">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Connect & Discuss</h3>
                    <p className="text-muted-foreground">
                      Engage with other reviewers, share your thoughts in comments, and build connections with
                      like-minded enthusiasts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guidelines Section */}
        <section className="bg-secondary/30 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Community Guidelines</h2>
            <div className="space-y-4">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">Be Respectful</h3>
                <p className="text-muted-foreground">
                  Treat all community members with kindness and respect. We celebrate diverse opinions and perspectives.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">Be Honest</h3>
                <p className="text-muted-foreground">
                  Share your genuine opinions. Authentic reviews are what make our community valuable.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">Avoid Spoilers</h3>
                <p className="text-muted-foreground">
                  Mark spoilers clearly so others can enjoy the experience without having major plot points revealed.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">No Spam or Promotion</h3>
                <p className="text-muted-foreground">
                  Keep discussions focused on genuine reviews and recommendations, not commercial promotion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Ready to Share Your Story?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our community of passionate reviewers and help others discover their next favorite book, show, or
              restaurant.
            </p>
            <a
              href="/write-review"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Write Your First Review
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}