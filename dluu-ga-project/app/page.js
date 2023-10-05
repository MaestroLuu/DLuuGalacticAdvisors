import Image from 'next/image'
import Header from './components/Header'
import AvgScore from './components/AvgScore'
import Section from './components/Section'
import data from './data/questions.json'

export default function Home() {
  return (
    <main>
      <Header />
      <AvgScore />
      {data.Sections.map((section, i) => (
          <Section key={i} section={section} />
        ))}
      <AvgScore />
    </main>
  )
}
