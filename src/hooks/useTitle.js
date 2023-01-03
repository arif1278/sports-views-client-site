import { useEffect } from "react"

// usetitle for every routes
const useTitle = title => {
    useEffect(() => {
        document.title = title;
    }, [title])
};
export default useTitle;