import { createContext, useContext, useState } from "react";

const SearchContext = createContext(null);

export function SearchProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    const openSearch = () => setIsOpen(true);
    const closeSearch = () => setIsOpen(false);

    return (
        <SearchContext.Provider value={{ isOpen, openSearch, closeSearch }}>
            {children}
        </SearchContext.Provider>
    );
}

export function useSearch() {
    const ctx = useContext(SearchContext);
    if (!ctx) throw new Error("useSearch must be used within a SearchProvider");
    return ctx;
}