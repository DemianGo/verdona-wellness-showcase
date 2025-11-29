import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cbd.jpg";

interface HeroProps {
  onContactClick: () => void;
}

export const Hero = ({ onContactClick }: HeroProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
          Verdona
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-foreground/90 max-w-3xl mx-auto font-light">
          Premium wellness with CBD for a better life
        </p>
        <p className="text-lg md:text-xl mb-12 text-muted-foreground max-w-2xl mx-auto">
          Natural CBD products crafted to promote balance, focus, and well-being
        </p>
        <Button 
          onClick={onContactClick}
          size="lg"
          variant="default"
          className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105"
        >
          Get In Touch
        </Button>
      </div>
    </section>
  );
};
