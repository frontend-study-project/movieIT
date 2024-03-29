import { useQuery } from "@tanstack/react-query";
import { API_PREFIX } from "../api";

export const useFetchMovieDetailQuery = () => useQuery({
  queryKey: ['movie'],
  async queryFn() {
    const response = await fetch(`${API_PREFIX}/movie/now_playing?page=1`);
    
    return response.json();
  },
})