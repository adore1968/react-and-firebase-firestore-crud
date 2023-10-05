"use client";
import { useAppContext } from "@/context/AppContext";
import LinkCard from "./LinkCard";

function LinksList() {
  const { links } = useAppContext();

  return (
    <div className="lg:grid-cols-3 sm:grid-cols-2 grid grid-cols-1 gap-5">
      {links.map((link) => (
        <LinkCard key={link.id} link={link} />
      ))}
    </div>
  );
}

export default LinksList;
