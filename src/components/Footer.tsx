import trustSeals from "@/assets/trust-seals-banner.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Trust Seals Banner */}
        <div className="mb-8 flex justify-center">
          <img 
            src={trustSeals} 
            alt="Verdona compliance certifications: FDACS Hemp Licensed, COA Certified, ISO 9001, cbdMD and Remederi brands" 
            className="max-w-4xl w-full h-auto"
          />
        </div>

        {/* Brand Logos Section */}
        <div className="mb-12 flex justify-center gap-12 items-center flex-wrap">
          <div className="text-center space-y-2">
            <p className="text-sm text-primary-foreground/70">Official Brands</p>
            <div className="flex gap-8 items-center justify-center">
              {/* Placeholder for Remederi logo */}
              <div className="text-2xl font-bold text-primary-foreground/90">REMEDERI</div>
              {/* Placeholder for cbdMD logo */}
              <div className="text-2xl font-bold text-primary-foreground/90">cbdMD</div>
            </div>
          </div>
        </div>
        
        {/* Main Footer Content */}
        <div className="text-center space-y-6 mb-12">
          <h3 className="text-3xl font-playfair font-bold">Verdona</h3>
          <p className="text-primary-foreground/80 text-lg">
            Premium CBD wellness products for a better life
          </p>
          <div className="pt-2">
            <a 
              href="mailto:contact@verdona.org" 
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors underline text-lg"
            >
              contact@verdona.org
            </a>
          </div>
        </div>

        {/* Legal Information */}
        <div className="border-t border-primary-foreground/20 pt-12 space-y-8">
          {/* Company Details */}
          <div className="text-center space-y-3">
            <h4 className="text-lg font-semibold text-primary-foreground">Verdona LLC</h4>
            <p className="text-sm text-primary-foreground/70">Florida Domestic Limited Liability Company</p>
            <p className="text-sm text-primary-foreground/70">Document Number: L25000402574</p>
            <p className="text-sm text-primary-foreground/70">Date of Formation: September 02, 2025</p>
            <p className="text-sm text-primary-foreground/70">Status: Active (Florida Department of State)</p>
          </div>

          {/* Addresses Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-2">
              <h5 className="font-semibold text-primary-foreground text-sm">Principal Office Address</h5>
              <p className="text-sm text-primary-foreground/70">
                16 SW 9th Street, Suite 103<br />
                Fort Lauderdale, FL 33315<br />
                USA
              </p>
            </div>
            <div className="text-center space-y-2">
              <h5 className="font-semibold text-primary-foreground text-sm">Mailing Address</h5>
              <p className="text-sm text-primary-foreground/70">
                16 SW 9th Street, Suite 103<br />
                Fort Lauderdale, FL 33315<br />
                USA
              </p>
            </div>
            <div className="text-center space-y-2">
              <h5 className="font-semibold text-primary-foreground text-sm">Registered Agent</h5>
              <p className="text-sm text-primary-foreground/70">
                Marcela Zia<br />
                16 SW 9th Street, Suite 103<br />
                Fort Lauderdale, FL 33315<br />
                USA
              </p>
            </div>
          </div>

          {/* Responsible Party */}
          <div className="text-center">
            <p className="text-sm text-primary-foreground/70">
              Responsible Party (IRS — SS-4): Demian Escobar Fagundes
            </p>
            <p className="text-xs text-primary-foreground/50 italic mt-1">
              *Address not displayed for privacy reasons*
            </p>
          </div>

          {/* Important Information */}
          <div className="bg-primary-foreground/5 rounded-lg p-6 space-y-4 max-w-4xl mx-auto">
            <h4 className="text-lg font-semibold text-primary-foreground text-center">Important Information</h4>
            <div className="text-sm text-primary-foreground/70 space-y-2 text-center">
              <p>This website is for institutional and educational purposes only.</p>
              <p>Verdona LLC presents hemp-derived CBD products in compliance with applicable U.S. federal and state laws.</p>
              <p className="font-semibold text-primary-foreground">We do not sell products directly through this website.</p>
              <p>No products are shipped without proper authorization and legal compliance.</p>
              <p>The information provided does not replace professional medical guidance.</p>
              <p>Hemp-derived products are not intended to diagnose, treat, cure, or prevent any disease.</p>
            </div>
          </div>

          {/* Meta/Facebook Compliance */}
          <div className="border-t border-primary-foreground/10 pt-8 space-y-4 max-w-4xl mx-auto">
            <h4 className="text-base font-semibold text-primary-foreground text-center">Meta / Facebook CBD Compliance Statement</h4>
            <div className="text-xs text-primary-foreground/60 space-y-2">
              <p className="text-center mb-3">To comply with Meta Ads requirements for CBD advertising:</p>
              <ul className="space-y-1 text-left max-w-3xl mx-auto">
                <li>• Legally registered and active U.S. company (Florida)</li>
                <li>• Physical and mailing address clearly displayed</li>
                <li>• Registered Agent listed exactly as filed with the State of Florida</li>
                <li>• Responsible Party identified without exposing personal address</li>
                <li>• Clear statement of *no direct online sales*</li>
                <li>• Mandatory medical disclaimers</li>
                <li>• No unproven therapeutic claims</li>
                <li>• Hemp-derived products only (≤0.3% THC), compliant with the U.S. Farm Bill</li>
              </ul>
              <p className="text-center mt-4">
                Verdona LLC adheres to all federal and state regulations regarding hemp-derived CBD, as well as Meta Platforms' advertising policies.
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-primary-foreground/20 pt-8 text-center">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Verdona LLC — All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
