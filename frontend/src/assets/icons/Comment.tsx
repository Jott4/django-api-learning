import * as React from "react";

function Comment(props: any) {
  return (
    <svg
      aria-label="Comentar"
      className="prefix___ab6-"
      color="#262626"
      fill="#262626"
      height="1em"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  );
}

const MemoComment = React.memo(Comment);
export default MemoComment;
