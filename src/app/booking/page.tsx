import BookingForm from '@/components/BookingForm'

const PageBooking = ({ params }) => {
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
      <BookingForm centers={centers} />
    </>
  )
}

export default PageBooking
