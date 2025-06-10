// app/boxing/jump-rope-warmup/page.tsx
import React from "react";

export const metadata = {
  title: "Jump Rope Warm-Up • Boxing • Fitness Hub",
  description:
    "Classic boxer’s warm-up to improve footwork, coordination, and cardio.",
};

export default function JumpRopeWarmupPage() {
  return (
    <section className="max-w-3xl mx-auto space-y-6 py-8">
      {/* Hero */}
      <div className="bg-gray-600 text-white rounded-lg p-6 text-center">
        <h1 className="text-3xl font-bold">Jump Rope Warm-Up</h1>
        <p className="mt-2">
          Classic boxer’s warm-up to improve footwork, coordination, and cardio.
        </p>
      </div>

      {/* Overview */}
      <div className="prose prose-lg mx-auto">
        <h2>Overview</h2>
        <p>
          A proper jump rope warm-up primes your muscles, enhances coordination,
          and elevates your heart rate. Use this as a standalone session or
          before any boxing workout.
        </p>
      </div>

      {/* Equipment */}
      <div className="prose prose-lg mx-auto">
        <h2>Equipment Needed</h2>
        <ul className="list-disc ml-6">
          <li>Jump rope</li>
          <li>Boxing shoes or sneakers</li>
          <li>Open floor space</li>
        </ul>
      </div>

      {/* Workout Breakdown */}
      <div className="prose prose-lg mx-auto">
        <h2>Workout Breakdown</h2>
        <ol className="list-decimal ml-6 space-y-2">
          <li>
            <strong>Basic Jump (2 minutes)</strong>:
            <p>
              Light single-unders, landing softly on the balls of your feet.
            </p>
          </li>
          <li>
            <strong>Alternate-Foot Step (1 minute)</strong>:
            <p>
              Simulate jogging in place while jumping rope—left foot then right
              foot.
            </p>
          </li>
          <li>
            <strong>High-Knee Jump (1 minute)</strong>:
            <p>Bring knees up toward chest on each rotation.</p>
          </li>
          <li>
            <strong>Rest (30 seconds)</strong>:
            <p>March in place, focusing on breathing.</p>
          </li>
          <li>
            <strong>Double-Unders (1 minute)</strong>:
            <p>Pass rope under feet twice per jump—go as many as possible.</p>
          </li>
          <li>
            <strong>Bodyweight Move (1 minute)</strong>:
            <ul className="list-disc ml-6">
              <li>Shadow boxing at moderate pace (no rope)</li>
            </ul>
          </li>
          <li>
            <strong>Rest (30 seconds)</strong>:
            <p>Walk around, shake arms loose.</p>
          </li>
          <li>
            <strong>Combination Round (2 minutes)</strong>:
            <ul className="list-disc ml-6">
              <li>30 seconds high-knee jumps</li>
              <li>30 seconds alternate-foot step</li>
              <li>30 seconds basic jump</li>
              <li>30 seconds high-knee jumps</li>
            </ul>
          </li>
          <li>
            <strong>Cool-Down (2 minutes)</strong>:
            <ul className="list-disc ml-6">
              <li>Slow single-unders or march in place</li>
              <li>Calf and hamstring stretches</li>
            </ul>
          </li>
        </ol>
      </div>
    </section>
  );
}
