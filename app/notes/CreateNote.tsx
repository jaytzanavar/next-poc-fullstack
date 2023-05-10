"use client";

// use client render only on the browser not the server
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const crate = async () => {
    await fetch("http://127.0.0.1:8090/api/collections/content/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });

    setTitle("");
    setContent("");
    router.refresh();
  };

  return (
    <form onSubmit={crate} className="grid grid-cols-3 gap-4 mt-10 grid-rows-3">
      <h3 className="text-center col-start-2 col-end-2 font-bold ">
        Create a new Note
      </h3>
      <div className="  col-start-2 col-end-2  flex justify-center  ">
        <input
          type="text"
          placeholder="Title"
          value={title}
          className="rounded-sm w-[50%] "
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="  col-start-2 col-end-2  flex justify-center  ">
        <textarea
          placeholder="Content"
          className=" w-[50%] rounded-sm "
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className="  col-start-2 col-end-2  flex justify-center  ">
        <button
          className="rounded  bg-cyan-500 hover:bg-cyan-200 ring-2 ring-white-500 w-60 h-16 "
          type="submit"
        >
          Create note
        </button>
      </div>
    </form>
  );
}
