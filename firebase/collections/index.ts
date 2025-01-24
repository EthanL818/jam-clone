import { cache } from 'react'
import { collection, query, getDocs } from "firebase/firestore";
import { listAll, ref, getDownloadURL } from "firebase/storage";

import { db, imageDB } from '@/firebase/clientApp';
import { AircraftCollection } from '@/types/AircraftCollection';
import { secondsUntilNextSaturday } from '@/helpers/functions/secondsUntilNextSaturday';

export const revalidate = secondsUntilNextSaturday();

export const getAircrafts = cache(async (firebaseCollection: string) => {
    try {
        const q = query(collection(db, firebaseCollection));
        const ourAircraftsStorage: AircraftCollection[] = [];
        const querySnapshot = await getDocs(q);
        const promises = querySnapshot.docs.map(async (doc) => {
            const photos = await getCollectionImage(doc.data().storage);
            ourAircraftsStorage.push({ ...doc.data() as AircraftCollection, photos: photos });
        });
        await Promise.all(promises);
        return ourAircraftsStorage;
    } catch (error) {
        console.error("Error fetching aircrafts:", error);
        throw error;
    }
});

async function getCollectionImage(nameAircraft: string) {
    try {
        const imagesURL: string[] = [];
        const imagesCollection = await listAll(ref(imageDB, `collection/${nameAircraft}`));

        await Promise.all(imagesCollection.items.map(async (img) => {
            const image = await getDownloadURL(img);
            imagesURL.push(image);
        }));

        return imagesURL;
    } catch (error) {
        console.error("Error fetching collection images:", error);
        throw error;
    }
}