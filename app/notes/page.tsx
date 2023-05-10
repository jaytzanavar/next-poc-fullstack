import Link from "next/link";
import PocketBase from "pocketbase";
import CreateNote from "./CreateNote";

async function getNotes() {
  // const res = await fetch(
  //   "http://127.0.0.1:8090/api/collections/content/records",
  //   { cache: "no-store" }
  // );
  // const data = await res.json();
  // instead pockedBase has an orm  npm install pocketbase --save

  const db = new PocketBase("http://127.0.0.1:8090");
  (db.collection);
  const data = await db.collection("content").getList(1, 12);
  (data);
  return data?.items as any[];
}

export const metadata = {
  title: "Notes page",
  description: "Gen by me from scratch"
};

export default async function Notes() {
  const notes = await getNotes();

  return (
    <div>
      <h1 className="text-center">Notes</h1>
      <div className="grid grid-cols-4 gap-4 grid-rows-3 p-6">
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>

      <CreateNote />
    </div>
  );
}

function Note({ note }: any) {
  const { id, title, content, created } = note || {};
  const getDate = (date: number) => {
    return `${new Date(date).getFullYear()} / ${new Date(
      date
    ).getMonth()} / ${new Date(date).getDay()} `;
  };
  return (
    <div className="h-40 row-span-1 col-span-2 flex-col px-6 p-2 bg-yellow-200 border-black/20 border-2 border-solid ">
      <Link href={`/notes/${id}`}>
        <h2 className="text-center">{title}</h2>
        <h5 className="h-[60%]">{content}</h5>
        <p>{getDate(Date.parse(created))}</p>
      </Link>
    </div>
  );
}
