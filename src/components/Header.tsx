import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="w-full py-4 px-6 bg-white/80 backdrop-blur-sm fixed top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-primary">acme</a>
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-secondary hover:text-primary transition-colors">About Us</a>
          <a href="#" className="text-secondary hover:text-primary transition-colors">Blog</a>
          <a href="#" className="text-secondary hover:text-primary transition-colors">Services</a>
          <a href="#" className="text-secondary hover:text-primary transition-colors">Contact</a>
        </nav>
        <Button variant="outline" className="hidden md:inline-flex">
          Get Started
        </Button>
      </div>
    </header>
  );
};