import { http, HttpResponse } from 'msw';
import { BOOKING } from '../../api/booking.api';
import { isAuthenticated } from './auth';

const bookingList = Array
  .from({ length: 15 }, (_, i) => ({
    id: `005-01${12 + i}`,
    user: '아이디1',
    poster : 'https://img.megabox.co.kr/SharedImg/2024/01/26/FOxTe9tC9RJ8eH1ZYIW3BE0o2fDEVNmW_420.jpg',
    movie: '시민덕희',
    theater: '영등포 CGV',
    date: `2024.0${Math.floor(Math.random() * 2) + 1}.${Math.floor(Math.random() * 30) + 1}(금) 10:40`,
    seat: 'K 12',
    money: '15000',
  }))
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const bookingHandlers = [
  http.get(`${BOOKING}/user/:id`, async ({ request, params: { id } }) => {
    await isAuthenticated(request);

    const url = new URL(request.url);
    const [type, date] = ['type', 'date']
      .map((key) => url.searchParams.get(key));

          const currentBookingList = bookingList
      .filter(({ user }) => user === id)
      .filter((booking) => {
        if (type === 'B') {
          return new Date(booking.date) > new Date();
        }

        const bookingDate = new Date(booking.date);
        const [year, month] = [bookingDate.getFullYear(), bookingDate.getMonth() + 1];
        const [, diffYear, diffMonth] = [...date.match(/(\d{4})년 (\d{1,2})월/)];

        return year === parseInt(diffYear) && month === parseInt(diffMonth);
      });
    
    return HttpResponse.json(currentBookingList, { status: 201 });
  }),
]