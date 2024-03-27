import { useQuery } from "@tanstack/react-query";
import { getAuthorization } from "../api/auth.api";

export const useFetchSeatsOccupiedQuery = ({movieId, theaterId, date, activate}) => useQuery({
  queryKey: ['seats', 'occupied'],
  queryFn: async () => {
    const response = await fetch(`http://localhost:3000/api/booking/movie/${movieId}/theater/${theaterId}/seat?date=${date}`,{
      headers: {
        Authorization: `Bearer ${getAuthorization()}`, 
        'Content-Type': 'application/json',
      }
    })
    return response.json();
  },
  enabled: activate
})