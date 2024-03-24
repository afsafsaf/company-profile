import { CharacterProps } from "@/types/marvel";
import md5 from "md5";


const API_BASE_URL = " https://gateway.marvel.com:443/v1/public"
export const API_PUBLIC_KEY = "3e618d96ba50a0abf5748b21f83aeb56"
export const API_PRIVATE_URL = "f835a2c80a8ec61acefc189e475bfcbf852a2768"


const getTimeStamp = () => Date.now().toString();
const getHash = (timeStamp: string) => md5(timeStamp+API_PRIVATE_URL+API_PUBLIC_KEY)
export const timeStamp = getTimeStamp()
export const hash = getHash(timeStamp);


export const query = `ts=${timeStamp}&apikey=${API_PUBLIC_KEY}&hash=${hash}` 

const handleResponseCreators = async <CharacterProps> (response: Response) => {
if(!response.ok) {
    throw new Error (response.statusText)
}
const data = await response.json()
return data.data as CharacterProps
}

export const getCreators = async ():Promise <CharacterProps> => {
    const url = `${API_BASE_URL}/creators?${query}`
    const response = await fetch (url);
    // const data = response.json()
    // return data
    return handleResponseCreators<CharacterProps>(response)  //buat function untuk menghandle data
}


