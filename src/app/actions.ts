"use server";

import { supabase } from "@/lib/supabase";

export async function submitInterest(formData: FormData) {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const interestLevel = formData.get("interestLevel") as string;
  const schoolSetting = formData.get("schoolSetting") as string;
  const town = formData.get("town") as string;
  const kidsAndGrade = formData.get("kidsAndGrade") as string;
  const lookingFor = formData.get("lookingFor") as string;
  const exploringChange = formData.get("exploringChange") as string;
  const meetupInterest = (formData.get("meetupInterest") as string) || null;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !interestLevel ||
    !schoolSetting ||
    !town ||
    !kidsAndGrade ||
    !lookingFor ||
    !exploringChange
  ) {
    return { success: false, error: "Please fill in all required fields." };
  }

  const { error } = await supabase.from("founding_families").insert({
    first_name: firstName,
    last_name: lastName,
    email,
    interest_level: interestLevel,
    school_setting: schoolSetting,
    town,
    kids_and_grade: kidsAndGrade,
    looking_for: lookingFor,
    exploring_change: exploringChange,
    meetup_interest: meetupInterest,
  });

  if (error) {
    console.error("Supabase insert error:", error);
    return { success: false, error: "Something went wrong. Please try again." };
  }

  return { success: true };
}
