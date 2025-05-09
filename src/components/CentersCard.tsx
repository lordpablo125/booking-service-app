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

const CentersCard: FC<CenterCardProps> = ({ centers }) => {
  return (
    <Box className='flex flex-col items-center '>
      <Typography className='text-center' variant='h2'>
        Center list
      </Typography>
      <Link href={`/center/create`} className=' my-4' passHref>
        <Button color='primary' variant='outlined'>
          <AddIcon />
          Add new
        </Button>
      </Link>
      {/* center's logo, name, brief description, and offered services. */}
      {centers?.length > 0 &&
        centers.map((center: Boat, index) => (
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
                <Typography variant='h5' sx={{ color: 'text.secondary' }}>
                  Services: {center.services}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        ))}
    </Box>
  )
}

export default CentersCard
