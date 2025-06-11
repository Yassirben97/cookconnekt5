
import { Users, FileText, CheckCircle, XCircle, Clock, LogOut, BarChart3 } from 'lucide-react';
import { ModerationStats } from '../types';
import PendingCooks from './PendingCooks';
import PendingTenders from './PendingTenders';
import ModerationHistory from './ModerationHistory';

interface AdminDashboardProps {
  onLogout: () => void;
  adminEmail: string;
}

export default function AdminDashboard({ onLogout, adminEmail }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<'pending-cooks' | 'pending-tenders' | 'history' | 'stats'>('pending-cooks');

  const stats: ModerationStats = {
    pendingCooks: 1,
    pendingTenders: 1,
    totalApproved: 7,
    totalRejected: 0
  };

  const tabs = [
    { id: 'pending-cooks', label: 'Pending Cooks', icon: Users, count: stats.pendingCooks },
    { id: 'pending-tenders', label: 'Pending Tenders', icon: FileText, count: stats.pendingTenders },
    { id: 'history', label: 'Moderation History', icon: BarChart3 },
    { id: 'stats', label: 'Statistics', icon: BarChart3 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-orange-500 p-2 rounded-lg">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-sm text-gray-600">Content Moderation Portal</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, {adminEmail}</span>
              <button
                onClick={onLogout}
                className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors"
              >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-3">
              <div className="bg-yellow-100 p-2 rounded-lg">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Pending Cooks</p>
                <p className="text-2xl font-bold text-gray-900">{stats.pendingCooks}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Pending Tenders</p>
                <p className="text-2xl font-bold text-gray-900">{stats.pendingTenders}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Approved</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalApproved}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-3">
              <div className="bg-red-100 p-2 rounded-lg">
                <XCircle className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Rejected</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalRejected}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-orange-500 text-orange-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="h-5 w-5" />
                  <span>{tab.label}</span>
                  {tab.count !== undefined && tab.count > 0 && (
                    <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                      {tab.count}
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'pending-cooks' && <PendingCooks />}
            {activeTab === 'pending-tenders' && <PendingTenders />}
            {activeTab === 'history' && <ModerationHistory />}
            {activeTab === 'stats' && (
              <div className="text-center py-12">
                <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Detailed Statistics</h3>
                <p className="text-gray-600">Advanced analytics and reporting features coming soon.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
