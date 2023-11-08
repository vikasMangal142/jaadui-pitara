import { createContext, useState } from "react";

const HeaderContext = createContext();

export default HeaderContext;

export const HeaderProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") ? localStorage.getItem("language") : null
  );
  const [userAge, setUserAge] = useState(
    localStorage.getItem("userAge") ? localStorage.getItem("userAge") : null
  );
  const [category, setCategory] = useState(
    localStorage.getItem("category") ? localStorage.getItem("category") : null
  );
  const [pageCount, setPageCount] = useState(1);

  const data = {
    language: language,
    setLanguage: setLanguage,
    userAge: userAge,
    setUserAge: setUserAge,
    category: category,
    setCategory: setCategory,
    pageCount: pageCount,
    setPageCount: setPageCount,
  };
  return (
    <HeaderContext.Provider value={data}>{children}</HeaderContext.Provider>
  );
};
