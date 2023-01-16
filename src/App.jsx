import React from 'react';

import Form from './components/Form.jsx';
import { useState } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);


  return (
    <div>
      <div className="card shadow">
        <div className="card-body">
          <Form users={users} setUsers={setUsers} />
        </div>
      </div>
    </div>
  )
}

export default App