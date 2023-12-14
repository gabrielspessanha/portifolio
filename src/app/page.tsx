import { Container } from "reactstrap";
import { Main } from '@/components/Main'
import { Technologies } from "@/components/Technologies";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
      <Container className="h-screen">
        <Main />
        <Projects />
        <Technologies />
        <Footer />
      </Container>
  )
}
