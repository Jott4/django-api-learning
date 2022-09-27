import * as React from "react";

function Save(props: any) {
  return (
    <svg
      aria-label="Salvar"
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20 21l-8-7.56L4 21V3h16v18z"
      />
    </svg>
  );
}

const MemoSave = React.memo(Save);
export default MemoSave;
