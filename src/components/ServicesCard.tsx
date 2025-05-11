'use client'
import { useGetServices } from '@/services/getServices'
import { Box, Card, CardContent, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import { FC } from 'react'

type ServicesCardProps = {
  centerId: number
}

type Service = {
  id: string
  name: string
  duration: string
  price: number
  description: string
}

//revisar los types
const ServicesCard: FC<ServicesCardProps> = ({ centerId }) => {
  const router = useRouter()
  const { data, isLoading } = useGetServices()
  const services = data?.services ?? []

  const handleRedirection = (id: string) => {
    router.push(`/center/${centerId}/service/${id}`)
  }

  if (isLoading) {
    return <>Loading...</>
  }
  return (
    <Box className='flex flex-col items-center '>
      <Typography className='text-center' variant='h2'>
        Services list
      </Typography>

      <Box className='flex justify-center flex-wrap gap-4 mt-5'>
        {services?.length > 0 &&
          services.map((service: Service, index) => (
            <Box
              key={service.name + index}
              onClick={() => handleRedirection(service.id)}
            >
              <Card className='mb-4' sx={{ width: 345, height: 200 }}>
                <CardContent>
                  <Typography gutterBottom variant='h4' component='div'>
                    {service.name}
                  </Typography>
                  <Box className='flex flex-col '>
                    <Typography variant='h6' sx={{ color: 'text.secondary' }}>
                      Duration: {service.duration}
                    </Typography>
                    <Typography variant='h6' sx={{ color: 'text.secondary' }}>
                      Price: ${service.price}
                    </Typography>
                    <Typography variant='h6' sx={{ color: 'text.secondary' }}>
                      Description: {service.description}
                    </Typography>
                    <Typography variant='h6' sx={{ color: 'text.secondary' }}>
                      ididiid: {service.id}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          ))}
      </Box>
    </Box>
  )
}

export default ServicesCard
