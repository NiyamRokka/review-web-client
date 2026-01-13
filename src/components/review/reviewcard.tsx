import { Link } from "react-router"
import type { Review } from "../mockdata/review"

interface ReviewCardProps {
  review: Review
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Link to={`/review/${review.id}`}>
      <div className="group relative bg-[#0a0a0a] border border-white/5 rounded-xl p-4 hover:border-white/20 transition-all duration-500">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
          <img
            src={review.image || "/placeholder.svg"}
            alt={review.title}
            className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-100 group-hover:scale-110"
          />
          <div className="absolute top-3 left-3 px-2 py-1 bg-black/50 backdrop-blur-md rounded border border-white/10 text-[10px] uppercase tracking-widest font-bold">
            {review.category}
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-start">
            <h3 className="font-serif text-xl font-medium text-white italic line-clamp-1">{review.title}</h3>
            <div className="flex gap-0.5 mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full ${i < Math.floor(review.rating) ? "bg-white" : "bg-white/20"}`}
                />
              ))}
            </div>
          </div>

          <p className="text-sm text-white/50 leading-relaxed line-clamp-2 italic">"{review.excerpt}"</p>

          <div className="pt-4 flex items-center justify-between border-t border-white/5">
            <span className="text-[10px] uppercase tracking-widest font-semibold text-white/40">{review.author}</span>
            <span className="text-[10px] font-mono text-white/30">
              {new Date(review.date).toLocaleDateString("en-US", { year: "2-digit", month: "2-digit", day: "2-digit" })}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}