// app/running/long-distance-endurance/page.tsx
import React from 'react'

export const metadata = {
  title: 'Long Distance Endurance • Running • Fitness Hub',
  description:
    'Build stamina with progressive long runs up to 10 miles.',
}

export default function LongDistanceEndurancePage() {
  return (
    <section className="max-w-3xl mx-auto space-y-6 py-8">
      {/* Hero */}
      <div className="bg-gray-600 text-white rounded-lg p-6 text-center">
        <h1 className="text-3xl font-bold">Long Distance Endurance</h1>
        <p className="mt-2">
          Build stamina with progressive long runs up to 10 miles.
        </p>
      </div>

      {/* Overview */}
      <div className="prose prose-lg mx-auto">
        <h2>Overview</h2>
        <p>
          Endurance runs focus on maintaining a steady, conversational pace over longer distances. Gradually increasing mileage each week strengthens your cardiovascular system and leg muscles, preparing you for half-marathons or longer races.
        </p>
      </div>

      {/* Equipment */}
      <div className="prose prose-lg mx-auto">
        <h2>Equipment Needed</h2>
        <ul className="list-disc ml-6">
          <li>Durable road or trail running shoes</li>
          <li>Hydration belt or handheld bottle</li>
          <li>GPS watch or running app</li>
          <li>Energy gels or sports drink (for runs more than 60 min)</li>
        </ul>
      </div>

      {/* Training Progression */}
      <div className="prose prose-lg mx-auto">
        <h2>Weekly Mileage Progression</h2>
        <p>Perform one long run per week, plus 2–3 shorter runs on other days. Increase distance by no more than 10% per week.</p>

        <ul className="list-disc ml-6">
          <li>Week 1: 4 miles long run</li>
          <li>Week 2: 5 miles long run</li>
          <li>Week 3: 6 miles long run</li>
          <li>Week 4: 7 miles long run</li>
          <li>Week 5: 8 miles long run</li>
          <li>Week 6: 9 miles long run</li>
          <li>Week 7: 10 miles long run</li>
          <li>Week 8: 10 miles long run (maintain)</li>
        </ul>
      </div>

      {/* Sample Long Run Session */}
      <div className="prose prose-lg mx-auto">
        <h2>Sample Long Run (Week 4: 7 miles)</h2>
        <ol className="list-decimal ml-6 space-y-2">
          <li>
            <strong>Warm-Up (5–10 minutes)</strong>:
            <ul className="list-disc ml-6">
              <li>5 minutes easy jog</li>
              <li>Dynamic leg swings and hip openers</li>
            </ul>
          </li>
          <li>
            <strong>Main Run (7 miles)</strong>:
            <p>Maintain a steady, comfortable pace—about 60–70% of your max effort. Focus on even breathing and good posture.</p>
          </li>
          <li>
            <strong>Hydration Breaks</strong>:
            <p>Every 2–3 miles, take a quick walk for 30 seconds while sipping fluids.</p>
          </li>
          <li>
            <strong>Cooldown (5–10 minutes)</strong>:
            <ul className="list-disc ml-6">
              <li>5 minutes easy jog or walk</li>
              <li>Static stretching for lower body</li>
            </ul>
          </li>
        </ol>
      </div>
    </section>
  )
}
