import React, { useState } from 'react';
import { Menu, Sun, Moon, ShoppingCart, Bell } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import AuthModal from '../auth/AuthModal';
import AuthForm from '../auth/AuthForm';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function Header({ onNavigate, currentPage }: HeaderProps) {
  const { isDark, toggleTheme } = useTheme();
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const handleAuth = (data: { email: string; password: string }) => {
    // Handle authentication logic here
    console.log('Auth data:', data);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, page: string) => {
    e.preventDefault();
    onNavigate(page);
  };

  return (
    <>
      <header className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button className="p-2 rounded-md lg:hidden">
                <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              </button>
              <div className="flex-shrink-0 flex items-center">
                <h1 
                  onClick={(e) => handleNavClick(e as any, 'home')}
                  className="text-2xl font-bold text-green-600 dark:text-green-400 cursor-pointer"
                >
                  AgroMarket
                </h1>
              </div>
            </div>

            <nav className="hidden lg:flex space-x-8">
              <a
                href="#"
                onClick={(e) => handleNavClick(e, 'marketplace')}
                className={`${
                  currentPage === 'marketplace'
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400'
                }`}
              >
                Marketplace
              </a>
              <a
                href="#"
                onClick={(e) => handleNavClick(e, 'dashboard')}
                className={`${
                  currentPage === 'dashboard'
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400'
                }`}
              >
                Dashboard
              </a>
              <a
                href="#"
                onClick={(e) => handleNavClick(e, 'about')}
                className={`${
                  currentPage === 'about'
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400'
                }`}
              >
                About
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                {isDark ? (
                  <Sun className="h-5 w-5 text-gray-300" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-600" />
                )}
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                <Bell className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                <ShoppingCart className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </button>
              <button
                onClick={() => setIsSignUpOpen(true)}
                className="bg-white text-green-600 border border-green-600 px-4 py-2 rounded-md hover:bg-green-50 dark:bg-transparent dark:text-green-400 dark:border-green-400 dark:hover:bg-gray-800"
              >
                Sign Up
              </button>
              <button
                onClick={() => setIsSignInOpen(true)}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </header>

      <AuthModal
        isOpen={isSignInOpen}
        onClose={() => setIsSignInOpen(false)}
        title="Sign In to AgroMarket"
      >
        <AuthForm type="signin" onSubmit={handleAuth} />
        <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
          Don't have an account?{' '}
          <button
            onClick={() => {
              setIsSignInOpen(false);
              setIsSignUpOpen(true);
            }}
            className="text-green-600 dark:text-green-400 hover:text-green-500"
          >
            Sign up
          </button>
        </p>
      </AuthModal>

      <AuthModal
        isOpen={isSignUpOpen}
        onClose={() => setIsSignUpOpen(false)}
        title="Create an Account"
      >
        <AuthForm type="signup" onSubmit={handleAuth} />
        <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
          Already have an account?{' '}
          <button
            onClick={() => {
              setIsSignUpOpen(false);
              setIsSignInOpen(true);
            }}
            className="text-green-600 dark:text-green-400 hover:text-green-500"
          >
            Sign in
          </button>
        </p>
      </AuthModal>
    </>
  );
}