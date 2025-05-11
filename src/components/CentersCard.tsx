'use client'
import { useGetCenters } from '@/services/centerServices'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import Link from 'next/link'
type Center = {
  name: string
  image: string
  description: string
}

const CentersCard = () => {
  const { data, isLoading } = useGetCenters()
  const centers = data?.centers ?? []

  if (isLoading) {
    return <>Loading...</>
  }

  return (
    <Box className='flex flex-col items-center '>
      <Typography className='text-center' variant='h2'>
        Center list
      </Typography>

      {centers?.length > 0 &&
        centers.map((center: Center, index: number) => (
          <Link
            href={`/center/${index}`}
            className=' my-4'
            passHref
            key={center.name + index}
          >
            <Card className='mb-4' sx={{ width: 345, height: 400 }}>
              <CardMedia
                component='img'
                className='h-[250px]'
                alt={`Logo`}
                image={center.image}
                sx={{ objectFit: 'contain' }}
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Name: {center.name}
                </Typography>
                <Typography variant='h5' sx={{ color: 'text.secondary' }}>
                  Description: {center.description}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        ))}
    </Box>
  )
}

export default CentersCard
