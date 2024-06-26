import { ShareIcon} from '@heroicons/react/24/solid'
import { Bars3Icon} from '@heroicons/react/24/outline'

import montaLogo from '../../assets/monta-logo.png';
import { Dispatch, SetStateAction } from 'react';

interface HeaderProps {
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

const Header = ({  setSidebarOpen }: HeaderProps) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Monta AI Chat',
          url: window.location.href,
        });
        console.log('Thanks for sharing!');
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      alert('Your browser does not support the share functionality.');
    }
  };

  return (
    <header className="bg-monta-purple text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Bars3Icon className="h-8 mr-2 lg:hidden " 
        onClick={() => setSidebarOpen(true)}
        />
        <img src={montaLogo} alt="Monta AI Logo" className="h-8 mr-2" />
        <h1 className="text-2xl hidden md:block">Monta AI Chat</h1>
      </div>
      <button
        onClick={handleShare}
        className="flex items-center p-2 bg-white text-monta-purple rounded-md"
      >
        <ShareIcon className="h-5 w-5 mr-1" />
        Share
      </button>
    </header>
  );
};

export default Header;
