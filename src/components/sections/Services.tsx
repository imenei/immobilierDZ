import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Key, Calculator, FileText, HandHeart, Banknote } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Achat de Biens",
      description: "Nous vous accompagnons dans la recherche et l'acquisition de votre bien idéal selon vos critères et votre budget.",
      features: ["Recherche personnalisée", "Visite accompagnée", "Négociation des prix", "Conseils d'experts"]
    },
    {
      icon: Key,
      title: "Vente Immobilière",
      description: "Optimisez la vente de votre bien avec notre expertise en marketing immobilier et notre réseau étendu d'acheteurs.",
      features: ["Évaluation gratuite", "Photos professionnelles", "Marketing digital", "Suivi jusqu'à la signature"]
    },
    {
      icon: Banknote,
      title: "Location & Gestion",
      description: "Services complets de location et gestion locative pour propriétaires et locataires.",
      features: ["Sélection locataires", "État des lieux", "Gestion administrative", "Suivi des paiements"]
    },
    {
      icon: Calculator,
      title: "Estimation Immobilière",
      description: "Obtenez une estimation précise de votre bien grâce à notre connaissance approfondie du marché algérien.",
      features: ["Analyse comparative", "Étude de marché", "Rapport détaillé", "Conseils personnalisés"]
    },
    {
      icon: FileText,
      title: "Accompagnement Notarial",
      description: "Nous vous guidons dans toutes les démarches administratives et juridiques de votre transaction.",
      features: ["Vérification documents", "Suivi notaire", "Conseils juridiques", "Sécurisation transaction"]
    },
    {
      icon: HandHeart,
      title: "Accompagnement Bancaire",
      description: "Aide et conseil pour vos demandes de financement immobilier auprès des banques partenaires.",
      features: ["Montage dossier", "Négociation taux", "Banques partenaires", "Suivi jusqu'à déblocage"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Nos Services
            <span className="block text-accent">Immobiliers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Une gamme complète de services pour vous accompagner dans tous vos projets immobiliers. 
            De l'achat à la vente, en passant par la location et le financement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group h-full hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-primary rounded-full group-hover:shadow-glow transition-shadow duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  En Savoir Plus
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-heading font-bold mb-4">
              Besoin d'un Service Personnalisé ?
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
              Notre équipe d'experts est à votre disposition pour analyser vos besoins 
              et vous proposer une solution sur mesure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold"
              >
                Consultation Gratuite
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Appelez-nous Maintenant
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;