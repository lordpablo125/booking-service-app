import ServicesCard from '@/components/ServicesCard'

const ServicePage = async ({ params }: any) => {
  return (
    <>
      <ServicesCard centerId={params.centerId} />
    </>
  )
}

export default ServicePage
