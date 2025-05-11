function withDelay<T>(data: T, delay = 2000): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), delay)
  })
}

export const fakeAxios = {
  get: (url: string, config?: any) => {
    const response = {
      data: { message: `GET request to ${url} succeeded` },
      status: 200
    }
    return withDelay(response)
  },

  post: (url: string, data?: any, config?: any) => {
    const response = {
      data: { message: `POST to ${url} succeeded`, received: data },
      status: 201
    }
    return withDelay(response)
  }

  // Más métodos si los necesitás (put, delete, etc.)
}
