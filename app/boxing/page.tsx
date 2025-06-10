// app/boxing/page.tsx
import WorkoutCard from "../../components/WorkoutCard";

export const metadata = {
  title: "Boxing • Fitness Hub",
  description: "High-cardio boxing workouts & skill drills.",
};

export default function BoxingPage() {
  const workouts = [
    {
      title: "Jump Rope Warm-Up",
      description:
        "Classic boxer’s warm-up to improve footwork, coordination, and cardio.",
      duration: "15 min",
      href: "/boxing/jump-rope-warmup",
      imgSrc: "/images/jump-rope-warmup.jpg",
    },
    {
      title: "Boxing Cardio Blast",
      description:
        "30-minute nonstop punch combinations to torch calories and build endurance.",
      duration: "30 min",
      href: "/boxing/cardio-blast",
      imgSrc: "/images/boxing-cardio-blast.jpg",
    },
    {
      title: "Heavy Bag Intervals",
      description:
        "Power-punch rounds on the heavy bag with active rest for max stamina.",
      duration: "45 min",
      href: "/boxing/heavy-bag-intervals",
      imgSrc: "/images/heavy-bag-intervals.jpg",
    },
    {
      title: "Speed Bag Drill",
      description:
        "Fast-paced speed bag sets to sharpen timing and boost heart rate.",
      duration: "20 min",
      href: "/boxing/speed-bag-drill",
      imgSrc: "/images/speed-bag-drill.jpg",
    },
    {
      title: "Shadow Boxing Circuit",
      description:
        "Bodyweight circuit with shadow boxing combos for agility and core strength.",
      duration: "25 min",
      href: "/boxing/shadow-boxing-circuit",
      imgSrc: "/images/shadow-boxing-circuit.jpg",
    },
  ];

  return (
    <section className="space-y-8">
      {/* Hero */}
      <div className="bg-gray-800 text-white rounded-lg p-8 text-center">
        <h1 className="text-3xl font-bold">Boxing Workouts & Drills</h1>
        <p className="mt-2">Great variety of workouts that get you sharp </p>
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
