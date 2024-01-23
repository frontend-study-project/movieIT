import { http, HttpResponse } from 'msw';

export const handlers = [
  http.post('/auth/login', async ({ request }) => {
    const user = await request.json();
    return HttpResponse.json(user, { status: 201 });
  })
];