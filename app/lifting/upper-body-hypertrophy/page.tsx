// app/lifting/upper-body-hypertrophy/page.tsx
import React from "react";

export const metadata = {
  title: "Upper Body Hypertrophy • Lifting • Fitness Hub",
  description: "Focused volume work for chest, back, shoulders, and arms.",
};

export default function UpperBodyHypertrophyPage() {
  return (
    <section className="max-w-3xl mx-auto space-y-6 py-8">
      {/* Hero */}
      <div className="bg-gray-700 text-white rounded-lg p-6 text-center">
        <h1 className="text-3xl font-bold">Upper Body Hypertrophy</h1>
        <p className="mt-2">
          Focused volume work for chest, back, shoulders, and arms.
        </p>
      </div>

      {/* Overview */}
      <div className="prose prose-lg mx-auto">
        <h2>Overview</h2>
        <p>
          This hypertrophy session targets all major upper-body muscle groups
          with moderate weights and higher reps to promote muscle growth. Rest
          periods are kept moderate to maintain pump.
        </p>
      </div>

      {/* Equipment */}
      <div className="prose prose-lg mx-auto">
        <h2>Equipment Needed</h2>
        <ul className="list-disc ml-6">
          <li>Barbell and dumbbells</li>
          <li>Bench (flat/incline)</li>
          <li>Pull-up bar or lat pulldown machine</li>
          <li>Cables or resistance bands (optional)</li>
        </ul>
      </div>

      {/* Workout Breakdown */}
      <div className="prose prose-lg mx-auto">
        <h2>Workout Breakdown</h2>
        <ol className="list-decimal ml-6 space-y-2">
          <li>
            <strong>Warm-Up (8 minutes)</strong>
            <ul className="list-disc ml-6">
              <li>5 minutes light cardio (row or bike)</li>
              <li>Dynamic shoulder circles and band pull-aparts</li>
              <li>
                2 sets push-ups (10 reps) and band-assisted pull-ups (5 reps)
              </li>
            </ul>
          </li>
          <li>
            <strong>Flat Barbell Bench Press</strong>
            <ul className="list-disc ml-6">
              <li>4 sets × 8–10 reps @ ~70% of 1RM</li>
              <li>Rest 90 seconds between sets</li>
            </ul>
          </li>
          <li>
            <strong>Seated Dumbbell Shoulder Press</strong>
            <ul className="list-disc ml-6">
              <li>3 sets × 10–12 reps</li>
              <li>Rest 90 seconds between sets</li>
            </ul>
          </li>
          <li>
            <strong>Bent-Over Barbell Rows</strong>
            <ul className="list-disc ml-6">
              <li>4 sets × 8–10 reps</li>
              <li>Rest 90 seconds between sets</li>
            </ul>
          </li>
          <li>
            <strong>Incline Dumbbell Flyes</strong>
            <ul className="list-disc ml-6">
              <li>3 sets × 12–15 reps</li>
              <li>Rest 60 seconds between sets</li>
            </ul>
          </li>
          <li>
            <strong>Lat Pulldowns or Pull-Ups</strong>
            <ul className="list-disc ml-6">
              <li>3 sets × 8–10 reps</li>
              <li>Rest 90 seconds between sets</li>
            </ul>
          </li>
          <li>
            <strong>Dumbbell Lateral Raises</strong>
            <ul className="list-disc ml-6">
              <li>3 sets × 12–15 reps</li>
              <li>Rest 60 seconds between sets</li>
            </ul>
          </li>
          <li>
            <strong>Triceps Rope Pushdown</strong>
            <ul className="list-disc ml-6">
              <li>3 sets × 10–12 reps</li>
              <li>Rest 60 seconds between sets</li>
            </ul>
          </li>
          <li>
            <strong>Biceps Dumbbell Curls</strong>
            <ul className="list-disc ml-6">
              <li>3 sets × 10–12 reps</li>
              <li>Rest 60 seconds between sets</li>
            </ul>
          </li>
          <li>
            <strong>Cool-Down (5 minutes)</strong>
            <ul className="list-disc ml-6">
              <li>Static stretches: chest, shoulders, lats, biceps</li>
              <li>Foam rolling if available</li>
            </ul>
          </li>
        </ol>
      </div>
    </section>
  );
}
