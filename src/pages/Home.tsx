import ServicesSection from "@/components/sections/ServicesSection"
import ContactSection from "@/components/sections/ContactSection"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"


export default function Home() {
  return (
    <main>
      <section className="py-24 text-center">
        <h1 className="text-5xl font-bold">InfraxelLab</h1>
        <p className="mt-6 text-muted-foreground">
          Soluciones tecnológicas a la medida
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Button asChild>
            <Link to="/contact">Solicitar asesoría</Link >
          </Button>

          <Button variant="secondary" asChild>
            <Link to="/services">Ver servicios</Link >
          </Button>
        </div>
      </section>

      <ServicesSection />
      <ContactSection />
    </main>
  )
}
