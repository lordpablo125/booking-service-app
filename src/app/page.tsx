import CentersCard from '@/components/CentersCard'

export default function Home() {
  const centers = [
    {
      name: 'Pepe1',
      image: 'globe.svg',
      model: 'qweqweqe'
    },
    {
      name: 'Momo',
      image: 'next.svg',
      model: 'xvdsfsdf'
    },
    {
      name: 'Toto2',
      image: 'file.svg',
      model: 'asd'
    }
  ]
  return (
    <>
      <CentersCard centers={centers} />
    </>
  )
}
