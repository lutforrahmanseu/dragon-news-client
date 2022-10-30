import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}-Dragon news client`;
  }, [title]);
};

export default useTitle;
