'use client'
import { Boat, CenterCardProps } from '@/types'
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material'
import Link from 'next/link'
import { FC } from 'react'
import AddIcon from '@mui/icons-material/Add'

const ServicesCard: FC<CenterCardProps> = ({ centers }) => {
  return (
    <Box className='flex flex-col items-center '>
      <Typography className='text-center' variant='h2'>
        Services list
      </Typography>
      <Link href={`/center/create`} className=' my-4' passHref>
        <Button color='primary' variant='outlined'>
          <AddIcon />
          Add new
        </Button>
      </Link>
      <Box className='flex justify-center flex-wrap gap-4'>
        {centers?.length > 0 &&
          centers.map((center: Boat, index) => (
            <Link
              href={`/center/${index}`}
              className=' my-4'
              passHref
              key={center.name + index}
            >
              <Card className='mb-4' sx={{ width: 345, height: 200 }}>
                <CardContent>
                  <Typography gutterBottom variant='h4' component='div'>
                    {center.name}
                  </Typography>
                  <Box className='flex flex-col '>
                    <Typography
                      variant='body2'
                      sx={{ color: 'text.secondary' }}
                    >
                      Duration: {center.duration}
                    </Typography>
                    <Typography
                      variant='body2'
                      sx={{ color: 'text.secondary' }}
                    >
                      Price: ${center.price}
                    </Typography>
                    <Typography
                      variant='body2'
                      sx={{ color: 'text.secondary' }}
                    >
                      Description: {center.description}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Link>
          ))}
      </Box>
    </Box>
  )
}

export default ServicesCard
