"use client";

import { useState, useTransition } from "react";
import { submitInterest } from "./actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Zap,
  GraduationCap,
  Rocket,
  Brain,
  Mic,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

/* ──────────────────────────────────────────────
   HERO SECTION
   ────────────────────────────────────────────── */
function HeroSection() {
  const scrollToApplication = () => {
    document.getElementById("application")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-orange-50/30" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-alpha-orange/5 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-deep-navy/5 border border-deep-navy/10 rounded-full px-5 py-2 mb-8">
          <span className="w-2 h-2 bg-alpha-orange rounded-full animate-pulse" />
          <span className="text-sm font-medium text-deep-navy/70 tracking-wide uppercase">
            Help bring Alpha School to Baldwin County
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-deep-navy leading-[1.1] mb-6">
          World-Class K-8 Education.{" "}
          <span className="bg-gradient-to-r from-alpha-orange to-orange-600 bg-clip-text text-transparent">
            Now Targeting Baldwin County.
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          We are organizing a Founding Family cohort to bring a new campus of{" "}
          <a href="https://alpha.school/the-program/#learn" target="_blank" rel="noopener noreferrer" className="text-deep-navy font-bold underline decoration-alpha-orange decoration-2 underline-offset-4 hover:text-alpha-orange transition-colors">Alpha</a>—the school with academic outcomes in the
          top 0.1% of all U.S. schools—to the Eastern Shore.
        </p>

        {/* CTA */}
        <Button
          onClick={scrollToApplication}
          className="bg-alpha-orange hover:bg-alpha-orange-hover text-white text-lg px-10 py-7 rounded-xl shadow-lg shadow-alpha-orange/25 hover:shadow-xl hover:shadow-alpha-orange/30 transition-all duration-300 cursor-pointer"
        >
          Share Interest in Founding Cohort
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>

        {/* Social Proof Bar */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-400 uppercase tracking-widest mb-4">
            As seen in
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-slate-400">
            <a
              href="https://www.yahoo.com/news/articles/u-education-secretary-mcmahon-visits-100019729.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-medium italic hover:text-deep-navy transition-colors"
            >
              The Austin American-Statesman
            </a>
            <span className="hidden sm:block w-px h-5 bg-slate-200" />
            <a
              href="https://www.edsurge.com/news/2014-08-07-using-design-thinking-to-create-a-school-from-scratch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-medium italic hover:text-deep-navy transition-colors"
            >
              EdSurge
            </a>
            <span className="hidden sm:block w-px h-5 bg-slate-200" />
            <a
              href="https://www.cognitiverevolution.ai/2-sigma-in-2-hours-how-alpha-schools-are-using-ai-to-revolutionize-education/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-medium italic hover:text-deep-navy transition-colors"
            >
              Cognitive Revolution
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   EXTREME OUTCOMES SECTION
   ────────────────────────────────────────────── */
function ExtremeOutcomesSection() {
  const stats = [
    {
      number: "2x",
      label: "Faster Learning",
      description:
        "Alpha students achieve twice the amount of learning in only 2 hours a day. Independent AI analysis of MAP data found growth rates of up to 5x the national average in some grade levels.",
      reference: "NWEA MAP Growth Fall '25–Winter '26, verified by Gemini & Claude analysis.",
      icon: Zap,
    },
    {
      number: "Top 0.1%",
      label: "Of All U.S. Schools",
      description:
        "Every single grade level K–11 scored at the 99th percentile in Reading. Math, Language, and Science show the same pattern. Alpha ranks in the top 1–5 schools out of every 1,000 in America.",
      reference: "NWEA MAP Winter 2025–2026 national norms.",
      icon: GraduationCap,
    },
    {
      number: "99th",
      label: "Percentile Growth",
      description:
        "High-achieving students typically plateau. Alpha defies this—producing 99th percentile achievement and 83rd–99th percentile growth simultaneously. Kindergartners are performing at a 3rd-grade level.",
      reference: "Conditional Growth Index analysis, NWEA MAP data.",
      icon: Rocket,
    },
  ];

  return (
    <section className="bg-deep-navy py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
            Outliers by <em className="italic underline decoration-alpha-orange decoration-4 underline-offset-8">Design</em>.
          </h2>
        </div>

        {/* 3-Column Stat Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative group"
            >
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full hover:bg-white/[0.08] transition-colors duration-300">
                <stat.icon className="h-8 w-8 text-alpha-orange mb-6" />
                <div className="text-6xl sm:text-7xl font-bold text-white mb-2 tracking-tighter">
                  {stat.number}
                </div>
                <div className="text-alpha-orange font-semibold text-sm uppercase tracking-widest mb-4">
                  {stat.label}
                </div>
                <p className="text-slate-300 leading-relaxed text-sm">
                  {stat.description}
                </p>
                {stat.reference && (
                  <p className="text-slate-500 text-xs mt-3 italic">
                    {stat.reference}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Quote Blocks */}
        <div className="space-y-10 max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-alpha-orange rounded-full" />
            <blockquote className="pl-8 sm:pl-12">
              <p className="text-xl sm:text-2xl text-white/90 leading-relaxed font-light italic">
                &ldquo;Alpha is not competing with elite private schools. It is
                outperforming them—while also growing faster. The combination of
                top-of-scale achievement with top-of-scale growth is the rarest
                outcome in American K-12 education.&rdquo;
              </p>
              <footer className="mt-6 flex items-center gap-3">
                <div className="w-10 h-px bg-alpha-orange" />
                <cite className="text-slate-400 not-italic text-sm">
                  Claude Opus 4.6 analysis of NWEA MAP data
                </cite>
              </footer>
            </blockquote>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-alpha-orange rounded-full" />
            <blockquote className="pl-8 sm:pl-12">
              <p className="text-xl sm:text-2xl text-white/90 leading-relaxed font-light italic">
                &ldquo;Alpha&apos;s performance is comparable to the top 0.1% of schools
                globally—the tier occupied by Phillips Exeter, The Dalton School,
                and Trinity School. In Math, students are performing at a level
                that effectively breaks the standard calibration of the test.&rdquo;
              </p>
              <footer className="mt-6 flex items-center gap-3">
                <div className="w-10 h-px bg-alpha-orange" />
                <cite className="text-slate-400 not-italic text-sm">
                  Gemini 3 Pro analysis of NWEA MAP data
                </cite>
              </footer>
            </blockquote>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-alpha-orange rounded-full" />
            <blockquote className="pl-8 sm:pl-12">
              <p className="text-xl sm:text-2xl text-white/90 leading-relaxed font-light italic">
                &ldquo;Your students are not just smart kids staying smart—they are
                accelerating away from the pack. 99th percentile growth means they
                learned more in one semester than 99% of their peers, despite
                starting with a massive advantage.&rdquo;
              </p>
              <footer className="mt-6 flex items-center gap-3">
                <div className="w-10 h-px bg-alpha-orange" />
                <cite className="text-slate-400 not-italic text-sm">
                  Gemini 3 Pro, Growth Analysis
                </cite>
              </footer>
            </blockquote>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-alpha-orange rounded-full" />
            <blockquote className="pl-8 sm:pl-12">
              <p className="text-xl sm:text-2xl text-white/90 leading-relaxed font-light italic">
                &ldquo;The results are extreme. We are seeing kids master core
                subjects in 2 hours a day and spend the rest of their time becoming
                elite at their passions.&rdquo;
              </p>
              <footer className="mt-6 flex items-center gap-3">
                <div className="w-10 h-px bg-alpha-orange" />
                <cite className="text-slate-400 not-italic text-sm">
                  Angus Davis, Tech Entrepreneur &amp; Investor
                </cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   ALPHA MODEL SECTION
   ────────────────────────────────────────────── */
function AlphaModelSection() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-deep-navy tracking-tight mb-4">
            The 2-Hour Learning Model.
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Traditional school is 6 hours of lecture. Alpha is 2 hours of mastery.
          </p>
        </div>

        {/* Two Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Component 1 */}
          <Card className="border-0 shadow-lg shadow-slate-200/50 rounded-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-br from-deep-navy to-deep-navy-light p-8 sm:p-10 rounded-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-alpha-orange/20 flex items-center justify-center">
                    <Brain className="h-6 w-6 text-alpha-orange" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-widest">
                      8am &ndash; 11am
                    </p>
                    <h3 className="text-xl font-bold text-white">
                      Adaptive AI Learning
                    </h3>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  No chatbots (cheatbots). AI works behind the scenes, coordinating
                  the adaptive delivery your child needs for deeper learning. If they
                  are ahead, they soar. If they are stuck, it slows down. No gaps.
                  100% Mastery.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {["Personalized", "AI-Driven", "Mastery-Based"].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium bg-white/10 text-white/70 px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Component 2 */}
          <Card className="border-0 shadow-lg shadow-slate-200/50 rounded-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-br from-slate-50 to-white p-8 sm:p-10 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-alpha-orange/10 flex items-center justify-center">
                    <Mic className="h-6 w-6 text-alpha-orange" />
                  </div>
                  <div>
                    <p className="text-xs text-deep-navy/40 uppercase tracking-widest">
                      12pm &ndash; 3pm
                    </p>
                    <h3 className="text-xl font-bold text-deep-navy">
                      Life Skills &amp; Masterpieces
                    </h3>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Public speaking, financial literacy, and
                  &ldquo;Masterpieces&rdquo;—projects that look impressive on a
                  college resume (and in real life).
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {["Public Speaking", "Financial Literacy", "Portfolio Projects"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium bg-deep-navy/5 text-deep-navy/60 px-3 py-1.5 rounded-full"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Comparison Bar */}
        <div className="mt-16 bg-slate-50 rounded-2xl p-8 sm:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              ["6 hours of lecture", "2 hours of mastery"],
              ["Burnout & stress", "High agency & passion"],
              ["Theory-based learning", "Real-world projects"],
              ["One-size-fits-all", "AI-adaptive curriculum"],
            ].map(([traditional, alpha]) => (
              <div key={traditional} className="flex items-center gap-3">
                <span className="text-sm text-slate-400 line-through flex-shrink-0">
                  {traditional}
                </span>
                <ArrowRight className="h-3 w-3 text-alpha-orange flex-shrink-0" />
                <span className="text-sm font-semibold text-deep-navy">
                  {alpha}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   APPLICATION SECTION
   ────────────────────────────────────────────── */
function ApplicationSection() {
  const [submitted, setSubmitted] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      const result = await submitInterest(formData);
      if (result.success) {
        setSubmitted(true);
        setDialogOpen(true);
      } else {
        setError(result.error ?? "Something went wrong.");
      }
    });
  };

  return (
    <section id="application" className="py-24 sm:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-deep-navy tracking-tight mb-4">
            Join the Founding Cohort.
          </h2>
          <p className="text-lg text-slate-500">
            Show your interest in being a Founding Family and help bring Alpha School to Baldwin County for a{" "}
            <strong className="text-deep-navy">Fall 2028</strong> launch.
          </p>
        </div>

        {/* Application Form */}
        <Card className="border-0 shadow-xl shadow-slate-200/50 rounded-2xl">
          <CardContent className="p-8 sm:p-10">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name - First + Last */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="firstName"
                      className="text-sm font-semibold text-deep-navy"
                    >
                      First Name <span className="text-alpha-orange">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      required
                      placeholder="First name"
                      className="h-12 rounded-xl border-slate-200 focus:border-alpha-orange focus:ring-alpha-orange"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="lastName"
                      className="text-sm font-semibold text-deep-navy"
                    >
                      Last Name <span className="text-alpha-orange">*</span>
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      required
                      placeholder="Last name"
                      className="h-12 rounded-xl border-slate-200 focus:border-alpha-orange focus:ring-alpha-orange"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-semibold text-deep-navy"
                  >
                    Email <span className="text-alpha-orange">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="h-12 rounded-xl border-slate-200 focus:border-alpha-orange focus:ring-alpha-orange"
                  />
                </div>

                {/* Interest Level */}
                <div className="space-y-3">
                  <Label className="text-sm font-semibold text-deep-navy">
                    Your Interest Level <span className="text-alpha-orange">*</span>
                  </Label>
                  <div className="grid grid-cols-2 gap-3">
                    {["I'm Convinced!", "I'm Intrigued!"].map((option) => (
                      <label
                        key={option}
                        className="relative flex items-center justify-center cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="interestLevel"
                          value={option}
                          required
                          className="peer sr-only"
                        />
                        <div className="w-full text-center py-3 px-4 rounded-xl border-2 border-slate-200 text-sm font-medium text-slate-600 peer-checked:border-alpha-orange peer-checked:bg-alpha-orange/5 peer-checked:text-alpha-orange transition-all duration-200 hover:border-slate-300">
                          {option}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Current School Setting */}
                <div className="space-y-3">
                  <Label className="text-sm font-semibold text-deep-navy">
                    Current School Setting <span className="text-alpha-orange">*</span>
                  </Label>
                  <div className="grid grid-cols-3 gap-3">
                    {["Public", "Private", "Homeschool"].map((option) => (
                      <label
                        key={option}
                        className="relative flex items-center justify-center cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="schoolSetting"
                          value={option}
                          required
                          className="peer sr-only"
                        />
                        <div className="w-full text-center py-3 px-4 rounded-xl border-2 border-slate-200 text-sm font-medium text-slate-600 peer-checked:border-alpha-orange peer-checked:bg-alpha-orange/5 peer-checked:text-alpha-orange transition-all duration-200 hover:border-slate-300">
                          {option}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Town */}
                <div className="space-y-2">
                  <Label
                    htmlFor="town"
                    className="text-sm font-semibold text-deep-navy"
                  >
                    What town do you live in? <span className="text-alpha-orange">*</span>
                  </Label>
                  <Input
                    id="town"
                    name="town"
                    required
                    placeholder="e.g., Fairhope, Daphne, Spanish Fort"
                    className="h-12 rounded-xl border-slate-200 focus:border-alpha-orange focus:ring-alpha-orange"
                  />
                </div>

                {/* Number of Kids + Grade */}
                <div className="space-y-2">
                  <Label
                    htmlFor="kidsAndGrade"
                    className="text-sm font-semibold text-deep-navy"
                  >
                    Number of Kids + Current Grade <span className="text-alpha-orange">*</span>
                  </Label>
                  <Textarea
                    id="kidsAndGrade"
                    name="kidsAndGrade"
                    required
                    placeholder="e.g., 2 kids — 3rd grade and 5th grade"
                    className="rounded-xl border-slate-200 focus:border-alpha-orange focus:ring-alpha-orange min-h-[80px]"
                  />
                </div>

                {/* What are you looking for */}
                <div className="space-y-2">
                  <Label
                    htmlFor="lookingFor"
                    className="text-sm font-semibold text-deep-navy"
                  >
                    What are you looking for in a new school? What issues are you wanting to solve for?{" "}
                    <span className="text-alpha-orange">*</span>
                  </Label>
                  <Textarea
                    id="lookingFor"
                    name="lookingFor"
                    required
                    placeholder="Tell us what matters most to your family..."
                    className="rounded-xl border-slate-200 focus:border-alpha-orange focus:ring-alpha-orange min-h-[100px]"
                  />
                </div>

                {/* Actively exploring school change */}
                <div className="space-y-3">
                  <Label className="text-sm font-semibold text-deep-navy">
                    Are you actively looking for a new school?{" "}
                    <span className="text-alpha-orange">*</span>
                  </Label>
                  <div className="grid grid-cols-3 gap-3">
                    {["Yes", "No", "Just Exploring"].map((option) => (
                      <label
                        key={option}
                        className="relative flex items-center justify-center cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="exploringChange"
                          value={option}
                          required
                          className="peer sr-only"
                        />
                        <div className="w-full text-center py-3 px-4 rounded-xl border-2 border-slate-200 text-sm font-medium text-slate-600 peer-checked:border-alpha-orange peer-checked:bg-alpha-orange/5 peer-checked:text-alpha-orange transition-all duration-200 hover:border-slate-300">
                          {option}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Meetup Interest */}
                <div className="space-y-3">
                  <Label className="text-sm font-semibold text-deep-navy">
                    Can we reach out to you about a family meetup or information session?
                  </Label>
                  <div className="grid grid-cols-2 gap-3">
                    {["Yes, I'd love that", "Not right now"].map((option) => (
                      <label
                        key={option}
                        className="relative flex items-center justify-center cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="meetupInterest"
                          value={option}
                          className="peer sr-only"
                        />
                        <div className="w-full text-center py-3 px-4 rounded-xl border-2 border-slate-200 text-sm font-medium text-slate-600 peer-checked:border-alpha-orange peer-checked:bg-alpha-orange/5 peer-checked:text-alpha-orange transition-all duration-200 hover:border-slate-300">
                          {option}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Error */}
                {error && (
                  <p className="text-sm text-red-500 text-center bg-red-50 rounded-xl p-3">
                    {error}
                  </p>
                )}

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-alpha-orange hover:bg-alpha-orange-hover text-white text-lg py-7 rounded-xl shadow-lg shadow-alpha-orange/25 hover:shadow-xl hover:shadow-alpha-orange/30 transition-all duration-300 cursor-pointer disabled:opacity-60"
                >
                  {isPending ? "Submitting..." : "Submit Interest"}
                  {!isPending && <ArrowRight className="ml-2 h-5 w-5" />}
                </Button>

                <p className="text-xs text-slate-400 text-center">
                  Submitting this form is a non-binding show of interest.
                </p>
              </form>
            ) : (
              <div className="text-center py-12">
                <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-deep-navy mb-2">
                  Thank You!
                </h3>
                <p className="text-slate-500">
                  We&apos;ve received your interest. We&apos;ll be in touch soon with
                  next steps.
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Success Dialog */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="rounded-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-deep-navy">
                Welcome to the Founding Cohort!
              </DialogTitle>
              <DialogDescription className="text-slate-500 text-base">
                Your interest has been received. We are building
                something extraordinary for Baldwin County, and you are now part of
                it. Expect to hear from Grant Nice within 48 hours.
              </DialogDescription>
            </DialogHeader>
            <Button
              onClick={() => setDialogOpen(false)}
              className="bg-alpha-orange hover:bg-alpha-orange-hover text-white rounded-xl cursor-pointer"
            >
              Got it
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   HELPFUL LINKS SECTION
   ────────────────────────────────────────────── */
function HelpfulLinksSection() {
  const links = [
    {
      title: "Alpha School Report Card",
      description:
        "Joe Liemandt shares real student outcomes and report card data from Alpha School.",
      href: "https://x.com/jliemandt/status/2023011075029922131",
      source: "X (Twitter)",
    },
    {
      title: "Angus Davis on Alpha Outcomes",
      description:
        "Angus Davis breaks down the extreme academic results Alpha students are achieving.",
      href: "https://x.com/angusdav/status/2023536903899807977",
      source: "X (Twitter)",
    },
    {
      title: "Alpha School Official Site",
      description:
        "Learn more about the Alpha model, curriculum, and campuses nationwide.",
      href: "https://alpha.school",
      source: "alpha.school",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-deep-navy tracking-tight mb-4">
            Helpful Links
          </h2>
          <p className="text-lg text-slate-500">
            Explore the data and stories behind Alpha School.
          </p>
        </div>

        <div className="space-y-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-2xl shadow-md shadow-slate-200/50 p-6 sm:p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-bold text-deep-navy group-hover:text-alpha-orange transition-colors">
                      {link.title}
                    </h3>
                    <ExternalLink className="h-4 w-4 text-slate-300 group-hover:text-alpha-orange transition-colors flex-shrink-0" />
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {link.description}
                  </p>
                </div>
                <span className="text-xs font-medium text-slate-400 bg-slate-100 px-3 py-1 rounded-full flex-shrink-0">
                  {link.source}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   FOOTER
   ────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-deep-navy py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Branding */}
          <div>
            <h3 className="text-white text-xl font-bold tracking-tight">
              Alpha School
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Baldwin County, AL &middot; Targeting Fall 2028
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="https://alpha.school"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white text-sm transition-colors inline-flex items-center gap-1"
            >
              Alpha.school
              <ExternalLink className="h-3 w-3" />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white text-sm transition-colors"
            >
              Angus Davis on Alpha Outcomes
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white text-sm transition-colors"
            >
              Joe Liemandt on High Agency
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8 text-center space-y-3">
          <p className="text-slate-500 text-xs max-w-xl mx-auto leading-relaxed">
            This site is not affiliated with, endorsed by, or officially connected to Alpha School.
            It is run by a local parent who wants to bring the future of education to Baldwin County.
          </p>
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Alpha School Baldwin County. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ──────────────────────────────────────────────
   MAIN PAGE
   ────────────────────────────────────────────── */
export default function Home() {
  return (
    <main>
      <HeroSection />
      <ExtremeOutcomesSection />
      <AlphaModelSection />
      <ApplicationSection />
      <HelpfulLinksSection />
      <Footer />
    </main>
  );
}
