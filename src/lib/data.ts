export type OrgMember = {
  id: string;
  alias: string;
  fullName: string;
  age?: number;
  role: string;
  type: "Player" | "Creator" | "Founder" | "Staff";
  bio: string;
  badges: string[];
  instagram?: string;
  youtube?: string;
  twitter?: string;
  avatar: string;
  featured?: boolean;
  stats?: { label: string; value: string }[];
};

export type Player = {
  id: number;
  alias: string;
  fullName?: string;
  realName?: string;
  jersey: number;
  role: string;
  roleShort: string;
  game: string;
  bio: string;
  stats: null;
  nationality?: string;
  birthDate?: string;
  age?: number;
  joinedDate?: string;
  formerTeams?: string[];
  liquipedia?: string;
  socials: { instagram?: string; youtube?: string };
  avatar: string;
  isFounder?: boolean;
};

export const ORG_MEMBERS: OrgMember[] = [
  {
    id: "jonathan",
    alias: "Jonathan Gaming",
    fullName: "Jonathan Jude Amaral",
    age: 23,
    role: "Founder, Owner & IGL",
    type: "Founder",
    bio: `One of India's most celebrated BGMI athletes. Jonathan rose to prominence through GodLike Esports, earning a Red Bull athlete sponsorship and 7.7M+ YouTube subscribers. Known for a fearless fragging style and in-game leadership. In April 2026, he departed GodLike to found Team Apex Gaming with a single mission: bring Indian esports to the top.`,
    badges: ["Founder", "Red Bull Athlete", "IGL", "Content Creator"],
    instagram: "https://www.instagram.com/ig_jonathangaming/",
    youtube: "https://www.youtube.com/channel/UCNoiWmvkDUL0q-6ECxNFH0Q",
    avatar: "/jonathan.jpg",
    featured: true,
    stats: [
      { label: "YouTube", value: "7.7M+" },
      { label: "Instagram", value: "7.5M+" },
      { label: "Sponsor", value: "Red Bull" },
    ],
  },
  {
    id: "shreeman",
    alias: "Shreeman Legend",
    fullName: "Siddhant Praveen Joshi",
    role: "Founding Member",
    type: "Creator",
    bio: `Siddhant Joshi, known as Shreeman Legend, is one of India's most popular gaming content creators with 813K+ YouTube subscribers. He joined Team Apex Gaming as a founding member at launch, bringing his massive community and creative energy to build the TAG brand alongside Jonathan.`,
    badges: ["Founding Member", "Content Creator"],
    instagram: "https://www.instagram.com/shreemanlegend/",
    youtube: "https://www.youtube.com/c/shreemanlegend",
    avatar: "/shreeman.jpg",
    featured: true,
    stats: [
      { label: "YouTube", value: "813K+" },
      { label: "Instagram", value: "1.3M+" },
    ],
  },
  {
    id: "ssr",
    alias: "SSR Vlogs",
    fullName: "Soham Rathod",
    role: "Member & Content Creator",
    type: "Creator",
    bio: `Soham Rathod, known as SSR Vlogs, is a popular Indian content creator with 91K+ YouTube subscribers. His motovlogs, gaming videos, and lifestyle content contribute to the TAG community's growth across social platforms.`,
    badges: ["Member", "Content Creator"],
    instagram: "https://www.instagram.com/ssr_vlogs24/",
    youtube: "https://www.youtube.com/@SSR_vlogs24",
    avatar: "/ssr.webp",
    featured: true,
    stats: [{ label: "YouTube", value: "91K+" }],
  },
];

export const BGMI_ROSTER: Player[] = [
  {
    id: 1,
    alias: "JONATHAN",
    fullName: "Jonathan Jude Amaral",
    realName: "Jonathan Jude Amaral",
    jersey: 1,
    role: "Founder & Frontline Assaulter",
    roleShort: "Assaulter",
    game: "BGMI",
    nationality: "India",
    birthDate: "September 21, 2002",
    age: 23,
    joinedDate: "April 29, 2026",
    liquipedia: "https://liquipedia.net/pubgmobile/JONATHAN",
    bio: `Widely regarded as one of the greatest assaulters in Indian mobile gaming history. Jonathan founded TAG in April 2026 after departing GodLike Esports, transitioning into a player-owner role. Known for his two-finger claw layout with always-on gyroscope and an aggressive, high-impact fragging style. Swept the inaugural Krafton India Awards 2026 — Influencer of the Year, Favourite Creator of the Year, and Favourite Esports Player of the Year.`,
    formerTeams: ["GodLike Esports"],
    stats: null,
    socials: {
      instagram: "https://www.instagram.com/ig_jonathangaming/",
      youtube: "https://www.youtube.com/channel/UCNoiWmvkDUL0q-6ECxNFH0Q",
    },
    avatar: "/jonathan.jpg",
    isFounder: true,
  },
  {
    id: 2,
    alias: "Jelly",
    fullName: "Gunjan Thakur",
    realName: "Gunjan Thakur",
    jersey: 2,
    role: "In-Game Leader & Support",
    roleShort: "IGL",
    game: "BGMI",
    nationality: "India",
    birthDate: "February 22, 2001",
    age: 25,
    joinedDate: "April 29, 2026",
    liquipedia: "https://liquipedia.net/pubgmobile/Jelly_(Indian_Player)",
    bio: `The tactical brain of TAG. Gunjan "Jelly" Thakur is one of India's most respected IGLs, known for calm decision-making and precise late-game calls. He led True Rippers to a 2nd place finish at the BGMI International Cup 2025 in Delhi and represented India at the PUBG Mobile Global Championship. A consistent figure in the Indian esports scene for over five years.`,
    formerTeams: ["OR Esports", "GodLike Esports", "True Rippers"],
    stats: null,
    socials: {
      instagram: "https://www.instagram.com/ig_justjelly/",
      youtube: "https://www.youtube.com/@justjelly/streams",
    },
    avatar: "/jelly.jpg",
  },
  {
    id: 3,
    alias: "KIO",
    fullName: "Swaraj Singh",
    realName: "Swaraj Singh",
    jersey: 3,
    role: "Assaulter & Flex",
    roleShort: "Assaulter",
    game: "BGMI",
    nationality: "India",
    birthDate: "December 12, 2003",
    age: 22,
    joinedDate: "April 29, 2026",
    liquipedia: "https://liquipedia.net/pubgmobile/KioLmao",
    bio: `Swaraj "KIO" Singh is TAG's clutch machine — a high-impact assaulter known for winning 1v2 and 1v3 situations that most players wouldn't attempt. His unpredictable offensive plays bring a dangerous edge to the lineup. With True Rippers, he finished 2nd at the BGMI International Cup 2025 and represented India at the PUBG Mobile Global Championship 2025.`,
    formerTeams: ["True Rippers"],
    stats: null,
    socials: {
      instagram: "https://www.instagram.com/kiolmaoooo/",
      youtube: "https://www.youtube.com/@kiolmaooo7161",
    },
    avatar: "/kio.jpg",
  },
  {
    id: 4,
    alias: "HYDRO",
    fullName: "Aarush Sharma",
    realName: "Aarush Sharma",
    jersey: 4,
    role: "Frontline Assaulter",
    roleShort: "Assaulter",
    game: "BGMI",
    nationality: "India",
    joinedDate: "April 29, 2026",
    liquipedia: "https://liquipedia.net/pubgmobile/Hydro",
    bio: `Aarush "HYDRO" Sharma is one of the most mechanically gifted players in the Indian BGMI scene, praised for high-impact fragging and clutch capabilities. He was named MVP of the BGMI Masters Series Season 4 in 2024. Plays with a 6-finger claw setup and always-on gyroscope for maximum precision. Previously represented India internationally with True Rippers at the Infinix International Cup.`,
    formerTeams: ["True Rippers"],
    stats: null,
    socials: {
      instagram: "https://www.instagram.com/hydro.bgmi/",
      youtube: "https://www.youtube.com/@hydro.bgmi04",
    },
    avatar: "/hydro.jpg",
  },
  {
    id: 5,
    alias: "Harsh",
    fullName: "Harsh Rajpal Negi",
    realName: "Harsh Rajpal Negi",
    jersey: 5,
    role: "Assaulter & Support",
    roleShort: "Support",
    game: "BGMI",
    nationality: "India",
    joinedDate: "April 29, 2026",
    liquipedia: "https://liquipedia.net/pubgmobile/Harsh",
    bio: `Harsh Rajpal Negi is known for his consistency and ability to perform under pressure — traits built across multiple top-tier Indian organisations. He represented India at the PUBG Mobile Global Championship 2025 with True Rippers and secured a 2nd place finish at the BGMI International Cup 2025. A reliable presence in the grand finals of India's biggest BGMI events.`,
    formerTeams: [
      "Blind Esports",
      "Gujarat Tigers",
      "TEAM iNSANE",
      "True Rippers",
    ],
    stats: null,
    socials: {
      instagram: "https://www.instagram.com/harshh.bgmii",
      youtube: "https://www.youtube.com/@TRHarsh05",
    },
    avatar: "/harsh.jpg",
  },
];

export const TIMELINE_EVENTS = [
  {
    year: "2021",
    event: "Jonathan begins streaming BGMI - quickly gains traction",
    locked: false,
  },
  {
    year: "2022",
    event:
      "Jonathan joins competitive circuit - becomes one of India's top BGMI players",
    locked: false,
  },
  {
    year: "2023",
    event:
      "Jonathan joins GodLike Esports - competes at highest national level",
    locked: false,
  },
  {
    year: "2024",
    event:
      "Jonathan earns Red Bull athlete sponsorship - becomes brand ambassador",
    locked: false,
  },
  {
    year: "2024",
    event: "Jonathan's YouTube channel surpasses 5 million subscribers",
    locked: false,
  },
  {
    year: "Early 2026",
    event:
      "Jonathan announces departure from GodLike Esports. Saumay joins GodLike's BGMI roster as replacement.",
    locked: false,
  },
  {
    year: "April 2026",
    event: "Team Apex Gaming officially launched - #TAGonTop",
    locked: false,
  },
  {
    year: "April 2026",
    event: "Shreeman Legend joins as Founding Member",
    locked: false,
  },
  {
    year: "April 2026",
    event: "SSR Vlogs joins as official Member",
    locked: false,
  },
  {
    year: "April 2026",
    event: "BGMI roster unveiled: Jonathan, Jelly, KIO, HYDRO, Harsh",
    locked: false,
  },
  {
    year: "Coming Soon",
    event: "First tournament debut · Merch launch · More divisions",
    locked: true,
  },
];

export const NEWS_ARTICLES = [
  {
    slug: "jonathan-launches-team-apex-gaming",
    title: "Jonathan Gaming officially launches Team Apex Gaming",
    date: "April 2026",
    category: "Announcement",
    tags: ["Announcement", "BGMI", "Jonathan"],
    excerpt: `Jonathan Jude Amaral announces Team Apex Gaming following his departure from GodLike Esports - a new chapter in Indian esports begins.`,
    content: `After years competing at the highest level of Indian BGMI through GodLike Esports, Jonathan Jude Amaral has officially launched his own organization: Team Apex Gaming.\n\nThe announcement, made in April 2026, marks one of the most significant moves in the Indian esports landscape this year. Jonathan transitions from being a player and creator to becoming an owner and founder.\n\n"Team Apex Gaming is here to be on top. Time to Rise." - that is the mission statement that opens the new chapter. Backed by his Red Bull athlete partnership and 7.7M+ YouTube community, Jonathan is building TAG with a long-term vision: compete, build, and inspire the next generation of Indian esports talent.\n\n#TAGonTop`,
    image: "/images/news/launch.jpg",
  },
  {
    slug: "shreeman-legend-founding-member",
    title: "Shreeman Legend joins TAG as Founding Member",
    date: "April 2026",
    category: "Roster",
    tags: ["Roster", "Creator", "Shreeman Legend"],
    excerpt: `Popular Indian gaming creator Siddhant Joshi (Shreeman Legend) officially joins Team Apex Gaming as a founding member.`,
    content: `Siddhant Joshi, better known as Shreeman Legend, is one of the most beloved figures in Indian gaming. His joining Team Apex Gaming as a founding member brings together two of the country's most influential gaming voices.\n\nShreeman's signature humor, content quality, and community connection make him a perfect cultural fit for TAG's editorial, community-first identity.\n\nMore from Shreeman as a TAG founding member coming very soon.`,
    image: "/images/news/shreeman.jpg",
  },
  {
    slug: "bgmi-roster-announced",
    title: "TAG BGMI roster revealed: Jonathan, Jelly, KIO, HYDRO, Harsh",
    date: "April 2026",
    category: "Roster",
    tags: ["BGMI", "Roster"],
    excerpt: `Team Apex Gaming unveils its five-man BGMI competitive lineup ready to compete at the highest level of Indian esports.`,
    content: `The wait is over. Team Apex Gaming has officially revealed its inaugural BGMI competitive roster:\n\n• Jonathan - IGL & Fragger\n• Jelly - Support & Zone Controller\n• KIO - Entry Fragger\n• HYDRO - Assault & Flex\n• Harsh - Support & Sniper\n\nFive players, one mission. Tournament debut details coming soon.`,
    image: "/images/news/roster.jpg",
  },
  {
    slug: "ssr-vlogs-joins-tag",
    title: "SSR Vlogs joins Team Apex Gaming",
    date: "April 2026",
    category: "Roster",
    tags: ["Creator", "SSR"],
    excerpt: `Content creator SSR Vlogs officially becomes a member of Team Apex Gaming.`,
    content: `SSR Vlogs joins the TAG family as an official member. His vlog-style content and community presence add another dimension to TAG's growing creator ecosystem.\n\nWelcome to the family. #TAGonTop`,
    image: "/images/news/ssr.jpg",
  },
];

export const SOCIAL_LINKS = {
  // Org official channels
  instagram: "https://www.instagram.com/team.apexgaming",
  youtube: "https://www.youtube.com/@Team.ApexGaming",
  twitter: "https://twitter.com/Team_ApexGaming",
  discord: null as string | null,
  // Jonathan's personal channels
  jonathan_ig: "https://www.instagram.com/ig_jonathangaming/",
  jonathan_yt: "https://www.youtube.com/channel/UCNoiWmvkDUL0q-6ECxNFH0Q",
};

export const ACHIEVEMENTS = [
  {
    id: "redbull",
    title: "Red Bull Athlete",
    year: "2024",
    description:
      "Jonathan Amaral signed as an official Red Bull athlete - one of the first Indian BGMI players to earn the distinction.",
    category: "Individual",
    locked: false,
  },
  {
    id: "7m",
    title: "7.7M+ YouTube Subscribers",
    year: "2026",
    description:
      "Jonathan Gaming crosses 7.7 million subscribers - one of India's largest BGMI channels.",
    category: "Creator",
    locked: false,
  },
  {
    id: "top-creator",
    title: "Top BGMI Creator India",
    year: "2024",
    description:
      "Recognized among India's most influential BGMI content creators across platforms.",
    category: "Creator",
    locked: false,
  },
  {
    id: "tag-founded",
    title: "Team Apex Gaming Founded",
    year: "2026",
    description:
      "Jonathan transitions from player to owner - building TAG from the ground up.",
    category: "Organization",
    locked: false,
  },
  {
    id: "tournament-1",
    title: "First Tournament Placement",
    year: "Soon",
    description: "Details coming once TAG makes its competitive debut.",
    category: "Team",
    locked: true,
  },
  {
    id: "championship-1",
    title: "First Championship Win",
    year: "Soon",
    description: "The first trophy is on the way. Stay tuned.",
    category: "Team",
    locked: true,
  },
  {
    id: "10m",
    title: "10M Community",
    year: "Soon",
    description: "Building one of the largest esports communities in India.",
    category: "Organization",
    locked: true,
  },
];

export const STATS = [
  { value: "7.7M+", label: "Jonathan's Subscribers" },
  { value: "5", label: "BGMI Players" },
  { value: "3", label: "Org Members" },
  { value: "Apr 2026", label: "Founded" },
];
