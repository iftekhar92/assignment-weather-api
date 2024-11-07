export const fetchApi = (url:string) => {
    return new Promise((resolve, reject) => fetch(url)
        .then((data:any) => data.json())
        .then((response:any) => resolve(response))
        .catch((error:any) => reject(error))
    )
}