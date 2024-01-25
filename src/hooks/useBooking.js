import { useSuspenseQuery } from "@tanstack/react-query";
import * as bookingApi from '../api/booking.api';

export const useFetchMyBookingListQuery = ({ id, page = 1, search = null }) => (
  useSuspenseQuery({
    queryKey: ['booking', id, { page, search }],
    queryFn() {
      const searchParams = new URLSearchParams({ page, search })
      const response = bookingApi.fetchMyBookingList(id, searchParams.toString());
      
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    }
  })
);
