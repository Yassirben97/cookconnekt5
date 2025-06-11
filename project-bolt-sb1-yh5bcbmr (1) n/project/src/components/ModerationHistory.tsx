import { CheckCircle, XCircle, Clock, User, FileText } from 'lucide-react';

interface ModerationAction {
  id: string;
  type: 'cook' | 'tender';
  itemName: string;
  action: 'approved' | 'rejected';
  reviewedBy: string;
  reviewedAt: string;
  reason?: string;
}

const mockHistory: ModerationAction[] = [
  {
    id: '1',
    type: 'cook',
    itemName: 'Omar Bennani',
    action: 'approved',
    reviewedBy: 'admin@cookconnect.ma',
    reviewedAt: '2024-01-17T09:30:00Z'
  },
  {
    id: '2',
    type: 'cook',
    itemName: 'Fatima Zahra',
    action: 'approved',
    reviewedBy: 'admin@cookconnect.ma',
    reviewedAt: '2024-01-15T10:20:00Z'
  },
  {
    id: '3',
    type: 'tender',
    itemName: 'Line Cook - Beachfront Restaurant',
    action: 'approved',
    reviewedBy: 'admin@cookconnect.ma',
    reviewedAt: '2024-01-22T14:15:00Z'
  },
  {
    id: '4',
    type: 'cook',
    itemName: 'Youssef El Idrissi',
    action: 'approved',
    reviewedBy: 'admin@cookconnect.ma',
    reviewedAt: '2024-01-12T16:45:00Z'
  }
];

export default function ModerationHistory() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Moderation History</h2>
        <p className="text-gray-600">Recent moderation actions and decisions</p>
      </div>

      <div className="space-y-4">
        {mockHistory.map((action) => (
          <div key={action.id} className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex items-start space-x-4">
              <div className={`p-2 rounded-lg ${
                action.action === 'approved' 
                  ? 'bg-green-100' 
                  : 'bg-red-100'
              }`}>
                {action.type === 'cook' ? (
                  <User className={`h-5 w-5 ${
                    action.action === 'approved' ? 'text-green-600' : 'text-red-600'
                  }`} />
                ) : (
                  <FileText className={`h-5 w-5 ${
                    action.action === 'approved' ? 'text-green-600' : 'text-red-600'
                  }`} />
                )}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="font-medium text-gray-900">{action.itemName}</h3>
                  <span className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
                    action.action === 'approved'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {action.action === 'approved' ? (
                      <CheckCircle className="h-3 w-3" />
                    ) : (
                      <XCircle className="h-3 w-3" />
                    )}
                    <span className="capitalize">{action.action}</span>
                  </span>
                </div>
                
                <div className="text-sm text-gray-600 space-y-1">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{formatDate(action.reviewedAt)}</span>
                  </div>
                  <div>Reviewed by: {action.reviewedBy}</div>
                  {action.reason && (
                    <div className="text-red-600">Reason: {action.reason}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {mockHistory.length === 0 && (
        <div className="text-center py-12">
          <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No History Yet</h3>
          <p className="text-gray-600">Moderation actions will appear here once you start reviewing content.</p>
        </div>
      )}
    </div>
  );
}