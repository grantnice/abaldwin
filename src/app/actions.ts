"use server";

import { supabase } from "@/lib/supabase";

export async function submitInterest(formData: FormData) {
  const parentName = formData.get("parentName") as string;
  const email = formData.get("email") as string;
  const linkedin = (formData.get("linkedin") as string) || null;
  const childInfo = formData.get("childInfo") as string;
  const motivation = formData.get("motivation") as string;
  const meetupInterest = (formData.get("meetupInterest") as string) || null;
  const notes = (formData.get("notes") as string) || null;

  if (!parentName || !email || !childInfo || !motivation) {
    return { success: false, error: "Please fill in all required fields." };
  }

  const { error } = await supabase.from("founding_families").insert({
    parent_name: parentName,
    email,
    linkedin,
    child_info: childInfo,
    motivation,
    meetup_interest: meetupInterest,
    notes,
  });

  if (error) {
    console.error("Supabase insert error:", error);
    return { success: false, error: "Something went wrong. Please try again." };
  }

  return { success: true };
}
