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
    description: "Perfect introduction to CBD wellness with our carefully formulated 600mg tincture.",
    image: oil600,
    details: "Our 600mg CBD oil provides a gentle introduction to cannabinoid wellness. Made with organic hemp extract and MCT oil carrier for optimal absorption. Ideal for daily wellness routines, stress management, and promoting a sense of calm. Each bottle contains approximately 60 servings.",
  },
  {
    id: "oil-1200",
    name: "CBD Oil 1200mg",
    description: "Enhanced potency for those seeking more pronounced wellness benefits.",
    image: oil1200,
    details: "Double the strength for experienced users or those needing enhanced support. Our 1200mg formula delivers consistent, reliable results with premium full-spectrum CBD extract. Perfect for managing daily stress, supporting healthy sleep patterns, and promoting overall balance. Contains 60 servings per bottle.",
  },
  {
    id: "oil-full",
    name: "Full Spectrum CBD Oil 10%",
    description: "Maximum strength full-spectrum formula for comprehensive wellness support.",
    image: oilFull,
    details: "Our premium 10% full-spectrum CBD oil harnesses the power of the entourage effect, combining CBD with other beneficial cannabinoids and terpenes naturally present in hemp. This synergistic blend offers enhanced wellness benefits. Recommended for experienced users seeking comprehensive support for physical and mental well-being.",
  },
  {
    id: "capsules",
    name: "CBD Capsules",
    description: "Convenient, pre-measured doses for consistent daily wellness support.",
    image: capsules,
    details: "Easy-to-swallow softgel capsules provide precise, consistent dosing without the need for measuring. Each capsule contains 25mg of premium CBD isolate, making it simple to maintain your wellness routine. Perfect for on-the-go lifestyles, travel, or those who prefer a tasteless option. 30 capsules per bottle.",
  },
  {
    id: "spray",
    name: "CBD Oral Spray",
    description: "Fast-acting sublingual spray for quick wellness support.",
    image: spray,
    details: "Our oral spray delivers CBD quickly and efficiently through sublingual absorption. The convenient spray format allows for easy dosing and rapid onset of effects. Mint-flavored for a refreshing experience. Ideal for managing occasional stress throughout the day. Each spray delivers approximately 5mg CBD. Contains 100 sprays per bottle.",
  },
  {
    id: "topical",
    name: "CBD Topical Cream",
    description: "Targeted relief cream infused with CBD and natural botanicals.",
    image: topical,
    details: "Our luxurious topical cream combines CBD with nourishing botanicals and essential oils for targeted skin and muscle support. Formulated with shea butter, aloe vera, and arnica for enhanced absorption and soothing properties. Apply directly to areas of concern for localized wellness benefits. 2oz jar provides approximately 30 applications.",
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
