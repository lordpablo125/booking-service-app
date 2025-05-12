import React, { FC, useEffect, useState } from 'react'
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  Box,
  Paper
} from '@mui/material'
import { format, parseISO } from 'date-fns'

type FormDataListProp = {
  newData: boolean
  updated: () => void
}

type FormItem = {
  startTime: string
  date: string
  Email: string
  Name: string
  serviceId: string
  centerId: number
}

export const FormDataList: FC<FormDataListProp> = ({ newData, updated }) => {
  const [formDataList, setFormDataList] = useState([])

  const dateFormater = (isoString: string) => {
    const parsedDate = parseISO(isoString)
    return format(parsedDate, 'dd/MM/yy')
  }

  useEffect(() => {
    const stored = localStorage.getItem('formDataList')
    if (stored) {
      setFormDataList(JSON.parse(stored))
      updated()
    }
  }, [newData, updated])

  if (formDataList.length === 0) {
    return (
      <Typography align='center' variant='body1' sx={{ mt: 4 }}>
        No booking data
      </Typography>
    )
  }

  return (
    <Box className='max-w-xl mx-auto my-8'>
      <Typography variant='h6' gutterBottom align='center'>
        Formularios enviados
      </Typography>
      <Paper elevation={2}>
        <List disablePadding>
          {formDataList.map((item: FormItem, index) => (
            <Box key={index}>
              <ListItem alignItems='flex-start'>
                <ListItemText
                  primary={`${item.Name} — ${item.Email}`}
                  secondary={
                    <>
                      <Typography component='span' variant='body2'>
                        CenterId: {item.centerId}
                      </Typography>
                      {' — '}
                      <Typography component='span' variant='body2'>
                        Service: {item.serviceId}
                      </Typography>
                      {' — '}
                      <Typography component='span' variant='body2'>
                        Date: {dateFormater(item.date)}
                      </Typography>
                      {' — '}
                      <Typography component='span' variant='body2'>
                        Time: {item.startTime}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
              {index < formDataList.length - 1 && <Divider component='li' />}
            </Box>
          ))}
        </List>
      </Paper>
    </Box>
  )
}
