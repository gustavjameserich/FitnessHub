// app/swimming/technique-catch-pull/page.tsx
import React from "react";

export const metadata = {
  title: "Technique Drill: Catch & Pull • Swimming • Fitness Hub",
  description:
    "Focus on hand entry and pull phase with targeted drills to improve form.",
};

export default function TechniqueCatchPullPage() {
  return (
    <section className="max-w-3xl mx-auto space-y-6 py-8">
      {/* Hero */}
      <div className="bg-gray-700 text-white rounded-lg p-6 text-center">
        <h1 className="text-3xl font-bold">Technique Drill: Catch & Pull</h1>
        <p className="mt-2">
          Focus on hand entry and pull phase with targeted drills to improve
          form.
        </p>
      </div>

      {/* Overview */}
      <div className="prose prose-lg mx-auto">
        <h2>Overview</h2>
        <p>
          This drill emphasizes a proper catch and pull—critical components of
          an efficient freestyle stroke. You’ll perform a series of focused
          drills that isolate hand placement, elbow position, and a powerful
          pull through the water.
        </p>
      </div>

      {/* Equipment */}
      <div className="prose prose-lg mx-auto">
        <h2>Equipment Needed</h2>
        <ul className="list-disc ml-6">
          <li>Pull buoy (to prevent kicking)</li>
          <li>Hand paddles (optional, for increased water feel)</li>
          <li>Swimsuit and goggles</li>
        </ul>
      </div>

      {/* Drill Breakdown */}
      <div className="prose prose-lg mx-auto">
        <h2>Drill Breakdown (Total ~1,000 m)</h2>
        <ol className="list-decimal ml-6 space-y-2">
          <li>
            <strong>Warm-Up (8 minutes)</strong>:
            <ul className="list-disc ml-6">
              <li>200 m easy freestyle</li>
              <li>100 m kick with kickboard</li>
              <li>100 m pull with pull buoy (focus: easy catch)</li>
            </ul>
          </li>
          <li>
            <strong>Single-Arm Drill (200 m)</strong>:
            <ul className="list-disc ml-6">
              <li>
                100 m right-arm only freestyle with pull buoy (left arm at side)
              </li>
              <li>
                100 m left-arm only freestyle with pull buoy (right arm at side)
              </li>
              <li>
                Focus: full extension, high elbow catch, and a strong pull.
              </li>
            </ul>
          </li>
          <li>
            <strong>Catch-Up Drill (200 m)</strong>:
            <ul className="list-disc ml-6">
              <li>
                Freestyle where one hand “catches up” to the other before the
                next stroke
              </li>
              <li>Focus: mindful entry and elongation of each stroke.</li>
            </ul>
          </li>
          <li>
            <strong>Paddles + Pull Buoy (200 m)</strong>:
            <ul className="list-disc ml-6">
              <li>Use paddles and pull buoy together</li>
              <li>
                Focus: feel water pressure on forearm and hand during pull phase
              </li>
            </ul>
          </li>
          <li>
            <strong>Sculling Drill (100 m)</strong>:
            <ul className="list-disc ml-6">
              <li>
                Perform 25 m front scull (hands in front, small figure‐8
                movement)
              </li>
              <li>
                25 m mid scull (hands at waist level), 25 m back scull, 25 m
                vertical scull
              </li>
              <li>Focus: tactile feel and constant pressure on water.</li>
            </ul>
          </li>
          <li>
            <strong>Freestyle with Focused Catch (200 m)</strong>:
            <ul className="list-disc ml-6">
              <li>
                Freestyle swim concentrating on a deliberate catch and pull on
                each stroke
              </li>
              <li>Maintain moderate pace, emphasize technique over speed.</li>
            </ul>
          </li>
          <li>
            <strong>Cool-Down (100 m)</strong>:
            <ul className="list-disc ml-6">
              <li>
                100 m easy freestyle, focusing on long extension and relaxation
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </section>
  );
}
