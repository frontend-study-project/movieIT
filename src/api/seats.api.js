import { API_PREFIX } from ".";
import { getAuthorization } from "./auth.api";

export const BOOKING = `${API_PREFIX}/booking`;

export const fetchSeatsLeft = (movieId, theaterId, hour) =>
  fetch(`${BOOKING}/movie/${movieId}/theater/${theaterId}?hour=${hour}`);
  
export const fetchSeatsOccupied = (movieId,theaterId, date) =>
  fetch(
    `${BOOKING}/movie/${movieId}/theater/${theaterId}/seat?date=${date}`,
    {
      headers: {
        Authorization: `Bearer ${getAuthorization()}`,
        "Content-Type": "application/json",
      },
    }
  );
