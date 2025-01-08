'use client';
import React from 'react';
import SignupForm from '@/components/SignupForm/page';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <SignupForm />
    </div>
  );
};

export default LoginPage;