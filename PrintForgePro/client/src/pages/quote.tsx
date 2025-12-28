import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Upload, FileType } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name ist erforderlich"),
  email: z.string().email("Ungültige E-Mail-Adresse"),
  company: z.string().optional(),
  technology: z.string().min(1, "Bitte wählen Sie eine Technologie"),
  material: z.string().min(1, "Bitte wählen Sie ein Material"),
  quantity: z.coerce.number().min(1, "Menge muss mindestens 1 sein"),
  notes: z.string().optional(),
});

export default function Quote() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      technology: "",
      material: "",
      quantity: 1,
      notes: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Anfrage gesendet!",
      description: "Wir haben Ihre Details erhalten und werden uns innerhalb von 24 Stunden bei Ihnen melden.",
    });
    form.reset();
  }

  return (
    <div className="min-h-screen flex flex-col bg-muted/30">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-heading font-bold text-primary mb-4">Angebot anfordern</h1>
            <p className="text-muted-foreground">
              Laden Sie Ihre Designdateien und Spezifikationen hoch, um ein individuelles Angebot für Ihr Projekt zu erhalten.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Projektdetails</CardTitle>
                  <CardDescription>Erzählen Sie uns von Ihren Druckanforderungen.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      
                      <div className="p-8 border-2 border-dashed border-muted-foreground/20 rounded-xl bg-muted/10 flex flex-col items-center justify-center text-center hover:bg-muted/20 transition-colors cursor-pointer">
                        <Upload className="w-10 h-10 text-secondary mb-4" />
                        <h3 className="font-semibold text-lg mb-2">3D-Dateien hochladen</h3>
                        <p className="text-sm text-muted-foreground mb-4">Unterstützte Formate: .STL, .OBJ, .STEP (Max 50MB)</p>
                        <Button type="button" variant="secondary">Dateien auswählen</Button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="technology"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Technologie</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Technologie wählen" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="fdm">FDM (Fused Deposition Modeling)</SelectItem>
                                  <SelectItem value="sla">SLA (Stereolithografie)</SelectItem>
                                  <SelectItem value="sls">SLS (Selektives Lasersintern)</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="material"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Material</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Material wählen" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="pla">Standard PLA</SelectItem>
                                  <SelectItem value="abs">ABS</SelectItem>
                                  <SelectItem value="petg">PETG</SelectItem>
                                  <SelectItem value="nylon">Nylon PA12</SelectItem>
                                  <SelectItem value="resin_std">Standard Harz</SelectItem>
                                  <SelectItem value="resin_tough">Tough Resin</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="quantity"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Menge</FormLabel>
                            <FormControl>
                              <Input type="number" min={1} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Vollständiger Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Max Mustermann" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                         <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>E-Mail-Adresse</FormLabel>
                              <FormControl>
                                <Input placeholder="max@beispiel.de" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="notes"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Zusätzliche Anmerkungen</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Spezifische Anforderungen, Nachbearbeitungswünsche oder Zeitvorgaben?" 
                                className="resize-none min-h-[100px]"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-white text-lg py-6">
                        Angebot anfordern
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              <Card className="bg-primary text-white border-none">
                <CardHeader>
                  <CardTitle>Brauchen Sie Hilfe?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-white/80">
                    Nicht sicher, welches Material das richtige für Ihr Projekt ist? Prüfen Sie unseren Materialleitfaden oder kontaktieren Sie unser Ingenieurteam.
                  </p>
                  <div className="pt-4 border-t border-white/10">
                    <p className="font-bold">Engineering Support</p>
                    <p className="text-secondary">support@printforge.de</p>
                  </div>
                  <div>
                    <p className="font-bold">Rufen Sie uns an</p>
                    <p>+49 (0) 30 123-4567</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Dateirichtlinien</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex gap-2 items-center">
                      <FileType size={16} /> Wasserdichte Meshes erforderlich
                    </li>
                    <li className="flex gap-2 items-center">
                      <FileType size={16} /> Einheiten in mm
                    </li>
                    <li className="flex gap-2 items-center">
                      <FileType size={16} /> Min. Wandstärke 0.8mm
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
