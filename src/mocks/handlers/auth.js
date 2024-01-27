import { http, HttpResponse } from 'msw';
import { AUTH } from '../../api/auth.api';
import { CURRENT_PASSWORD_EQUAL, PASSWORD_NOT_EQUAL } from '../../api/error/auth';

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

    if (newPassword !== newPasswordConfirm) {
      throw new HttpResponse({ errorCode: PASSWORD_NOT_EQUAL }, { status: 400,  });
    }

    if (password === newPassword) {
      throw new HttpResponse({ errorCode: CURRENT_PASSWORD_EQUAL }, { status: 400,  });
    }

    return HttpResponse.json(true, { status: 201 });
  })
]
