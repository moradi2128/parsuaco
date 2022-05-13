import img1 from "./assets/images/home/1.jpg";
import img2 from "./assets/images/home/2.jpg";
import img3 from "./assets/images/home/3.jpg";
import img4 from "./assets/images/home/4.jpg";
import img5 from "./assets/images/home/5.jpg";
import img6 from "./assets/images/home/6.jpg";
import img7 from "./assets/images/home/7.jpg";
import img8 from "./assets/images/home/8.jpg";


// === carousel Home ===
export const carouselHome = [
  {
    id: 0,
    title: "Advanced building materials",
    subTitle: "The power of good choice",
    linkTitle: "View Project ",
    date: "24 Jan 2022",
    image: img8,
    to: "/portfolioDetail",
  },
  {
    id: 1,
    title: "parsua  industrial group export & import ",
    subTitle: "The power of good choice",
    linkTitle: "View Project ",
    date: "24 Jan 2022",
    image: img2,
    to: "/portfolioDetail",
  },
  {
    id: 2,
    title: "Advanced building materials",
    subTitle: "The power of good choice",
    linkTitle: "View Project ",
    date: "24 Jan 2022",
    image: img3,
    to: "/portfolioDetail",
  },
  {
    id: 3,
    title: "Advanced building materials",
    subTitle: "The power of good choice",
    linkTitle: "View Project ",
    date: "24 Jan 2022",
    image: img4,
    to: "/portfolioDetail",
  },
  {
    id: 4,
    title: "Advanced building materials",
    subTitle: "The power of good choice",
    linkTitle: "View Project ",
    date: "24 Jan 2022",
    image: img5,
    to: "/portfolioDetail",
  },
  {
    id: 5,
    title: "Advanced building materials",
    subTitle: "The power of good choice",
    linkTitle: "View Project ",
    date: "24 Jan 2022",
    image: img6,
    to: "/portfolioDetail",
  },
];

// === portfolio ===

export const cardsDefault = [
  {
    id: "a",
    filter: ["ceramics parts", "ceramics parts"],
    image: img1,
    title: "commerce",
    linkText: "PARSUA INDUSTRIAL GROUP EXPORT & IMPORT ",
    linkTo: "/portfolioDetail",
  },
  {
    id: "b",
    filter: ["ferroalloys", "news"],
    image: img2,
    title: "ferroalloys",
    linkText: "PARSUA INDUSTRIAL GROUP EXPORT & IMPORT ",
    linkTo: "/portfolioDetail",
  },
  {
    id: "c",
    filter: ["ceramics parts", "advanced building"],
    image: img3,
    title: "ceramics parts",
    linkText: "PARSUA INDUSTRIAL GROUP EXPORT & IMPORT ",
    linkTo: "/portfolioDetail",
  },
  {
    id: "d",
    filter: ["raw materials", "news"],
    image: img4,
    title: "news",
    linkText: "PARSUA INDUSTRIAL GROUP EXPORT & IMPORT ",
    linkTo: "/portfolioDetail",
  },
  {
    id: "e",
    filter: ["equipment", "commerce"],
    image: img5,
    title: "commerce",
    linkText: "PARSUA INDUSTRIAL GROUP EXPORT & IMPORT ",
    linkTo: "/portfolioDetail",
  },
  {
    id: "f",
    filter: ["machinery", "advanced building"],
    image: img6,
    title: "machinery",
    linkText: "PARSUA INDUSTRIAL GROUP EXPORT & IMPORT ",
    linkTo: "/portfolioDetail",
  },
  {
    id: "h",
    filter: ["engineering", "ceramics parts"],
    image: img7,
    title: "engineering",
    linkText: "PARSUA INDUSTRIAL GROUP EXPORT & IMPORT ",
    linkTo: "/portfolioDetail",
  },
  {
    id: "m",
    filter: ["engineering", "ceramics parts"],
    image: img8,
    title: "ceramics parts",
    linkText: "PARSUA INDUSTRIAL GROUP EXPORT & IMPORT ",
    linkTo: "/portfolioDetail",
  },
];

export const filtersDefault = [
  { label: "all", isChecked: true },
  { label: "engineering", isChecked: false },
  { label: "machinery", isChecked: false },
  { label: "equipment", isChecked: false },
  { label: "commerce", isChecked: false },
  { label: "raw materials", isChecked: false },
  { label: "news", isChecked: false },
  { label: "ferroalloys", isChecked: false },
  { label: "ceramics parts", isChecked: false },
  { label: "advanced building", isChecked: false },
];
