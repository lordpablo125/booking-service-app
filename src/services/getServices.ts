import { getServices } from './FakeAxios'
import { useQuery } from '@tanstack/react-query'

export const useGetServices = () => {
  const query = useQuery({
    queryKey: ['services'],
    queryFn: getServices
  })

  return query
}
