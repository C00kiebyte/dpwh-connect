import CreatePostWidget from "@/components/create-post-widget";
import Post from "@/components/post/post";
import RouteHeader from "@/components/route-header";

export default function Home() {
  return (
    <div className="relative w-full h-full border-x space-y-4">
      <RouteHeader label="Latest Updates" />
      <CreatePostWidget />
      <Post />
    </div>
  );
}
