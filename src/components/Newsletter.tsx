import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Newsletter = () => {
  return (
    <section className="bg-muted py-16">
      <div className="max-w-md mx-auto text-center px-6">
        <h2 className="text-2xl font-semibold mb-4">Sign up Newsletter</h2>
        <p className="text-secondary mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.
        </p>
        <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
          <Input 
            type="email" 
            placeholder="Your Email" 
            className="flex-1"
          />
          <Button type="submit" className="bg-primary text-white hover:bg-primary/90">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};