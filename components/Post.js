import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconField } from "@heroicons/react/solid";
import { useSession } from "next-auth/react";
import { useState } from "react";

function Post({ img, username, caption, id, userImg }) {
  const { data: session } = useSession();
  const [comments, setComments] = useState([]);
  return (
    <div className="bg-white my-7 border rounded-sm">
      {/* Header */}
      <div className="flex items-center p-5">
        <img
          src={userImg}
          className="h-12 w-12 rounded-full object-contain border p-1 mr-3"
          alt="profile-pic"
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      {/* Img */}
      <img src={img} className="object-cover w-full" alt="" />
      {/* Buttons */}
      {session && (
        <div className="flex justify-between px-4 py-4">
          <div className="flex space-x-4">
            <HeartIcon className="btn" />
            <ChatIcon className="btn" />
            <PaperAirplaneIcon className="btn" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}
      {/* Caption */}
      <p className="p-5 truncate">
        <span className="font-bold mr-1">{username} </span> {caption}
      </p>

      {/* Comments */}

      {/* Input box */}
      {session && (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="h-7" />
          <input
            placeholder="Add a comment..."
            className="border-none flex-1 focus:ring-0 outline-none"
            type="text"
          />
          <button className="font-semibold text-blue-400">Post</button>
        </form>
      )}
    </div>
  );
}

export default Post;
