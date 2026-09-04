"use server";

import { revalidatePath } from "next/cache";

import { createClient } from "@/lib/supabase/server";

export type ReviewActionState = {
  success: boolean;
  error?: string;
};

export async function submitReview(
  _previousState: ReviewActionState,
  formData: FormData
): Promise<ReviewActionState> {
  const name = String(formData.get("name") ?? "").trim();
  const address = String(formData.get("address") ?? "").trim();
  const rating = Number(formData.get("rating"));
  const review = String(formData.get("review") ?? "").trim();

  if (name.length < 2 || name.length > 80) {
    return {
      success: false,
      error: "Please enter a valid name.",
    };
  }

  if (address.length < 2 || address.length > 150) {
    return {
      success: false,
      error: "Please enter a valid suburb or address.",
    };
  }

  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    return {
      success: false,
      error: "Please select a rating between 1 and 5 stars.",
    };
  }

  if (review.length < 10 || review.length > 1000) {
    return {
      success: false,
      error: "Your review must be between 10 and 1000 characters.",
    };
  }

  const supabase = await createClient();

  const { error } = await supabase.from("reviews").insert({
    name,
    address,
    rating,
    review,
  });

  if (error) {
    console.error("Error submitting review:", error);

    return {
      success: false,
      error:
        "Something went wrong while submitting your review. Please try again.",
    };
  }

  revalidatePath("/");
  revalidatePath("/reviews");

  return {
    success: true,
  };
}