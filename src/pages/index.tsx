import Home from "@/components/Home"
import Head from "next/head"
import { useState } from "react"
import Header from '../components/Header'
import About from "@/components/About"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Skills from "@/components/Skills"

export default function App() {
  const [page, setPage] = useState({ name: 'home' })

  function setPages(name: string) {
    setPage({ name: name })
  }

  return (
    <>
      <Head>
        <title>Carlos Dantas Portfolio</title>
      </Head>
      <Header setPage={setPages} page={page.name} />
      <main className="w-full h-screen py-5 px-5 md:py-9 md:px-[113px]">
        {page.name === 'home' && (
          <Home />
        )}
        {page.name === 'about' && (
          <About />
        )}
        {page.name === 'skills' && (
          <Skills />
        )}
        {page.name === 'projects' && (
          <Projects />
        )}
        {page.name === 'contact' && (
          <Contact />
        )}
      </main>
    </>
  )
}
