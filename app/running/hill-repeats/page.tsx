// app/running/hill-repeats/page.tsx
import React from "react";

export const metadata = {
  title: "Hill Repeats • Running • Fitness Hub",
  description:
    "Short uphill sprints with active recovery to increase power and speed.",
};

export default function HillRepeatsPage() {
  return (
    <section className="max-w-3xl mx-auto space-y-6 py-8">
      {/* Hero */}
      <div className="bg-gray-600 text-white rounded-lg p-6 text-center">
        <h1 className="text-3xl font-bold">Hill Repeats</h1>
        <p className="mt-2">
          Short uphill sprints with active recovery to increase power and speed.
        </p>
      </div>

      {/* Overview */}
      <div className="prose prose-lg mx-auto">
        <h2>Overview</h2>
        <p>
          Hill repeats develop leg strength, improve running economy, and boost
          speed. Sprint up a moderate incline, walk or jog back down for
          recovery, and repeat. Ideal for intermediate to advanced runners.
        </p>
      </div>

      {/* Equipment */}
      <div className="prose prose-lg mx-auto">
        <h2>Equipment Needed</h2>
        <ul className="list-disc ml-6">
          <li>Flat, consistent hill (100–200 meters, 4–6% incline)</li>
          <li>Running shoes</li>
          <li>Timer or stopwatch</li>
          <li>Hydration (optional if it’s hot)</li>
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
              <li>Dynamic drills: high knees, butt kicks, lunges</li>
              <li>2×30-second strides at 60–70% effort</li>
            </ul>
          </li>
          <li>
            <strong>Main Set</strong>:
            <ul className="list-disc ml-6">
              <li>6–8× hill sprints (100–200m each) at 90–95% effort</li>
              <li>Recovery: walk or jog back down to start</li>
              <li>Rest 60 seconds at bottom before next sprint</li>
            </ul>
          </li>
          <li>
            <strong>Cooldown (10 minutes)</strong>:
            <ul className="list-disc ml-6">
              <li>5 minutes easy jog on flat ground</li>
              <li>Static stretches: calves, hamstrings, quads, glutes</li>
              <li>Deep breathing and walking (2 minutes)</li>
            </ul>
          </li>
        </ol>
      </div>
    </section>
  );
}
