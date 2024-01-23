const AUTH = '/auth';

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
  fetch(`${AUTH}/duplication-check`, { 
    method: 'post', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: id
  })
);

export const setAuthorization = (token) => {
  localStorage.setItem('token', token);
};