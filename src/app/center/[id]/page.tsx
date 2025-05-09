import ServicesCard from '@/components/ServicesCard'
import { use } from 'react'

const Id = ({ params }) => {
  const { id }: { id: string } = use(params)
  const centers = [
    {
      name: 'Hair Services',
      image: 'globe.svg',
      model: 'qweqweqe'
    },
    {
      name: 'Body Treatments',
      image: 'next.svg',
      model: 'xvdsfsdf'
    },
    {
      name: 'Nail Services',
      image: 'next.svg',
      model: 'xvdsfsdf'
    },
    {
      name: 'Skin & Facial Treatments',
      image: 'file.svg',
      model: 'asd'
    },
    {
      name: 'Spa & Relaxation',
      image: 'file.svg',
      model: 'asd'
    },
    {
      name: 'Makeup Services',
      image: 'file.svg',
      model: 'asd'
    },
    {
      name: 'Hair Removal',
      image: 'file.svg',
      model: 'asd'
    }
  ]
  return (
    <>
      <ServicesCard centers={centers} />
    </>
  )
}

export default Id
