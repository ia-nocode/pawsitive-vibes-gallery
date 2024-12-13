import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface ArticleCardProps {
  label: string;
  title: string;
  description: string;
  date?: string;
  author?: string;
}

export const ArticleCard = ({ label, title, description, date, author }: ArticleCardProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="space-y-2">
        <span className="text-sm text-secondary uppercase tracking-wider">{label}</span>
        <h3 className="text-xl font-semibold">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-secondary line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        {date && author && (
          <div className="text-sm text-secondary">
            <span>{author}</span> • <span>{date}</span>
          </div>
        )}
        <Button variant="ghost" className="group-hover:translate-x-1 transition-transform">
          Read More →
        </Button>
      </CardFooter>
    </Card>
  );
};