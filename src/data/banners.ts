type Banner = {
  style: string;
  title: string;
  button: string;
  link: string;
  alt: string;
  src: string;
};

export const banners: Banner[] = [
  {
    style: "row-span-2 min-h-100 md:min-h-0",
    title: "Nike",
    button: "View all sneakers",
    link: "#",
    alt: "Banner nike",
    src: "/banners/banner-nike.jpg",
  },
  {
    style: "aspect-4/3",
    title: "Adidas",
    button: "View all sneakers",
    link: "#",
    alt: "Banner adidas",
    src: "/banners/banner-adidas.jpg",
  },
  {
    style: "aspect-4/3",
    title: "New Balance",
    button: "View all sneakers",
    link: "#",
    alt: "Banner new balance",
    src: "/banners/banner-new-balance.jpg",
  },
];
