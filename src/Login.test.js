import { render, screen } from '@testing-library/react';
import Login from './pages/Login';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
// test('login in form', () => {
//   render(
//     <Router>
//       <Login />
//     </Router>
//   );
//   //   screen.debug();
//   expect(screen.getByRole('button', { type: /submit/i })).toBeEnabled();
// });

test('if user can log in', () => {
  render(
    <Router>
      <Login />
    </Router>
  );
  userEvent.type(
    screen.getByPlaceholderText(/Enter Your Email/i),
    'ruto@gmail.com'
  );
  userEvent.type(screen.getByPlaceholderText(/Enter password/i), '123456');
});
