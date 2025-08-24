import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Twitter, href: "#", name: "Twitter" }
  ];

  const quickLinks = [
    { name: "Accueil", href: "#accueil" },
    { name: "Nos Biens", href: "#biens" },
    { name: "À Propos", href: "#apropos" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Achat Immobilier",
    "Vente Immobilier",
    "Location",
    "Estimation",
    "Accompagnement Notarial",
    "Financement"
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-heading font-bold text-accent mb-4">
              Immobilier DZ
            </div>
            <p className="text-white/80 mb-6 leading-relaxed max-w-md">
              Votre partenaire de confiance pour tous vos projets immobiliers en Algérie. 
              Plus de 15 ans d'expérience au service de vos rêves immobiliers.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                <span className="text-white/90">123 Rue Didouche Mourad, Alger Centre</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                <span className="text-white/90">+213 21 XX XX XX</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                <span className="text-white/90">contact@immobilier-dz.com</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                <span className="text-white/90">Sam-Jeu: 8h-18h, Ven: 8h-12h</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-heading font-semibold text-accent mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-heading font-semibold text-accent mb-6">
              Nos Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-white/80">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/20 py-8">
          <div className="text-center">
            <h3 className="text-2xl font-heading font-semibold text-accent mb-4">
              Restez Informé
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Inscrivez-vous à notre newsletter pour recevoir les dernières offres 
              immobilières et les actualités du marché algérien.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-md text-primary bg-white border-0 focus:ring-2 focus:ring-accent"
              />
              <Button className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold">
                S'inscrire
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              © 2024 Immobilier DZ. Tous droits réservés.
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-2 bg-white/10 rounded-full hover:bg-accent transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5 text-white" />
                  </a>
                ))}
              </div>
              
              <div className="flex space-x-6 text-sm text-white/60">
                <a href="#" className="hover:text-accent transition-colors">
                  Mentions Légales
                </a>
                <a href="#" className="hover:text-accent transition-colors">
                  Confidentialité
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;