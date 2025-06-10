// app/running/trail-run-challenge/page.tsx
import React from "react";

export const metadata = {
  title: "Trail Run Challenge • Running • Fitness Hub",
  description:
    "Off-road trail route incorporating hills and varied terrain for strength.",
};

export default function TrailRunChallengePage() {
  return (
    <section className="max-w-3xl mx-auto space-y-6 py-8">
      {/* Hero */}
      <div className="bg-gray-600 text-white rounded-lg p-6 text-center">
        <h1 className="text-3xl font-bold">Trail Run Challenge</h1>
        <p className="mt-2">
          Off-road trail route incorporating hills and varied terrain for
          strength.
        </p>
      </div>

      {/* Overview */}
      <div className="prose prose-lg mx-auto">
        <h2>Overview</h2>
        <p>
          Trail runs engage stabilizer muscles and improve balance thanks to
          uneven terrain. This session combines climbs, descents, and flat
          sections to challenge your endurance and leg strength while enjoying
          nature.
        </p>
      </div>

      {/* Equipment */}
      <div className="prose prose-lg mx-auto">
        <h2>Equipment Needed</h2>
        <ul className="list-disc ml-6">
          <li>Trail running shoes with good grip</li>
          <li>Hydration pack or hand-held bottle</li>
          <li>GPS watch or app (to track elevation)</li>
          <li>Lightweight backpack with essentials (snacks, first-aid)</li>
          <li>Hiking poles (optional, for steep climbs)</li>
        </ul>
      </div>

      {/* Trail Run Route */}
      <div className="prose prose-lg mx-auto">
        <h2>Sample Trail Run (6–8 miles)</h2>
        <ul className="list-disc ml-6">
          <li>Start at trailhead—easy jog for 0.5 mile along singletrack.</li>
          <li>Climb steep ridge for 1 mile (power hike if necessary).</li>
          <li>Plateau section—run moderate pace for 1.5 miles.</li>
          <li>Descend technical downhill for 0.5 mile (focus on control).</li>
          <li>Flat river crossing—easy pace for 1 mile.</li>
          <li>Loop back uphill mixed terrain—run/walk 1 mile.</li>
          <li>Final downhill 0.5 mile into trailhead.</li>
        </ul>
      </div>

      {/* Workout Breakdown */}
      <div className="prose prose-lg mx-auto">
        <h2>Workout Details</h2>
        <ol className="list-decimal ml-6 space-y-2">
          <li>
            <strong>Warm-Up (10 minutes)</strong>:
            <ul className="list-disc ml-6">
              <li>5 minutes easy jog on flat path</li>
              <li>Dynamic leg swings and lunges</li>
            </ul>
          </li>
          <li>
            <strong>Main Trail Loop (6–8 miles)</strong>:
            <ul className="list-disc ml-6">
              <li>
                Uphill segments: run at moderate effort, hike if too steep.
              </li>
              <li>Downhill segments: land softly, quick turnover.</li>
              <li>Flat sections: maintain steady pace.</li>
            </ul>
          </li>
          <li>
            <strong>Hydration & Fuel</strong>:
            <p>
              Stop at mile 3 and 5 for quick water and a small snack (banana or
              energy gel).
            </p>
          </li>
          <li>
            <strong>Cooldown (10 minutes)</strong>:
            <ul className="list-disc ml-6">
              <li>Easy walk for 5 minutes</li>
              <li>Static stretches focusing on calves, quads, hips</li>
            </ul>
          </li>
        </ol>
      </div>
    </section>
  );
}
