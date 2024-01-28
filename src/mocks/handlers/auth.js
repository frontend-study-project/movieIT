import { http, HttpResponse } from 'msw';
import { AUTH } from '../../api/auth.api';
import { CURRENT_PASSWORD_EQUAL, CURRENT_PASSWORD_NOT_EQUAL, NEW_PASSWORD_NOT_EQUAL } from '../../api/error/auth';

const isAuthenticated = async (request) => {
  const Authorization = request.headers
    .get('Authorization')
    .replace('Bearer', '')
    .trim();

  if (!Authorization) {
    throw new HttpResponse(null, { status: 401 })
  }
}

export const authHandlers = [
  http.post(`${AUTH}/login`, async ({ request }) => {
    const user = await request.json();

    if (user.id !== 'admin'
      || user.password !== 'admin12!') {
      throw new HttpResponse(null, { status: 400 })
    }

    return HttpResponse.json({
      user: {
        ...user,
        password: null,
        nickname: '별명1'
      },
      token: 'access token'
    }, { status: 201 });
  }),

  http.post(`${AUTH}/join`, async ({ request }) => {
    const user = await request.json();
    return HttpResponse.json(user, { status: 201 });
  }),

  http.post(`${AUTH}/duplication-check`, async ({ request }) => {
    const id = await request.text();

    if (id === 'admin') {
      throw new HttpResponse(id, { status: 400 });
    }

    return HttpResponse.text(undefined, { status: 201 });
  }),

  http.get(`${AUTH}/user`, async ({ request }) => {
    await isAuthenticated(request);
    
    return HttpResponse.json({ id: '아이디1', nickname: '별명1' }, { status: 201 });
  }),

  http.patch(`${AUTH}/user/:id`, async ({ request }) => {
    await isAuthenticated(request);

    const user = await request.json();
    return HttpResponse.json(user, { status: 201 });
  }),

  http.patch(`${AUTH}/user/:id/change-password`, async ({ request }) => {
    await isAuthenticated(request);

    const { password, newPassword, newPasswordConfirm } = await request.json();

    if (password !== 'admin12!') {
      throw new HttpResponse(null,  { status: 400, statusText: CURRENT_PASSWORD_NOT_EQUAL });
    }

    if (newPassword !== newPasswordConfirm) {
      throw new HttpResponse(null,  { status: 400, statusText: NEW_PASSWORD_NOT_EQUAL });
    }

    if (password === newPassword) {
      throw new HttpResponse(null, { status: 400, statusText: CURRENT_PASSWORD_EQUAL });
    }

    return HttpResponse.json(password, { status: 201 });
  })
]
