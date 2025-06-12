import { CheckCircle, XCircle, MapPin, DollarSign, Calendar, Clock } from 'lucide-react';
import { Tender } from '../types';
import { pendingTenders } from '../data/mockData';

export default function PendingTenders() {
  const [tenders, setTenders] = useState<Tender[]>(pendingTenders);

  const handleApprove = (tenderId: string) => {
    setTenders(tenders.filter(tender => tender.id !== tenderId));
    console.log(`Approved tender ${tenderId}`);
  };

  const handleReject = (tenderId: string, reason: string) => {
    setTenders(tenders.filter(tender => tender.id !== tenderId));
    console.log(`Rejected tender ${tenderId} with reason: ${reason}`);
  };

  const formatPosition = (position: string) => {
    return position.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Pending Job Tenders</h2>
        <p className="text-gray-600">Review and moderate job postings awaiting approval</p>
      </div>

      {tenders.length === 0 ? (
        <div className="text-center py-12">
          <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">All caught up!</h3>
          <p className="text-gray-600">No pending job tenders to review.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {tenders.map((tender) => (
            <div key={tender.id} className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{tender.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <span className="font-medium text-gray-900">
                      {tender.isAnonymous ? 'Anonymous Restaurant' : tender.restaurant}
                    </span>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{tender.city}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="h-4 w-4" />
                      <span>{tender.salary}</span>
                    </div>
                  </div>
                  <span className="inline-block bg-emerald-100 text-emerald-700 text-sm px-3 py-1 rounded-full font-medium mb-3">
                    {formatPosition(tender.position)}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{tender.description}</p>

              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Requirements:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {tender.requirements.slice(0, 3).map((req, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-emerald-500 mt-1">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center space-x-4 text-xs text-gray-500 mb-4">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-3 w-3" />
                  <span>Posted {formatDate(tender.postedDate)}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-3 w-3" />
                  <span>Deadline {formatDate(tender.deadline)}</span>
                </div>
                <div>
                  Submitted: {new Date(tender.submittedAt).toLocaleDateString()} at {new Date(tender.submittedAt).toLocaleTimeString()}
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => handleApprove(tender.id)}
                  className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm"
                >
                  <CheckCircle className="h-4 w-4" />
                  <span>Approve</span>
                </button>
                <button
                  onClick={() => {
                    const reason = prompt('Please provide a reason for rejection:');
                    if (reason) handleReject(tender.id, reason);
                  }}
                  className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors text-sm"
                >
                  <XCircle className="h-4 w-4" />
                  <span>Reject</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
