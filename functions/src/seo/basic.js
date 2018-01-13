import * as PrismicDOM from "prismic-dom";
import * as PrismicUtils from "../../../common/prismic";

export const getTitle = (content, settings, type) => {
  const settingsData = settings.data;
  const typeTitle = type ? PrismicUtils.getTypeTitle(type) : '';

  if (PrismicUtils.getFormat(content) === PrismicUtils.CONTENT_FORMATS.LIST) {

    return `${typeTitle} Index | ${settingsData.site_title}`;
  }
  else {
    const data = content.data;

    return `${data.title && `${PrismicDOM.RichText.asText(data.title)} | ${typeTitle ? typeTitle + ' |' : ''} `}${PrismicDOM.RichText.asText(settingsData.site_title)}`
  }
};

export const getSimpleTitle = (content, type) => {
  if(PrismicUtils.getFormat(content) === PrismicUtils.CONTENT_FORMATS.LIST){
    return PrismicUtils.getTypeTitle(type);
  }
  else {
    return content.data.title ? PrismicDOM.RichText.asText(content.data.title) : null;
  }
};

export const getImage = (content) => {
  if(PrismicUtils.getFormat(content) === PrismicUtils.CONTENT_FORMATS.LIST){
    content = content[0];
  }
  const data = content.data;
  const hasFeaturedImageField = !!data.featured_image;
  const hasFeaturedImage = hasFeaturedImageField && !!data.featured_image.url;
  return hasFeaturedImage && data.featured_image.url;
};