// app/lifting/olympic-lifting-technique/page.tsx
import React from "react";

export const metadata = {
  title: "Olympic Lifting Technique • Lifting • Fitness Hub",
  description:
    "Drills for clean & jerk and snatch form, plus accessory stability work.",
};

export default function OlympicLiftingTechniquePage() {
  return (
    <section className="max-w-3xl mx-auto space-y-6 py-8">
      {/* Hero */}
      <div className="bg-gray-700 text-white rounded-lg p-6 text-center">
        <h1 className="text-3xl font-bold">Olympic Lifting Technique</h1>
        <p className="mt-2">
          Drills for clean &amp; jerk and snatch form, plus accessory stability
          work.
        </p>
      </div>

      {/* Overview */}
      <div className="prose prose-lg mx-auto">
        <h2>Overview</h2>
        <p>
          Focus on refining bar path, footwork, and timing in the snatch and
          clean &amp; jerk. Accessory drills will build the stability and
          mobility needed for safe lifts.
        </p>
      </div>

      {/* Equipment */}
      <div className="prose prose-lg mx-auto">
        <h2>Equipment Needed</h2>
        <ul className="list-disc ml-6">
          <li>Barbell and bumper plates</li>
          <li>Platform or rubber flooring</li>
          <li>Squat rack and blocks (for pulls)</li>
          <li>Weightlifting shoes (optional but recommended)</li>
          <li>Resistance bands (for mobility drills)</li>
        </ul>
      </div>

      {/* Workout Breakdown */}
      <div className="prose prose-lg mx-auto">
        <h2>Workout Breakdown</h2>
        <ol className="list-decimal ml-6 space-y-2">
          <li>
            <strong>Warm-Up & Mobility (10 minutes)</strong>
            <ul className="list-disc ml-6">
              <li>5 minutes dynamic stretching (hips, ankles, shoulders)</li>
              <li>Band pull-aparts and shoulder dislocations (2×10)</li>
              <li>PVC pipe overhead squats (2×10)</li>
            </ul>
          </li>
          <li>
            <strong>Snatch Technique Work</strong>
            <ul className="list-disc ml-6">
              <li>
                Snatch Pulls (from mid-shin): 3 sets × 3 reps @ 60% of estimated
                snatch
              </li>
              <li>
                Hang Snatch (just above knees): 3 sets × 3–4 reps @ 50% of
                estimated snatch
              </li>
              <li>
                Full Snatch Attempts: 4 sets × singles @ moderate load (60–65%)
              </li>
              <li>Rest 2–3 minutes between sets</li>
            </ul>
          </li>
          <li>
            <strong>Clean &amp; Jerk Technique Work</strong>
            <ul className="list-disc ml-6">
              <li>
                Clean Pulls (from mid-thigh): 3 sets × 3 reps @ 60% of estimated
                clean
              </li>
              <li>
                Hang Clean (just above knees): 3 sets × 3 reps @ 50% of
                estimated clean
              </li>
              <li>
                Full Clean &amp; Jerk Attempts: 4 sets × singles @ moderate load
                (60–65%)
              </li>
              <li>Rest 2–3 minutes between sets</li>
            </ul>
          </li>
          <li>
            <strong>Accessory Stability &amp; Mobility</strong>
            <ul className="list-disc ml-6">
              <li>Overhead Squats: 3 sets × 5 reps @ empty bar</li>
              <li>Front Squats: 3 sets × 5 reps @ ~70% of clean</li>
              <li>
                Split Jerks (Dip &amp; Drive): 3 sets × 3 reps each leg, empty
                bar
              </li>
              <li>Rest 90 seconds between sets</li>
            </ul>
          </li>
          <li>
            <strong>Cool-Down (5 minutes)</strong>
            <ul className="list-disc ml-6">
              <li>Static stretches: shoulders, hips, hamstrings</li>
              <li>Foam rolling if available</li>
            </ul>
          </li>
        </ol>
      </div>
    </section>
  );
}
