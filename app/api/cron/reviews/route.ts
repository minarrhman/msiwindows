import { NextResponse } from "next/server";

import { createClient } from "@/lib/supabase/server";

export async function GET() {
  const supabase = await createClient();

  const { error } = await supabase
    .from("reviews")
    .select("id")
    .limit(1);

  if (error) {
    console.error("Review cron error:", error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }

  return NextResponse.json({
    success: true,
    message: "Supabase review query successful",
  });
}