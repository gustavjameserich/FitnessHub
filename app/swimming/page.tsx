// app/swimming/page.tsx
import WorkoutCard from "../../components/WorkoutCard";

export const metadata = {
  title: "Swimming • Fitness Hub",
  description: "Dive into swim workouts, drills, and technique sessions.",
};

export default function SwimmingPage() {
  const workouts = [
    {
      title: "Freestyle Endurance",
      description:
        "Continuous freestyle laps focusing on steady pace to build endurance.",
      duration: "45 min",
      href: "/swimming/freestyle-endurance",
      imgSrc: "/images/freestyle-endurance.jpg",
    },
    {
      title: "Interval Swim Set",
      description:
        "Repeat sets of 100m–200m with rest intervals to boost anaerobic capacity.",
      duration: "30 min",
      href: "/swimming/interval-swim-set",
      imgSrc: "/images/interval-swim-set.jpg",
    },
    {
      title: "Technique Drill: Catch & Pull",
      description:
        "Focus on hand entry and pull phase with targeted drills to improve form.",
      duration: "20 min",
      href: "/swimming/technique-catch-pull",
      imgSrc: "/images/technique-catch-pull.jpg",
    },
    {
      title: "Open Water Prep",
      description:
        "Simulate open-water conditions with mixed-stroke distance sets.",
      duration: "60 min",
      href: "/swimming/open-water-prep",
      imgSrc: "/images/open-water-prep.jpg",
    },
  ];

  return (
    <section className="space-y-8">
      {/* Hero */}
      <div className="bg-gray-800 text-white rounded-lg p-8 text-center">
        <h1 className="text-3xl font-bold">Swimming Workouts & Drills</h1>
        <p className="mt-2">
          Submerge yourself in training sessions that sharpen technique and
          build stamina 🌊
        </p>
      </div>

      {/* Workout Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {workouts.map((w) => (
          <WorkoutCard key={w.title} {...w} />
        ))}
      </div>
    </section>
  );
}
