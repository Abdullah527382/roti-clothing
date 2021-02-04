import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

// Create a new selector which converts an object to an array
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

// We use the collection URL parameter to get the ID (mapped)
export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) => {
    return collections.find((collection) => {
      return collection.routeName === collectionUrlParam;
    });
  });
