import Video from "next-video";
import getStarted from "/videos/v1.mp4";
import React from "react";

export default function Page() {
  return <Video src={getStarted} className="rounded-md" />;
}
