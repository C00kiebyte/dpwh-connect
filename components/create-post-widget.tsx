import { ImageIcon, MapPinIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

export default function CreatePostWidget() {
  return (
    <div className="w-full h-fit shadow bg-white p-5 space-y-5">
      <div className="flex gap-5">
        <Avatar className="size-11">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <textarea
          className="focus:outline-none w-full text-lg"
          placeholder="Share a project update or a citizen report..."
        ></textarea>
      </div>
      <div className="flex justify-between border-t pt-5">
        <div>
          <Button variant="ghost" className="rounded-full size-10 hover:bg-indigo-50 text-indigo-900">
            <ImageIcon className="size-5" />
          </Button>
          <Button variant="ghost" className="rounded-full size-10 hover:bg-indigo-50 text-indigo-900">
            <MapPinIcon className="size-5" />
          </Button>
        </div>
        <Button className="px-10 py-5 rounded-full bg-indigo-50 text-indigo-500 cursor-not-allowed pointer-events-none">
          Post
        </Button>
      </div>
    </div>
  );
}
