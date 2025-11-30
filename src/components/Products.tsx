import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import remederiOil1 from "@/assets/remederi-oil-1.jpg";
import remederiOil2 from "@/assets/remederi-oil-2.jpg";
import remederiOil3 from "@/assets/remederi-oil-3.jpg";
import remederiGummy from "@/assets/remederi-gummy.jpg";

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  details: string;
}

const products: Product[] = [
  {
    id: "remederi-oil-3600",
    name: "REUNI CBD Oil 3600mg",
    description: "Premium full-spectrum CBD oil with 120mg/ml concentration and <0.3% THC.",
    image: remederiOil1,
    details: "REUNI CBD Oil 3600mg features a 50:1 CBD to THC ratio with full-spectrum benefits. Each 30ml bottle contains 3600mg of premium CBD at 120mg/ml concentration. Manufactured in the USA with USDA Organic, GMP, FDA, and ISO certifications. Third-party lab tested with Certificate of Analysis (COA) included with each batch.",
  },
  {
    id: "remederi-oil-3600-broad",
    name: "REUNI CBD Oil 3600mg - Broad Spectrum",
    description: "Zero THC broad-spectrum formula with 120mg/ml CBD concentration.",
    image: remederiOil2,
    details: "REUNI Broad Spectrum CBD Oil delivers 3600mg of pure CBD without any THC. Perfect for those requiring zero THC in their wellness routine. Features 120mg/ml concentration in a convenient 30ml bottle. Certified by USDA Organic, GMP, FDA, and ISO standards. Includes full Certificate of Analysis (COA) for quality assurance.",
  },
  {
    id: "remederi-oil-7200",
    name: "REUNI CBD Oil 7200mg - Isolate",
    description: "Maximum potency CBD isolate with 240mg/ml concentration and 0% THC.",
    image: remederiOil3,
    details: "REUNI's most concentrated formula features pure CBD isolate at 240mg/ml, delivering 7200mg total CBD per 30ml bottle. Zero THC for complete peace of mind. Ideal for experienced users seeking maximum potency. Manufactured with the highest quality standards including USDA Organic, GMP, FDA, and ISO certifications. Complete COA documentation provided.",
  },
  {
    id: "remederi-gummy",
    name: "REUNI Full Spectrum Gummies",
    description: "Delicious passion fruit gummies with balanced cannabinoid profile.",
    image: remederiGummy,
    details: "Each gummy contains 30mg CBD, 5mg Δ9-THC, 5mg CBC, and 5mg CBG for comprehensive wellness support. Passion fruit flavor makes daily supplementation enjoyable. 30 individually sealed units per package. Full-spectrum formula provides entourage effect benefits. Certified by USDA Organic, GMP, FDA, and ISO. Complete lab testing with COA available.",
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
              <div className="aspect-square overflow-hidden bg-secondary/20 flex items-center justify-center p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
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
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-secondary/20 flex items-center justify-center p-8">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-contain"
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
