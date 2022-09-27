import * as React from "react";

function Send(props: any) {
  return (
    <svg
      aria-label="Compartilhar publica\xE7\xE3o"
      className="prefix___ab6-"
      color="#262626"
      fill="#262626"
      height="1em"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M22 3L9.218 10.083M11.698 20.334L22 3.001H2l7.218 7.083 2.48 10.25z"
      />
    </svg>
  );
}

const MemoSend = React.memo(Send);
export default MemoSend;
