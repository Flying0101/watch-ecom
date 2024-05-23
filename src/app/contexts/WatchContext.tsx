"use client";
import { Watch } from "@/types/watch";
import Fuse from "fuse.js";
import React, { createContext, useContext, useEffect, useState } from "react";

const WatchContext = createContext<any>(null);

export const WatchProvider = ({ children }: { children: React.ReactNode }) => {
  const [allWatches, setAllWatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchWord, setSearchWord] = useState<string>("");
  const [results, setResults] = useState<string[]>([]);
  const [fuse, setFuse] = useState<any>(null);
  const [focused, setFocused] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [loadingIndex, setLoadingIndex] = useState(true);
  const [activeFilter, setActiveFilter] = useState<string>("");
  const [checkedSize, setCheckedSize] = useState("");
  const [checkedMaterial, setCheckedMaterial] = useState("");
  const [watchesQty, setWatchesQty] = useState("");
  const [cartQty, setCartQty] = useState(0);
  const [cartWatches, setCartWatches] = useState<Watch[]>([]);

  const addToCart = (watch: Watch) => {
    const existingWatch = cartWatches.find((item) => item.id === watch.id);
    if (existingWatch) {
      const updatedCart = cartWatches.map((item) =>
        item.id === watch.id
          ? { ...item, qty: item.qty + 1, total: (item.qty + 1) * item.price }
          : item
      );
      setCartWatches(updatedCart);
    } else {
      setCartWatches([
        ...cartWatches,
        { ...watch, qty: 1, total: watch.price },
      ]);
    }
  };

  const removeFromCart = (watchId: string) => {
    const existingWatch = cartWatches.find(
      (item) => item.id === parseInt(watchId)
    );
    if (existingWatch && existingWatch.qty > 1) {
      const updatedCart = cartWatches.map((item) =>
        item.id === parseInt(watchId)
          ? { ...item, qty: item.qty - 1, total: (item.qty - 1) * item.price }
          : item
      );
      setCartWatches(updatedCart);
    } else {
      const updatedCart = cartWatches.filter(
        (item) => item.id !== parseInt(watchId)
      );
      setCartWatches(updatedCart);
    }
  };

  const removeWatch = (id: string) => {
    setCartWatches(prevWatches => prevWatches.filter(watch => watch.id !== parseInt(id)));
  };


  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  const HandleFocus = () => {
    setFocused(!focused);
  };

  //Load them all once.
  useEffect(() => {
    const loadAllWatches = async () => {
      try {
        const response = await fetch(`/api/watches`);
        if (!response.ok) {
          const errorData = await response.json();
          console.error("Error fetching data:", errorData);
          return;
        }
        const resultData = await response.json();
        setAllWatches(resultData.mockData);
      } catch (error) {
        console.error("There was an error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    loadAllWatches();
  }, []);

  useEffect(() => {
    const fetchSerializedIndex = async () => {
      try {
        const response = await fetch(`/api/watches`);
        if (!response.ok) {
          const errorData = await response.json();
          console.error("Error fetching data:", errorData);
          return;
        }
        const { searchIndex, mockData } = await response.json();
        const deserializedIndex = Fuse.parseIndex(searchIndex);
        const fuseInstance = new Fuse(
          mockData.collection,
          {
            keys: ["brand"],
            includeScore: true,
            includeMatches: true,
            threshold: 0.2,
            minMatchCharLength: 2,
          },
          deserializedIndex
        );
        setFuse(fuseInstance);
        setLoadingIndex(false);
      } catch (error) {
        console.error("There was an error fetching data:", error);
      }
    };
    fetchSerializedIndex();
  }, []);

  const handleSearch = () => {
    if (!fuse) return;
    const searchResult = fuse.search(searchWord);
    setResults(searchResult);
    setFocusedIndex(0);
  };

  useEffect(() => {
    handleSearch();
  }, [searchWord]);

  return (
    <WatchContext.Provider
      value={{
        allWatches,
        loading,
        HandleFocus,
        focused,
        searchWord,
        setSearchWord,
        results,
        setResults,
        handleFilterClick,
        activeFilter,
        setActiveFilter,
        checkedSize,
        setCheckedSize,
        checkedMaterial,
        setCheckedMaterial,
        setWatchesQty,
        watchesQty,
        cartQty,
        setCartQty,
        cartWatches,
        setCartWatches,
        addToCart,
        removeFromCart,
        removeWatch
      }}
    >
      {children}
    </WatchContext.Provider>
  );
};

export const useSearch = () => {
  return useContext(WatchContext);
};
