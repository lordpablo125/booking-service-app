'use client'
import {
  Alert,
  Box,
  Button,
  Snackbar,
  SnackbarCloseReason,
  TextField,
  Typography
} from '@mui/material'
import Link from 'next/link'
import React, { FC, useState } from 'react'
import { format, addDays } from 'date-fns'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FormDataList } from './FormList'

type BookingFormProps = {
  centerId: number
  serviceId: string
}

type BookingData = {
  startTime: string
  date: Date
  Email: string
  Name: string
}

const BookingForm: FC<BookingFormProps> = ({ centerId, serviceId }) => {
  const tomorrow = format(addDays(new Date(), 1), 'yyyy-MM-dd')

  const [open, setOpen] = useState(false)
  const schema = yup.object({
    Name: yup.string().required('Name is required'),
    Email: yup.string().email('Invalid email').required('Email is required'),
    date: yup
      .date()
      .min(tomorrow, 'Date must be tomorrow or later')
      .required('Date is required'),
    startTime: yup.string().required('Start time is required')
  })
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const handleSuccess = () => {
    setOpen(true)
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

  const onSubmit = (data: BookingData) => {
    const stored = localStorage.getItem('formDataList')
    const parsed = stored ? JSON.parse(stored) : []
    parsed.push({
      ...data,
      centerId,
      serviceId
    })
    console.log('***  ~ onSubmit  ~ parsed:', parsed)

    localStorage.setItem('formDataList', JSON.stringify(parsed))
    reset()
    handleSuccess()
    console.log('Nuevo formulario guardado:', data)
  }

  return (
    <Box className='flex justify-center flex-col'>
      <Typography className='text-center' variant='h2'>
        Book a session
      </Typography>
      <Box
        component='form'
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-2 max-w-[300px] my-4 mx-auto'
      >
        <TextField
          label='Name'
          {...register('Name')}
          error={!!errors.Name}
          helperText={errors.Name?.message}
        />

        <TextField
          label='Email'
          type='email'
          {...register('Email')}
          error={!!errors.Email}
          helperText={errors.Email?.message}
        />

        <TextField
          label='Date'
          type='date'
          {...register('date')}
          inputProps={{ min: tomorrow }}
          InputLabelProps={{ shrink: true }}
          error={!!errors.date}
          helperText={errors.date?.message}
        />

        <TextField
          label='Start Time'
          type='time'
          {...register('startTime')}
          slotProps={{
            inputLabel: { shrink: true }
          }}
          error={!!errors.startTime}
          helperText={errors.startTime?.message}
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
      <FormDataList />
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handleClose}
          variant='filled'
          sx={{ width: '100%', backgroundColor: 'MediumSeaGreen' }}
        >
          Booking session successfully
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default BookingForm
