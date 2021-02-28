import { useState, useEffect, useRef } from 'react';
import axios from 'axios'

export const useAxios = (initialUrl = '') => {
    const [url, setUrl] = useState(initialUrl);
    const [loading, setLOading] = useState(true);
    const [data, setData] = useState([]);
    const [body, setBody] = useState({})
    const isMounted = useRef(true)
    useEffect(() => {
        if ((url !== '') && (body !== {})) {
            axios
                .post(url, body)
                .then((res) => {
                    if (isMounted) {
                        setData(res.data.data);
                        setLOading(false)
                    }
                })
        }
        return () => {
            isMounted.current = false;
        }
    }, [url, body])

    return { data, loading, setBody, setUrl };
}