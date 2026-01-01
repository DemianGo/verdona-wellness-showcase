import { Leaf, FlaskConical, Shield, Heart } from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "High Purity CBD",
    description: "Premium quality CBD extracted from organic hemp, carefully processed to maintain natural benefits.",
  },
  {
    icon: FlaskConical,
    title: "Premium Processing",
    description: "State-of-the-art extraction methods ensure maximum potency and purity in every product.",
  },
  {
    icon: Shield,
    title: "Lab Tested",
    description: "Third-party laboratory testing guarantees safety, quality, and accurate CBD content.",
  },
  {
    icon: Heart,
    title: "Accessible Wellness",
    description: "Modern approach to wellness that fits seamlessly into your daily lifestyle.",
  },
];

export const Benefits = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Why Choose Verdona
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Committed to delivering the highest quality CBD products for your wellness journey
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
