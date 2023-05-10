import Link from "next/link";

export const metadata = {
  title: "About page",
  description: "Generated by create next app",
};

export default function About() {
  // throw new Error("failed data");
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>About page</h1>
        <Link href='/code/repos' >Check my Repos</Link>
      </main>
    </div>
  );
}