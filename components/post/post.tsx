import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { PostComments, PostReacts, PostSave, PostShare } from "./post-actions";
import PostImage from "./post-image";

type Props = {
  avatarSrc: string;
  username: string;
  handle: string;
  time: string;
  contentText: string;
  contentImageSrc?: string;
  likes: number;
  dislikes: number;
  comments: number;
  shares: number;
};

export function Post(props: Props) {
  const { avatarSrc, username, handle, time, contentText, contentImageSrc, likes, dislikes, comments, shares } = props;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <Avatar className="size-11">
            <AvatarImage src={avatarSrc} alt={handle} />
            <AvatarFallback>{username[0].toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <h5 className="font-semibold">{username}</h5>
            <div className="flex items-center gap-2 text-zinc-500 font-normal">
              <small>{handle}</small> • <small>{time}</small>
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <p>{contentText}</p>
        {contentImageSrc && <PostImage url={contentImageSrc} />}
      </CardContent>
      <CardFooter className="flex justify-between text-zinc-500">
        <PostReacts like={likes} dislike={dislikes} />
        <PostComments comments={comments} />
        <PostShare shares={shares} />
        <PostSave />
      </CardFooter>
    </Card>
  );
}
