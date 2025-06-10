// app/running/interval-sprints/page.tsx
import React from "react";

export const metadata = {
  title: "Interval Sprints • Running • Fitness Hub",
  description:
    "High-intensity sprint intervals to boost speed and cardiovascular fitness.",
};

export default function IntervalSprintsPage() {
  return (
    <section className="max-w-3xl mx-auto space-y-6 py-8">
      {/* Hero */}
      <div className="bg-gray-600 text-white rounded-lg p-6 text-center">
        <h1 className="text-3xl font-bold">Interval Sprints</h1>
        <p className="mt-2">
          High-intensity sprint intervals to boost speed and cardiovascular
          fitness.
        </p>
      </div>

      {/* Overview */}
      <div className="prose prose-lg mx-auto">
        <h2>Overview</h2>
        <p>
          Interval sprints alternate between short, maximum-effort runs and
          recovery periods. This workout improves VO₂ max, leg turnover, and
          overall speed. Perfect for experienced runners or anyone looking to
          push their limits.
        </p>
      </div>

      {/* Equipment */}
      <div className="prose prose-lg mx-auto">
        <h2>Equipment Needed</h2>
        <ul className="list-disc ml-6">
          <li>Track or flat, straight stretch of road/path (100–200 meters)</li>
          <li>Running shoes</li>
          <li>Timer or stopwatch</li>
          <li>Cones or markers (optional, to mark distances)</li>
        </ul>
      </div>

      {/* Workout Breakdown */}
      <div className="prose prose-lg mx-auto">
        <h2>Workout Breakdown</h2>
        <ol className="list-decimal ml-6 space-y-2">
          <li>
            <strong>Warm-Up (10 minutes)</strong>:
            <ul className="list-disc ml-6">
              <li>5 minutes easy jog</li>
              <li>Dynamic drills: high knees, butt kicks, leg swings</li>
              <li>2×50m strides building to ~80% effort</li>
            </ul>
          </li>
          <li>
            <strong>Main Set</strong>:
            <ul className="list-disc ml-6">
              <li>8×100m sprints at 90–100% effort</li>
              <li>Recovery: Walk back or lightly jog 100m after each sprint</li>
              <li>
                Rest 60–90 seconds after every two sprints (active recovery)
              </li>
            </ul>
          </li>
          <li>
            <strong>Cooldown (10 minutes)</strong>:
            <ul className="list-disc ml-6">
              <li>5 minutes easy jog</li>
              <li>Static stretches: hamstrings, quads, calves</li>
              <li>Deep breathing and light walking (2–3 minutes)</li>
            </ul>
          </li>
        </ol>
      </div>
    </section>
  );
}
