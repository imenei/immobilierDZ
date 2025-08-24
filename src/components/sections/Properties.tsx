import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Square, Heart } from "lucide-react";

const Properties = () => {
  const properties = [
    {
      id: 1,
      title: "Appartement Moderne - Hydra",
      location: "Hydra, Alger",
      price: "45,000,000",
      type: "Vente",
      bedrooms: 4,
      bathrooms: 3,
      area: 120,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Villa avec Jardin - Cheraga",
      location: "Cheraga, Alger",
      price: "85,000,000",
      type: "Vente",
      bedrooms: 6,
      bathrooms: 4,
      area: 300,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
      featured: true
    },
    {
      id: 3,
      title: "Appartement F3 - Centre-ville",
      location: "Centre-ville, Oran",
      price: "35,000",
      type: "Location",
      bedrooms: 3,
      bathrooms: 2,
      area: 85,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
      featured: false
    },
    {
      id: 4,
      title: "Bureau Commercial - El Mohammadia",
      location: "El Mohammadia, Alger",
      price: "28,000,000",
      type: "Vente",
      bedrooms: 0,
      bathrooms: 2,
      area: 150,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
      featured: false
    },
    {
      id: 5,
      title: "Terrain Constructible - Bouzareah",
      location: "Bouzareah, Alger",
      price: "12,000,000",
      type: "Vente",
      bedrooms: 0,
      bathrooms: 0,
      area: 500,
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop",
      featured: false
    },
    {
      id: 6,
      title: "Duplex Luxueux - Sidi Bel Abbès",
      location: "Sidi Bel Abbès",
      price: "55,000,000",
      type: "Vente",
      bedrooms: 5,
      bathrooms: 3,
      area: 200,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop",
      featured: true
    }
  ];

  return (
    <section id="biens" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Nos Biens
            <span className="block text-accent">Immobiliers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Découvrez notre sélection exclusive de biens immobiliers dans toute l'Algérie. 
            Appartements, villas, bureaux et terrains vous attendent.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button variant="default" className="bg-gradient-primary">
            Tous les Biens
          </Button>
          <Button variant="outline">
            Vente
          </Button>
          <Button variant="outline">
            Location
          </Button>
          <Button variant="outline">
            Appartements
          </Button>
          <Button variant="outline">
            Villas
          </Button>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Card key={property.id} className="group overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <div className="relative overflow-hidden">
                <img 
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge 
                    className={property.type === 'Vente' ? 'bg-accent text-accent-foreground' : 'bg-primary text-primary-foreground'}
                  >
                    {property.type}
                  </Badge>
                </div>
                {property.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-destructive text-destructive-foreground">
                      Coup de Cœur
                    </Badge>
                  </div>
                )}
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md hover:bg-white/30"
                >
                  <Heart className="h-4 w-4 text-white" />
                </Button>
              </div>
              
              <CardHeader className="pb-4">
                <h3 className="text-xl font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                  {property.title}
                </h3>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-accent">
                    {parseInt(property.price).toLocaleString()} DZD
                    {property.type === 'Location' && <span className="text-sm text-muted-foreground">/mois</span>}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                  {property.bedrooms > 0 && (
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      <span>{property.bedrooms}</span>
                    </div>
                  )}
                  {property.bathrooms > 0 && (
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      <span>{property.bathrooms}</span>
                    </div>
                  )}
                  <div className="flex items-center">
                    <Square className="h-4 w-4 mr-1" />
                    <span>{property.area}m²</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1 bg-gradient-primary">
                    Voir Détails
                  </Button>
                  <Button variant="outline" size="sm">
                    Contacter
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Voir Tous les Biens
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Properties;