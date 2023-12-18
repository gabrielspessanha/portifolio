import { Footer } from "@/components/Footer";
import { Main } from "@/components/Main";
import { Projects } from "@/components/Projects";
import { Technologies } from "@/components/Technologies";
import { Container } from "reactstrap";

export default function Home() {
  return (
  <Container className="h-screen">   
    <Main />
    <Projects />
    <Technologies /> 

  </Container>
 
  )
}
