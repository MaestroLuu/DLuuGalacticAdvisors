import Image from 'next/image'
import Header from './components/Header'
import AvgScore from './components/AvgScore'
import DropdownOptions from './components/DropdownOptions'
import Section from './components/Section'

export default function Home() {
  return (
    <main>
      <Header />
      <AvgScore />
      <Section />
      <Section />
      <AvgScore />
    </main>
  )
}
