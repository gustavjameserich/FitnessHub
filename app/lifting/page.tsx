// app/lifting/page.tsx
import WorkoutCard from "../../components/WorkoutCard";

export const metadata = {
  title: "Lifting • Fitness Hub",
  description:
    "Build strength and muscle with these targeted lifting routines.",
};

export default function LiftingPage() {
  const workouts = [
    {
      title: "Full-Body Powerlifting Session",
      description:
        "Heavy compound lifts—squat, bench, and deadlift—to build raw strength.",
      duration: "60 min" as const,
      href: "/lifting/full-body-powerlifting",
      imgSrc: "/images/full-body-powerlifting.jpg",
    },
    {
      title: "Upper Body Hypertrophy",
      description: "Focused volume work for chest, back, shoulders, and arms.",
      duration: "45 min" as const,
      href: "/lifting/upper-body-hypertrophy",
      imgSrc: "/images/upper-body-hypertrophy.jpg",
    },
    {
      title: "Leg Strength Builder",
      description:
        "Squats, lunges, and accessory moves to build powerful quads and glutes.",
      duration: "50 min" as const,
      href: "/lifting/leg-strength-builder",
      imgSrc: "/images/leg-strength-builder.jpg",
    },
    {
      title: "Olympic Lifting Technique",
      description:
        "Drills for clean & jerk and snatch form, plus accessory stability work.",
      duration: "40 min" as const,
      href: "/lifting/olympic-lifting-technique",
      imgSrc: "/images/olympic-lifting-technique.jpg",
    },
    {
      title: "Bodyweight Calisthenics Strength",
      description:
        "Pull-ups, dips, push-ups, and core holds for functional strength gains.",
      duration: "30 min" as const,
      href: "/lifting/bodyweight-calisthenics",
      imgSrc: "/images/bodyweight-calisthenics.jpg",
    },
  ];

  return (
    <section className="space-y-8">
      {/* Hero */}
      <div className="bg-gray-800 text-white rounded-lg p-8 text-center">
        <h1 className="text-3xl font-bold">Lifting Workouts</h1>
        <p className="mt-2">Power up your lifts and sculpt lean muscle 💪</p>
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
