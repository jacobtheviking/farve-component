import {v4 as uuidv4} from 'uuid';
import {COLLECTIONS} from './constants';

export function getCollections() {
    const collectionsString = localStorage.getItem(COLLECTIONS) || '';
    try {
      return JSON.parse(collectionsString);
    } catch (error) {
        return [];
    }
}

export function addCollection(name){
    const collections = getCollections();
    if(typeof name === 'string'){
        if(collections.length >=5){
            // TODO: add ability to scroll horizontally between many collections
            console.log('Only 5 collections are currently supported.')
            return;
        }
        collections.push({
            name,
            id: uuidv4()
        });
        const collectionsString = JSON.stringify(collections);
        localStorage.setItem(COLLECTIONS, collectionsString);
    }
}