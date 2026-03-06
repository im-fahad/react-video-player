import React from "react";

export const IconDesktop = ({ className = "" }: { className?: string }) => (
    <svg
        className={className}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M14 2H10C6.72077 2 5.08116 2 3.91891 2.81382C3.48891 3.1149 3.1149 3.48891 2.81382 3.91891C2 5.08116 2 6.72077 2 10C2 13.2792 2 14.9188 2.81382 16.0811C3.1149 16.5111 3.48891 16.8851 3.91891 17.1862C5.08116 18 6.72077 18 10 18H14C17.2792 18 18.9188 18 20.0811 17.1862C20.5111 16.8851 20.8851 16.5111 21.1862 16.0811C22 14.9188 22 13.2792 22 10C22 6.72077 22 5.08116 21.1862 3.91891C20.8851 3.48891 20.5111 3.1149 20.0811 2.81382C18.9188 2 17.2792 2 14 2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
        />
        <path
            d="M11 15H13"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M14.5 22L14.1845 21.5811C13.4733 20.6369 13.2969 19.1944 13.7468 18M9.5 22L9.8155 21.5811C10.5267 20.6369 10.7031 19.1944 10.2532 18"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
        />
        <path d="M7 22H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

export const IconMobile = ({ className = "" }: { className?: string }) => (
    <svg
        className={className}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M5 9C5 5.70017 5 4.05025 6.02513 3.02513C7.05025 2 8.70017 2 12 2C15.2998 2 16.9497 2 17.9749 3.02513C19 4.05025 19 5.70017 19 9V15C19 18.2998 19 19.9497 17.9749 20.9749C16.9497 22 15.2998 22 12 22C8.70017 22 7.05025 22 6.02513 20.9749C5 19.9497 5 18.2998 5 15V9Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        />
        <path
            d="M11 19H13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M9 2L9.089 2.53402C9.28188 3.69129 9.37832 4.26993 9.77519 4.62204C10.1892 4.98934 10.7761 5 12 5C13.2239 5 13.8108 4.98934 14.2248 4.62204C14.6217 4.26993 14.7181 3.69129 14.911 2.53402L15 2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
        />
    </svg>
);

export const IconX = ({ className = "" }: { className?: string }) => (
    <svg
        className={className}
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M6.94994 5.53594L12.1929 0.292938C12.5834 -0.0975275 13.2165 -0.0975279 13.6069 0.292938C13.9974 0.683403 13.9974 1.31647 13.6069 1.70694L8.36394 6.94994L13.6069 12.1929C13.9974 12.5834 13.9974 13.2165 13.6069 13.6069C13.2165 13.9974 12.5834 13.9974 12.1929 13.6069L6.94994 8.36394L1.70694 13.6069C1.31647 13.9974 0.683403 13.9974 0.292938 13.6069C-0.0975279 13.2165 -0.0975277 12.5834 0.292938 12.1929L5.53594 6.94994L0.292938 1.70694C-0.0975279 1.31647 -0.0975279 0.683403 0.292938 0.292938C0.683403 -0.0975279 1.31647 -0.0975277 1.70694 0.292938L6.94994 5.53594Z"
            fill="white"
        />
    </svg>
);

export const IconPlay = ({ className = "" }: { className?: string }) => (
    <svg
        className={className}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <mask
            id="mask0_4364_137031"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="16"
            height="16"
        >
            <rect width="16" height="16" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_4364_137031)">
            <path
                d="M5.3335 11.45V4.54997C5.3335 4.36108 5.40016 4.20275 5.5335 4.07497C5.66683 3.94719 5.82238 3.8833 6.00016 3.8833C6.05572 3.8833 6.11405 3.89163 6.17516 3.9083C6.23627 3.92497 6.29461 3.94997 6.35016 3.9833L11.7835 7.4333C11.8835 7.49997 11.9585 7.5833 12.0085 7.6833C12.0585 7.7833 12.0835 7.88886 12.0835 7.99997C12.0835 8.11108 12.0585 8.21663 12.0085 8.31663C11.9585 8.41663 11.8835 8.49997 11.7835 8.56663L6.35016 12.0166C6.29461 12.05 6.23627 12.075 6.17516 12.0916C6.11405 12.1083 6.05572 12.1166 6.00016 12.1166C5.82238 12.1166 5.66683 12.0527 5.5335 11.925C5.40016 11.7972 5.3335 11.6389 5.3335 11.45Z"
                fill="white"
            />
        </g>
    </svg>
);
