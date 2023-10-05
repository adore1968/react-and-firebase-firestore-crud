"use client";
import { useAppContext } from "@/context/AppContext";
import Link from "next/link";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

function LinkCard({ link }) {
  const { deleteLink } = useAppContext();

  return (
    <div className="bg-gray-50 text-gray-950 sm:flex-row sm:gap-0 sm:text-left sm:mb-0 flex flex-col justify-between gap-5 p-5 mb-5 text-center">
      <div>
        <h3 className="mb-1 text-xl font-medium">{link.name}</h3>
        <p className="mb-5 text-lg text-gray-800">{link.description}</p>
        <Link href={link.url} className="text-lg text-red-600" target="_blank">
          Go to website
        </Link>
      </div>
      <div className="text-gray-50 sm:justify-start sm:text-2xl flex justify-center gap-1 text-xl">
        <Link
          href={`/update-link/${link.id}`}
          className="hover:text-green-600 h-fit text-green-700 transition-colors ease-in"
        >
          <AiFillEdit />
        </Link>
        <button
          className="hover:text-red-600 h-fit text-red-700 transition-colors ease-in"
          onClick={() => deleteLink(link.id)}
        >
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
}

export default LinkCard;
