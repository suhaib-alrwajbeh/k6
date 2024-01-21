import http from 'k6/http';
import { check } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 10 }, // Ramp-up to 10 virtual users over 1 minute
    { duration: '1m', target: 10 }, // Stay at 10 virtual users for 5 minutes
    { duration: '10s', target: 0 }, // Ramp-down to 0 virtual users over 1 minute
  ],
};

export default function () {
  const url = 'http://localhost:3000/graphql'; // Replace with your actual API endpoint

  const query = `
    query {
      getUser(id: 9) {
        id
        name
        email
      }
    }
  `;

  const payload = JSON.stringify({ query });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.post(url, payload, params);

  check(res, {
    'Status is 200': (r) => r.status === 200,
  });

  // Add additional checks based on your response if needed
}
