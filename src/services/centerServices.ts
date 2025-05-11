import { getCenters } from './FakeAxios'
import { useQuery } from '@tanstack/react-query'

export const useGetCenters = () => {
  const query = useQuery({
    queryKey: ['centers'],
    queryFn: getCenters
  })

  return query
}
