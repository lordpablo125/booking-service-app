import ServicesCard from '@/components/ServicesCard'
import { use } from 'react'

const ServicePage = ({ params }) => {
  const { centerId }: { id: string } = use(params)

  return (
    <>
      <ServicesCard centerId={centerId} />
    </>
  )
}

export default ServicePage
