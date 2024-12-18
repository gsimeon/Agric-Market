import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';

<Link 
  to="/create-listing"
  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
>
  <Plus size={20} />
  <span>Create Listing</span>
</Link> 