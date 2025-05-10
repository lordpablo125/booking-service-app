'use client'
import { Boat, CenterCardProps } from '@/types'
import { Box, Card, CardContent, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import { FC } from 'react'

//revisar los types
const ServicesCard: FC<CenterCardProps> = ({ services, centerId }) => {
  const router = useRouter()

  const handleRedirection = (id) => {
    console.log('***  ~ handleRedirection  ~ id:', id, ' centerId ', centerId)
    router.push(`/center/${centerId}/service/${id}`)
  }
  return (
    <Box className='flex flex-col items-center '>
      <Typography className='text-center' variant='h2'>
        Services list
      </Typography>

      <Box className='flex justify-center flex-wrap gap-4 mt-5'>
        {services?.length > 0 &&
          services.map((center: Boat, index) => (
            <Box
              key={center.name + index}
              onClick={() => handleRedirection(center.id)}
            >
              <Card className='mb-4' sx={{ width: 345, height: 200 }}>
                <CardContent>
                  <Typography gutterBottom variant='h4' component='div'>
                    {center.name}
                  </Typography>
                  <Box className='flex flex-col '>
                    <Typography variant='h6' sx={{ color: 'text.secondary' }}>
                      Duration: {center.duration}
                    </Typography>
                    <Typography variant='h6' sx={{ color: 'text.secondary' }}>
                      Price: ${center.price}
                    </Typography>
                    <Typography variant='h6' sx={{ color: 'text.secondary' }}>
                      Description: {center.description}
                    </Typography>
                    <Typography variant='h6' sx={{ color: 'text.secondary' }}>
                      ididiid: {center.id}
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
