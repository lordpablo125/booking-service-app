function withDelay<T>(data: T, delay = 1500): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), delay)
  })
}

export const getCenters = () => {
  const response = {
    centers: [
      {
        name: 'Pepe1',
        image: 'globe.svg',
        description: 'qweqweqe'
      },
      {
        name: 'Momo',
        image: 'next.svg',
        description: 'xvdsfsdf'
      },
      {
        name: 'Toto2',
        image: 'file.svg',
        description: 'asd'
      }
    ],
    status: 200
  }
  return withDelay(response)
}

export const getServices = () => {
  const response = {
    services: [
      {
        id: 'hair_service',
        name: 'Hair Services',
        duration: '1hs',
        price: 25,
        description: 'qweqweqe'
      },
      {
        id: 'body_tratments',
        name: 'Body Treatments',
        duration: '1hs',
        price: 20,
        description: 'xvdsfsdf'
      },
      {
        id: 'nail',
        name: 'Nail Services',
        duration: '1hs',
        price: 15,
        description: 'xvdsfsdf'
      },
      {
        id: 'spa',
        name: 'Spa & Relaxation',
        duration: '1hs',
        price: 32,
        description: 'asd'
      },
      {
        id: 'makeup',
        name: 'Makeup Services',
        duration: '1hs',
        price: 22,
        description: 'asd'
      },
      {
        id: 'hair_removal',
        name: 'Hair Removal',
        duration: '1hs',
        price: 17,
        description: 'asd'
      }
    ],
    status: 200
  }
  return withDelay(response)
}
