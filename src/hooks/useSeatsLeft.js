import { useQuery } from "@tanstack/react-query";
import { fetchSeatsLeft } from "../api/seats.api";

export const useFetchSeatsLeftQuery = ({movieId, theaterId, hour, activate}) => useQuery({
  queryKey: ['seats'],
  async queryFn() {
    const response = await fetchSeatsLeft(movieId, theaterId, hour);

    return response.json();
  },
  enabled: activate
})