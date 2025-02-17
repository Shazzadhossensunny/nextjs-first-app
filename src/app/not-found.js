import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center ">
      <h2 className="text-4xl">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className="underline" href="/">
        Return Home
      </Link>
    </div>
  );
}
