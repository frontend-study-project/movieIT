import { http, HttpResponse } from 'msw';

export const handlers = [
  http.post('/auth/login', async ({ request }) => {
    const user = await request.json();
    return HttpResponse.json({
      user,
      token: 'access token'
    }, { status: 201 });
  }),

  http.post('/auth/join', async ({ request }) => {
    const user = await request.json();
    return HttpResponse.json(user, { status: 201 });
  }),

  http.post('/auth/duplication-check', async () => {
    return HttpResponse.json(undefined, { status: 201 });
  })
];