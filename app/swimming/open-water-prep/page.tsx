// app/swimming/open-water-prep/page.tsx
import React from "react";

export const metadata = {
  title: "Open Water Prep • Swimming • Fitness Hub",
  description:
    "Simulate open-water conditions with mixed-stroke distance sets.",
};

export default function OpenWaterPrepPage() {
  return (
    <section className="max-w-3xl mx-auto space-y-6 py-8">
      {/* Hero */}
      <div className="bg-gray-700 text-white rounded-lg p-6 text-center">
        <h1 className="text-3xl font-bold">Open Water Prep</h1>
        <p className="mt-2">
          Simulate open-water conditions with mixed-stroke distance sets.
        </p>
      </div>

      {/* Overview */}
      <div className="prose prose-lg mx-auto">
        <h2>Overview</h2>
        <p>
          This session mimics open-water challenges—longer continuous swims,
          sighting drills, and varying strokes to build confidence and endurance
          in non-pool environments. Ideal if you plan to race in lakes or
          oceans.
        </p>
      </div>

      {/* Equipment */}
      <div className="prose prose-lg mx-auto">
        <h2>Equipment Needed</h2>
        <ul className="list-disc ml-6">
          <li>Swimsuit and tinted/goggles suitable for bright conditions</li>
          <li>Swim caps (bright color for visibility)</li>
          <li>Fins (optional, to simulate rougher water conditions)</li>
          <li>Sighting buoy or small marker (for practicing sighting)</li>
        </ul>
      </div>

      {/* Workout Breakdown */}
      <div className="prose prose-lg mx-auto">
        <h2>Workout Breakdown (Total ~1,800 m)</h2>
        <ol className="list-decimal ml-6 space-y-2">
          <li>
            <strong>Warm-Up (10 minutes)</strong>:
            <ul className="list-disc ml-6">
              <li>200 m easy freestyle</li>
              <li>100 m easy backstroke</li>
              <li>100 m pull with pull buoy (focus on long strokes)</li>
            </ul>
          </li>
          <li>
            <strong>Sighting Drill (400 m)</strong>:
            <ul className="list-disc ml-6">
              <li>
                8×50 m freestyle, sighting every 6 strokes (lift head to look
                forward)
              </li>
              <li>Rest 20 seconds after each 50 m</li>
            </ul>
          </li>
          <li>
            <strong>Continuous Swim (800 m)</strong>:
            <ul className="list-disc ml-6">
              <li>
                800 m freestyle at a steady, moderate pace (simulate ocean chop
                by slightly varying stroke rate)
              </li>
              <li>Practice bilateral breathing every 3 strokes</li>
            </ul>
          </li>
          <li>
            <strong>Mixed-Stroke Swap (300 m)</strong>:
            <ul className="list-disc ml-6">
              <li>100 m backstroke (for active recovery)</li>
              <li>100 m breaststroke (focus on timing and glide)</li>
              <li>100 m freestyle (build back up to pace)</li>
            </ul>
          </li>
          <li>
            <strong>Cool-Down (200 m)</strong>:
            <ul className="list-disc ml-6">
              <li>100 m easy freestyle, focusing on smooth long strokes</li>
              <li>100 m easy backstroke or choice stroke</li>
            </ul>
          </li>
        </ol>
      </div>
    </section>
  );
}
