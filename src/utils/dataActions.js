import { v4 as uuidv4 } from 'uuid';
import { COLLECTIONS, COLORS } from './constants';

export function getCollections() {
  const collectionsString = localStorage.getItem(COLLECTIONS) || '';
  try {
    return JSON.parse(collectionsString);
  } catch (error) {
    return [];
  }
}

export function addCollection(name) {
  const collections = getCollections();
  if (typeof name === 'string') {
    if (collections.length >= 5) {
      // TODO: add ability to scroll horizontally between many collections
      console.log('Only 5 collections are currently supported.');
      return;
    }
    collections.push({
      name,
      id: uuidv4(),
    });
    const collectionsString = JSON.stringify(collections);
    localStorage.setItem(COLLECTIONS, collectionsString);
  }
}

function getColorObject() {
  const colorsString = localStorage.getItem(COLORS) || '';
  try {
    return JSON.parse(colorsString);
  } catch (error) {
    return {};
  }
}

export function getColors(id) {
  const colorObj = getColorObject();
  return colorObj[id] || [];
}

export function addColor(id, name, hexValue) {
  const colorObj = getColorObject();
  const colors = getColors(id);
  if (typeof name === 'string') {
    if (colors.length >= 5) {
      // TODO: add ability to scroll horizontally between many colors
      console.log('Only 5 colors are allowed per collection.');
      return;
    }
    colors.push({
      name,
      hexValue,
    });
    colorObj[id] = colors;
    const colorsString = JSON.stringify(colorObj);
    localStorage.setItem(COLORS, colorsString);
  }
}
