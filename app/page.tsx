import CreatePostWidget from "@/components/create-post-widget";
import { Post } from "@/components/post/post";
import RouteHeader from "@/components/route-header";

export default function Home() {
  return (
    <div className="relative w-full h-full border-x space-y-4">
      <RouteHeader label="Latest Updates" />
      <CreatePostWidget />
      <Post
        avatarSrc="https://placehold.net/5.png"
        username="DPWH Official"
        handle="@DPWHph"
        time="2h"
        contentText="🎉 PROJECT UPDATE: The NLEX-SLEX Connector Phase 2 is now 85% complete! This highly anticipated elevated
          expressway will drastically reduce travel time between northern and southern Metro Manila. Great work to all
          teams involved!"
        contentImageSrc="https://picsum.photos/seed/picsum/200/300"
        likes={1245}
        dislikes={350}
        comments={520}
        shares={25}
      />
    </div>
  );
}
