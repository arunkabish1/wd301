import SignupForm from "./SignupForm";
import React from 'react';

const Signup: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-blue-500 mb-8">Create an Account</h1>
        <SignupForm />
        <p className="text-sm text-gray-600 mt-4">
          Already have an account? <a href="/signin" className="text-blue-500 hover:underline">Sign In</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
