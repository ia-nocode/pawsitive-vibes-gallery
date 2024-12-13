import { Header } from "@/components/Header";
import { ArticleCard } from "@/components/ArticleCard";
import { Newsletter } from "@/components/Newsletter";
import { Button } from "@/components/ui/button";

const Index = () => {
  const articles = [
    {
      label: "Pet Care",
      title: "The Benefits of Adopting a Senior Pet",
      description: "Whether you're looking to bring a new best friend or you're a seasoned pet parent, we explore offers valuable insights.",
      date: "Jun 15, 2023",
      author: "James Peterson",
    },
    {
      label: "Food & Treats",
      title: "The Ultimate Guide to Pet Nutrition",
      description: "Learn about the essential nutrients your pet needs for optimal health and wellbeing.",
      date: "Jun 14, 2023",
      author: "Sarah Wilson",
    },
    {
      label: "DIY & Tips",
      title: "Fun and Affordable Projects for Your Pet",
      description: "Create engaging toys and comfortable spaces for your furry friend without breaking the bank.",
      date: "Jun 13, 2023",
      author: "Mike Thompson",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
            Everything Your Pet Needs in One Place
          </h1>
          <p className="text-xl text-secondary mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.
          </p>
          <Button 
            size="lg" 
            className="animate-fade-up bg-primary text-white hover:bg-primary/90"
            style={{ animationDelay: "0.2s" }}
          >
            Get Started
          </Button>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <div 
                key={article.title}
                className="animate-fade-up"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <ArticleCard {...article} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
};

export default Index;