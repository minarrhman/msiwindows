import { createClient } from "@/lib/supabase/server";

export async function getReviews(limit?: number) {
  const supabase = await createClient();

  let query = supabase
    .from("reviews")
    .select("id, name, address, rating, review, created_at")
    .order("created_at", { ascending: false });

  if (limit) {
    query = query.limit(limit);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching reviews:", error);
    return [];
  }

  return data;
}