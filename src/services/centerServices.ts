import { fakeAxios } from './FakeAxios'
import { useQuery } from '@tanstack/react-query'

export const useGetCenters = () => {
  const query = useQuery({
    queryKey: ['centers'],
    queryFn: () => fakeAxios.get('test1')
  })

  return query
}
