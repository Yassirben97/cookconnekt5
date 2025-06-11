import { ChefHat, Users, FileText, Shield } from 'lucide-react';

interface HeaderProps {
  currentTab: 'cooks' | 'tenders' | 'admin';
  onTabChange: (tab: 'cooks' | 'tenders' | 'admin') => void;
  showAdminLink?: boolean;
}

export default function Header({ currentTab, onTabChange, showAdminLink = false }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-orange-500 p-2 rounded-lg">
              <ChefHat className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">CookConnect</h1>
              <p className="text-sm text-gray-600">Professional Culinary Network</p>
            </div>
          </div>
          
          <nav className="flex space-x-1">
            <button
              onClick={() => onTabChange('cooks')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                currentTab === 'cooks'
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'text-gray-600 hover:text-orange-500 hover:bg-orange-50'
              }`}
            >
              <Users className="h-5 w-5" />
              <span>Find Cooks</span>
            </button>
            <button
              onClick={() => onTabChange('tenders')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                currentTab === 'tenders'
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'text-gray-600 hover:text-orange-500 hover:bg-orange-50'
              }`}
            >
              <FileText className="h-5 w-5" />
              <span>Job Tenders</span>
            </button>
            {showAdminLink && (
              <button
                onClick={() => onTabChange('admin')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  currentTab === 'admin'
                    ? 'bg-gray-800 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                }`}
              >
                <Shield className="h-5 w-5" />
                <span>Admin</span>
              </button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}