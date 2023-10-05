"use client";
import LinksList from "@/components/LinksList";
import Loader from "@/components/Loader";
import { useAppContext } from "@/context/AppContext";

function HomePage() {
  const { isLoading } = useAppContext();

  if (isLoading) return <Loader />;

  return (
    <section className="mt-12">
      <LinksList />
    </section>
  );
}

export default HomePage;
