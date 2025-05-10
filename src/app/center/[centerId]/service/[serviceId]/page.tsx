import BookingForm from '@/components/BookingForm'
import { use } from 'react'

const PageBooking = ({ params }) => {
  const { centerId, serviceId }: { id: string } = use(params)
  console.log(`***  ~ PageBooking  ~:`, { centerId, serviceId })
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
      <BookingForm centerId={centerId} serviceId={serviceId} />
    </>
  )
}

export default PageBooking
