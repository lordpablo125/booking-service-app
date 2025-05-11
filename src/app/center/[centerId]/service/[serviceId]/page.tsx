import BookingForm from '@/components/BookingForm'
import { use } from 'react'

const PageBooking = ({ params }: any) => {
  return (
    <>
      <BookingForm centerId={params.centerId} serviceId={params.serviceId} />
    </>
  )
}

export default PageBooking
