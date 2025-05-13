import BookingForm from '@/components/BookingForm'

type BookingProps = {
  params: Promise<{ centerId: number; serviceId: string }>
}

const PageBooking = async ({ params }: BookingProps) => {
  const { centerId, serviceId } = await params

  return (
    <>
      <BookingForm centerId={centerId} serviceId={serviceId} />
    </>
  )
}

export default PageBooking
