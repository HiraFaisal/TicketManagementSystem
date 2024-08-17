import React, { useState } from "react";
import { useLocation } from "react-router-dom";
const LeftSidebar = () => {
  const location = useLocation();
  const [adminRole, setAdminrole] = useState(
    location.pathname.includes("/admin") ? "admin" : "user"
  );

  return (
    <>
      <div
        id="app-menu-drawer"
        className="app-menu flex flex-col gap-y-2.5 bg-white dark:bg-dark-card w-full   -translate-x-full group-data-[sidebar-size=sm]:min-h-screen group-data-[sidebar-size=sm]:h-max xl:translate-x-0 rounded-r-10 xl:rounded-15 xl:group-data-[sidebar-size=lg]:w-app-menu    z-backdrop ac-transition"
        tabIndex={-1}
      >
        <div className="px-4 h-header flex items-center justify-center shrink-0 group-data-[sidebar-size=sm]:px-2 group-data-[sidebar-size=sm]:justify-center">
          <a
            href="dashboard-lms.html"
            className="group-data-[sidebar-size=lg]:hidden w-28 h-16 flex items-center justify-center"
          >
            <img
              src="/images/logo.png"
              alt="logo"
              className="max-w-full max-h-full"
            />
          </a>
        </div>

        <div
          id="app-menu-scrollbar"
          data-scrollbar
          className="pl-4 group-data-[sidebar-size=sm]:pl-0 group-data-[sidebar-size=sm]:!overflow-visible !overflow-x-hidden smooth-scrollbar"
        >
          <div className="group-data-[sidebar-size=lg]:max-h-full">
            <ul
              id="navbar-nav"
              className="text-[14px] !leading-none space-y-1 group-data-[sidebar-size=sm]:space-y-2.5 group-data-[sidebar-size=sm]:flex group-data-[sidebar-size=sm]:flex-col group-data-[sidebar-size=sm]:items-start group-data-[sidebar-size=sm]:mx-2 group-data-[sidebar-size=sm]:overflow-visible"
            >
              {adminRole === "user" ? (
                <>
                  <li className="relative group/sm w-full group-data-[sidebar-size=sm]:hover:w-[calc(theme('spacing.app-menu-sm')_*_3.4)] group-data-[sidebar-size=sm]:flex-center">
                    <a
                      href="/dashboard"
                      className=" top-layer relative text-gray-500 dark:text-dark-text-two font-medium leading-none px-3.5 py-3 h-[42px] flex items-center group/menu-link ac-transition peer/dp-btn group-data-[sidebar-size=sm]:bg-gray-100 dark:group-data-[sidebar-size=sm]:bg-dark-icon group-data-[sidebar-size=sm]:hover:bg-primary-500/95 group-data-[sidebar-size=sm]:[&.active]:bg-primary-500/95 hover:text-white [&.active]:text-white hover:!bg-primary-500/95 [&.active]:bg-primary-500/95 group-data-[sidebar-size=sm]:rounded-lg group-data-[sidebar-size=sm]:group-hover/sm:!rounded-br-none group-data-[sidebar-size=lg]:rounded-l-full group-data-[sidebar-size=sm]:p-3 group-data-[sidebar-size=sm]:w-full"
                    >
                      <span className="shrink-0 group-data-[sidebar-size=sm]:w-[calc(theme('spacing.app-menu-sm')_*_0.43)] group-data-[sidebar-size=sm]:flex-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M6.54548 3.63639C6.54548 4.21175 6.37486 4.77419 6.05521 5.25259C5.73555 5.73099 5.28121 6.10385 4.74965 6.32404C4.21808 6.54422 3.63316 6.60183 3.06885 6.48958C2.50454 6.37733 1.98619 6.10027 1.57935 5.69342C1.17251 5.28658 0.895441 4.76823 0.783194 4.20392C0.670946 3.63961 0.728555 3.05469 0.948738 2.52313C1.16892 1.99156 1.54179 1.53722 2.02018 1.21757C2.49858 0.897911 3.06102 0.727296 3.63639 0.727296C4.40793 0.727296 5.14786 1.03379 5.69342 1.57935C6.23898 2.12491 6.54548 2.86485 6.54548 3.63639ZM12.3637 6.54548C12.939 6.54548 13.5015 6.37486 13.9799 6.05521C14.4583 5.73555 14.8311 5.28121 15.0513 4.74965C15.2715 4.21808 15.3291 3.63316 15.2168 3.06885C15.1046 2.50454 14.8275 1.98619 14.4207 1.57935C14.0139 1.17251 13.4955 0.895441 12.9312 0.783194C12.3669 0.670946 11.782 0.728555 11.2504 0.948738C10.7188 1.16892 10.2645 1.54179 9.94484 2.02018C9.62518 2.49858 9.45457 3.06102 9.45457 3.63639C9.45457 4.40793 9.76106 5.14786 10.3066 5.69342C10.8522 6.23898 11.5921 6.54548 12.3637 6.54548ZM3.63639 9.45457C3.06102 9.45457 2.49858 9.62518 2.02018 9.94484C1.54179 10.2645 1.16892 10.7188 0.948738 11.2504C0.728555 11.782 0.670946 12.3669 0.783194 12.9312C0.895441 13.4955 1.17251 14.0139 1.57935 14.4207C1.98619 14.8275 2.50454 15.1046 3.06885 15.2168C3.63316 15.3291 4.21808 15.2715 4.74965 15.0513C5.28121 14.8311 5.73555 14.4583 6.05521 13.9799C6.37486 13.5015 6.54548 12.939 6.54548 12.3637C6.54548 11.5921 6.23898 10.8522 5.69342 10.3066C5.14786 9.76106 4.40793 9.45457 3.63639 9.45457ZM12.3637 9.45457C11.7883 9.45457 11.2259 9.62518 10.7475 9.94484C10.2691 10.2645 9.89619 10.7188 9.67601 11.2504C9.45582 11.782 9.39822 12.3669 9.51046 12.9312C9.62271 13.4955 9.89978 14.0139 10.3066 14.4207C10.7135 14.8275 11.2318 15.1046 11.7961 15.2168C12.3604 15.3291 12.9453 15.2715 13.4769 15.0513C14.0085 14.8311 14.4628 14.4583 14.7825 13.9799C15.1021 13.5015 15.2727 12.939 15.2727 12.3637C15.2727 11.5921 14.9663 10.8522 14.4207 10.3066C13.8751 9.76106 13.1352 9.45457 12.3637 9.45457Z"
                            fill="#EEEEEE"
                            className="group-hover/menu-link:fill-[url(#icon_gradient)] group-[.active]/menu-link:fill-[url(#icon_gradient)] dark:fill-none"
                          />
                          <path
                            d="M3.63636 1.61884e-06C2.91716 1.61884e-06 2.21411 0.21327 1.61611 0.612839C1.01811 1.01241 0.552031 1.58033 0.276803 2.24479C0.00157558 2.90925 -0.0704365 3.6404 0.0698733 4.34578C0.210183 5.05117 0.556513 5.69911 1.06507 6.20766C1.57362 6.71622 2.22156 7.06255 2.92695 7.20286C3.63233 7.34316 4.36348 7.27115 5.02794 6.99593C5.6924 6.7207 6.26032 6.25462 6.65989 5.65662C7.05946 5.05862 7.27273 4.35557 7.27273 3.63636C7.27273 2.67194 6.88961 1.74702 6.20766 1.06507C5.52571 0.383117 4.60079 1.61884e-06 3.63636 1.61884e-06ZM3.63636 5.81818C3.20484 5.81818 2.78301 5.69022 2.42421 5.45048C2.06541 5.21074 1.78576 4.86998 1.62063 4.47131C1.45549 4.07263 1.41228 3.63394 1.49647 3.21071C1.58066 2.78748 1.78845 2.39872 2.09359 2.09359C2.39872 1.78845 2.78748 1.58066 3.21071 1.49647C3.63394 1.41228 4.07263 1.45549 4.47131 1.62063C4.86998 1.78576 5.21074 2.06541 5.45048 2.42421C5.69022 2.78301 5.81818 3.20484 5.81818 3.63636C5.81818 4.21502 5.58831 4.76997 5.17914 5.17914C4.76997 5.58831 4.21502 5.81818 3.63636 5.81818ZM12.3636 7.27273C13.0828 7.27273 13.7859 7.05946 14.3839 6.65989C14.9819 6.26032 15.448 5.6924 15.7232 5.02794C15.9984 4.36348 16.0704 3.63233 15.9301 2.92695C15.7898 2.22156 15.4435 1.57362 14.9349 1.06507C14.4264 0.556513 13.7784 0.210183 13.0731 0.0698733C12.3677 -0.0704365 11.6365 0.00157558 10.9721 0.276803C10.3076 0.552031 9.73968 1.01811 9.34011 1.61611C8.94054 2.21411 8.72727 2.91716 8.72727 3.63636C8.72727 4.60079 9.11039 5.52571 9.79234 6.20766C10.4743 6.88961 11.3992 7.27273 12.3636 7.27273ZM12.3636 1.45455C12.7952 1.45455 13.217 1.58251 13.5758 1.82225C13.9346 2.06199 14.2142 2.40274 14.3794 2.80142C14.5445 3.20009 14.5877 3.63878 14.5035 4.06202C14.4193 4.48525 14.2115 4.87401 13.9064 5.17914C13.6013 5.48428 13.2125 5.69207 12.7893 5.77626C12.3661 5.86045 11.9274 5.81724 11.5287 5.6521C11.13 5.48696 10.7893 5.20732 10.5495 4.84852C10.3098 4.48972 10.1818 4.06789 10.1818 3.63636C10.1818 3.05771 10.4117 2.50276 10.8209 2.09359C11.23 1.68442 11.785 1.45455 12.3636 1.45455ZM3.63636 8.72727C2.91716 8.72727 2.21411 8.94054 1.61611 9.34011C1.01811 9.73968 0.552031 10.3076 0.276803 10.9721C0.00157558 11.6365 -0.0704365 12.3677 0.0698733 13.0731C0.210183 13.7784 0.556513 14.4264 1.06507 14.9349C1.57362 15.4435 2.22156 15.7898 2.92695 15.9301C3.63233 16.0704 4.36348 15.9984 5.02794 15.7232C5.6924 15.448 6.26032 14.9819 6.65989 14.3839C7.05946 13.7859 7.27273 13.0828 7.27273 12.3636C7.27273 11.3992 6.88961 10.4743 6.20766 9.79234C5.52571 9.11039 4.60079 8.72727 3.63636 8.72727ZM3.63636 14.5455C3.20484 14.5455 2.78301 14.4175 2.42421 14.1777C2.06541 13.938 1.78576 13.5973 1.62063 13.1986C1.45549 12.7999 1.41228 12.3612 1.49647 11.938C1.58066 11.5148 1.78845 11.126 2.09359 10.8209C2.39872 10.5157 2.78748 10.3079 3.21071 10.2237C3.63394 10.1396 4.07263 10.1828 4.47131 10.3479C4.86998 10.513 5.21074 10.7927 5.45048 11.1515C5.69022 11.5103 5.81818 11.9321 5.81818 12.3636C5.81818 12.9423 5.58831 13.4972 5.17914 13.9064C4.76997 14.3156 4.21502 14.5455 3.63636 14.5455ZM12.3636 8.72727C11.6444 8.72727 10.9414 8.94054 10.3434 9.34011C9.74538 9.73968 9.2793 10.3076 9.00407 10.9721C8.72884 11.6365 8.65683 12.3677 8.79714 13.0731C8.93745 13.7784 9.28378 14.4264 9.79234 14.9349C10.3009 15.4435 10.9488 15.7898 11.6542 15.9301C12.3596 16.0704 13.0908 15.9984 13.7552 15.7232C14.4197 15.448 14.9876 14.9819 15.3872 14.3839C15.7867 13.7859 16 13.0828 16 12.3636C16 11.3992 15.6169 10.4743 14.9349 9.79234C14.253 9.11039 13.3281 8.72727 12.3636 8.72727ZM12.3636 14.5455C11.9321 14.5455 11.5103 14.4175 11.1515 14.1777C10.7927 13.938 10.513 13.5973 10.3479 13.1986C10.1828 12.7999 10.1396 12.3612 10.2237 11.938C10.3079 11.5148 10.5157 11.126 10.8209 10.8209C11.126 10.5157 11.5148 10.3079 11.938 10.2237C12.3612 10.1396 12.7999 10.1828 13.1986 10.3479C13.5973 10.513 13.938 10.7927 14.1777 11.1515C14.4175 11.5103 14.5455 11.9321 14.5455 12.3636C14.5455 12.9423 14.3156 13.4972 13.9064 13.9064C13.4972 14.3156 12.9423 14.5455 12.3636 14.5455Z"
                            fill="#999999"
                            className="group-hover/menu-link:fill-white group-[.active]/menu-link:fill-white"
                          />
                          <defs>
                            <linearGradient
                              id="icon_gradient"
                              x1="2.18655"
                              y1="3.46529"
                              x2="8.18057"
                              y2="12.9769"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset={0} stopColor="#795DED" />
                              <stop offset="0.0001" stopColor="#7D5DFE" />
                              <stop offset={1} stopColor="#76D466" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <span className="group-data-[sidebar-size=sm]:hidden group-data-[sidebar-size=sm]:ml-6 group-data-[sidebar-size=sm]:group-hover/sm:block ml-3 shrink-0">
                        Dashboard
                      </span>
                    </a>
                  </li>

                  <li className="relative group/sm w-full group-data-[sidebar-size=sm]:hover:w-[calc(theme('spacing.app-menu-sm')_*_3.4)] group-data-[sidebar-size=sm]:flex-center">
                    <a
                      href="/dashboard/complaint"
                      className="relative text-gray-500 dark:text-dark-text-two font-medium leading-none px-3.5 py-3 h-[42px] flex items-center group/menu-link ac-transition group-data-[sidebar-size=sm]:bg-gray-100 dark:group-data-[sidebar-size=sm]:bg-dark-icon group-data-[sidebar-size=sm]:hover:bg-primary-500/95 group-data-[sidebar-size=sm]:[&.active]:bg-primary-500/95 hover:text-white [&.active]:text-white hover:!bg-primary-500/95 [&.active]:bg-primary-500/95 group-data-[sidebar-size=sm]:rounded-lg group-data-[sidebar-size=sm]:group-hover/sm:!rounded-br-none group-data-[sidebar-size=lg]:rounded-l-full group-data-[sidebar-size=sm]:p-3 group-data-[sidebar-size=sm]:w-full"
                    >
                      <span className="shrink-0 group-data-[sidebar-size=sm]:w-[calc(theme('spacing.app-menu-sm')_*_0.43)] group-data-[sidebar-size=sm]:flex-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M15.3864 8.00002C15.3866 9.2969 15.0452 10.5709 14.3966 11.694C13.7481 12.8171 12.8152 13.7495 11.6918 14.3975C10.5685 15.0456 9.29425 15.3863 7.99737 15.3856C6.70049 15.3848 5.42669 15.0425 4.30411 14.3931L1.42796 15.3523C1.31953 15.3885 1.20317 15.3937 1.09193 15.3675C0.980686 15.3412 0.878953 15.2845 0.798131 15.2037C0.717309 15.1229 0.660594 15.0211 0.634341 14.9099C0.608088 14.7987 0.613336 14.6823 0.649496 14.5739L1.60873 11.6977C1.04173 10.717 0.707971 9.61897 0.633264 8.48861C0.558557 7.35825 0.74491 6.22586 1.1779 5.17905C1.61089 4.13224 2.27892 3.19908 3.13028 2.45177C3.98165 1.70446 4.99353 1.16304 6.08764 0.869402C7.18175 0.575763 8.32874 0.537777 9.43988 0.758384C10.551 0.97899 11.5965 1.45227 12.4955 2.14162C13.3944 2.83096 14.1227 3.71787 14.624 4.73374C15.1253 5.74961 15.3862 6.8672 15.3864 8.00002Z"
                            fill="#EEEEEE"
                            className="group-hover/menu-link:fill-[url(#icon_gradient)] group-[.active]/menu-link:fill-[url(#icon_gradient)] dark:fill-none"
                          />
                          <path
                            d="M8.00175 1.9052e-07C6.62057 -0.000301201 5.26284 0.356991 4.06071 1.0371C2.85858 1.71721 1.85301 2.69696 1.14188 3.881C0.430744 5.06504 0.0382705 6.41302 0.00265996 7.79374C-0.0329505 9.17446 0.289515 10.5409 0.938669 11.76L0.0655923 14.3792C-0.00672718 14.5961 -0.0172224 14.8288 0.035283 15.0513C0.0877884 15.2738 0.201219 15.4772 0.362863 15.6389C0.524506 15.8005 0.727973 15.914 0.950459 15.9665C1.17295 16.019 1.40566 16.0085 1.62252 15.9362L4.24175 15.0631C5.31465 15.6337 6.50345 15.9525 7.71792 15.9951C8.93239 16.0377 10.1406 15.8031 11.2509 15.309C12.3611 14.815 13.3442 14.0745 14.1256 13.1438C14.9069 12.213 15.466 11.1165 15.7603 9.93749C16.0546 8.75844 16.0765 7.52785 15.8242 6.33911C15.5719 5.15036 15.0521 4.03472 14.3042 3.07686C13.5564 2.119 12.6002 1.34409 11.5081 0.810965C10.4161 0.277837 9.21697 0.000498639 8.00175 1.9052e-07ZM8.00175 14.7692C6.81173 14.77 5.64259 14.4567 4.61252 13.8608C4.51903 13.8065 4.4129 13.7779 4.30482 13.7777C4.23862 13.7777 4.17287 13.7886 4.11021 13.81L1.23252 14.7692L2.19175 11.8923C2.2194 11.8096 2.22917 11.722 2.22042 11.6353C2.21166 11.5486 2.18459 11.4647 2.14098 11.3892C1.3948 10.0992 1.09521 8.59891 1.28869 7.1212C1.48217 5.64349 2.1579 4.27094 3.21104 3.21646C4.26419 2.16197 5.6359 1.48452 7.11336 1.28917C8.59082 1.09383 10.0915 1.39152 11.3825 2.13607C12.6735 2.88061 13.6827 4.03039 14.2536 5.40704C14.8244 6.78369 14.925 8.31025 14.5398 9.74992C14.1545 11.1896 13.3049 12.4619 12.1228 13.3694C10.9407 14.2769 9.49207 14.769 8.00175 14.7692ZM8.92482 8C8.92482 8.18257 8.87069 8.36104 8.76926 8.51283C8.66783 8.66463 8.52366 8.78295 8.35499 8.85281C8.18632 8.92268 8.00072 8.94096 7.82166 8.90534C7.6426 8.86972 7.47813 8.78181 7.34903 8.65271C7.21994 8.52362 7.13202 8.35914 7.09641 8.18008C7.06079 8.00102 7.07907 7.81542 7.14893 7.64675C7.2188 7.47808 7.33711 7.33392 7.48891 7.23249C7.64071 7.13106 7.81918 7.07692 8.00175 7.07692C8.24656 7.07692 8.48135 7.17418 8.65446 7.34729C8.82757 7.5204 8.92482 7.75519 8.92482 8ZM5.54021 8C5.54021 8.18257 5.48607 8.36104 5.38464 8.51283C5.28321 8.66463 5.13905 8.78295 4.97038 8.85281C4.80171 8.92268 4.61611 8.94096 4.43705 8.90534C4.25799 8.86972 4.09351 8.78181 3.96442 8.65271C3.83532 8.52362 3.74741 8.35914 3.71179 8.18008C3.67617 8.00102 3.69445 7.81542 3.76432 7.64675C3.83418 7.47808 3.9525 7.33392 4.1043 7.23249C4.2561 7.13106 4.43456 7.07692 4.61713 7.07692C4.86195 7.07692 5.09673 7.17418 5.26985 7.34729C5.44296 7.5204 5.54021 7.75519 5.54021 8ZM12.3094 8C12.3094 8.18257 12.2553 8.36104 12.1539 8.51283C12.0524 8.66463 11.9083 8.78295 11.7396 8.85281C11.5709 8.92268 11.3853 8.94096 11.2063 8.90534C11.0272 8.86972 10.8627 8.78181 10.7336 8.65271C10.6046 8.52362 10.5166 8.35914 10.481 8.18008C10.4454 8.00102 10.4637 7.81542 10.5336 7.64675C10.6034 7.47808 10.7217 7.33392 10.8735 7.23249C11.0253 7.13106 11.2038 7.07692 11.3864 7.07692C11.6312 7.07692 11.866 7.17418 12.0391 7.34729C12.2122 7.5204 12.3094 7.75519 12.3094 8Z"
                            fill="#999999"
                            className="group-hover/menu-link:fill-white group-[.active]/menu-link:fill-white"
                          />
                          <defs>
                            <linearGradient
                              id="icon_gradient"
                              x1="2.18655"
                              y1="3.46529"
                              x2="8.18057"
                              y2="12.9769"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset={0} stopColor="#795DED" />
                              <stop offset="0.0001" stopColor="#7D5DFE" />
                              <stop offset={1} stopColor="#76D466" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <span className="group-data-[sidebar-size=sm]:hidden group-data-[sidebar-size=sm]:ml-6 group-data-[sidebar-size=sm]:group-hover/sm:block ml-3 shrink-0">
                        Complaints
                      </span>
                    </a>
                  </li>

                  <li className="relative group/sm w-full group-data-[sidebar-size=sm]:hover:w-[calc(theme('spacing.app-menu-sm')_*_3.4)] group-data-[sidebar-size=sm]:flex-center">
                    <a
                      href="/dashboard/feedback"
                      className="relative text-gray-500 dark:text-dark-text-two font-medium leading-none px-3.5 py-3 h-[42px] flex items-center group/menu-link ac-transition group-data-[sidebar-size=sm]:bg-gray-100 dark:group-data-[sidebar-size=sm]:bg-dark-icon group-data-[sidebar-size=sm]:hover:bg-primary-500/95 group-data-[sidebar-size=sm]:[&.active]:bg-primary-500/95 hover:text-white [&.active]:text-white hover:!bg-primary-500/95 [&.active]:bg-primary-500/95 group-data-[sidebar-size=sm]:rounded-lg group-data-[sidebar-size=sm]:group-hover/sm:!rounded-br-none group-data-[sidebar-size=lg]:rounded-l-full group-data-[sidebar-size=sm]:p-3 group-data-[sidebar-size=sm]:w-full"
                    >
                      <span className="shrink-0 group-data-[sidebar-size=sm]:w-[calc(theme('spacing.app-menu-sm')_*_0.43)] group-data-[sidebar-size=sm]:flex-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M14.7684 2.46155V5.53847H1.22998V2.46155C1.22998 2.29834 1.29482 2.14181 1.41022 2.0264C1.52563 1.911 1.68215 1.84616 1.84537 1.84616H14.1531C14.3163 1.84616 14.4728 1.911 14.5882 2.0264C14.7036 2.14181 14.7684 2.29834 14.7684 2.46155Z"
                            fill="#EEEEEE"
                            className="group-hover/menu-link:fill-[url(#icon_gradient)] group-[.active]/menu-link:fill-[url(#icon_gradient)] dark:fill-none"
                          />
                          <path
                            d="M14.1531 1.23077H12.3069V0.615385C12.3069 0.452174 12.2421 0.295649 12.1267 0.180242C12.0113 0.064835 11.8548 0 11.6915 0C11.5283 0 11.3718 0.064835 11.2564 0.180242C11.141 0.295649 11.0762 0.452174 11.0762 0.615385V1.23077H4.92232V0.615385C4.92232 0.452174 4.85748 0.295649 4.74207 0.180242C4.62667 0.064835 4.47014 0 4.30693 0C4.14372 0 3.9872 0.064835 3.87179 0.180242C3.75638 0.295649 3.69155 0.452174 3.69155 0.615385V1.23077H1.84539C1.51897 1.23077 1.20592 1.36044 0.975108 1.59125C0.744294 1.82207 0.614624 2.13512 0.614624 2.46154V14.7692C0.614624 15.0957 0.744294 15.4087 0.975108 15.6395C1.20592 15.8703 1.51897 16 1.84539 16H14.1531C14.4795 16 14.7926 15.8703 15.0234 15.6395C15.2542 15.4087 15.3839 15.0957 15.3839 14.7692V2.46154C15.3839 2.13512 15.2542 1.82207 15.0234 1.59125C14.7926 1.36044 14.4795 1.23077 14.1531 1.23077ZM3.69155 2.46154V3.07692C3.69155 3.24013 3.75638 3.39666 3.87179 3.51207C3.9872 3.62747 4.14372 3.69231 4.30693 3.69231C4.47014 3.69231 4.62667 3.62747 4.74207 3.51207C4.85748 3.39666 4.92232 3.24013 4.92232 3.07692V2.46154H11.0762V3.07692C11.0762 3.24013 11.141 3.39666 11.2564 3.51207C11.3718 3.62747 11.5283 3.69231 11.6915 3.69231C11.8548 3.69231 12.0113 3.62747 12.1267 3.51207C12.2421 3.39666 12.3069 3.24013 12.3069 3.07692V2.46154H14.1531V4.92308H1.84539V2.46154H3.69155ZM14.1531 14.7692H1.84539V6.15385H14.1531V14.7692Z"
                            fill="#999999"
                            className="group-hover/menu-link:fill-white group-[.active]/menu-link:fill-white"
                          />
                          <defs>
                            <linearGradient
                              id="icon_gradient"
                              x1="2.18655"
                              y1="3.46529"
                              x2="8.18057"
                              y2="12.9769"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset={0} stopColor="#795DED" />
                              <stop offset="0.0001" stopColor="#7D5DFE" />
                              <stop offset={1} stopColor="#76D466" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <span className="group-data-[sidebar-size=sm]:hidden group-data-[sidebar-size=sm]:ml-6 group-data-[sidebar-size=sm]:group-hover/sm:block ml-3 shrink-0">
                        FeedBack
                      </span>
                    </a>
                  </li>

                  <li className="relative group/sm w-full group-data-[sidebar-size=sm]:hover:w-[calc(theme('spacing.app-menu-sm')_*_3.4)] group-data-[sidebar-size=sm]:flex-center">
                    <a
                      href="/dashboard/contact"
                      className="relative text-gray-500 dark:text-dark-text-two font-medium leading-none px-3.5 py-3 h-[42px] flex items-center group/menu-link ac-transition peer/dp-btn group-data-[sidebar-size=sm]:bg-gray-100 dark:group-data-[sidebar-size=sm]:bg-dark-icon group-data-[sidebar-size=sm]:hover:bg-primary-500/95 group-data-[sidebar-size=sm]:[&.active]:bg-primary-500/95 hover:text-white [&.active]:text-white hover:!bg-primary-500/95 [&.active]:bg-primary-500/95 group-data-[sidebar-size=sm]:rounded-lg group-data-[sidebar-size=sm]:group-hover/sm:!rounded-br-none group-data-[sidebar-size=lg]:rounded-l-full group-data-[sidebar-size=sm]:p-3 group-data-[sidebar-size=sm]:w-full"
                    >
                      <span className="shrink-0 group-data-[sidebar-size=sm]:w-[calc(theme('spacing.app-menu-sm')_*_0.43)] group-data-[sidebar-size=sm]:flex-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M15.3864 8.00002C15.3866 9.2969 15.0452 10.5709 14.3966 11.694C13.7481 12.8171 12.8152 13.7495 11.6918 14.3975C10.5685 15.0456 9.29425 15.3863 7.99737 15.3856C6.70049 15.3848 5.42669 15.0425 4.30411 14.3931L1.42796 15.3523C1.31953 15.3885 1.20317 15.3937 1.09193 15.3675C0.980686 15.3412 0.878953 15.2845 0.798131 15.2037C0.717309 15.1229 0.660594 15.0211 0.634341 14.9099C0.608088 14.7987 0.613336 14.6823 0.649496 14.5739L1.60873 11.6977C1.04173 10.717 0.707971 9.61897 0.633264 8.48861C0.558557 7.35825 0.74491 6.22586 1.1779 5.17905C1.61089 4.13224 2.27892 3.19908 3.13028 2.45177C3.98165 1.70446 4.99353 1.16304 6.08764 0.869402C7.18175 0.575763 8.32874 0.537777 9.43988 0.758384C10.551 0.97899 11.5965 1.45227 12.4955 2.14162C13.3944 2.83096 14.1227 3.71787 14.624 4.73374C15.1253 5.74961 15.3862 6.8672 15.3864 8.00002Z"
                            fill="#EEEEEE"
                            className="group-hover/menu-link:fill-[url(#icon_gradient)] group-[.active]/menu-link:fill-[url(#icon_gradient)] dark:fill-none"
                          />
                          <path
                            d="M8.00175 1.9052e-07C6.62057 -0.000301201 5.26284 0.356991 4.06071 1.0371C2.85858 1.71721 1.85301 2.69696 1.14188 3.881C0.430744 5.06504 0.0382705 6.41302 0.00265996 7.79374C-0.0329505 9.17446 0.289515 10.5409 0.938669 11.76L0.0655923 14.3792C-0.00672718 14.5961 -0.0172224 14.8288 0.035283 15.0513C0.0877884 15.2738 0.201219 15.4772 0.362863 15.6389C0.524506 15.8005 0.727973 15.914 0.950459 15.9665C1.17295 16.019 1.40566 16.0085 1.62252 15.9362L4.24175 15.0631C5.31465 15.6337 6.50345 15.9525 7.71792 15.9951C8.93239 16.0377 10.1406 15.8031 11.2509 15.309C12.3611 14.815 13.3442 14.0745 14.1256 13.1438C14.9069 12.213 15.466 11.1165 15.7603 9.93749C16.0546 8.75844 16.0765 7.52785 15.8242 6.33911C15.5719 5.15036 15.0521 4.03472 14.3042 3.07686C13.5564 2.119 12.6002 1.34409 11.5081 0.810965C10.4161 0.277837 9.21697 0.000498639 8.00175 1.9052e-07ZM8.00175 14.7692C6.81173 14.77 5.64259 14.4567 4.61252 13.8608C4.51903 13.8065 4.4129 13.7779 4.30482 13.7777C4.23862 13.7777 4.17287 13.7886 4.11021 13.81L1.23252 14.7692L2.19175 11.8923C2.2194 11.8096 2.22917 11.722 2.22042 11.6353C2.21166 11.5486 2.18459 11.4647 2.14098 11.3892C1.3948 10.0992 1.09521 8.59891 1.28869 7.1212C1.48217 5.64349 2.1579 4.27094 3.21104 3.21646C4.26419 2.16197 5.6359 1.48452 7.11336 1.28917C8.59082 1.09383 10.0915 1.39152 11.3825 2.13607C12.6735 2.88061 13.6827 4.03039 14.2536 5.40704C14.8244 6.78369 14.925 8.31025 14.5398 9.74992C14.1545 11.1896 13.3049 12.4619 12.1228 13.3694C10.9407 14.2769 9.49207 14.769 8.00175 14.7692ZM8.92482 8C8.92482 8.18257 8.87069 8.36104 8.76926 8.51283C8.66783 8.66463 8.52366 8.78295 8.35499 8.85281C8.18632 8.92268 8.00072 8.94096 7.82166 8.90534C7.6426 8.86972 7.47813 8.78181 7.34903 8.65271C7.21994 8.52362 7.13202 8.35914 7.09641 8.18008C7.06079 8.00102 7.07907 7.81542 7.14893 7.64675C7.2188 7.47808 7.33711 7.33392 7.48891 7.23249C7.64071 7.13106 7.81918 7.07692 8.00175 7.07692C8.24656 7.07692 8.48135 7.17418 8.65446 7.34729C8.82757 7.5204 8.92482 7.75519 8.92482 8ZM5.54021 8C5.54021 8.18257 5.48607 8.36104 5.38464 8.51283C5.28321 8.66463 5.13905 8.78295 4.97038 8.85281C4.80171 8.92268 4.61611 8.94096 4.43705 8.90534C4.25799 8.86972 4.09351 8.78181 3.96442 8.65271C3.83532 8.52362 3.74741 8.35914 3.71179 8.18008C3.67617 8.00102 3.69445 7.81542 3.76432 7.64675C3.83418 7.47808 3.9525 7.33392 4.1043 7.23249C4.2561 7.13106 4.43456 7.07692 4.61713 7.07692C4.86195 7.07692 5.09673 7.17418 5.26985 7.34729C5.44296 7.5204 5.54021 7.75519 5.54021 8ZM12.3094 8C12.3094 8.18257 12.2553 8.36104 12.1539 8.51283C12.0524 8.66463 11.9083 8.78295 11.7396 8.85281C11.5709 8.92268 11.3853 8.94096 11.2063 8.90534C11.0272 8.86972 10.8627 8.78181 10.7336 8.65271C10.6046 8.52362 10.5166 8.35914 10.481 8.18008C10.4454 8.00102 10.4637 7.81542 10.5336 7.64675C10.6034 7.47808 10.7217 7.33392 10.8735 7.23249C11.0253 7.13106 11.2038 7.07692 11.3864 7.07692C11.6312 7.07692 11.866 7.17418 12.0391 7.34729C12.2122 7.5204 12.3094 7.75519 12.3094 8Z"
                            fill="#999999"
                            className="group-hover/menu-link:fill-white group-[.active]/menu-link:fill-white"
                          />
                          <defs>
                            <linearGradient
                              id="icon_gradient"
                              x1="2.18655"
                              y1="3.46529"
                              x2="8.18057"
                              y2="12.9769"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset={0} stopColor="#795DED" />
                              <stop offset="0.0001" stopColor="#7D5DFE" />
                              <stop offset={1} stopColor="#76D466" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <span className="group-data-[sidebar-size=sm]:hidden group-data-[sidebar-size=sm]:ml-6 group-data-[sidebar-size=sm]:group-hover/sm:block ml-3 shrink-0">
                        Contact Us
                      </span>
                    </a>
                  </li>
                  <li className="relative group/sm w-full group-data-[sidebar-size=sm]:hover:w-[calc(theme('spacing.app-menu-sm')_*_3.4)] group-data-[sidebar-size=sm]:flex-center">
                    <a
                      href="/dashboard/account"
                      className="relative text-gray-500 dark:text-dark-text-two font-medium leading-none px-3.5 py-3 h-[42px] flex items-center group/menu-link ac-transition peer/dp-btn group-data-[sidebar-size=sm]:bg-gray-100 dark:group-data-[sidebar-size=sm]:bg-dark-icon group-data-[sidebar-size=sm]:hover:bg-primary-500/95 group-data-[sidebar-size=sm]:[&.active]:bg-primary-500/95 hover:text-white [&.active]:text-white hover:!bg-primary-500/95 [&.active]:bg-primary-500/95 group-data-[sidebar-size=sm]:rounded-lg group-data-[sidebar-size=sm]:group-hover/sm:!rounded-br-none group-data-[sidebar-size=lg]:rounded-l-full group-data-[sidebar-size=sm]:p-3 group-data-[sidebar-size=sm]:w-full"
                    >
                      <span className="shrink-0 group-data-[sidebar-size=sm]:w-[calc(theme('spacing.app-menu-sm')_*_0.43)] group-data-[sidebar-size=sm]:flex-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M15.3864 8.00002C15.3866 9.2969 15.0452 10.5709 14.3966 11.694C13.7481 12.8171 12.8152 13.7495 11.6918 14.3975C10.5685 15.0456 9.29425 15.3863 7.99737 15.3856C6.70049 15.3848 5.42669 15.0425 4.30411 14.3931L1.42796 15.3523C1.31953 15.3885 1.20317 15.3937 1.09193 15.3675C0.980686 15.3412 0.878953 15.2845 0.798131 15.2037C0.717309 15.1229 0.660594 15.0211 0.634341 14.9099C0.608088 14.7987 0.613336 14.6823 0.649496 14.5739L1.60873 11.6977C1.04173 10.717 0.707971 9.61897 0.633264 8.48861C0.558557 7.35825 0.74491 6.22586 1.1779 5.17905C1.61089 4.13224 2.27892 3.19908 3.13028 2.45177C3.98165 1.70446 4.99353 1.16304 6.08764 0.869402C7.18175 0.575763 8.32874 0.537777 9.43988 0.758384C10.551 0.97899 11.5965 1.45227 12.4955 2.14162C13.3944 2.83096 14.1227 3.71787 14.624 4.73374C15.1253 5.74961 15.3862 6.8672 15.3864 8.00002Z"
                            fill="#EEEEEE"
                            className="group-hover/menu-link:fill-[url(#icon_gradient)] group-[.active]/menu-link:fill-[url(#icon_gradient)] dark:fill-none"
                          />
                          <path
                            d="M8.00175 1.9052e-07C6.62057 -0.000301201 5.26284 0.356991 4.06071 1.0371C2.85858 1.71721 1.85301 2.69696 1.14188 3.881C0.430744 5.06504 0.0382705 6.41302 0.00265996 7.79374C-0.0329505 9.17446 0.289515 10.5409 0.938669 11.76L0.0655923 14.3792C-0.00672718 14.5961 -0.0172224 14.8288 0.035283 15.0513C0.0877884 15.2738 0.201219 15.4772 0.362863 15.6389C0.524506 15.8005 0.727973 15.914 0.950459 15.9665C1.17295 16.019 1.40566 16.0085 1.62252 15.9362L4.24175 15.0631C5.31465 15.6337 6.50345 15.9525 7.71792 15.9951C8.93239 16.0377 10.1406 15.8031 11.2509 15.309C12.3611 14.815 13.3442 14.0745 14.1256 13.1438C14.9069 12.213 15.466 11.1165 15.7603 9.93749C16.0546 8.75844 16.0765 7.52785 15.8242 6.33911C15.5719 5.15036 15.0521 4.03472 14.3042 3.07686C13.5564 2.119 12.6002 1.34409 11.5081 0.810965C10.4161 0.277837 9.21697 0.000498639 8.00175 1.9052e-07ZM8.00175 14.7692C6.81173 14.77 5.64259 14.4567 4.61252 13.8608C4.51903 13.8065 4.4129 13.7779 4.30482 13.7777C4.23862 13.7777 4.17287 13.7886 4.11021 13.81L1.23252 14.7692L2.19175 11.8923C2.2194 11.8096 2.22917 11.722 2.22042 11.6353C2.21166 11.5486 2.18459 11.4647 2.14098 11.3892C1.3948 10.0992 1.09521 8.59891 1.28869 7.1212C1.48217 5.64349 2.1579 4.27094 3.21104 3.21646C4.26419 2.16197 5.6359 1.48452 7.11336 1.28917C8.59082 1.09383 10.0915 1.39152 11.3825 2.13607C12.6735 2.88061 13.6827 4.03039 14.2536 5.40704C14.8244 6.78369 14.925 8.31025 14.5398 9.74992C14.1545 11.1896 13.3049 12.4619 12.1228 13.3694C10.9407 14.2769 9.49207 14.769 8.00175 14.7692ZM8.92482 8C8.92482 8.18257 8.87069 8.36104 8.76926 8.51283C8.66783 8.66463 8.52366 8.78295 8.35499 8.85281C8.18632 8.92268 8.00072 8.94096 7.82166 8.90534C7.6426 8.86972 7.47813 8.78181 7.34903 8.65271C7.21994 8.52362 7.13202 8.35914 7.09641 8.18008C7.06079 8.00102 7.07907 7.81542 7.14893 7.64675C7.2188 7.47808 7.33711 7.33392 7.48891 7.23249C7.64071 7.13106 7.81918 7.07692 8.00175 7.07692C8.24656 7.07692 8.48135 7.17418 8.65446 7.34729C8.82757 7.5204 8.92482 7.75519 8.92482 8ZM5.54021 8C5.54021 8.18257 5.48607 8.36104 5.38464 8.51283C5.28321 8.66463 5.13905 8.78295 4.97038 8.85281C4.80171 8.92268 4.61611 8.94096 4.43705 8.90534C4.25799 8.86972 4.09351 8.78181 3.96442 8.65271C3.83532 8.52362 3.74741 8.35914 3.71179 8.18008C3.67617 8.00102 3.69445 7.81542 3.76432 7.64675C3.83418 7.47808 3.9525 7.33392 4.1043 7.23249C4.2561 7.13106 4.43456 7.07692 4.61713 7.07692C4.86195 7.07692 5.09673 7.17418 5.26985 7.34729C5.44296 7.5204 5.54021 7.75519 5.54021 8ZM12.3094 8C12.3094 8.18257 12.2553 8.36104 12.1539 8.51283C12.0524 8.66463 11.9083 8.78295 11.7396 8.85281C11.5709 8.92268 11.3853 8.94096 11.2063 8.90534C11.0272 8.86972 10.8627 8.78181 10.7336 8.65271C10.6046 8.52362 10.5166 8.35914 10.481 8.18008C10.4454 8.00102 10.4637 7.81542 10.5336 7.64675C10.6034 7.47808 10.7217 7.33392 10.8735 7.23249C11.0253 7.13106 11.2038 7.07692 11.3864 7.07692C11.6312 7.07692 11.866 7.17418 12.0391 7.34729C12.2122 7.5204 12.3094 7.75519 12.3094 8Z"
                            fill="#999999"
                            className="group-hover/menu-link:fill-white group-[.active]/menu-link:fill-white"
                          />
                          <defs>
                            <linearGradient
                              id="icon_gradient"
                              x1="2.18655"
                              y1="3.46529"
                              x2="8.18057"
                              y2="12.9769"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset={0} stopColor="#795DED" />
                              <stop offset="0.0001" stopColor="#7D5DFE" />
                              <stop offset={1} stopColor="#76D466" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <span className="group-data-[sidebar-size=sm]:hidden group-data-[sidebar-size=sm]:ml-6 group-data-[sidebar-size=sm]:group-hover/sm:block ml-3 shrink-0">
                        Account Details
                      </span>
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li className="relative group/sm w-full group-data-[sidebar-size=sm]:hover:w-[calc(theme('spacing.app-menu-sm')_*_3.4)] group-data-[sidebar-size=sm]:flex-center">
  <a
    href="/admin"
    className="relative text-gray-500 dark:text-dark-text-two font-medium leading-none px-3.5 py-3 h-[42px] flex items-center group/menu-link ac-transition peer/dp-btn group-data-[sidebar-size=sm]:bg-gray-100 dark:group-data-[sidebar-size=sm]:bg-dark-icon group-data-[sidebar-size=sm]:hover:bg-primary-500/95 group-data-[sidebar-size=sm]:[&.active]:bg-primary-500/95 hover:text-white [&.active]:text-white hover:!bg-primary-500/95 [&.active]:bg-primary-500/95 group-data-[sidebar-size=sm]:rounded-lg group-data-[sidebar-size=sm]:group-hover/sm:!rounded-br-none group-data-[sidebar-size=lg]:rounded-l-full group-data-[sidebar-size=sm]:p-3 group-data-[sidebar-size=sm]:w-full"
  >
    <span className="group-data-[sidebar-size=sm]:hidden group-data-[sidebar-size=sm]:ml-6 group-data-[sidebar-size=sm]:group-hover/sm:block ml-3 shrink-0">
      Dashboard
    </span>
  </a>
</li>

                  <li className="relative group/sm w-full group-data-[sidebar-size=sm]:hover:w-[calc(theme('spacing.app-menu-sm')_*_3.4)] group-data-[sidebar-size=sm]:flex-center">
                    <a
                      href="/admin/managecomplaint"
                      className="relative text-gray-500 dark:text-dark-text-two font-medium leading-none px-3.5 py-3 h-[42px] flex items-center group/menu-link ac-transition peer/dp-btn group-data-[sidebar-size=sm]:bg-gray-100 dark:group-data-[sidebar-size=sm]:bg-dark-icon group-data-[sidebar-size=sm]:hover:bg-primary-500/95 group-data-[sidebar-size=sm]:[&.active]:bg-primary-500/95 hover:text-white [&.active]:text-white hover:!bg-primary-500/95 [&.active]:bg-primary-500/95 group-data-[sidebar-size=sm]:rounded-lg group-data-[sidebar-size=sm]:group-hover/sm:!rounded-br-none group-data-[sidebar-size=lg]:rounded-l-full group-data-[sidebar-size=sm]:p-3 group-data-[sidebar-size=sm]:w-full"
                    >
                      
                      <span className="group-data-[sidebar-size=sm]:hidden group-data-[sidebar-size=sm]:ml-6 group-data-[sidebar-size=sm]:group-hover/sm:block ml-3 shrink-0">
                        Manage Complaints
                      </span>
                    </a>
                  </li>

                  <li className="relative group/sm w-full group-data-[sidebar-size=sm]:hover:w-[calc(theme('spacing.app-menu-sm')_*_3.4)] group-data-[sidebar-size=sm]:flex-center">
                    <a
                      href="/admin/deletecomplaint"
                      className="relative text-gray-500 dark:text-dark-text-two font-medium leading-none px-3.5 py-3 h-[42px] flex items-center group/menu-link ac-transition peer/dp-btn group-data-[sidebar-size=sm]:bg-gray-100 dark:group-data-[sidebar-size=sm]:bg-dark-icon group-data-[sidebar-size=sm]:hover:bg-primary-500/95 group-data-[sidebar-size=sm]:[&.active]:bg-primary-500/95 hover:text-white [&.active]:text-white hover:!bg-primary-500/95 [&.active]:bg-primary-500/95 group-data-[sidebar-size=sm]:rounded-lg group-data-[sidebar-size=sm]:group-hover/sm:!rounded-br-none group-data-[sidebar-size=lg]:rounded-l-full group-data-[sidebar-size=sm]:p-3 group-data-[sidebar-size=sm]:w-full"
                    >
                      <span className="shrink-0 group-data-[sidebar-size=sm]:w-[calc(theme('spacing.app-menu-sm')_*_0.43)] group-data-[sidebar-size=sm]:flex-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M15.3864 8.00002C15.3866 9.2969 15.0452 10.5709 14.3966 11.694C13.7481 12.8171 12.8152 13.7495 11.6918 14.3975C10.5685 15.0456 9.29425 15.3863 7.99737 15.3856C6.70049 15.3848 5.42669 15.0425 4.30411 14.3931L1.42796 15.3523C1.31953 15.3885 1.20317 15.3937 1.09193 15.3675C0.980686 15.3412 0.878953 15.2845 0.798131 15.2037C0.717309 15.1229 0.660594 15.0211 0.634341 14.9099C0.608088 14.7987 0.613336 14.6823 0.649496 14.5739L1.60873 11.6977C1.04173 10.717 0.707971 9.61897 0.633264 8.48861C0.558557 7.35825 0.74491 6.22586 1.1779 5.17905C1.61089 4.13224 2.27892 3.19908 3.13028 2.45177C3.98165 1.70446 4.99353 1.16304 6.08764 0.869402C7.18175 0.575763 8.32874 0.537777 9.43988 0.758384C10.551 0.97899 11.5965 1.45227 12.4955 2.14162C13.3944 2.83096 14.1227 3.71787 14.624 4.73374C15.1253 5.74961 15.3862 6.8672 15.3864 8.00002Z"
                            fill="#EEEEEE"
                            className="group-hover/menu-link:fill-[url(#icon_gradient)] group-[.active]/menu-link:fill-[url(#icon_gradient)] dark:fill-none"
                          />
                          <path
                            d="M8.00175 1.9052e-07C6.62057 -0.000301201 5.26284 0.356991 4.06071 1.0371C2.85858 1.71721 1.85301 2.69696 1.14188 3.881C0.430744 5.06504 0.0382705 6.41302 0.00265996 7.79374C-0.0329505 9.17446 0.289515 10.5409 0.938669 11.76L0.0655923 14.3792C-0.00672718 14.5961 -0.0172224 14.8288 0.035283 15.0513C0.0877884 15.2738 0.201219 15.4772 0.362863 15.6389C0.524506 15.8005 0.727973 15.914 0.950459 15.9665C1.17295 16.019 1.40566 16.0085 1.62252 15.9362L4.24175 15.0631C5.31465 15.6337 6.50345 15.9525 7.71792 15.9951C8.93239 16.0377 10.1406 15.8031 11.2509 15.309C12.3611 14.815 13.3442 14.0745 14.1256 13.1438C14.9069 12.213 15.466 11.1165 15.7603 9.93749C16.0546 8.75844 16.0765 7.52785 15.8242 6.33911C15.5719 5.15036 15.0521 4.03472 14.3042 3.07686C13.5564 2.119 12.6002 1.34409 11.5081 0.810965C10.4161 0.277837 9.21697 0.000498639 8.00175 1.9052e-07ZM8.00175 14.7692C6.81173 14.77 5.64259 14.4567 4.61252 13.8608C4.51903 13.8065 4.4129 13.7779 4.30482 13.7777C4.23862 13.7777 4.17287 13.7886 4.11021 13.81L1.23252 14.7692L2.19175 11.8923C2.2194 11.8096 2.22917 11.722 2.22042 11.6353C2.21166 11.5486 2.18459 11.4647 2.14098 11.3892C1.3948 10.0992 1.09521 8.59891 1.28869 7.1212C1.48217 5.64349 2.1579 4.27094 3.21104 3.21646C4.26419 2.16197 5.6359 1.48452 7.11336 1.28917C8.59082 1.09383 10.0915 1.39152 11.3825 2.13607C12.6735 2.88061 13.6827 4.03039 14.2536 5.40704C14.8244 6.78369 14.925 8.31025 14.5398 9.74992C14.1545 11.1896 13.3049 12.4619 12.1228 13.3694C10.9407 14.2769 9.49207 14.769 8.00175 14.7692ZM8.92482 8C8.92482 8.18257 8.87069 8.36104 8.76926 8.51283C8.66783 8.66463 8.52366 8.78295 8.35499 8.85281C8.18632 8.92268 8.00072 8.94096 7.82166 8.90534C7.6426 8.86972 7.47813 8.78181 7.34903 8.65271C7.21994 8.52362 7.13202 8.35914 7.09641 8.18008C7.06079 8.00102 7.07907 7.81542 7.14893 7.64675C7.2188 7.47808 7.33711 7.33392 7.48891 7.23249C7.64071 7.13106 7.81918 7.07692 8.00175 7.07692C8.24656 7.07692 8.48135 7.17418 8.65446 7.34729C8.82757 7.5204 8.92482 7.75519 8.92482 8ZM5.54021 8C5.54021 8.18257 5.48607 8.36104 5.38464 8.51283C5.28321 8.66463 5.13905 8.78295 4.97038 8.85281C4.80171 8.92268 4.61611 8.94096 4.43705 8.90534C4.25799 8.86972 4.09351 8.78181 3.96442 8.65271C3.83532 8.52362 3.74741 8.35914 3.71179 8.18008C3.67617 8.00102 3.69445 7.81542 3.76432 7.64675C3.83418 7.47808 3.9525 7.33392 4.1043 7.23249C4.2561 7.13106 4.43456 7.07692 4.61713 7.07692C4.86195 7.07692 5.09673 7.17418 5.26985 7.34729C5.44296 7.5204 5.54021 7.75519 5.54021 8ZM12.3094 8C12.3094 8.18257 12.2553 8.36104 12.1539 8.51283C12.0524 8.66463 11.9083 8.78295 11.7396 8.85281C11.5709 8.92268 11.3853 8.94096 11.2063 8.90534C11.0272 8.86972 10.8627 8.78181 10.7336 8.65271C10.6046 8.52362 10.5166 8.35914 10.481 8.18008C10.4454 8.00102 10.4637 7.81542 10.5336 7.64675C10.6034 7.47808 10.7217 7.33392 10.8735 7.23249C11.0253 7.13106 11.2038 7.07692 11.3864 7.07692C11.6312 7.07692 11.866 7.17418 12.0391 7.34729C12.2122 7.5204 12.3094 7.75519 12.3094 8Z"
                            fill="#999999"
                            className="group-hover/menu-link:fill-white group-[.active]/menu-link:fill-white"
                          />
                          <defs>
                            <linearGradient
                              id="icon_gradient"
                              x1="2.18655"
                              y1="3.46529"
                              x2="8.18057"
                              y2="12.9769"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset={0} stopColor="#795DED" />
                              <stop offset="0.0001" stopColor="#7D5DFE" />
                              <stop offset={1} stopColor="#76D466" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <span className="group-data-[sidebar-size=sm]:hidden group-data-[sidebar-size=sm]:ml-6 group-data-[sidebar-size=sm]:group-hover/sm:block ml-3 shrink-0">
                        Delete Complaints
                      </span>
                    </a>
                  </li>

                  <li className="relative group/sm w-full group-data-[sidebar-size=sm]:hover:w-[calc(theme('spacing.app-menu-sm')_*_3.4)] group-data-[sidebar-size=sm]:flex-center">
                    <a
                      href="/admin/trackstatus"
                      className="relative text-gray-500 dark:text-dark-text-two font-medium leading-none px-3.5 py-3 h-[42px] flex items-center group/menu-link ac-transition peer/dp-btn group-data-[sidebar-size=sm]:bg-gray-100 dark:group-data-[sidebar-size=sm]:bg-dark-icon group-data-[sidebar-size=sm]:hover:bg-primary-500/95 group-data-[sidebar-size=sm]:[&.active]:bg-primary-500/95 hover:text-white [&.active]:text-white hover:!bg-primary-500/95 [&.active]:bg-primary-500/95 group-data-[sidebar-size=sm]:rounded-lg group-data-[sidebar-size=sm]:group-hover/sm:!rounded-br-none group-data-[sidebar-size=lg]:rounded-l-full group-data-[sidebar-size=sm]:p-3 group-data-[sidebar-size=sm]:w-full"
                    >
                      <span className="shrink-0 group-data-[sidebar-size=sm]:w-[calc(theme('spacing.app-menu-sm')_*_0.43)] group-data-[sidebar-size=sm]:flex-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M15.3864 8.00002C15.3866 9.2969 15.0452 10.5709 14.3966 11.694C13.7481 12.8171 12.8152 13.7495 11.6918 14.3975C10.5685 15.0456 9.29425 15.3863 7.99737 15.3856C6.70049 15.3848 5.42669 15.0425 4.30411 14.3931L1.42796 15.3523C1.31953 15.3885 1.20317 15.3937 1.09193 15.3675C0.980686 15.3412 0.878953 15.2845 0.798131 15.2037C0.717309 15.1229 0.660594 15.0211 0.634341 14.9099C0.608088 14.7987 0.613336 14.6823 0.649496 14.5739L1.60873 11.6977C1.04173 10.717 0.707971 9.61897 0.633264 8.48861C0.558557 7.35825 0.74491 6.22586 1.1779 5.17905C1.61089 4.13224 2.27892 3.19908 3.13028 2.45177C3.98165 1.70446 4.99353 1.16304 6.08764 0.869402C7.18175 0.575763 8.32874 0.537777 9.43988 0.758384C10.551 0.97899 11.5965 1.45227 12.4955 2.14162C13.3944 2.83096 14.1227 3.71787 14.624 4.73374C15.1253 5.74961 15.3862 6.8672 15.3864 8.00002Z"
                            fill="#EEEEEE"
                            className="group-hover/menu-link:fill-[url(#icon_gradient)] group-[.active]/menu-link:fill-[url(#icon_gradient)] dark:fill-none"
                          />
                          <path
                            d="M8.00175 1.9052e-07C6.62057 -0.000301201 5.26284 0.356991 4.06071 1.0371C2.85858 1.71721 1.85301 2.69696 1.14188 3.881C0.430744 5.06504 0.0382705 6.41302 0.00265996 7.79374C-0.0329505 9.17446 0.289515 10.5409 0.938669 11.76L0.0655923 14.3792C-0.00672718 14.5961 -0.0172224 14.8288 0.035283 15.0513C0.0877884 15.2738 0.201219 15.4772 0.362863 15.6389C0.524506 15.8005 0.727973 15.914 0.950459 15.9665C1.17295 16.019 1.40566 16.0085 1.62252 15.9362L4.24175 15.0631C5.31465 15.6337 6.50345 15.9525 7.71792 15.9951C8.93239 16.0377 10.1406 15.8031 11.2509 15.309C12.3611 14.815 13.3442 14.0745 14.1256 13.1438C14.9069 12.213 15.466 11.1165 15.7603 9.93749C16.0546 8.75844 16.0765 7.52785 15.8242 6.33911C15.5719 5.15036 15.0521 4.03472 14.3042 3.07686C13.5564 2.119 12.6002 1.34409 11.5081 0.810965C10.4161 0.277837 9.21697 0.000498639 8.00175 1.9052e-07ZM8.00175 14.7692C6.81173 14.77 5.64259 14.4567 4.61252 13.8608C4.51903 13.8065 4.4129 13.7779 4.30482 13.7777C4.23862 13.7777 4.17287 13.7886 4.11021 13.81L1.23252 14.7692L2.19175 11.8923C2.2194 11.8096 2.22917 11.722 2.22042 11.6353C2.21166 11.5486 2.18459 11.4647 2.14098 11.3892C1.3948 10.0992 1.09521 8.59891 1.28869 7.1212C1.48217 5.64349 2.1579 4.27094 3.21104 3.21646C4.26419 2.16197 5.6359 1.48452 7.11336 1.28917C8.59082 1.09383 10.0915 1.39152 11.3825 2.13607C12.6735 2.88061 13.6827 4.03039 14.2536 5.40704C14.8244 6.78369 14.925 8.31025 14.5398 9.74992C14.1545 11.1896 13.3049 12.4619 12.1228 13.3694C10.9407 14.2769 9.49207 14.769 8.00175 14.7692ZM8.92482 8C8.92482 8.18257 8.87069 8.36104 8.76926 8.51283C8.66783 8.66463 8.52366 8.78295 8.35499 8.85281C8.18632 8.92268 8.00072 8.94096 7.82166 8.90534C7.6426 8.86972 7.47813 8.78181 7.34903 8.65271C7.21994 8.52362 7.13202 8.35914 7.09641 8.18008C7.06079 8.00102 7.07907 7.81542 7.14893 7.64675C7.2188 7.47808 7.33711 7.33392 7.48891 7.23249C7.64071 7.13106 7.81918 7.07692 8.00175 7.07692C8.24656 7.07692 8.48135 7.17418 8.65446 7.34729C8.82757 7.5204 8.92482 7.75519 8.92482 8ZM5.54021 8C5.54021 8.18257 5.48607 8.36104 5.38464 8.51283C5.28321 8.66463 5.13905 8.78295 4.97038 8.85281C4.80171 8.92268 4.61611 8.94096 4.43705 8.90534C4.25799 8.86972 4.09351 8.78181 3.96442 8.65271C3.83532 8.52362 3.74741 8.35914 3.71179 8.18008C3.67617 8.00102 3.69445 7.81542 3.76432 7.64675C3.83418 7.47808 3.9525 7.33392 4.1043 7.23249C4.2561 7.13106 4.43456 7.07692 4.61713 7.07692C4.86195 7.07692 5.09673 7.17418 5.26985 7.34729C5.44296 7.5204 5.54021 7.75519 5.54021 8ZM12.3094 8C12.3094 8.18257 12.2553 8.36104 12.1539 8.51283C12.0524 8.66463 11.9083 8.78295 11.7396 8.85281C11.5709 8.92268 11.3853 8.94096 11.2063 8.90534C11.0272 8.86972 10.8627 8.78181 10.7336 8.65271C10.6046 8.52362 10.5166 8.35914 10.481 8.18008C10.4454 8.00102 10.4637 7.81542 10.5336 7.64675C10.6034 7.47808 10.7217 7.33392 10.8735 7.23249C11.0253 7.13106 11.2038 7.07692 11.3864 7.07692C11.6312 7.07692 11.866 7.17418 12.0391 7.34729C12.2122 7.5204 12.3094 7.75519 12.3094 8Z"
                            fill="#999999"
                            className="group-hover/menu-link:fill-white group-[.active]/menu-link:fill-white"
                          />
                          <defs>
                            <linearGradient
                              id="icon_gradient"
                              x1="2.18655"
                              y1="3.46529"
                              x2="8.18057"
                              y2="12.9769"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset={0} stopColor="#795DED" />
                              <stop offset="0.0001" stopColor="#7D5DFE" />
                              <stop offset={1} stopColor="#76D466" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <span className="group-data-[sidebar-size=sm]:hidden group-data-[sidebar-size=sm]:ml-6 group-data-[sidebar-size=sm]:group-hover/sm:block ml-3 shrink-0">
                        Track Status
                      </span>
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-auto px-7 py-6 group-data-[sidebar-size=sm]:px-2">
          <a
            href="../login"
            className="flex-center-between text-gray-500 dark:text-dark-text font-semibold leading-none bg-gray-200 dark:bg-[#090927] dark:group-data-[sidebar-size=sm]:bg-dark-card-shade rounded-[10px] px-6 py-4 group-data-[sidebar-size=sm]:p-[12px_8px] group-data-[sidebar-size=sm]:justify-center"
          >
            <span className="group-data-[sidebar-size=sm]:hidden block">
              Logout
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M6.66645 15.3328C6.66645 15.5096 6.59621 15.6792 6.47119 15.8042C6.34617 15.9292 6.17661 15.9995 5.9998 15.9995H1.33329C0.979679 15.9995 0.640552 15.859 0.390511 15.609C0.140471 15.3589 0 15.0198 0 14.6662V1.33329C0 0.979679 0.140471 0.640552 0.390511 0.390511C0.640552 0.140471 0.979679 0 1.33329 0H5.9998C6.17661 0 6.34617 0.0702357 6.47119 0.195256C6.59621 0.320276 6.66645 0.48984 6.66645 0.666645C6.66645 0.84345 6.59621 1.01301 6.47119 1.13803C6.34617 1.26305 6.17661 1.33329 5.9998 1.33329H1.33329V14.6662H5.9998C6.17661 14.6662 6.34617 14.7364 6.47119 14.8614C6.59621 14.9865 6.66645 15.156 6.66645 15.3328ZM15.8045 8.47139L12.4713 11.8046C12.378 11.898 12.2592 11.9615 12.1298 11.9873C12.0004 12.0131 11.8663 11.9999 11.7444 11.9494C11.6225 11.8989 11.5184 11.8133 11.4451 11.7036C11.3719 11.5939 11.3329 11.4649 11.333 11.333V8.66638H5.9998C5.823 8.66638 5.65343 8.59615 5.52841 8.47113C5.40339 8.34611 5.33316 8.17654 5.33316 7.99974C5.33316 7.82293 5.40339 7.65337 5.52841 7.52835C5.65343 7.40333 5.823 7.33309 5.9998 7.33309H11.333V4.66651C11.3329 4.53459 11.3719 4.4056 11.4451 4.29587C11.5184 4.18615 11.6225 4.10062 11.7444 4.05012C11.8663 3.99962 12.0004 3.98642 12.1298 4.01218C12.2592 4.03795 12.378 4.10152 12.4713 4.19486L15.8045 7.52809C15.8665 7.59 15.9156 7.66352 15.9492 7.74445C15.9827 7.82538 16 7.91213 16 7.99974C16 8.08735 15.9827 8.17409 15.9492 8.25502C15.9156 8.33595 15.8665 8.40948 15.8045 8.47139ZM14.3879 7.99974L12.6663 6.27563V9.72385L14.3879 7.99974Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;
