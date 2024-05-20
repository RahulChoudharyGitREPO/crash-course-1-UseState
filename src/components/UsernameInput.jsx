import { useState } from 'react';

function UsernameInput() {
  const [username, setUsername] = useState('');

  return (
    <div>
      <h1>User Name on Type</h1>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <p>Username: {username.toLowerCase()}</p>
      <br />
      <br />
      <br />
    </div>
  );
}

export default UsernameInput;
