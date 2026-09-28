import CreatePostWidget from "@/components/create-post-widget";
import { Post } from "@/components/post/post";
import RouteHeader from "@/components/route-header";

const feeds = [
  {
    id: 0,
    avatarSrc: "https://placehold.net/5.png",
    username: "DPWH Official",
    handle: "@DPWHph",
    time: "2h",
    contentText:
      "🎉 PROJECT UPDATE: The NLEX-SLEX Connector Phase 2 is now 85% complete! This highly anticipated elevated expressway will drastically reduce travel time between northern and southern Metro Manila. Great work to all teams involved!",
    contentImageSrc: "https://picsum.photos/seed/2481200/300",
    likes: 1245,
    dislikes: 350,
    comments: 520,
    shares: 25,
  },
  {
    id: 1,
    avatarSrc: "https://placehold.net/3.png",
    username: "Maria Santos",
    handle: "@mariacivileng",
    time: "5h",
    contentText:
      "Just passed by the newly opened Bulacan Bulk Water Supply and River Channel project. The difference it makes for flood control during this rainy season is massive. Thank you @DPWHph!",
    likes: 432,
    dislikes: 8,
    comments: 21,
    shares: 56,
  },
  {
    id: 2,
    avatarSrc: "https://placehold.net/1.png",
    username: "Cebu City Gov",
    handle: "@cebucitygov",
    time: "2d",
    contentText:
      "The Cebu-Cordova Link Expressway (CCLEX) stands proud! A beautiful testament to modern engineering and a completed milestone for Central Visayas. 🌉✨",
    contentImageSrc: "https://picsum.photos/seed/0293/1280/720",
    likes: 3200,
    dislikes: 130,
    comments: 410,
    shares: 890,
  },
];

export default function Home() {
  return (
    <div className="relative w-full h-full border-x space-y-4">
      <RouteHeader label="Latest Updates" />
      <CreatePostWidget />
      {feeds.map((feed) => (
        <Post
          key={feed.id}
          avatarSrc={feed.avatarSrc}
          username={feed.username}
          handle={feed.handle}
          time={feed.time}
          contentText={feed.contentText}
          contentImageSrc={feed.contentImageSrc}
          likes={feed.likes}
          dislikes={feed.dislikes}
          comments={feed.comments}
          shares={feed.shares}
        />
      ))}
    </div>
  );
}
