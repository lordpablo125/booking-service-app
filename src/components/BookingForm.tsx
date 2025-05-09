'use client'
import { Employee, Passager, Trip } from '@/types'
import {
  Alert,
  Box,
  Button,
  MenuItem,
  Snackbar,
  SnackbarCloseReason,
  TextField,
  Typography
} from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { FC, useState } from 'react'
import { format, addDays, add } from 'date-fns'

type TripFormProps = {
  title: string
  trip?: Trip
}

const BookingForm: FC<TripFormProps> = ({ title, trip = {} }) => {
  const tomorrow = format(addDays(new Date(), 1), 'yyyy-MM-dd')
  const { push } = useRouter()
  const [open, setOpen] = useState(false)

  // const { mutate: createTrip, isSuccess: isCreateSuccess } = useCreateTrips()

  const handleSuccess = () => {
    setOpen(true)
    // push(`/trips`)
  }

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data: any = Object.fromEntries(formData.entries())
    const passagersArray = passagers.map((pas) => pas.documentId)

    const { startTime } = data
    const [hora, minutos] = startTime.split(':').map(Number)
    const hoy = new Date()
    const horaBase = new Date(hoy.setHours(hora, minutos, 0, 0))
    const nuevaHora = add(horaBase, { hours: 3 })
    const endTime = format(nuevaHora, 'HH:mm')

    // await createTrip({
    //   ...data,
    //   passagers: passagersArray,
    //   startTime: startTime + ':00',
    //   endTime: endTime + ':00'
    // })

    if (isCreateSuccess) {
      handleSuccess()
    }
  }

  // name, email, date, and time.

  return (
    <Box className='flex justify-center flex-col'>
      <Typography className='text-center' variant='h2'>
        Book a session
      </Typography>
      <Box
        component='form'
        onSubmit={handleSubmit}
        className='flex flex-col gap-2 max-w-[300px] my-4 mx-auto'
      >
        <TextField label='Name' name='Name' type='text' required />
        <TextField label='Email' name='Email' type='email' required />

        <TextField
          label='date'
          name='date'
          type='date'
          slotProps={{
            input: { min: tomorrow },
            inputLabel: { shrink: true }
          }}
          required
        />
        <TextField
          label='startTime'
          name='startTime'
          type='time'
          slotProps={{ inputLabel: { shrink: true } }}
          required
        />

        <Box className='mx-auto'>
          <Link href='/trips' className='ml-auto mr-4' passHref>
            <Button color='inherit' variant='contained'>
              Back
            </Button>
          </Link>
          <Button type='submit' variant='contained' color='primary'>
            Submit
          </Button>
        </Box>
      </Box>
      <Snackbar open={open} autoHideDuration={8000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          variant='filled'
          sx={{ width: '100%', backgroundColor: 'MediumSeaGreen' }}
        >
          New Employee added successfully
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default BookingForm
