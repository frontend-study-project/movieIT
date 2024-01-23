const AUTH = '/auth';

export const login = (form) => (
  fetch(`${AUTH}/login`, { 
    method: 'post', 
    body: JSON.stringify(form)
  })
);