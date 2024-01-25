import { authHandlers } from "./handlers/auth";
import { bookingHandlers } from "./handlers/booking";

export const handlers = [
  ...bookingHandlers,
  ...authHandlers,  
];