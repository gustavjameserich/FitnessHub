// app/running/page.tsx
import WorkoutCard from "../../components/WorkoutCard";

export const metadata = {
  title: "Running • Fitness Hub",
  description: "Explore running plans, drills, and endurance workouts.",
};

export default function RunningPage() {
  const workouts = [
    {
      title: "Interval Sprints",
      description:
        "High-intensity sprint intervals to boost speed and cardiovascular fitness.",
      duration: "30 min",
      href: "/running/interval-sprints",
      imgSrc: "/images/interval-sprints.jpg",
    },
    {
      title: "Long Distance Endurance",
      description: "Build stamina with progressive long runs up to 10 miles.",
      duration: "60–90 min",
      href: "/running/long-distance-endurance",
      imgSrc: "/images/long-distance-endurance.jpg",
    },
    {
      title: "Trail Run Challenge",
      description:
        "Off-road trail route incorporating hills and varied terrain for strength.",
      duration: "45 min",
      href: "/running/trail-run-challenge",
      imgSrc: "/images/trail-run-challenge.jpg",
    },
    {
      title: "Hill Repeats",
      description:
        "Short uphill sprints with active recovery to increase power and speed.",
      duration: "25 min",
      href: "/running/hill-repeats",
      imgSrc: "/images/hill-repeats.jpg",
    },
  ];

  return (
    <section className="space-y-8">
      {/* Hero */}
      <div className="bg-gray-800 text-white rounded-lg p-8 text-center">
        <h1 className="text-3xl font-bold">Running Workouts</h1>
        <p className="mt-2">Lace up your shoes and hit the pavement 🏃‍♂️</p>
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
