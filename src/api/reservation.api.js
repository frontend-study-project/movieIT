import { API_PREFIX } from ".";
import { getAuthorization } from "./auth.api";

export const RESERVATION = `${API_PREFIX}/reservation`;

export const postReservation = (data) =>
  fetch(`${RESERVATION}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getAuthorization()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...data, auditorium: "" }),
  });
