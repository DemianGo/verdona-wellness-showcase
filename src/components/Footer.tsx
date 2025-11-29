export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-playfair font-bold">Verdona</h3>
          <p className="text-primary-foreground/80">
            Premium CBD wellness products for a better life
          </p>
          <div className="pt-4">
            <a 
              href="mailto:contact@verdona.org" 
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors underline"
            >
              contact@verdona.org
            </a>
          </div>
          <div className="pt-8 border-t border-primary-foreground/20">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Verdona LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
