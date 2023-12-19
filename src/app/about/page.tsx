import { About } from "@/components/About";
import Contact from "@/components/Contact";
import { Footer } from "@/components/common/Footer";
import { Container } from "reactstrap";

export default function AboutPage() {
  return (
    <Container>
      <About />
      <Contact />
      <Footer />
    </Container>
  )
}
