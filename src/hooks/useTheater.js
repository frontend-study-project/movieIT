import { useQuery } from "@tanstack/react-query"
import { API_PREFIX } from "../api";

export const useFetchTheaterListQuery = () => useQuery({
  queryKey: ['theater'],
  async queryFn() {
    const response = await fetch(`${API_PREFIX}/theater`);

    return response.json();
  }
})