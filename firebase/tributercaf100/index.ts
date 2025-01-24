import { cache } from 'react'
import { collection, query, getDocs, orderBy } from "firebase/firestore";
import { listAll, ref, getDownloadURL } from "firebase/storage";

import { db, imageDB } from '@/firebase/clientApp';
import { TributeCollection } from '@/types/TributeCollection';
import { secondsUntilNextSaturday } from '@/helpers/functions/secondsUntilNextSaturday';

export const revalidate = secondsUntilNextSaturday();

export const getTributes = cache(async () => {
    try {
        const q = query(collection(db, "tributercaf100"), orderBy("release", "desc"));
        const tributes: TributeCollection[] = [];
        const querySnapshot = await getDocs(q);
        const promises = querySnapshot.docs.map(async (doc) => {
            tributes.push({ ...doc.data() as TributeCollection });
        });
        await Promise.all(promises);
        return tributes;
    } catch (error) {
        console.error("Error fetching tributes:", error);
        throw error;
    }
});

export const getTributeImage = cache(async () => {
    try {
        const imagesURL: string[] = [];
        const imagesTributes = await listAll(ref(imageDB, `tribute/`));

        await Promise.all(imagesTributes.items.map(async (img) => {
            const image = await getDownloadURL(img);
            imagesURL.push(image);
        }));

        return imagesURL;
    } catch (error) {
        console.error("Error fetching collection tribute images:", error);
        throw error;
    }
});