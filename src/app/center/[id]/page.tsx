import ServicesCard from '@/components/ServicesCard'
import { use } from 'react'

const Id = ({ params }) => {
  const { id }: { id: string } = use(params)
  // name, duration, price, and a brief description.
  const centers = [
    {
      name: 'Hair Services',
      duration: '1hs',
      price: 20,
      description: 'qweqweqe'
    },
    {
      name: 'Body Treatments',
      duration: '1hs',
      price: 20,
      description: 'xvdsfsdf'
    },
    {
      name: 'Nail Services',
      duration: '1hs',
      price: 20,
      description: 'xvdsfsdf'
    },
    {
      name: 'Spa & Relaxation',
      duration: '1hs',
      price: 20,
      description: 'asd'
    },
    {
      name: 'Makeup Services',
      duration: '1hs',
      price: 20,
      description: 'asd'
    },
    {
      name: 'Hair Removal',
      duration: '1hs',
      price: 20,
      description: 'asd'
    }
  ]
  return (
    <>
      <ServicesCard centers={centers} />
    </>
  )
}

export default Id
