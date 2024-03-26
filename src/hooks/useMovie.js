import { useQuery } from "@tanstack/react-query";

export const useFetchMovieDetailQuery = () => useQuery({
  queryKey: ['movie'],
  async queryFn() {
    const response = await fetch("http://localhost:3000/api/movie/now_playing?page=1");
    
    return response.json();
  },
})