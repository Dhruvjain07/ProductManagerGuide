import { Link, useLocation } from "wouter";

export default function Navbar() {
  const [location] = useLocation();

  const links = [
    { href: "#about", label: "About" },
    { href: "#case-studies", label: "Case Studies" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <a className="text-xl font-bold">Your Name</a>
          </Link>
          <div className="hidden md:flex space-x-8">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors hover:text-primary
                  ${location === href ? "text-primary" : "text-muted-foreground"}`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}