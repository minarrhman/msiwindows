import { Star } from "lucide-react";

type TestimonialCardProps = {
  name: string;
  location: string;
  quote: string;
  rating: number;
};

export default function TestimonialCard({
  name,
  location,
  quote,
  rating,
}: TestimonialCardProps) {
  return (
    <div
      className="flex h-full flex-col rounded-2xl border
                 border-zinc-300 bg-zinc-100/95 p-8 shadow-sm"
    >
      <div className="mb-4 flex gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`h-4 w-4 ${
              index < rating
                ? "fill-current"
                : "text-zinc-300"
            }`}
          />
        ))}
      </div>

      <p className="flex-grow text-muted-foreground">
        "{quote}"
      </p>

      <div className="mt-6">
        <p className="font-semibold">
          {name}
        </p>

        <p className="text-sm text-muted-foreground">
          {location}
        </p>
      </div>
    </div>
  );
}