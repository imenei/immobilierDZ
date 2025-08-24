import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Users, Award, Clock } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Confiance",
      description: "Une relation basée sur la transparence et l'honnêteté avec chaque client."
    },
    {
      icon: Users,
      title: "Accompagnement",
      description: "Un suivi personnalisé à chaque étape de votre projet immobilier."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Un service de qualité supérieure pour répondre à vos attentes."
    },
    {
      icon: Clock,
      title: "Disponibilité",
      description: "Une équipe réactive et disponible 7j/7 pour vous conseiller."
    }
  ];

  const team = [
    {
      name: "Ahmed Benali",
      role: "Directeur Général",
      experience: "15 ans d'expérience",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Fatima Meziane",
      role: "Responsable Ventes",
      experience: "10 ans d'expérience",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1be?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Karim Saidi",
      role: "Expert Locations",
      experience: "8 ans d'expérience",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    }
  ];

  return (
    <section id="apropos" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            À Propos de
            <span className="block text-accent">Notre Agence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Depuis plus de 15 ans, nous accompagnons nos clients dans leurs projets immobiliers 
            avec passion, expertise et dévouement.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-heading font-semibold text-foreground mb-6">
              Notre Histoire
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Fondée en 2008, notre agence immobilière s'est rapidement imposée comme 
                une référence dans le secteur immobilier algérien. Nous avons débuté avec 
                une vision simple : offrir un service personnalisé et de qualité à chaque client.
              </p>
              <p>
                Aujourd'hui, forte de notre expertise et de notre réseau étendu à travers 
                l'Algérie, nous continuons d'innover pour vous proposer les meilleures 
                opportunités immobilières du marché.
              </p>
              <p>
                Notre équipe de professionnels passionnés met tout en œuvre pour 
                transformer vos rêves immobiliers en réalité, que vous soyez acheteur, 
                vendeur ou investisseur.
              </p>
            </div>
            <Button className="mt-6 bg-gradient-primary" size="lg">
              Découvrir Nos Services
            </Button>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
              alt="Notre équipe"
              className="rounded-lg shadow-elegant w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-lg"></div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-heading font-semibold text-center text-foreground mb-12">
            Nos Valeurs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-card transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-primary rounded-full">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h4 className="text-xl font-heading font-semibold text-foreground mb-3">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-3xl font-heading font-semibold text-center text-foreground mb-12">
            Notre Équipe
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden hover:shadow-card transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-heading font-semibold text-foreground mb-2">
                    {member.name}
                  </h4>
                  <p className="text-accent font-medium mb-1">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {member.experience}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;