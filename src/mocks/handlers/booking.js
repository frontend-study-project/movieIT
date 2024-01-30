import { http, HttpResponse } from 'msw';
import { BOOKING } from '../../api/booking.api';
import { isAuthenticated } from './auth';

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
  http.get(`${BOOKING}/user/:id`, async ({ request, params }) => {
    await isAuthenticated(request);

    const { page, type, date } = params;
    const currentBookingList = bookingList
      .filter((booking) => {
        if (type === 'B') {
          return new Date(booking.date) > new Date();
        }

        const bookingDate = new Date(booking.date);
        const [year, month] = [bookingDate.getFullYear(), bookingDate.getMonth() + 1];
        const [, diffYear, diffMonth] = [...date.match(/(\d{4})년 (\d{1,2})월/)];

        return year === parseInt(diffYear) && month === parseInt(diffMonth);
      })
      .slice(0, page * 10);
    
    return HttpResponse.json(currentBookingList, { status: 201 });
  }),
]