import React from "react";
import MemoHeart from "../../assets/icons/Heart";
import MemoComment from "../../assets/icons/Comment";
import MemoSend from "../../assets/icons/Send";
import MemoSave from "../../assets/icons/Save";
import Carousel from "react-instagram-carousel";
import { PostProps } from "../../interfaces/post";

const Post: React.FunctionComponent<PostProps> = ({
  created_at,
  description,
  image,
  user,
  image_filter,
}) => {
  return (
    <div className="mb-4 bg-white">
      {/* Header e avatar */}
      <div className="w-full flex items-center gap-x-4 py-3 ml-4 bg-white">
        <img
          src={user.profile_pic || "https://lorem.pcisum/200/200"}
          className="rounded-full w-8 h-8"
          alt="avatar"
        />
        <div>
          <p className="text-neutral-800 font-semibold text-sm">
            {user.username}
          </p>
          <p className="text-neutral-800 text-xs font-light">{image_filter}</p>
        </div>
      </div>
      {/* Img */}
      <div className="w-screen">
        <img className="w-full" src={image} alt="post" />
      </div>
      {/* Bottom */}
      <div className="px-4 bg-white">
        <div className="flex flex-row items-center py-3 pb-0 w-full justify-between">
          <div className="flex flex-row items-center pb-2">
            <MemoHeart className="text-2xl m-2 ml-0" />
            <MemoComment className="text-2xl m-2" />
            <MemoSend className="text-2xl m-2" />
          </div>
          <MemoSave className="text-2xl m-2" />
        </div>
        <div className="text-neutral-800 text-sm">
          <p className="pb-2">
            Curtido por <strong>jvgcunha</strong> e{" "}
            <strong>arissanonaca</strong>
          </p>
          <p className="pb-2">
            <strong>{user.username}</strong> {description}
          </p>
          <p className="text-xs text-neutral-400 pb-4">{created_at}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
