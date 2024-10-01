// src/components/partials/header.tsx
import { UserButton } from '@clerk/nextjs';

const Header = () => {
  return (
    <header className="bg-cyan-300 shadow-md p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <UserButton showName/>
      </div>
    </header>
  );
};

export default Header;
