import { Timestamp } from "firebase/firestore"

export type TributeCollection = {
    name: string,
    photoDirection?: string,
    photo?: string,
    release: Timestamp,
    tributeText: string
}