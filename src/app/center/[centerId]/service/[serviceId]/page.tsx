import BookingForm from '@/components/BookingForm'
import { use } from 'react'

const PageBooking = ({ params }) => {
  const { centerId, serviceId }: { id: string } = use(params)

  return (
    <>
      <BookingForm centerId={centerId} serviceId={serviceId} />
    </>
  )
}

export default PageBooking
