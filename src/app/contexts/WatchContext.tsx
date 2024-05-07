"use client";
import { usePathname, useRouter } from "next/navigation";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const WatchContext = createContext<any>(null);

export const WatchProvider = ({ children }: { children: React.ReactNode }) => {
  const [allWatches, setAllWatches] = useState(null);
  const [loading, setLoading] = useState(true);

  const [resultVisible, setResultVisible] = useState(false);
  const [query, setQuery] = useState<string>("");
  const [searchWord, setSearchWord] = useState<string>("");
  const [results, setResults] = useState<string[]>([]);
  const pathname = usePathname();
  const router = useRouter();
  const [keyListenerAdded, setKeyListenerAdded] = useState(false);
  const [fuse, setFuse] = useState<any>({});
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [loadingIndex, setLoadingIndex] = useState(true);

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
        setAllWatches(resultData);
      } catch (error) {
        console.error("There was an error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    loadAllWatches();
  }, []);

  //load new depending on search query
  // useEffect(() => {
  //   const fetchAllWatches = async () => {
  //     try {
  //       const response = await fetch(`/api/watches`);
  //       if (!response.ok) {
  //         const errorData = await response.json();
  //         console.error("Error fetching data:", errorData);
  //         return;
  //       }
  //       console.log(await response.json());
  //     } catch (error) {
  //       console.error("There was an error fetching data:", error);
  //     }
  //   };
  //   fetchAllWatches();
  // }, []);

  return (
    <WatchContext.Provider value={{ allWatches, loading }}>
      {children}
    </WatchContext.Provider>
  );
};

export const useSearch = () => {
  return useContext(WatchContext);
};
