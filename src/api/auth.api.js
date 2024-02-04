import { API_PREFIX } from ".";

export const AUTH = `${API_PREFIX}/auth`;

export const fetchUser = () => (
  fetch(`${AUTH}/user`, { 
    method: 'get', 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getAuthorization()}`,
    },
  })
);

export const login = (form) => (
  fetch(`${AUTH}/login`, { 
    method: 'post', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form)
  })
);

export const join = (form) => (
  fetch(`${AUTH}/join`, { 
    method: 'post', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form)
  })
);

export const checkDuplicateId = (id) => (
  fetch(`${AUTH}/duplication-check/${id}`, { 
    method: 'get', 
    headers: {
      'Content-Type': 'application/json',
    },
  })
);

export const updateUser = (form) => (
  fetch(`${AUTH}/user/${form.id}`, { 
    method: 'patch', 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getAuthorization()}`,
    },
    body: JSON.stringify(form),
  })
);

export const changePassword = (form) => (
  fetch(`${AUTH}/user/${form.id}/change-password`, { 
    method: 'patch', 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getAuthorization()}`,
    },
    body: JSON.stringify(form),
  })
)

export const setAuthorization = (token) => {
  localStorage.setItem('token', token);
};

export const getAuthorization = () => {
  return localStorage.getItem('token') || '';
};