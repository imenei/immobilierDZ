import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Nous vous recontacterons dans les plus brefs délais.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      details: ["123 Rue Didouche Mourad", "Alger Centre, Alger 16000", "Algérie"]
    },
    {
      icon: Phone,
      title: "Téléphone",
      details: ["+213 21 XX XX XX", "+213 555 XX XX XX (WhatsApp)"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@immobilier-dz.com", "info@immobilier-dz.com"]
    },
    {
      icon: Clock,
      title: "Horaires",
      details: ["Samedi - Jeudi: 8h00 - 18h00", "Vendredi: 8h00 - 12h00"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Contactez
            <span className="block text-accent">Notre Équipe</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nous sommes là pour répondre à toutes vos questions et vous accompagner 
            dans votre projet immobilier. N'hésitez pas à nous contacter.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-card">
            <CardHeader>
              <h3 className="text-2xl font-heading font-semibold text-foreground">
                Envoyez-nous un Message
              </h3>
              <p className="text-muted-foreground">
                Remplissez le formulaire ci-dessous et nous vous recontacterons rapidement.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nom Complet *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Téléphone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="mt-1"
                      placeholder="+213 XXX XXX XXX"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1"
                    placeholder="votre@email.com"
                  />
                </div>
                
                <div>
                  <Label htmlFor="subject">Sujet</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-1"
                    placeholder="Objet de votre demande"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="mt-1"
                    placeholder="Décrivez votre projet ou votre demande..."
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="submit" className="flex-1 bg-gradient-primary">
                    Envoyer le Message
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    onClick={() => window.open('https://wa.me/213XXXXXXXXX', '_blank')}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 hover:shadow-card transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gradient-primary rounded-full flex-shrink-0">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-foreground mb-2">
                          {info.title}
                        </h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-sm text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map Placeholder */}
            <Card className="overflow-hidden shadow-card">
              <div className="h-64 bg-muted relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h4 className="font-heading font-semibold text-foreground mb-2">
                      Notre Localisation
                    </h4>
                    <p className="text-muted-foreground">
                      Carte Google Maps intégrée<br />
                      123 Rue Didouche Mourad, Alger
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Contact Actions */}
            <Card className="bg-gradient-primary text-white p-6">
              <CardContent className="p-0">
                <h4 className="font-heading font-semibold text-xl mb-4">
                  Contact Rapide
                </h4>
                <p className="text-white/90 mb-6">
                  Besoin d'une réponse immédiate ? Contactez-nous directement.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button 
                    className="bg-accent hover:bg-accent-light text-accent-foreground"
                    onClick={() => window.open('tel:+213XXXXXXXXX')}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Appeler
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white/30 text-white hover:bg-white/10"
                    onClick={() => window.open('https://wa.me/213XXXXXXXXX', '_blank')}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;