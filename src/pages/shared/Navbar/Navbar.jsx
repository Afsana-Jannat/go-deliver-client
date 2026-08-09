// import { Link, NavLink } from 'react-router';
// import useAuth from '../../../hooks/useAuth';
// import { useTranslation } from 'react-i18next';

// const Navbar = () => {
//   const { user, logOut } = useAuth();
//   const { t, i18n } = useTranslation();

//   const handleSignOut = () => {
//     logOut()
//       .then(() => console.log('sign out successfully'))
//       .catch((error) => console.log(error));
//   };

//   // Change Language
//   const changeLanguage = (lang) => {
//     i18n.changeLanguage(lang);
//   };

//   const navItems = (
//     <>
//       <li>
//         <NavLink to="/">{t('home')}</NavLink>
//       </li>
//       <li>
//         <NavLink to="/sendParcel">{t('sendParcel')}</NavLink>
//       </li>
//       <li>
//         <NavLink to="/coverage">{t('coverage')}</NavLink>
//       </li>

//       {user && (
//         <li>
//           <NavLink to="/dashBoard">{t('dashboard')}</NavLink>
//         </li>
//       )}

//       <li>
//         <NavLink to="/beARider">{t('beARider')}</NavLink>
//       </li>
//       <li>
//         <NavLink to="/contact">{t('contact')}</NavLink>
//       </li>
//     </>
//   );

//   return (
//     <div className="navbar text-white bg-[#103963] shadow-sm">
//       <div className="navbar-start">
//         <div className="dropdown text-black">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </div>
//           <ul
//             tabIndex="-1"
//             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
//           >
//             {navItems}
//           </ul>
//         </div>

//         <div className="flex">
//           <img
//             className="w-[60px] h-[60px]"
//             src="https://cdn-icons-png.flaticon.com/512/10053/10053703.png"
//             alt=""
//           />
//           <a className="text-3xl font-extrabold mt-3">GoDeliver</a>
//         </div>
//       </div>

//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">{navItems}</ul>
//       </div>

//       <div className="navbar-end flex gap-2">
//         {/* Language Switch */}
//         {/* <button onClick={() => changeLanguage("en")} className="btn btn-sm">EN</button>
//                 <button onClick={() => changeLanguage("bn")} className="btn btn-sm">BN</button> */}

//         {/* Language Switch Toggle */}
//         <label className="flex items-center cursor-pointer gap-2">
//           <span className="text-sm font-semibold">EN</span>
//           <input
//             type="checkbox"
//             className="toggle toggle-info text-gray-400"
//             onChange={(e) =>
//               e.target.checked ? changeLanguage('bn') : changeLanguage('en')
//             }
//             checked={i18n.language === 'bn'}
//           />

//           <span className="text-sm font-semibold">BN</span>
//         </label>

//         {/* Login / Logout */}
//         {user ? (
//           <button onClick={handleSignOut} className="btn btn-sm">
//             {t('signOut')}
//           </button>
//         ) : (
//           <Link to="/login" className="btn btn-sm">
//             {t('login')}
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import { Link, NavLink } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { user, logOut } = useAuth();
  const { t, i18n } = useTranslation();

  const handleSignOut = () => {
    logOut()
      .then(() => console.log('sign out successfully'))
      .catch((error) => console.log(error));
  };

  // Change Language
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const navItems = (
    <>
      {/* Home */}
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-medium transition-all duration-300 ${
              isActive
                ? 'text-orange-500 lg:text-orange-400'
                : 'text-gray-700 hover:text-orange-500 lg:text-white/85 lg:hover:text-orange-400'
            }`
          }
        >
          {t('home')}
        </NavLink>
      </li>

      {/* Send Parcel */}
      <li>
        <NavLink
          to="/sendParcel"
          className={({ isActive }) =>
            `font-medium transition-all duration-300 ${
              isActive
                ? 'text-orange-500 lg:text-orange-400'
                : 'text-gray-700 hover:text-orange-500 lg:text-white/85 lg:hover:text-orange-400'
            }`
          }
        >
          {t('sendParcel')}
        </NavLink>
      </li>

      {/* Coverage */}
      <li>
        <NavLink
          to="/coverage"
          className={({ isActive }) =>
            `font-medium transition-all duration-300 ${
              isActive
                ? 'text-orange-500 lg:text-orange-400'
                : 'text-gray-700 hover:text-orange-500 lg:text-white/85 lg:hover:text-orange-400'
            }`
          }
        >
          {t('coverage')}
        </NavLink>
      </li>

      {/* Dashboard */}
      {user && (
        <li>
          <NavLink
            to="/dashBoard"
            className={({ isActive }) =>
              `font-medium transition-all duration-300 ${
                isActive
                  ? 'text-orange-500 lg:text-orange-400'
                  : 'text-gray-700 hover:text-orange-500 lg:text-white/85 lg:hover:text-orange-400'
              }`
            }
          >
            {t('dashboard')}
          </NavLink>
        </li>
      )}

      {/* Be A Rider */}
      <li>
        <NavLink
          to="/beARider"
          className={({ isActive }) =>
            `font-medium transition-all duration-300 ${
              isActive
                ? 'text-orange-500 lg:text-orange-400'
                : 'text-gray-700 hover:text-orange-500 lg:text-white/85 lg:hover:text-orange-400'
            }`
          }
        >
          {t('beARider')}
        </NavLink>
      </li>

      {/* Contact */}
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `font-medium transition-all duration-300 ${
              isActive
                ? 'text-orange-500 lg:text-orange-400'
                : 'text-gray-700 hover:text-orange-500 lg:text-white/85 lg:hover:text-orange-400'
            }`
          }
        >
          {t('contact')}
        </NavLink>
      </li>
    </>
  );

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="border-b border-white/10 bg-[#0B3B66]/95 shadow-lg backdrop-blur-md">
        <div className="navbar mx-auto min-h-[72px] max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* ==================== Logo ==================== */}
          <div className="navbar-start">
            <Link to="/" className="group flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 transition-all duration-300 group-hover:bg-orange-500/20">
                <img
                  className="h-8 w-8 object-contain"
                  src="https://cdn-icons-png.flaticon.com/512/10053/10053703.png"
                  alt="GoDeliver"
                />
              </div>

              <span className="text-2xl font-extrabold tracking-tight text-white">
                Go<span className="text-orange-400">Deliver</span>
              </span>
            </Link>
          </div>

          {/* ==================== Desktop Navigation ==================== */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal items-center gap-1 px-1">
              {navItems}
            </ul>
          </div>

          {/* ==================== Right Side ==================== */}
          <div className="navbar-end gap-2 sm:gap-3">
            {/* Language Switch */}
            <div className="hidden items-center gap-2 sm:flex">
              <span
                className={`text-xs font-semibold ${
                  i18n.language === 'en' ? 'text-white' : 'text-white/50'
                }`}
              >
                EN
              </span>

              <input
                type="checkbox"
                className="toggle toggle-sm border-white/30 bg-white/10 [--tglbg:#ffffff]"
                onChange={(e) =>
                  e.target.checked ? changeLanguage('bn') : changeLanguage('en')
                }
                checked={i18n.language === 'bn'}
              />

              <span
                className={`text-xs font-semibold ${
                  i18n.language === 'bn' ? 'text-white' : 'text-white/50'
                }`}
              >
                BN
              </span>
            </div>

            {/* ==================== Login / Logout ==================== */}
            {user ? (
              <button
                onClick={handleSignOut}
                className="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-[#0B3B66] transition-all duration-300 hover:bg-orange-400 hover:text-white sm:px-4"
              >
                {t('signOut')}
              </button>
            ) : (
              <Link
                to="/login"
                className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-orange-500/20 transition-all duration-300 hover:bg-orange-400 hover:shadow-lg sm:px-5 sm:py-2.5"
              >
                {t('login')}
              </Link>
            )}

            {/* ==================== Mobile Menu ==================== */}
            <div className="dropdown dropdown-end lg:hidden">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle text-white hover:bg-white/10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>

              {/* Mobile Dropdown */}
              <ul
                tabIndex={0}
                className="menu dropdown-content z-[1] mt-4 w-56 rounded-2xl border border-gray-100 bg-white p-3 shadow-xl"
              >
                {navItems}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
