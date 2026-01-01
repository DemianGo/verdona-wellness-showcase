import { Mail } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-24 bg-background" id="contact">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          Get In Touch
        </h2>
        <p className="text-muted-foreground mb-8">
          Have questions about our products? We'd love to hear from you.
        </p>
        
        <a 
          href="mailto:contact@verdona.org"
          className="inline-flex items-center gap-3 bg-card rounded-2xl px-8 py-6 shadow-soft hover:shadow-glow transition-all duration-300 group"
        >
          <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
          <span className="text-xl font-medium text-foreground">contact@verdona.org</span>
        </a>
      </div>
    </section>
  );
};
