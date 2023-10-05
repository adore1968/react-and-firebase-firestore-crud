"use client";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { AppContext } from "./AppContext";
import db from "@/firebase/app";
import { useEffect, useState } from "react";

function AppProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [links, setLinks] = useState([]);

  const createLink = async (newLink) => {
    try {
      const linksCollection = collection(db, "links");
      const docRef = await addDoc(linksCollection, newLink);
      // console.log(docRef);
    } catch (error) {
      console.log("Error adding document: ", error);
    }
  };

  const getLink = (id) => {
    const linkFound = links.find((link) => link.id === id);
    if (linkFound) return linkFound;
  };

  const updateLink = async (id, newLink) => {
    const linkRef = doc(db, "links", id);
    await updateDoc(linkRef, newLink);
  };

  const deleteLink = async (id) => {
    try {
      await deleteDoc(doc(db, "links", id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const linksCollection = collection(db, "links");
    onSnapshot(linksCollection, (querySnapshot) => {
      const links = [];
      querySnapshot.forEach((doc) => {
        const newDoc = { ...doc.data(), id: doc.id };
        links.push(newDoc);
      });
      setLinks(links);
      setIsLoading(false);
    });
  }, []);

  return (
    <AppContext.Provider
      value={{ isLoading, links, createLink, getLink, updateLink, deleteLink }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
