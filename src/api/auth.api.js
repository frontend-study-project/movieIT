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

export const setAuthorization = (key) => {
  localStorage.setItem('key', key);
};