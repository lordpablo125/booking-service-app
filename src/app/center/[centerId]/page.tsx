import ServicesCard from '@/components/ServicesCard'

type ServiceProps = {
  params: Promise<{ centerId: number }>
}

const ServicePage = async ({ params }: ServiceProps) => {
  const { centerId } = await params

  return (
    <>
      <ServicesCard centerId={centerId} />
    </>
  )
}

export default ServicePage
