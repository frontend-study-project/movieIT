import { API_PREFIX } from ".";
import { getAuthorization } from "./auth.api";

export const BOOKING = `${API_PREFIX}/booking`;

export const fetchMyBookingList = (id, param) => (
  fetch(`${BOOKING}/user/${id}?${param}`, { 
    method: 'get', 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getAuthorization()}`,
    },
  })
);
