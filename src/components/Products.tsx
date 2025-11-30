import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import oil600 from "@/assets/product-oil-600.jpg";
import oil1200 from "@/assets/product-oil-1200.jpg";
import oilFull from "@/assets/product-oil-full.jpg";
import capsules from "@/assets/product-capsules.jpg";
import spray from "@/assets/product-spray.jpg";
import topical from "@/assets/product-topical.jpg";

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  details: string;
}

const products: Product[] = [
  {
    id: "oil-600",
    name: "CBD Oil 600mg",
    description: "Carefully formulated 600mg tincture to support your daily wellness routine.",
    image: oil600,
    details: "Our 600mg CBD oil is crafted with organic hemp extract and MCT oil carrier for optimal absorption. Designed to promote a sense of calm and contribute to your overall well-being as part of a balanced lifestyle. Each bottle contains approximately 60 servings. Third-party lab tested for quality and purity.",
  },
  {
    id: "oil-1200",
    name: "CBD Oil 1200mg",
    description: "Enhanced potency formula for those seeking more pronounced daily support.",
    image: oil1200,
    details: "Our 1200mg formula delivers consistent, reliable support with premium full-spectrum CBD extract. May help promote relaxation and contribute to a sense of balance in your daily routine. Ideal for experienced CBD users. Contains 60 servings per bottle. Includes Certificate of Analysis (COA) with each purchase.",
  },
  {
    id: "oil-full",
    name: "Full Spectrum CBD Oil 10%",
    description: "Premium full-spectrum formula harnessing the natural synergy of hemp compounds.",
    image: oilFull,
    details: "Our 10% full-spectrum CBD oil combines CBD with other naturally occurring cannabinoids and terpenes found in hemp, creating what's known as the entourage effect. Recommended for experienced users looking to incorporate CBD into their wellness regimen. All products comply with federal hemp regulations (≤0.3% THC). Lab results available upon request.",
  },
  {
    id: "capsules",
    name: "CBD Capsules",
    description: "Pre-measured doses for consistent daily wellness support on the go.",
    image: capsules,
    details: "Easy-to-swallow softgel capsules provide precise, consistent dosing without measuring. Each capsule contains 25mg of premium CBD isolate, making it simple to maintain your wellness routine. Perfect for busy lifestyles, travel, or those who prefer a tasteless option. 30 capsules per bottle. Formulated for easy integration into any daily routine.",
  },
  {
    id: "spray",
    name: "CBD Oral Spray",
    description: "Convenient sublingual spray for efficient absorption and easy dosing.",
    image: spray,
    details: "Our oral spray format allows for quick sublingual absorption and convenient dosing throughout your day. Mint-flavored for a refreshing experience. Each spray delivers approximately 5mg CBD. Contains 100 sprays per bottle. Discreet and portable—take it anywhere you need support for your wellness goals.",
  },
  {
    id: "topical",
    name: "CBD Topical Cream",
    description: "Nourishing cream infused with CBD and natural botanicals for skin wellness.",
    image: topical,
    details: "Our luxurious topical cream combines CBD with nourishing botanicals including shea butter, aloe vera, and arnica. Formulated to support skin health and provide a soothing experience. Apply directly to desired areas as part of your self-care routine. 2oz jar provides approximately 30 applications. For external use only.",
  },
];

export const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section className="py-24 bg-background" id="products">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Our Product Line
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Curated CBD products designed to support your wellness goals
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="aspect-square overflow-hidden bg-secondary/20">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-foreground">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>
                <Button
                  onClick={() => setSelectedProduct(product)}
                  variant="outline"
                  className="w-full border-primary/30 hover:bg-primary/10 hover:border-primary transition-colors"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-3xl font-playfair">{selectedProduct?.name}</DialogTitle>
          </DialogHeader>
          {selectedProduct && (
            <div className="space-y-6">
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-secondary/20">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground">
                  {selectedProduct.description}
                </p>
                <p className="text-foreground leading-relaxed">
                  {selectedProduct.details}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
