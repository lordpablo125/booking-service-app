import ServicesCard from '@/components/ServicesCard'
import { use } from 'react'

const ServicePage = ({ params }) => {
  const { centerId }: { id: string } = use(params)
  // const par = use(params)
  console.log('***  ~ Id  ~ par:', centerId)
  // name, duration, price, and a brief description.
  const services = [
    {
      id: 'hair_service',
      name: 'Hair Services',
      duration: '1hs',
      price: 25,
      description: 'qweqweqe'
    },
    {
      id: 'body_tratments',
      name: 'Body Treatments',
      duration: '1hs',
      price: 20,
      description: 'xvdsfsdf'
    },
    {
      id: 'nail',
      name: 'Nail Services',
      duration: '1hs',
      price: 15,
      description: 'xvdsfsdf'
    },
    {
      id: 'spa',
      name: 'Spa & Relaxation',
      duration: '1hs',
      price: 32,
      description: 'asd'
    },
    {
      id: 'makeup',
      name: 'Makeup Services',
      duration: '1hs',
      price: 22,
      description: 'asd'
    },
    {
      id: 'hair_removal',
      name: 'Hair Removal',
      duration: '1hs',
      price: 17,
      description: 'asd'
    }
  ]
  return (
    <>
      <ServicesCard services={services} centerId={centerId} />
    </>
  )
}

export default ServicePage
