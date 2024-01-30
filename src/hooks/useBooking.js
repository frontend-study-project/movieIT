import { useQuery } from "@tanstack/react-query";
import * as bookingApi from '../api/booking.api';

export const useFetchMyBookingListQuery = ({ id, page = 1, search = null }) => (
  useQuery({
    queryKey: ['booking', id, { page, search }],
    queryFn() {
      const searchParams = new URLSearchParams({ page });

      if (search) {
        searchParams.append('type', search.booking);
        searchParams.append('date', search.bookingDate);
      }

      const response = bookingApi.fetchMyBookingList(id, searchParams.toString());
      
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    },
    enabled: !!id
  })
);
