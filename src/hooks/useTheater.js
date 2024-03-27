import { useQuery } from "@tanstack/react-query"

export const useFetchTheaterListQuery = () => useQuery({
  queryKey: ['theater'],
  async queryFn() {
    const response = await fetch('http://localhost:3000/api/theater');

    return response.json();
  }
})