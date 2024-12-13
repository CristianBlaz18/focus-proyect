import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Login from '../pages/Login';
import ErrorBoundary from '../components/ErrorBoundary';
import { AuthProvider } from '../context/AuthContext';

const LoadingSpinner = () => (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
    </div>
  );

  const AppRoutes = () => {
    return (
      <React.Suspense fallback={<LoadingSpinner />}>
        <AuthProvider>
        <Routes>
          
          <Route 
            path="/" 
            element={<Login/>}
            errorElement={<ErrorBoundary />}
          />

             
          <Route 
            path="*" 
            element={<ErrorBoundary />} 
          />
        </Routes>
        </AuthProvider>
        
      </React.Suspense>
    );
  };
  
  export default AppRoutes;