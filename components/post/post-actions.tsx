"use client";

import { BookmarkIcon, MessageSquareIcon, Share2Icon, ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "cn";
import { useState } from "react";

const BUTTON_SYLE = "group items-center gap-3 p-5 rounded-full max-lg:text-[12px] max-lg:gap-1 max-lg:p-2";
const ICON_STYLE = "size-5 group-hover:scale-105 transition-transform duration-100 max-lg:size-3";
const SPAN_STYLE = "w-full text-start";

type PostReactProps = {
  like?: number;
  dislike?: number;
  className?: string;
};

export function PostReacts({ like, dislike, className }: PostReactProps) {
  const [react, setReact] = useState({
    like: like || 0,
    dislike: dislike || 0,
  });

  const [activeReact, setActiveReact] = useState<"like" | "dislike" | null>(null);

  const handleClick = (reactType: "like" | "dislike") => {
    if (reactType === "like") {
      setReact((prev) => ({
        like: activeReact === "like" ? prev.like - 1 : prev.like + 1,
        dislike: activeReact === "dislike" ? prev.dislike - 1 : prev.dislike,
      }));
    } else {
      setReact((prev) => ({
        like: activeReact === "like" ? prev.like - 1 : prev.like,
        dislike: activeReact === "dislike" ? prev.dislike - 1 : prev.dislike + 1,
      }));
    }

    setActiveReact((prev) => (prev === reactType ? null : reactType));
  };

  return (
    <div className={cn(className, "flex flex-nowrap")}>
      <Button
        variant="ghost"
        className={cn(
          "hover:bg-indigo-50 hover:text-indigo-500 w-25 max-lg:w-15",
          activeReact === "like" ? "text-indigo-500" : "",
          BUTTON_SYLE,
        )}
        onClick={() => handleClick("like")}
      >
        <ThumbsUpIcon
          fill={activeReact === "like" ? "var(--color-indigo-500)" : "none"}
          strokeWidth={activeReact === "like" ? 0 : 2}
          className={ICON_STYLE}
        />
        <span className={SPAN_STYLE}>{react.like}</span>
      </Button>

      <Button
        variant="ghost"
        className={cn(
          "hover:bg-rose-50 hover:text-rose-500 w-25 max-lg:w-15",
          activeReact === "dislike" ? "text-rose-500" : "",
          BUTTON_SYLE,
        )}
        onClick={() => handleClick("dislike")}
      >
        <ThumbsDownIcon
          fill={activeReact === "dislike" ? "var(--color-rose-500)" : "none"}
          strokeWidth={activeReact === "dislike" ? 0 : 2}
          className={ICON_STYLE}
        />
        <span className={SPAN_STYLE}>{react.dislike}</span>
      </Button>
    </div>
  );
}

type PostCommentsProps = {
  comments?: number;
  className?: string;
};

export function PostComments({ comments, className }: PostCommentsProps) {
  return (
    <Button variant="ghost" className={cn(className, BUTTON_SYLE)}>
      <MessageSquareIcon className={ICON_STYLE} />
      <span className={SPAN_STYLE}>{comments || 0}</span>
    </Button>
  );
}

type PostShareProps = {
  shares?: number;
  className?: string;
};

export function PostShare({ shares, className }: PostShareProps) {
  return (
    <Button variant="ghost" className={cn("hover:bg-emerald-50 hover:text-emerald-500", BUTTON_SYLE, className)}>
      <Share2Icon className={ICON_STYLE} />
      <span className={SPAN_STYLE}>{shares || 0}</span>
    </Button>
  );
}

export function PostSave({ className }: { className?: string }) {
  const [saved, setSaved] = useState(false);

  const handleClick = () => {
    setSaved((prev) => !prev);
  };

  return (
    <Button
      variant="ghost"
      className={cn("hover:bg-amber-50 hover:text-amber-500", BUTTON_SYLE, className)}
      onClick={handleClick}
    >
      <BookmarkIcon
        fill={saved ? "var(--color-amber-500)" : "none"}
        className={ICON_STYLE}
        strokeWidth={saved ? 0 : 2}
      />
    </Button>
  );
}
