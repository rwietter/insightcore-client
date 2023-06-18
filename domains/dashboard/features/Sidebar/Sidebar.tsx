import Link from 'next/link';
import { RiPieChartLine } from 'react-icons/ri';
import { TfiDownload } from 'react-icons/tfi';
import { BiHomeAlt } from 'react-icons/bi';
import { useRouter } from 'next/router';

const linkStyle = 'bg-foregroundLight rounded-full p-2 shadow-md shadow-gray-400';

const Sidebar = () => {
  const { asPath } = useRouter();

  const isColorActive = (path: string) => {
    return asPath === path ? '#ffff' : '#C1CAD8';
  };

  const isLinkActive = (path: string) => {
    return asPath === path ? linkStyle : '';
  };

  return (
    <aside className='bg-primary bg-opacity-80 fixed left-0 h-screen w-16 z-0 flex items-center justify-center flex-col'>
      <Link href="/" className={isLinkActive('/')}>
        <BiHomeAlt size={23} color={isColorActive('/')} />
      </Link>
      <Link href="/dashboard" className={`my-8 ${isLinkActive('/dashboard')}`}>
        <RiPieChartLine size={23} color={isColorActive('/dashboard')} />
      </Link>
      <Link href="/download" type="button" className={isLinkActive('/download')}>
        <TfiDownload size={23} color={isColorActive('/download')} />
      </Link>
    </aside>
  );
};

export { Sidebar };