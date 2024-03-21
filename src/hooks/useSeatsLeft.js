import { useQuery } from "@tanstack/react-query";

export const useFetchSeatsLeftQuery = ({movieId, theaterId, hour, activate}) => useQuery({
  queryKey: ['seats'],
  async queryFn() {
    const response = await fetch(`http://localhost:3000/api/booking/movie/${movieId}/theater/${theaterId}?hour=${hour}`)

    return response.json();
  },
  enabled: activate
})