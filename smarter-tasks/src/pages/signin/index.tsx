import React from 'react';
import SigninForm from './SigninForm';

const Signin: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-blue-500 mb-8">Sign In</h1>
        <SigninForm />
        <p className="text-sm text-gray-600 mt-4">
          Don't have an account ? <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Signin;
