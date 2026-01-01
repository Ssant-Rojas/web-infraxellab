import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

const services = [
  {
    title: "Desarrollo de Software",
    description:
      "Aplicaciones web modernas, escalables y seguras a la medida.",
  },
  {
    title: "Automatización & IT",
    description:
      "Automatización de procesos, scripts, infraestructura y optimización.",
  },
  {
    title: "Sistemas Inteligentes",
    description:
      "Integración de hardware, GPS, IoT y soluciones técnicas avanzadas.",
  },
  {
    title: "CCTV",
    description:
      "Integración de sistemas de vigilancia.",
  },
  {
    title: "Configuración de infraestructura",
    description:
      "Creación y configuración de infraestructura cloud, redes y servidores.",
  },
  {
    title: "Configuración de infraestructura",
    description:
      "Creación y configuración de infraestructura cloud, redes y servidores.",
  },
  {
    title: "Configuración de infraestructura",
    description:
      "Creación y configuración de infraestructura cloud, redes y servidores.",
  },
  {
    title: "Configuración de infraestructura",
    description:
      "Creación y configuración de infraestructura cloud, redes y servidores.",
  },
  {
    title: "Configuración de infraestructura",
    description:
      "Creación y configuración de infraestructura cloud, redes y servidores.",
  },
  {
    title: "Configuración de infraestructura",
    description:
      "Creación y configuración de infraestructura cloud, redes y servidores.",
  },
  {
    title: "Configuración de infraestructura",
    description:
      "Creación y configuración de infraestructura cloud, redes y servidores.",
  },
  {
    title: "Configuración de infraestructura",
    description:
      "Creación y configuración de infraestructura cloud, redes y servidores.",
  },
  
]

export default function ServicesSection() {
  const navigate = useNavigate()

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Nuestros Servicios
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col">
              <CardContent className="p-6 space-y-4 flex-1">
                <h3 className="text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="text-muted-foreground">
                  {service.description}
                </p>

                <Button
                  className="mt-auto w-full"
                  onClick={() => navigate("/contact")}
                >
                  Solicitar asesoría
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
