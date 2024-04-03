import { useQuery } from "@tanstack/react-query";
import { fetchSeatsOccupied } from "../api/seats.api";

export const useFetchSeatsOccupiedQuery = ({movieId, theaterId, date, activate}) => useQuery({
  queryKey: ['seats', 'occupied'],
  queryFn: async () => {
    const response = await fetchSeatsOccupied(movieId, theaterId, date)
    return response.json();
  },
  enabled: activate
})