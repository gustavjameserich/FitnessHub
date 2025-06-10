// app/boxing/speed-bag-drill/page.tsx
import React from "react";

export const metadata = {
  title: "Speed Bag Drill • Boxing • Fitness Hub",
  description:
    "Fast-paced speed bag sets to sharpen timing and boost heart rate.",
};

export default function SpeedBagDrillPage() {
  return (
    <section className="max-w-3xl mx-auto space-y-6 py-8">
      {/* Hero */}
      <div className="bg-gray-600 text-white rounded-lg p-6 text-center">
        <h1 className="text-3xl font-bold">Speed Bag Drill</h1>
        <p className="mt-2">
          Fast-paced speed bag sets to sharpen timing and boost heart rate.
        </p>
      </div>

      {/* Overview */}
      <div className="prose prose-lg mx-auto">
        <h2>Overview</h2>
        <p>
          The speed bag drill focuses on rhythm, timing, and shoulder endurance.
          By maintaining a fast, consistent tempo, you’ll improve hand-eye
          coordination and elevate your heart rate.
        </p>
      </div>

      {/* Equipment */}
      <div className="prose prose-lg mx-auto">
        <h2>Equipment Needed</h2>
        <ul className="list-disc ml-6">
          <li>Mounted speed bag</li>
          <li>Boxing hand wraps</li>
          <li>Timer or stopwatch</li>
        </ul>
      </div>

      {/* Workout Breakdown */}
      <div className="prose prose-lg mx-auto">
        <h2>Workout Breakdown</h2>
        <ol className="list-decimal ml-6 space-y-2">
          <li>
            <strong>Warm-Up (3 minutes)</strong>:
            <ul className="list-disc ml-6">
              <li>1 minute light shadow boxing</li>
              <li>1 minute dynamic shoulder rotations</li>
              <li>1 minute slow speed bag reps to find rhythm</li>
            </ul>
          </li>
          <li>
            <strong>Round 1 (2 minutes)</strong>:
            <ul className="list-disc ml-6">
              <li>20 seconds steady paced hits (focus on timing)</li>
              <li>10 seconds rest (relax shoulders)</li>
              <li>20 seconds fast-paced hits</li>
              <li>10 seconds rest</li>
              <li>20 seconds alternating hands at max speed</li>
              <li>10 seconds rest</li>
            </ul>
          </li>
          <li>
            <strong>Rest (1 minute)</strong>:
            <p>Light shadow boxing and deep breaths.</p>
          </li>
          <li>
            <strong>Round 2 (2 minutes)</strong>:
            <ul className="list-disc ml-6">
              <li>30 seconds double hits (two punches per rhythm cycle)</li>
              <li>15 seconds rest</li>
              <li>
                30 seconds continuous one-hand hits (switch hands halfway)
              </li>
              <li>15 seconds rest</li>
            </ul>
          </li>
          <li>
            <strong>Round 3 (2 minutes)</strong>:
            <ul className="list-disc ml-6">
              <li>30 seconds max-speed continuous hits</li>
              <li>15 seconds rest</li>
              <li>30 seconds alternating slow–fast tempo</li>
              <li>15 seconds rest</li>
            </ul>
          </li>
          <li>
            <strong>Cool-Down (3 minutes)</strong>:
            <ul className="list-disc ml-6">
              <li>1 minute slow speed bag reps (focus on form)</li>
              <li>1 minute slow neck and shoulder stretches</li>
              <li>1 minute deep breathing and arm shakes</li>
            </ul>
          </li>
        </ol>
      </div>
    </section>
  );
}
