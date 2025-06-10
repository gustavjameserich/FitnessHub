// app/lifting/bodyweight-calisthenics/page.tsx
import React from "react";

export const metadata = {
  title: "Bodyweight Calisthenics Strength • Lifting • Fitness Hub",
  description:
    "Pull-ups, dips, push-ups, and core holds for functional strength gains.",
};

export default function BodyweightCalisthenicsPage() {
  return (
    <section className="max-w-3xl mx-auto space-y-6 py-8">
      {/* Hero */}
      <div className="bg-gray-700 text-white rounded-lg p-6 text-center">
        <h1 className="text-3xl font-bold">Bodyweight Calisthenics Strength</h1>
        <p className="mt-2">
          Pull-ups, dips, push-ups, and core holds for functional strength
          gains.
        </p>
      </div>

      {/* Overview */}
      <div className="prose prose-lg mx-auto">
        <h2>Overview</h2>
        <p>
          No equipment needed—this session uses bodyweight movements to build
          upper-body and core strength. Progress by increasing reps or adding
          pause variations.
        </p>
      </div>

      {/* Equipment */}
      <div className="prose prose-lg mx-auto">
        <h2>Equipment Needed</h2>
        <ul className="list-disc ml-6">
          <li>Pull-up bar (or sturdy overhead beam)</li>
          <li>Parallel bars or dip station</li>
          <li>Mat for floor exercises</li>
          <li>Resistance bands (optional for assistance)</li>
        </ul>
      </div>

      {/* Workout Breakdown */}
      <div className="prose prose-lg mx-auto">
        <h2>Workout Breakdown</h2>
        <ol className="list-decimal ml-6 space-y-2">
          <li>
            <strong>Warm-Up (5 minutes)</strong>
            <ul className="list-disc ml-6">
              <li>2 minutes light jogging or high knees in place</li>
              <li>Arm circles and shoulder dislocations (2×10 each)</li>
              <li>1 set bodyweight squats × 10 reps</li>
              <li>1 set push-ups × 10 reps</li>
            </ul>
          </li>
          <li>
            <strong>Pull-Ups (or Assisted Pull-Ups)</strong>
            <ul className="list-disc ml-6">
              <li>3 sets × max reps (use band assistance if needed)</li>
              <li>Rest 2 minutes between sets</li>
            </ul>
          </li>
          <li>
            <strong>Dips (Parallel Bars)</strong>
            <ul className="list-disc ml-6">
              <li>3 sets × 8–12 reps (add band or weight as needed)</li>
              <li>Rest 90 seconds between sets</li>
            </ul>
          </li>
          <li>
            <strong>Push-Ups Variations</strong>
            <ul className="list-disc ml-6">
              <li>3 sets × 12–15 reps (standard or incline/decline)</li>
              <li>Rest 90 seconds between sets</li>
            </ul>
          </li>
          <li>
            <strong>Core Circuit (2 Rounds)</strong>
            <ul className="list-disc ml-6">
              <li>Plank hold: 45 seconds</li>
              <li>Hanging knee raises (or lying leg raises): 12 reps</li>
              <li>Russian twists: 20 reps (10 each side)</li>
              <li>Rest 60 seconds between rounds</li>
            </ul>
          </li>
          <li>
            <strong>Cool-Down (5 minutes)</strong>
            <ul className="list-disc ml-6">
              <li>Static stretches: chest, shoulders, lats, hip flexors</li>
              <li>Deep breathing and foam rolling if available</li>
            </ul>
          </li>
        </ol>
      </div>
    </section>
  );
}
