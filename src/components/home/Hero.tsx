import React, { useState } from 'react';
import { ArrowRight, Sprout } from 'lucide-react';
import AuthModal from '../auth/AuthModal';
import AuthForm from '../auth/AuthForm';

export default function Hero() {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const handleAuth = (data: { email: string; password: string }) => {
    // Handle authentication logic here
    console.log('Auth data:', data);
  };

  return (
    <>
      <div className="relative bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
          <div className="mx-auto max-w-3xl">
            <div className="flex justify-center mb-8">
              <Sprout className="h-16 w-16 text-green-600 dark:text-green-400" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Connect, Trade, and Grow Together
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Join the future of agricultural trading. Connect directly with farmers and buyers,
              compare prices in real-time, and access seamless logistics support.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button 
                onClick={() => setIsSignUpOpen(true)}
                className="rounded-md bg-green-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Join the Marketplace
              </button>
              <button className="text-lg font-semibold leading-6 text-gray-900 dark:text-white flex items-center">
                Learn more <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#68a94a] to-[#bef264] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
        </div>
      </div>

      <AuthModal
        isOpen={isSignUpOpen}
        onClose={() => setIsSignUpOpen(false)}
        title="Create an Account"
      >
        <AuthForm type="signup" onSubmit={handleAuth} />
        <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
          Already have an account?{' '}
          <button
            onClick={() => setIsSignUpOpen(false)}
            className="text-green-600 dark:text-green-400 hover:text-green-500"
          >
            Sign in
          </button>
        </p>
      </AuthModal>
    </>
  );
}