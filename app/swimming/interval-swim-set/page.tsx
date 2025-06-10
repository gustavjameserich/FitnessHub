// app/swimming/interval-swim-set/page.tsx
import React from "react";

export const metadata = {
  title: "Interval Swim Set • Swimming • Fitness Hub",
  description:
    "Repeat sets of 100m–200m with rest intervals to boost anaerobic capacity.",
};

export default function IntervalSwimSetPage() {
  return (
    <section className="max-w-3xl mx-auto space-y-6 py-8">
      {/* Hero */}
      <div className="bg-gray-700 text-white rounded-lg p-6 text-center">
        <h1 className="text-3xl font-bold">Interval Swim Set</h1>
        <p className="mt-2">
          Repeat sets of 100 m–200 m with rest intervals to boost anaerobic
          capacity.
        </p>
      </div>

      {/* Overview */}
      <div className="prose prose-lg mx-auto">
        <h2>Overview</h2>
        <p>
          This interval set alternates moderate to high-intensity freestyle
          swims with short rest periods. It’s designed to improve speed
          endurance, lactate threshold, and your ability to recover between hard
          efforts.
        </p>
      </div>

      {/* Equipment */}
      <div className="prose prose-lg mx-auto">
        <h2>Equipment Needed</h2>
        <ul className="list-disc ml-6">
          <li>Swimsuit and goggles</li>
          <li>Lane marker or swim lane access</li>
          <li>Timing device (stopwatch or pool clock)</li>
          <li>Pull buoy and paddles (optional, for variations)</li>
        </ul>
      </div>

      {/* Workout Breakdown */}
      <div className="prose prose-lg mx-auto">
        <h2>Workout Breakdown</h2>
        <ol className="list-decimal ml-6 space-y-2">
          <li>
            <strong>Warm-Up (8 minutes)</strong>:
            <ul className="list-disc ml-6">
              <li>200 m easy freestyle</li>
              <li>100 m kick with kickboard</li>
              <li>100 m pull with pull buoy</li>
              <li>100 m easy choice stroke</li>
            </ul>
          </li>
          <li>
            <strong>Main Intervals (1,200 m total)</strong>:
            <ul className="list-disc ml-6">
              <li>4×200 m freestyle on interval (e.g., 3:00–3:30 per 200 m)</li>
              <li>Rest 20 seconds after each 200 m</li>
              <li>4×100 m freestyle on interval (e.g., 1:20–1:30 per 100 m)</li>
              <li>Rest 15 seconds after each 100 m</li>
              <li>2×50 m sprint freestyle (all-out)</li>
              <li>Rest 30 seconds after each 50 m</li>
            </ul>
          </li>
          <li>
            <strong>Cool-Down (5 minutes)</strong>:
            <ul className="list-disc ml-6">
              <li>100 m easy backstroke</li>
              <li>100 m easy freestyle</li>
              <li>50 m kick or pull (your choice)</li>
            </ul>
          </li>
        </ol>
      </div>
    </section>
  );
}
