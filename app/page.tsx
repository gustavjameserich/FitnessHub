import FeatureCard from "../components/FeatureCard";

export default function HomePage() {
  const features = [
    {
      title: "Boxing",
      description: "Explore full-body routines and tutorials.",
      href: "/boxing",
      imgSrc: "/images/boxing.jpg",
    },
    {
      title: "Lifting",
      description: "Strength training guides and tips.",
      href: "/lifting",
      imgSrc: "/images/lifting.jpg",
    },
    {
      title: "Running",
      description: "Programs for speed, endurance, and more.",
      href: "/running",
      imgSrc: "/images/running.jpg",
    },
    {
      title: "Swimming",
      description: "Technique drills and training plans.",
      href: "/swimming",
      imgSrc: "/images/swimming.jpg",
    },
  ];

  return (
    <section className="space-y-8">
      <div className="bg-gray-800 text-white rounded-lg p-8 text-center">
        <h1 className="text-3xl font-bold">All The Workouts </h1>
        <p className="mt-2">
          Variety of Workouts that get you Moving and are great to stay in shape{" "}
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </section>
  );
}
