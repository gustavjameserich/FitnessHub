// app/lifting/full-body-powerlifting/page.tsx
import React from "react";

export const metadata = {
  title: "Full-Body Powerlifting Session • Lifting • Fitness Hub",
  description:
    "Heavy compound lifts—squat, bench, and deadlift—to build raw strength.",
};

export default function FullBodyPowerliftingPage() {
  return (
    <section className="max-w-3xl mx-auto space-y-6 py-8">
      {/* Hero */}
      <div className="bg-gray-700 text-white rounded-lg p-6 text-center">
        <h1 className="text-3xl font-bold">Full-Body Powerlifting Session</h1>
        <p className="mt-2">
          Heavy compound lifts—squat, bench, and deadlift—to build raw strength.
        </p>
      </div>

      {/* Overview */}
      <div className="prose prose-lg mx-auto">
        <h2>Overview</h2>
        <p>
          This session focuses on the three main powerlifting movements: squat,
          bench press, and deadlift. You’ll perform working sets at challenging
          loads to stimulate maximal strength gains. Warm up properly before
          each lift and rest fully between sets.
        </p>
      </div>

      {/* Equipment */}
      <div className="prose prose-lg mx-auto">
        <h2>Equipment Needed</h2>
        <ul className="list-disc ml-6">
          <li>Barbell and weight plates</li>
          <li>Squat rack/Power rack</li>
          <li>Bench</li>
          <li>Flat lifting platform or sturdy floor</li>
          <li>Chalk or lifting straps (optional)</li>
        </ul>
      </div>

      {/* Workout Breakdown */}
      <div className="prose prose-lg mx-auto">
        <h2>Workout Breakdown</h2>
        <ol className="list-decimal ml-6 space-y-2">
          <li>
            <strong>Warm-Up (10 minutes)</strong>
            <ul className="list-disc ml-6">
              <li>5 minutes light cardio (bike/row/jog)</li>
              <li>Dynamic stretches: leg swings, arm circles, hip openers</li>
              <li>
                Empty-bar warm-up sets for squat, bench, deadlift (2–3 reps
                each)
              </li>
            </ul>
          </li>
          <li>
            <strong>Squat</strong>
            <ul className="list-disc ml-6">
              <li>Set 1: 5 reps @ 60% of 1RM</li>
              <li>Set 2: 3 reps @ 70% of 1RM</li>
              <li>Set 3: 2 reps @ 80% of 1RM</li>
              <li>Set 4: 1–2 reps @ 85–90% of 1RM</li>
              <li>Rest 3–5 minutes between sets</li>
            </ul>
          </li>
          <li>
            <strong>Bench Press</strong>
            <ul className="list-disc ml-6">
              <li>Set 1: 5 reps @ 60% of 1RM</li>
              <li>Set 2: 3 reps @ 70% of 1RM</li>
              <li>Set 3: 2 reps @ 80% of 1RM</li>
              <li>Set 4: 1–2 reps @ 85–90% of 1RM</li>
              <li>Rest 3–5 minutes between sets</li>
            </ul>
          </li>
          <li>
            <strong>Deadlift</strong>
            <ul className="list-disc ml-6">
              <li>Set 1: 5 reps @ 60% of 1RM</li>
              <li>Set 2: 3 reps @ 70% of 1RM</li>
              <li>Set 3: 2 reps @ 80% of 1RM</li>
              <li>Set 4: 1–2 reps @ 85–90% of 1RM</li>
              <li>Rest 3–5 minutes between sets</li>
            </ul>
          </li>
          <li>
            <strong>Accessory Core Work</strong>
            <ul className="list-disc ml-6">
              <li>Plank hold: 3×45 seconds</li>
              <li>Hanging leg raises: 3×8–10 reps</li>
            </ul>
          </li>
          <li>
            <strong>Cool-Down (5 minutes)</strong>
            <ul className="list-disc ml-6">
              <li>Static stretching: hamstrings, quads, chest, lower back</li>
              <li>Deep breathing and foam rolling if available</li>
            </ul>
          </li>
        </ol>
      </div>
    </section>
  );
}
