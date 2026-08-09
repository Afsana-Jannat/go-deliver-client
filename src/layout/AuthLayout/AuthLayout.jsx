import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div className="min-h-screen w-full bg-[#F5F7FA]">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
