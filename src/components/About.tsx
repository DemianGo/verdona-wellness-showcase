export const About = () => {
  return (
    <section className="py-24 bg-gradient-subtle" id="about">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-foreground">
          About Verdona
        </h2>
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-soft">
          <p className="text-lg text-foreground/90 leading-relaxed mb-6">
            Verdona LLC is an American company specializing in natural CBD products focused on wellness, balance, and supporting the modern lifestyle. We work with certified suppliers and perform complete curation of products before making them available.
          </p>
          <p className="text-lg text-foreground/90 leading-relaxed mb-6">
            Our commitment to quality begins with sourcing premium hemp from trusted American farms. Each product undergoes rigorous third-party testing to ensure purity, potency, and safety. We believe in transparency and providing our customers with the highest quality CBD products available.
          </p>
          <p className="text-lg text-foreground/90 leading-relaxed">
            In addition to our wellness line, we also provide digital marketing services for brands in the sector, helping companies reach their audiences with authentic, compliant messaging that educates and empowers.
          </p>
        </div>
      </div>
    </section>
  );
};
