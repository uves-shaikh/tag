export type OrgMember = {
  id: string;
  alias: string;
  fullName: string;
  age?: number;
  role: string;
  type: 'Player' | 'Creator' | 'Founder' | 'Staff';
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
  jersey: number;
  role: string;
  roleShort: string;
  game: string;
  bio: string;
  stats: null;
  socials: { instagram?: string; youtube?: string };
  avatar: string;
  isFounder?: boolean;
};

export const ORG_MEMBERS: OrgMember[] = [
  {
    id: 'jonathan',
    alias: 'Jonathan Gaming',
    fullName: 'Jonathan Jude Amaral',
    age: 22,
    role: 'Founder, Owner & IGL',
    type: 'Founder',
    bio: `One of India's most celebrated BGMI athletes. Jonathan rose to prominence through GodLike Esports, earning a Red Bull athlete sponsorship and 5M+ YouTube subscribers. Known for a fearless fragging style and in-game leadership. In April 2026, he departed GodLike to found Team Apex Gaming with a single mission: bring Indian esports to the top.`,
    badges: ['Founder', 'Red Bull Athlete', 'IGL', 'Content Creator'],
    instagram: 'https://instagram.com/ig_jonathangaming',
    youtube: 'https://youtube.com/@JonathanGaming',
    avatar: '/images/members/jonathan.jpg',
    featured: true,
    stats: [
      { label: 'YouTube', value: '5M+' },
      { label: 'Sponsor', value: 'Red Bull' },
      { label: 'Years Pro', value: '5+' },
    ],
  },
  {
    id: 'shreeman',
    alias: 'Shreeman Legend',
    fullName: 'Siddhant Joshi',
    role: 'Founding Member',
    type: 'Creator',
    bio: `Siddhant Joshi, known as Shreeman Legend, is one of India's most popular gaming content creators. He joined Team Apex Gaming as a founding member at launch, bringing his massive community and creative energy to build the TAG brand alongside Jonathan.`,
    badges: ['Founding Member', 'Content Creator'],
    instagram: 'https://instagram.com/shreemanlegend',
    avatar: '/images/members/shreeman.jpg',
    featured: true,
  },
  {
    id: 'ssr',
    alias: 'SSR Vlogs',
    fullName: 'SSR',
    role: 'Member & Content Creator',
    type: 'Creator',
    bio: `SSR Vlogs is a popular Indian gaming content creator and official member of Team Apex Gaming. His vlogs and gaming content contribute to the TAG community's growth across social platforms.`,
    badges: ['Member', 'Content Creator'],
    avatar: '/images/members/ssr.jpg',
    featured: true,
  },
];

export const BGMI_ROSTER: Player[] = [
  {
    id: 1, alias: 'Jonathan', fullName: 'Jonathan Jude Amaral', jersey: 1,
    role: 'In-Game Leader & Fragger', roleShort: 'IGL', game: 'BGMI',
    bio: `The captain and fragger. Jonathan's aggressive rotations and split-second decision-making define TAG's playstyle.`,
    stats: null,
    socials: { instagram: 'https://instagram.com/ig_jonathangaming', youtube: 'https://youtube.com/@JonathanGaming' },
    avatar: '/images/players/jonathan.jpg', isFounder: true,
  },
  {
    id: 2, alias: 'Jelly', jersey: 2, role: 'Support & Zone Controller', roleShort: 'Support', game: 'BGMI',
    bio: `Jelly anchors the team's defensive structure and zone control. A calm presence with exceptional game sense.`,
    stats: null, socials: {}, avatar: '/images/players/jelly.jpg',
  },
  {
    id: 3, alias: 'KIO', jersey: 3, role: 'Assault & Entry Fragger', roleShort: 'Assaulter', game: 'BGMI',
    bio: `KIO is TAG's entry fragger — first in, most aggressive. His reflexes and peak-shooting are among the sharpest in Indian BGMI.`,
    stats: null, socials: {}, avatar: '/images/players/kio.jpg',
  },
  {
    id: 4, alias: 'HYDRO', jersey: 4, role: 'Assault & Flex', roleShort: 'Assaulter', game: 'BGMI',
    bio: `HYDRO brings adaptability — equally lethal in close-range and mid-range engagements. A versatile piece of the TAG lineup.`,
    stats: null, socials: {}, avatar: '/images/players/hydro.jpg',
  },
  {
    id: 5, alias: 'Harsh', jersey: 5, role: 'Support & Sniper', roleShort: 'Support', game: 'BGMI',
    bio: `Harsh provides precision from distance and ensures the team stays alive through smart support rotations and healing decisions.`,
    stats: null, socials: {}, avatar: '/images/players/harsh.jpg',
  },
];

export const TIMELINE_EVENTS = [
  { year: '2021', event: 'Jonathan begins streaming BGMI — quickly gains traction', locked: false },
  { year: '2022', event: "Jonathan joins competitive circuit — becomes one of India's top BGMI players", locked: false },
  { year: '2023', event: 'Jonathan joins GodLike Esports — competes at highest national level', locked: false },
  { year: '2024', event: 'Jonathan earns Red Bull athlete sponsorship — becomes brand ambassador', locked: false },
  { year: '2024', event: "Jonathan's YouTube channel surpasses 5 million subscribers", locked: false },
  { year: 'Early 2026', event: "Jonathan announces departure from GodLike Esports. Saumay joins GodLike's BGMI roster as replacement.", locked: false },
  { year: 'April 2026', event: 'Team Apex Gaming officially launched — #TAGonTop', locked: false },
  { year: 'April 2026', event: 'Shreeman Legend joins as Founding Member', locked: false },
  { year: 'April 2026', event: 'SSR Vlogs joins as official Member', locked: false },
  { year: 'April 2026', event: 'BGMI roster unveiled: Jonathan, Jelly, KIO, HYDRO, Harsh', locked: false },
  { year: 'Coming Soon', event: 'First tournament debut · Merch launch · More divisions', locked: true },
];

export const NEWS_ARTICLES = [
  {
    slug: 'jonathan-launches-team-apex-gaming',
    title: 'Jonathan Gaming officially launches Team Apex Gaming',
    date: 'April 2026', category: 'Announcement',
    tags: ['Announcement', 'BGMI', 'Jonathan'],
    excerpt: `Jonathan Jude Amaral announces Team Apex Gaming following his departure from GodLike Esports — a new chapter in Indian esports begins.`,
    content: `After years competing at the highest level of Indian BGMI through GodLike Esports, Jonathan Jude Amaral has officially launched his own organization: Team Apex Gaming.\n\nThe announcement, made in April 2026, marks one of the most significant moves in the Indian esports landscape this year. Jonathan transitions from being a player and creator to becoming an owner and founder.\n\n"Team Apex Gaming is here to be on top. Time to Rise." — that is the mission statement that opens the new chapter. Backed by his Red Bull athlete partnership and 5M+ YouTube community, Jonathan is building TAG with a long-term vision: compete, build, and inspire the next generation of Indian esports talent.\n\n#TAGonTop`,
    image: '/images/news/launch.jpg',
  },
  {
    slug: 'shreeman-legend-founding-member',
    title: 'Shreeman Legend joins TAG as Founding Member',
    date: 'April 2026', category: 'Roster',
    tags: ['Roster', 'Creator', 'Shreeman Legend'],
    excerpt: `Popular Indian gaming creator Siddhant Joshi (Shreeman Legend) officially joins Team Apex Gaming as a founding member.`,
    content: `Siddhant Joshi, better known as Shreeman Legend, is one of the most beloved figures in Indian gaming. His joining Team Apex Gaming as a founding member brings together two of the country's most influential gaming voices.\n\nShreeman's signature humor, content quality, and community connection make him a perfect cultural fit for TAG's editorial, community-first identity.\n\nMore from Shreeman as a TAG founding member coming very soon.`,
    image: '/images/news/shreeman.jpg',
  },
  {
    slug: 'bgmi-roster-announced',
    title: 'TAG BGMI roster revealed: Jonathan, Jelly, KIO, HYDRO, Harsh',
    date: 'April 2026', category: 'Roster',
    tags: ['BGMI', 'Roster'],
    excerpt: `Team Apex Gaming unveils its five-man BGMI competitive lineup ready to compete at the highest level of Indian esports.`,
    content: `The wait is over. Team Apex Gaming has officially revealed its inaugural BGMI competitive roster:\n\n• Jonathan — IGL & Fragger\n• Jelly — Support & Zone Controller\n• KIO — Entry Fragger\n• HYDRO — Assault & Flex\n• Harsh — Support & Sniper\n\nFive players, one mission. Tournament debut details coming soon.`,
    image: '/images/news/roster.jpg',
  },
  {
    slug: 'ssr-vlogs-joins-tag',
    title: 'SSR Vlogs joins Team Apex Gaming',
    date: 'April 2026', category: 'Roster',
    tags: ['Creator', 'SSR'],
    excerpt: `Content creator SSR Vlogs officially becomes a member of Team Apex Gaming.`,
    content: `SSR Vlogs joins the TAG family as an official member. His vlog-style content and community presence add another dimension to TAG's growing creator ecosystem.\n\nWelcome to the family. #TAGonTop`,
    image: '/images/news/ssr.jpg',
  },
];

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/team.apexgaming',
  jonathan_ig: 'https://instagram.com/ig_jonathangaming',
  twitter: 'https://twitter.com/Team_ApexGaming',
  youtube: 'https://youtube.com/channel/UCU7by-M4V9uC5Cd2JHpSNQA',
  discord: null as string | null,
};

export const ACHIEVEMENTS = [
  { id: 'redbull', title: 'Red Bull Athlete', year: '2024', description: 'Jonathan Amaral signed as an official Red Bull athlete — one of the first Indian BGMI players to earn the distinction.', category: 'Individual', locked: false },
  { id: '5m', title: '5M+ YouTube Subscribers', year: '2024', description: "Jonathan Gaming crosses 5 million subscribers — one of India's largest BGMI channels.", category: 'Creator', locked: false },
  { id: 'top-creator', title: 'Top BGMI Creator India', year: '2024', description: "Recognized among India's most influential BGMI content creators across platforms.", category: 'Creator', locked: false },
  { id: 'tag-founded', title: 'Team Apex Gaming Founded', year: '2026', description: 'Jonathan transitions from player to owner — building TAG from the ground up.', category: 'Organization', locked: false },
  { id: 'tournament-1', title: 'First Tournament Placement', year: 'Soon', description: 'Details coming once TAG makes its competitive debut.', category: 'Team', locked: true },
  { id: 'championship-1', title: 'First Championship Win', year: 'Soon', description: 'The first trophy is on the way. Stay tuned.', category: 'Team', locked: true },
  { id: '10m', title: '10M Community', year: 'Soon', description: 'Building one of the largest esports communities in India.', category: 'Organization', locked: true },
];

export const STATS = [
  { value: '5M+', label: "Jonathan's Subscribers" },
  { value: '5', label: 'BGMI Players' },
  { value: '3', label: 'Org Members' },
  { value: 'Apr 2026', label: 'Founded' },
];
