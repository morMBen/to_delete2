import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className='page'>
      <div className='form'>
        <h1>Sign In</h1>
        <input />
        <input />
        <input />
        If you have an account click <Link to='/login'>here</Link>
        <div>
          <button>Sign In</button>
          <button>
            <Link to='/'> Cancel</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
