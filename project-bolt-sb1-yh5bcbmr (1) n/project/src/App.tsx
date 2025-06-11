import React, { useState } from 'react';
import Header from './components/Header';
import CooksPage from './components/CooksPage';
import TendersPage from './components/TendersPage';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [currentTab, setCurrentTab] = useState<'cooks' | 'tenders' | 'admin'>('cooks');
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [adminEmail, setAdminEmail] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleAdminLogin = (credentials: { username: string; password: string }) => {
    // Simple demo authentication - in production, this would be a secure API call
    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      setIsAdminLoggedIn(true);
      setAdminEmail('admin@cookconnect.ma');
      setLoginError('');
    } else {
      setLoginError('Invalid credentials. Please try again.');
    }
  };

  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false);
    setAdminEmail('');
    setCurrentTab('cooks');
  };

  // Admin login page
  if (currentTab === 'admin' && !isAdminLoggedIn) {
    return <AdminLogin onLogin={handleAdminLogin} error={loginError} />;
  }

  // Admin dashboard
  if (currentTab === 'admin' && isAdminLoggedIn) {
    return <AdminDashboard onLogout={handleAdminLogout} adminEmail={adminEmail} />;
  }

  // Public site
  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        currentTab={currentTab} 
        onTabChange={setCurrentTab}
        showAdminLink={true}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentTab === 'cooks' ? <CooksPage /> : <TendersPage />}
      </main>
    </div>
  );
}

export default App;