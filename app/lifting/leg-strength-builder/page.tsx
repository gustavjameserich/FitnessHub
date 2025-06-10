// app/lifting/leg-strength-builder/page.tsx
import React from "react";

export const metadata = {
  title: "Leg Strength Builder • Lifting • Fitness Hub",
  description:
    "Squats, lunges, and accessory moves to build powerful quads and glutes.",
};

export default function LegStrengthBuilderPage() {
  return (
    <section className="max-w-3xl mx-auto space-y-6 py-8">
      {/* Hero */}
      <div className="bg-gray-700 text-white rounded-lg p-6 text-center">
        <h1 className="text-3xl font-bold">Leg Strength Builder</h1>
        <p className="mt-2">
          Squats, lunges, and accessory moves to build powerful quads and
          glutes.
        </p>
      </div>

      {/* Overview */}
      <div className="prose prose-lg mx-auto">
        <h2>Overview</h2>
        <p>
          Focus on heavy compound movements and targeted accessory lifts for
          lower-body strength and muscle growth. Proper form and full range of
          motion are crucial.
        </p>
      </div>

      {/* Equipment */}
      <div className="prose prose-lg mx-auto">
        <h2>Equipment Needed</h2>
        <ul className="list-disc ml-6">
          <li>Barbell and weight plates</li>
          <li>Squat rack/Power rack</li>
          <li>Leg press machine or dumbbells (optional)</li>
          <li>Barbell or dumbbell for lunges</li>
        </ul>
      </div>

      {/* Workout Breakdown */}
      <div className="prose prose-lg mx-auto">
        <h2>Workout Breakdown</h2>
        <ol className="list-decimal ml-6 space-y-2">
          <li>
            <strong>Warm-Up (8 minutes)</strong>
            <ul className="list-disc ml-6">
              <li>5 minutes light cardio (bike or brisk walk)</li>
              <li>Dynamic hip openers and leg swings</li>
              <li>
                Bodyweight squats (2×10) and walking lunges (1×10 each leg)
              </li>
            </ul>
          </li>
          <li>
            <strong>Back Squats</strong>
            <ul className="list-disc ml-6">
              <li>Set 1: 5 reps @ 60% of working weight</li>
              <li>Set 2: 5 reps @ 70% of working weight</li>
              <li>Set 3: 5 reps @ 75% of working weight</li>
              <li>Set 4: 3–5 reps @ 80–85% of working weight</li>
              <li>Rest 2–3 minutes between sets</li>
            </ul>
          </li>
          <li>
            <strong>Walking Lunges</strong>
            <ul className="list-disc ml-6">
              <li>3 sets × 12 steps per leg (holding dumbbells or barbell)</li>
              <li>Rest 90 seconds between sets</li>
            </ul>
          </li>
          <li>
            <strong>Romanian Deadlifts</strong>
            <ul className="list-disc ml-6">
              <li>4 sets × 8–10 reps</li>
              <li>Rest 90 seconds between sets</li>
            </ul>
          </li>
          <li>
            <strong>Leg Press (or Goblet Squats)</strong>
            <ul className="list-disc ml-6">
              <li>3 sets × 10–12 reps</li>
              <li>Rest 60–90 seconds between sets</li>
            </ul>
          </li>
          <li>
            <strong>Calf Raises</strong>
            <ul className="list-disc ml-6">
              <li>4 sets × 12–15 reps (bodyweight or with weight)</li>
              <li>Rest 60 seconds between sets</li>
            </ul>
          </li>
          <li>
            <strong>Cool-Down (5 minutes)</strong>
            <ul className="list-disc ml-6">
              <li>Static stretches: quads, hamstrings, calves, glutes</li>
              <li>Foam rolling if available</li>
            </ul>
          </li>
        </ol>
      </div>
    </section>
  );
}
