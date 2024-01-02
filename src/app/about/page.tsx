import { About } from "@/components/About";
import Contact from "@/components/Contact";
import { Footer } from "@/components/common/Footer";
import { Container } from "reactstrap";

export default function AboutPage() {
  return (
    <>
    <Container className="flex flex-col gap-5">
      <About />
      <Contact />
      
    </Container>
    <Footer />
    </>
  )
}
