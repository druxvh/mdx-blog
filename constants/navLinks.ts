// Nav Links Data

interface NavLinksType {
  label: string;
  href: string;
}

const navLinks: NavLinksType[] = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default navLinks;
