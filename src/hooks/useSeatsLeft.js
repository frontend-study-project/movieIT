import { useQuery } from "@tanstack/react-query";
import { fetchSeatsLeft } from "../api/seats.api";

export const useFetchSeatsLeftQuery = ({movieId, theaterId, date, hour, activate}) => useQuery({
  queryKey: ['seats', movieId, theaterId, date, hour],
  async queryFn() {
    const response = await fetchSeatsLeft(movieId, theaterId, date, hour);

    return response.json();
  },
  enabled: activate
})