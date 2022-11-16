import axios from 'axios';
import { useEffect, useState, useContext } from 'react';

import { CreateFormContext } from '../../Context';


const useFetchObjects = (_title: any) => {
    const context: any = useContext<any>(CreateFormContext);

    const [objects, setObjects] = context.objects;

    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        if (_title != null) {
            axios
                .get(`/objects?title=${_title}`)
                .then((response) => {
                    setObjects(response.data);
                })
                .catch((e) => {
                    console.error(e);
                })
                .finally(() => {
                    setIsFetching(false);
                });
        }
    }, [_title]);

    return { objects, isFetching };

}

export default useFetchObjects;