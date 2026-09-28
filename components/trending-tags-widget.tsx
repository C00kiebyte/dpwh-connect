import { TrendingUpIcon } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

export default function TrendingTagsWidget() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-bold text-xl">
          <TrendingUpIcon className="text-indigo-900" />
          Trending tags
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <TrendingTag tag="#BuildBetterMore" posts={12500} />
        <TrendingTag tag="#NLEXSLEXConnector" posts={8342} />
        <TrendingTag tag="#FloodControlBulacan" posts={5102} />
        <TrendingTag tag="#CCLEX" posts={3891} />
        <Button variant="link" className="p-0">
          Show more
        </Button>
      </CardContent>
    </Card>
  );
}

type TrendingTagProps = {
  tag: string;
  posts: number;
};

function TrendingTag({ tag, posts }: TrendingTagProps) {
  const postFormatted = posts >= 1000 ? `${posts / 1000}k` : posts.toLocaleString();

  return (
    <Button variant="ghost" className="flex-col items-start p-0 gap-0 w-full hover:bg-background">
      <h5 className="font-semibold">{tag}</h5>
      <p className="text-zinc-500">{postFormatted} posts</p>
    </Button>
  );
}
