import PostImage from "./post-image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { PostComments, PostReacts, PostSave, PostShare } from "./post-actions";

export default function Post() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <Avatar className="size-11">
            <AvatarImage src="https://placehold.net/5.png" alt="dpwh" />
            <AvatarFallback>DH</AvatarFallback>
          </Avatar>
          <div>
            <h5 className="font-semibold">DPWH Official</h5>
            <div className="flex items-center gap-2 text-zinc-500 font-normal">
              <small>@DPWHph</small> • <small>2h</small>
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-base">
          🎉 PROJECT UPDATE: The NLEX-SLEX Connector Phase 2 is now 85% complete! This highly anticipated elevated
          expressway will drastically reduce travel time between northern and southern Metro Manila. Great work to all
          teams involved!
        </p>
        <PostImage url="https://picsum.photos/seed/picsum/720/720" />
      </CardContent>
      <CardFooter className="flex justify-between text-zinc-500">
        <PostReacts like={1245} dislike={350} />
        <PostComments comments={520} />
        <PostShare shares={25} />
        <PostSave />
      </CardFooter>
    </Card>
  );
}
