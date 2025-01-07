import Image1 from "@/public/images/above.png";
import Image2 from "@/public/images/chatgpt-logo.png";
import Image3 from "@/public/images/cone.png";
import Image4 from "@/public/images/overflowing.png";
import Image5 from "@/public/images/phone.png";
import Image6 from "@/public/images/pop-art.png";
import Image7 from "@/public/images/pumpkin.png";
import Jeremy from "@/public/images/jeremy.png";
import DocumentIcon from "@/public/icons/result-doc.svg";
import LinkIcon from "@/public/icons/result-website.svg";
import PersonIcon from "@/public/icons/result-person.svg";
import ChartIcon from "@/public/icons/result-chart.svg";
import CartIcon from "@/public/icons/result-cart.svg";
import BellIcon from "@/public/icons/result-alert.svg";
import FeaturedBackground from "@/public/images/featured-background.png";
import { CardData } from "@/types/card-data";

export const featuredCard = {
  id: "1",
  backgroundImage: FeaturedBackground,
  icon: DocumentIcon,
  date: "SEP 20, 2025",
  source: "Teams",
  title: "What company holidays are there in 2024?",
  description:
    "Here&apos;s what I found: Thanksgiving: November 26th, Christmas: December25th, New Year&apos;s Day: Jan 1...",
  popular: false,
  url: "https://rightpoint.com",
};

export const companyCards: CardData[] = [
  {
    id: "1",
    icon: DocumentIcon,
    source: "Sharepoint",
    title: "Understanding the complexiti...",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...",
    popular: true,
    url: "https://rightpoint.com",
    type: "Documents", // Context suggests a document-like resource
  },
  {
    id: "2",
    icon: LinkIcon,
    source: "Website",
    title: "Wikipedia- (Ai) Artificial Intellig...",
    images: [
      { image: Image5, alt: "Alt Text" },
      { image: Image2, alt: "Alt Text" },
      { image: Image6, alt: "Alt Text" },
    ],
    popular: false,
    url: "https://rightpoint.com",
    type: "Links", // Represents a link to a webpage
  },
  {
    id: "3",
    icon: PersonIcon,
    source: "Teams",
    bio: {
      image: Jeremy,
      name: "Jeremy Bowers",
      title: "Senior Strategist",
      office: "Rightpoint Miami<br />8:45am",
    },
    popular: false,
    url: "https://rightpoint.com",
    type: "People", // Represents a person-related card
  },
  {
    id: "4",
    icon: LinkIcon,
    source: "Website",
    title: "Pumpkin Bourbon Milkshake Reci...",
    images: [
      { image: Image4, alt: "Alt Text" },
      { image: Image3, alt: "Alt Text" },
      { image: Image1, alt: "Alt Text" },
      { image: Image7, alt: "Alt Text" },
    ],
    popular: false,
    url: "https://rightpoint.com",
    type: "Links", // Represents a link to a recipe
  },
  {
    id: "5",
    icon: ChartIcon,
    source: "Teams",
    title: "Sales Reports Summary Q3 20..",
    description: "Projected: $3,566.00<br />Reported: $5,566.00",
    popular: false,
    url: "https://rightpoint.com",
    type: "Documents", // A report feels more like a document
  },
  {
    id: "6",
    icon: CartIcon,
    source: "Powerpoint",
    title: "Sales Reports Summary Q3 20..",
    description: "Total Revenue: $300,000,000<br />Growth Rate 3%",
    popular: true,
    url: "https://rightpoint.com",
    type: "Documents", // A summary report is considered a document
  },
  {
    id: "7",
    icon: BellIcon,
    source: "Outlook",
    title: "Christmas Cooking Session",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...",
    popular: false,
    url: "https://rightpoint.com",
    date: "SEP 20, 2025, 12:00PM",
    type: "Documents", // Scheduled content could be considered a document
  },
  {
    id: "8",
    icon: ChartIcon,
    source: "Azure",
    title: "Q3-2025 Reporting Sum...",
    description: "Projected: $3,566.00<br />Reported: $5,566.00",
    popular: true,
    url: "https://rightpoint.com",
    type: "Documents", // Reports typically fall under documents
  },
];
