// app/boxing/cardio-blast/page.tsx
import React from "react";

export const metadata = {
  title: "Cardio Blast • Boxing • Fitness Hub",
  description:
    "30-minute nonstop punch combinations to torch calories and build endurance.",
};

export default function CardioBlastPage() {
  return (
    <section className="max-w-3xl mx-auto space-y-6 py-8">
      {/* Hero */}
      <div className="bg-gray-600 text-white rounded-lg p-6 text-center">
        <h1 className="text-3xl font-bold">Boxing Cardio Blast</h1>
        <p className="mt-2">
          30-minute nonstop punch combinations to torch calories and build
          endurance.
        </p>
      </div>

      {/* Overview */}
      <div className="prose prose-lg mx-auto">
        <h2>Overview</h2>
        <p>
          This session is designed to keep your heart rate elevated for the
          entire 30 minutes. You’ll cycle through punch combinations, footwork
          drills, and active rest to maximize calorie burn and cardiovascular
          fitness.
        </p>
      </div>

      {/* Equipment */}
      <div className="prose prose-lg mx-auto">
        <h2>Equipment Needed</h2>
        <ul className="list-disc ml-6">
          <li>Boxing gloves</li>
          <li>Hand wraps</li>
          <li>Timer or stopwatch</li>
          <li>Jump rope (optional for warm-up)</li>
        </ul>
      </div>

      {/* Workout Breakdown */}
      <div className="prose prose-lg mx-auto">
        <h2>Workout Breakdown</h2>
        <ol className="list-decimal ml-6 space-y-2">
          <li>
            <strong>Warm-Up (5 minutes)</strong>:
            <ul className="list-disc ml-6">
              <li>2 minutes light jump rope or jogging in place</li>
              <li>Dynamic stretches: arm circles, hip rotations, leg swings</li>
              <li>30 seconds of shadow boxing at an easy pace</li>
            </ul>
          </li>
          <li>
            <strong>Round 1 (3 minutes)</strong>:
            <ul className="list-disc ml-6">
              <li>1 minute straight jabs + right crosses (jab–cross)</li>
              <li>30 seconds left hooks</li>
              <li>30 seconds right uppercuts</li>
              <li>30 seconds alternating jab–cross on the move</li>
              <li>30 seconds active rest: light footwork/shuffle</li>
            </ul>
          </li>
          <li>
            <strong>Rest (1 minute)</strong>:
            <p>Shadow boxing at low intensity, focusing on form.</p>
          </li>
          <li>
            <strong>Round 2 (3 minutes)</strong>:
            <ul className="list-disc ml-6">
              <li>1 minute jab–cross–hook combination</li>
              <li>30 seconds uppercut–hook–cross</li>
              <li>30 seconds speed jabs (fast as possible)</li>
              <li>30 seconds alternating jab–cross with lateral movement</li>
              <li>30 seconds active rest: light footwork/shuffle</li>
            </ul>
          </li>
          <li>
            <strong>Rest (1 minute)</strong>:
            <p>Light shadow boxing or marching in place.</p>
          </li>
          <li>
            <strong>Round 3 (3 minutes)</strong>:
            <ul className="list-disc ml-6">
              <li>1 minute double jab + right cross (jab–jab–cross)</li>
              <li>30 seconds hook–uppercut–hook</li>
              <li>30 seconds alternating hook combinations</li>
              <li>30 seconds jab–cross with pivot footwork</li>
              <li>30 seconds active rest: shuffle in circle</li>
            </ul>
          </li>
          <li>
            <strong>Rest (1 minute)</strong>:
            <p>Deep breathing and light movement.</p>
          </li>
          <li>
            <strong>Round 4 (3 minutes)</strong>:
            <ul className="list-disc ml-6">
              <li>
                1 minute freestyle punch combinations (mix everything learned)
              </li>
              <li>30 seconds power punches (hardest jabs and crosses)</li>
              <li>30 seconds hook–hook–cross</li>
              <li>30 seconds jab–cross–uppercut</li>
              <li>30 seconds active rest: light footwork/shuffle</li>
            </ul>
          </li>
          <li>
            <strong>Rest (1 minute)</strong>:
            <p>Focus on breathing and posture.</p>
          </li>
          <li>
            <strong>Round 5 (3 minutes)</strong>:
            <ul className="list-disc ml-6">
              <li>1 minute rapid jab–cross drills (as fast as possible)</li>
              <li>1 minute alternating body shots + hooks</li>
              <li>
                1 minute freestyle—it’s your final burst! Give maximum effort.
              </li>
            </ul>
          </li>
          <li>
            <strong>Cool-Down (5 minutes)</strong>:
            <ul className="list-disc ml-6">
              <li>Light jogging or walking in place (2 minutes)</li>
              <li>
                Static stretches: focus on arms, shoulders, back, and legs
              </li>
              <li>Deep breathing exercises (1 minute)</li>
            </ul>
          </li>
        </ol>
      </div>
    </section>
  );
}
