import * as SEOBasics from "./basic";

export const buildSEOData = (content, settings, type, uid) => {
  return {
    title: SEOBasics.getTitle(content, settings, type),
    simpleTitle: SEOBasics.getSimpleTitle(content, type),
    featuredImage: SEOBasics.getImage(content),
  };
};