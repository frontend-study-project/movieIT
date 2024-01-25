import { http, HttpResponse } from 'msw';
import { BOOKING } from '../../api/booking.api';

const bookingList = [
  {
    id: '005-0112-5289-295',
    poster : '',
    movie: '시민덕희',
    theater: '영등포 CGV',
    date: '2024.02.12(금) 10:40',
    seat: 'K 12',
    money: '15000',
  }
];

export const bookingHandlers = [
  http.get(`${BOOKING}/user/:id`, ({ request, params }) => {
    const Authorization = request.headers
      .get('Authorization')
      .replace('Bearer ', '');

    if (!Authorization) {
      return HttpResponse.error().status(401);
    }

    const { page } = params;
    const currentBookingList = bookingList
      .filter((booking) => booking)
      .slice(0, page * 10);
    
    return HttpResponse.json(currentBookingList, { status: 201 });
  }),
]