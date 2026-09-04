"use client";

import { useActionState, useEffect } from "react";
import { Star } from "lucide-react";
import { useRouter } from "next/navigation";

import { submitReview } from "@/app/actions/reviews";

import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const initialState = {
  success: false,
};

export default function ReviewForm() {
    const router = useRouter();
    const [state, formAction, isPending] = useActionState(
        submitReview,
        initialState
  );

  useEffect(() => {
    if (state.success) {
        const form = document.getElementById(
            "review-form"
        ) as HTMLFormElement | null;
        
        form?.reset();
        router.refresh();
    }
}, [state.success, router]);
  return (
    <form
      id="review-form"
      action={formAction}
      className="rounded-2xl border border-zinc-300 bg-zinc-100/95 p-6 shadow-sm lg:p-8"
    >
      <div>
        <h2 className="text-2xl font-bold">
          Share Your Experience
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          We'd love to hear about your experience with our team.
        </p>
      </div>

      <FieldGroup className="mt-8">
        <Field>
          <FieldLabel htmlFor="name">
            Your Name
          </FieldLabel>

          <Input
            id="name"
            name="name"
            placeholder="John Smith"
            required
            disabled={isPending}
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="address">
            Your Suburb / Location
          </FieldLabel>

          <Input
            id="address"
            name="address"
            placeholder="Parramatta, NSW"
            required
            disabled={isPending}
          />

          <FieldDescription>
            We recommend entering your suburb and state rather than
            your full residential address.
          </FieldDescription>
        </Field>

        <Field>
          <FieldLabel>
            Your Rating
          </FieldLabel>

          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((value) => (
              <label
                key={value}
                className="cursor-pointer"
              >
                <input
                  type="radio"
                  name="rating"
                  value={value}
                  className="peer sr-only"
                  required={value === 1}
                  disabled={isPending}
                />

                <Star
                  className="h-7 w-7 text-zinc-300 transition-colors
                             peer-checked:fill-current
                             peer-checked:text-primary
                             hover:text-primary"
                />
              </label>
            ))}
          </div>
        </Field>

        <Field>
          <FieldLabel htmlFor="review">
            Your Review
          </FieldLabel>

          <Textarea
            id="review"
            name="review"
            placeholder="Tell us about your experience..."
            rows={5}
            required
            disabled={isPending}
          />
        </Field>

        {state.error && (
          <FieldError>
            {state.error}
          </FieldError>
        )}

        {state.success && (
          <p className="text-sm font-medium text-green-600">
            Thank you! Your review has been submitted successfully.
          </p>
        )}

        <Button
          type="submit"
          disabled={isPending}
          className="w-full sm:w-auto"
        >
          {isPending ? "Submitting..." : "Submit Review"}
        </Button>
      </FieldGroup>
    </form>
  );
}