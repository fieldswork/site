// https://www.thomasledoux.be/blog/avoid-flash-unwanted-animation-first-render-react
// Thank you for the clear documentation, Thomas!

import { useRef, useEffect } from "react";

const getPageMounted = () => {
    const isMounted = useRef(false);
    useEffect(() => {
        isMounted.current = true;
        return () => (isMounted.current = false);
    }, []);
    return isMounted;
};

export default getPageMounted;