// app/swimming/freestyle-endurance/page.tsx
import React from "react";

export const metadata = {
  title: "Freestyle Endurance • Swimming • Fitness Hub",
  description:
    "Continuous freestyle laps focusing on steady pace to build endurance.",
};

export default function FreestyleEndurancePage() {
  return (
    <section className="max-w-3xl mx-auto space-y-6 py-8">
      {/* Hero */}
      <div className="bg-gray-700 text-white rounded-lg p-6 text-center">
        <h1 className="text-3xl font-bold">Freestyle Endurance</h1>
        <p className="mt-2">
          Continuous freestyle laps focusing on steady pace to build endurance.
        </p>
      </div>

      {/* Overview */}
      <div className="prose prose-lg mx-auto">
        <h2>Overview</h2>
        <p>
          This workout is designed to improve your aerobic base by maintaining a
          consistent freestyle (front crawl) pace over a longer distance. You’ll
          focus on efficient breathing, steady stroke mechanics, and even pacing
          throughout.
        </p>
      </div>

      {/* Equipment */}
      <div className="prose prose-lg mx-auto">
        <h2>Equipment Needed</h2>
        <ul className="list-disc ml-6">
          <li>Swimsuit and goggles</li>
          <li>Swim cap (optional)</li>
          <li>Kickboard (optional, as a drill variation)</li>
          <li>Pull buoy (optional, to isolate arms)</li>
        </ul>
      </div>

      {/* Workout Breakdown */}
      <div className="prose prose-lg mx-auto">
        <h2>Workout Breakdown</h2>
        <ol className="list-decimal ml-6 space-y-2">
          <li>
            <strong>Warm-Up (10 minutes)</strong>:
            <ul className="list-disc ml-6">
              <li>200 m easy freestyle</li>
              <li>
                100 m kick with kickboard (alternating 25 m flutter kick / 25 m
                dolphin kick)
              </li>
              <li>100 m pull with pull buoy (focus on high elbow catch)</li>
              <li>
                100 m easy choice stroke (backstroke or breaststroke) for
                recovery
              </li>
            </ul>
          </li>
          <li>
            <strong>Main Set (1,500 m total)</strong>:
            <ul className="list-disc ml-6">
              <li>
                5×200 m freestyle on a steady interval (e.g., 3:30–4:00 per 200
                m)
              </li>
              <li>Rest 30 seconds after each 200 m</li>
              <li>
                4×100 m freestyle at slightly faster pace (e.g., 1:40–1:50 per
                100 m)
              </li>
              <li>Rest 20 seconds after each 100 m</li>
              <li>200 m easy freestyle cooldown swim</li>
            </ul>
          </li>
          <li>
            <strong>Cool-Down (5–10 minutes)</strong>:
            <ul className="list-disc ml-6">
              <li>100 m easy backstroke or breaststroke</li>
              <li>100 m easy freestyle, focusing on long, relaxed strokes</li>
              <li>50 m gentle kick or pull, whichever feels best</li>
            </ul>
          </li>
        </ol>
      </div>
    </section>
  );
}
