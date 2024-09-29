import { useQuery } from "@tanstack/react-query";
import { fetchSeatsOccupied } from "../api/seats.api";

export const useFetchSeatsOccupiedQuery = ({movieId, theaterId, date, activate}) => useQuery({
  queryKey: ['seats', 'occupied'],
  queryFn: () => {
    const response = fetchSeatsOccupied(movieId, theaterId, date)

    if (!response.ok) throw new Error('Cannot get occupied seats info')
    return response.json();
  },
  enabled: activate
})