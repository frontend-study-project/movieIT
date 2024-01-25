import { http, HttpResponse } from 'msw';
import { AUTH } from '../../api/auth.api';

export const authHandlers = [
  http.post(`${AUTH}/login`, async ({ request }) => {
    const user = await request.json();
    return HttpResponse.json({
      user,
      token: 'access token'
    }, { status: 201 });
  }),

  http.post(`${AUTH}/join`, async ({ request }) => {
    const user = await request.json();
    return HttpResponse.json(user, { status: 201 });
  }),

  http.post(`${AUTH}/duplication-check`, async () => {
    return HttpResponse.json(undefined, { status: 201 });
  }),

  http.get(`${AUTH}/user`, async ({ request }) => {
    const Authorization = request.headers
      .get('Authorization')
      .replace('Bearer ', '');

    if (!Authorization) {
      return HttpResponse.error().status(401);
    }
    
    return HttpResponse.json({ id: '아이디1', nickname: '별명1' }, { status: 201 });
  }),

  http.patch(`${AUTH}/user/:id`, async ({ request }) => {
    const Authorization = request.headers
      .get('Authorization')
      .replace('Bearer ', '');

    if (!Authorization) {
      return HttpResponse.error().status(401);
    }

    const user = await request.json();
    return HttpResponse.json(user, { status: 201 });
  })
]
