import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-foreground">Tasted & Tales</h3>
            <p className="text-muted-foreground">
              Discover and share thoughtful reviews of books, shows, and restaurants.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="/" className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/categories" className="hover:text-primary transition-colors">
                  Categories
                </a>
              </li>
              <li>
                <a href="/write-review" className="hover:text-primary transition-colors">
                  Write a Review
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-primary transition-colors">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <FaSquareXTwitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <FaFacebook size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Tasted & Tales. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}