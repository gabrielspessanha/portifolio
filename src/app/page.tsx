'use client'
import { About } from "@/components/About";
import { Container } from "reactstrap";
import { Main } from '@/components/Main'
import { Technologies } from "@/components/Technologies";
import { Portfolio } from "@/components/Portfolio";

export default function Home() {
  return (
      <Container className="h-screen">
        <Main />
        <Portfolio />
        <Technologies />
      </Container>
  )
}
