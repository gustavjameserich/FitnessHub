// app/boxing/heavy-bag-intervals/page.tsx
import React from "react";

export const metadata = {
  title: "Heavy Bag Intervals • Boxing • Fitness Hub",
  description:
    "Power-punch rounds on the heavy bag with active rest for max stamina.",
};

export default function HeavyBagIntervalsPage() {
  return (
    <section className="max-w-3xl mx-auto space-y-6 py-8">
      {/* Hero */}
      <div className="bg-gray-600 text-white rounded-lg p-6 text-center">
        <h1 className="text-3xl font-bold">Heavy Bag Intervals</h1>
        <p className="mt-2">
          Power-punch rounds on the heavy bag with active rest for max stamina.
        </p>
      </div>

      {/* Overview */}
      <div className="prose prose-lg mx-auto">
        <h2>Overview</h2>
        <p>
          This workout alternates between high-intensity power-punch intervals
          and active rest (light footwork) to maximize endurance and improve
          punching power. Ideal for boxers and athletes looking to increase bag
          stamina.
        </p>
      </div>

      {/* Equipment */}
      <div className="prose prose-lg mx-auto">
        <h2>Equipment Needed</h2>
        <ul className="list-disc ml-6">
          <li>Heavy bag</li>
          <li>Boxing gloves & hand wraps</li>
          <li>Timer with interval settings</li>
        </ul>
      </div>

      {/* Workout Breakdown */}
      <div className="prose prose-lg mx-auto">
        <h2>Workout Breakdown</h2>
        <ol className="list-decimal ml-6 space-y-2">
          <li>
            <strong>Warm-Up (5 minutes)</strong>:
            <ul className="list-disc ml-6">
              <li>2 minutes light jump rope or jogging</li>
              <li>Dynamic stretches: arm circles, leg swings</li>
              <li>1 minute shadow boxing at low intensity</li>
            </ul>
          </li>
          <li>
            <strong>Round 1 (3 minutes)</strong>:
            <ul className="list-disc ml-6">
              <li>20 seconds power jab–cross (focus on hip rotation)</li>
              <li>10 seconds active rest (light footwork/shuffle)</li>
              <li>20 seconds hook–cross–hook combination</li>
              <li>10 seconds active rest</li>
              <li>20 seconds alternating uppercuts</li>
              <li>10 seconds active rest</li>
              <li>20 seconds freestyle power punches</li>
              <li>10 seconds active rest</li>
            </ul>
          </li>
          <li>
            <strong>Rest (1 minute)</strong>:
            <p>Light shadow boxing or marching in place.</p>
          </li>
          <li>
            <strong>Round 2 (3 minutes)</strong>:
            <ul className="list-disc ml-6">
              <li>30 seconds double jab + right cross (jab–jab–cross)</li>
              <li>15 seconds active rest</li>
              <li>30 seconds hook–hook–cross</li>
              <li>15 seconds active rest</li>
              <li>30 seconds alternating jab–cross with lateral movement</li>
              <li>15 seconds active rest</li>
            </ul>
          </li>
          <li>
            <strong>Rest (1 minute)</strong>:
            <p>Deep breathing and light movement.</p>
          </li>
          <li>
            <strong>Round 3 (3 minutes)</strong>:
            <ul className="list-disc ml-6">
              <li>20 seconds power uppercuts (both hands)</li>
              <li>10 seconds active rest</li>
              <li>20 seconds hook–uppercut–hook combination</li>
              <li>10 seconds active rest</li>
              <li>20 seconds freestyle power punches</li>
              <li>10 seconds active rest</li>
              <li>20 seconds rapid jab–cross for speed</li>
              <li>10 seconds active rest</li>
            </ul>
          </li>
          <li>
            <strong>Cool-Down (5 minutes)</strong>:
            <ul className="list-disc ml-6">
              <li>Light jogging or walking (2 minutes)</li>
              <li>Static stretches for arms, shoulders, and back</li>
              <li>Deep breathing exercises (1 minute)</li>
            </ul>
          </li>
        </ol>
      </div>
    </section>
  );
}
