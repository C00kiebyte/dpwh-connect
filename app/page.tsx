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
  {
    id: 4,
    avatarSrc: "https://placehold.net/7.png",
    username: "Davao Commuter",
    handle: "@davaocommuter",
    time: "6h",
    contentText:
      "Kudos to the DPWH for completing the flood control project in Barangay Calinan ahead of schedule! This ₱86.51M project is going to save a lot of homes during heavy downpours. Now, let's get that Talomo River dredging started!",
    contentImageSrc: "https://picsum.photos/seed/davao123/1280/720",
    likes: 215,
    dislikes: 5,
    comments: 34,
    shares: 18,
  },
  {
    id: 5,
    avatarSrc: "https://placehold.net/8.png",
    username: "Juan Build",
    handle: "@juanbuilds",
    time: "1d",
    contentText:
      "Has anyone seen the updates on the Bataan-Cavite Interlink Bridge? Scheduled to start major phases this year (2026). If this actually finishes on time, it will completely change the logistics landscape of Central Luzon and Calabarzon.",
    likes: 1540,
    dislikes: 89,
    comments: 320,
    shares: 415,
  },
  {
    id: 6,
    avatarSrc: "https://placehold.net/9.png",
    username: "Dept. of Budget & Mgmt",
    handle: "@DBMgovph",
    time: "1d",
    contentText:
      "INFRA UPDATE: DBM has officially released ₱46.22 Billion to fund 1,743 nationwide infrastructure projects under the DPWH this quarter. This includes critical road network rehabilitations and major bridge retrofittings.",
    likes: 4100,
    dislikes: 210,
    comments: 890,
    shares: 1200,
  },
  {
    id: 7,
    avatarSrc: "https://placehold.net/10.png",
    username: "Mindanao Logistics",
    handle: "@minlogistics",
    time: "2d",
    contentText:
      "The Mindanao Transport Connectivity Improvement Project (MTCIP) is finally gaining ground. Lower vehicle operating costs and improved road safety will directly increase farmers' incomes here. We need these farm-to-market roads ASAP.",
    contentImageSrc: "https://picsum.photos/seed/mindanao/1280/720",
    likes: 678,
    dislikes: 12,
    comments: 89,
    shares: 145,
  },
  {
    id: 8,
    avatarSrc: "https://placehold.net/11.png",
    username: "Traffic Watch Metro",
    handle: "@trafficwatchMM",
    time: "2d",
    contentText:
      "⚠️ ADVISORY: Guadalupe Bridge Detour Construction has started! The seismic retrofitting is necessary for 'The Big One', but expect heavy traffic between Makati and Mandaluyong. Plan alternative routes for the next few months!",
    contentImageSrc: "https://picsum.photos/seed/guadalupe/1280/720",
    likes: 2890,
    dislikes: 560,
    comments: 1102,
    shares: 3400,
  },
  {
    id: 9,
    avatarSrc: "https://placehold.net/12.png",
    username: "DPWH Region 10",
    handle: "@dpwh_region10",
    time: "3d",
    contentText:
      "PROJECT HIGHLIGHT: We have completed the construction of flood walls along the Gingoog River in Misamis Oriental. This revetment structure provides stronger flood protection and boosts climate resilience for the surrounding communities.",
    contentImageSrc: "https://picsum.photos/seed/gingoog/1280/720",
    likes: 845,
    dislikes: 15,
    comments: 56,
    shares: 112,
  },
  {
    id: 10,
    avatarSrc: "https://placehold.net/13.png",
    username: "CamSur Daily",
    handle: "@camsurdaily",
    time: "4d",
    contentText:
      "DPWH is doubling its efforts on road repairs here in Camarines Norte. While we appreciate the work, many locals are asking: Are these repairs just reactive patch jobs, or part of a proactive long-term maintenance plan? Thoughts?",
    likes: 430,
    dislikes: 45,
    comments: 128,
    shares: 67,
  },
  {
    id: 11,
    avatarSrc: "https://placehold.net/14.png",
    username: "Engr. Reyes",
    handle: "@engr_reyes",
    time: "4d",
    contentText:
      "Just reviewed the FY 2026 Updated Annual Procurement Plan. It is good to see the shift towards 'Oplan Kontra Baha' focusing on physical declogging and nature-based water impounding rather than just traditional concrete dikes. A much-needed modern approach.",
    likes: 312,
    dislikes: 8,
    comments: 42,
    shares: 25,
  },
  {
    id: 12,
    avatarSrc: "https://placehold.net/5.png",
    username: "DPWH Official",
    handle: "@DPWHph",
    time: "5d",
    contentText:
      "UPDATE: The EDSA 'Rebuilding' & Rehabilitation project is progressing. With a revised budget of ₱6 billion, this covers the full stretch from Roxas Blvd to Quezon City. We are working nightly to minimize commuter disruption. Thank you for your patience!",
    contentImageSrc: "https://picsum.photos/seed/edsa/1280/720",
    likes: 5420,
    dislikes: 890,
    comments: 2100,
    shares: 1560,
  },
];

export default function Home() {
  return (
    <div className="relative w-full h-full border-x">
      <RouteHeader label="Latest Updates" className="max-lg:hidden" />
      <CreatePostWidget />
      <div className="mt-4 space-y-4 max-lg:mt-2 max-lg:space-y-2">
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
    </div>
  );
}
