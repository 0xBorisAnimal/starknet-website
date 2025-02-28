import React from "react";
import ControlButton from "./ControlButton";

export const ShareButton = ({ onShare }: { onShare: () => void }) => {
  return (
    <ControlButton
      ariaLabel="Share"
      icon={
        <svg
          width="24"
          height="24"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_137_3442)">
            <path
              d="M22.6667 20.5777C21.8222 20.5777 21.0667 20.911 20.4889 21.4333L12.5667 16.8221C12.6222 16.5666 12.6667 16.311 12.6667 16.0444C12.6667 15.7777 12.6222 15.5221 12.5667 15.2666L20.4 10.6999C21 11.2555 21.7889 11.5999 22.6667 11.5999C24.5111 11.5999 26 10.111 26 8.26659C26 6.42215 24.5111 4.93326 22.6667 4.93326C20.8222 4.93326 19.3333 6.42215 19.3333 8.26659C19.3333 8.53326 19.3778 8.78881 19.4333 9.04437L11.6 13.611C11 13.0555 10.2111 12.711 9.33333 12.711C7.48889 12.711 6 14.1999 6 16.0444C6 17.8888 7.48889 19.3777 9.33333 19.3777C10.2111 19.3777 11 19.0333 11.6 18.4777L19.5111 23.0999C19.4556 23.3333 19.4222 23.5777 19.4222 23.8221C19.4222 25.611 20.8778 27.0666 22.6667 27.0666C24.4556 27.0666 25.9111 25.611 25.9111 23.8221C25.9111 22.0333 24.4556 20.5777 22.6667 20.5777Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_137_3442">
              <rect width="32" height="32" fill="currentColor" />
            </clipPath>
          </defs>
        </svg>
      }
      onClick={onShare}
    />
  );
};
