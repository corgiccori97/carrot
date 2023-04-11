import { useState } from 'react';

interface useMutationState {
    loading: boolean;
    data?: object;
    error?: object;
}
type UseMutationResult = [(data:any) => void, useMutationState]

export default function useMutation(url:string): UseMutationResult {
    const [state, setState] = useState({

    });
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<undefined | any>(undefined);
    const [error, setError] = useState<undefined | any>(undefined);
    function mutation(data:any) {
        setLoading(true);
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify(data),
        })
        // json에 에러가 있을 경우 무시
        .then((response)=>response.json().catch(() => {}))
        .then(setData)
        .catch(setError).finally(() => setLoading(false));
    }
    return [mutation, { loading, data, error }];
}