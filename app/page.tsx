import CreatePostWidget from "@/components/create-post-widget";
import RouteHeader from "@/components/route-header";

export default function Home() {
  return (
    <div className="relative w-full h-full border-x overflow-y-scroll">
      <RouteHeader label="Latest Updates" />
      <CreatePostWidget />
    </div>
  );
}
