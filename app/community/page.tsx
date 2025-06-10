// app/community/page.tsx
import PostCard from "../../components/PostCard";
import ChatBox from "../../components/ChatBox";

export const metadata = {
  title: "Community • Fitness Hub",
  description:
    "Share workouts, comment, and connect with fellow fitness enthusiasts.",
};

const samplePosts = [
  {
    id: "post1",
    author: "Sam",
    avatarSrc: "/images/avatar1.jpg",
    content:
      "Just crushed a 5-round heavy bag session—legs are jelly but feeling unstoppable! 💥",
    timestamp: "May 27, 2025 • 1h ago",
  },
  {
    id: "post2",
    author: "Laura",
    avatarSrc: "/images/avatar2.jpg",
    content:
      "Does anyone have tips for improving speed-bag rhythm? Mine keeps slipping off 😅",
    timestamp: "May 26, 2025 • 5h ago",
  },
  // …add more or fetch via SWR…
];

export default function CommunityPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <h1 className="text-4xl font-bold text-center mb-2">Community Hub</h1>
      <p className="text-center text-gray-600 mb-8">
        Share your workouts, comment on others, and connect with fellow fitness
        enthusiasts.
      </p>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Posts Feed */}
        <div className="lg:col-span-2 space-y-6 max-h-[75vh] overflow-y-auto">
          {samplePosts.map((p) => (
            <PostCard
              key={p.id}
              postId={p.id}
              author={p.author}
              avatarSrc={p.avatarSrc}
              content={p.content}
              timestamp={p.timestamp}
            />
          ))}
        </div>

        {/* Live Chat Sidebar */}
        <aside className="lg:col-span-1">
          <h2 className="text-2xl font-semibold mb-4">Live Chat</h2>
          <div className="h-[75vh]">
            <ChatBox />
          </div>
        </aside>
      </div>
    </div>
  );
}
