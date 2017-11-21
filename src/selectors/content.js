/**
 * Get the root for a type.
 * @param state
 * @param type
 */
import {isEmptyObject} from "../../common/utils";
import {CONTENT_FORMATS, getTypeOptions} from "../../common/prismic";

export const getTypeRoot = (state, type) => {
  const content = state.content;
  return content[type];
};

/**
 * Get the raw content for a type.
 * @param state
 * @param type
 * @returns {null}
 */
export const getTypeContent = (state, type) => {
  const root = getTypeRoot(state, type);
  if (!root) {
    return null;
  }
  return root.content;
};

/**
 * Get the content for a given type (optional UID) formatted appropriately.
 * @param state
 * @param type
 * @param uid
 * @returns {*}
 */
export const getFormattedContent = (state, type, uid) => {
  const baseContent = getTypeContent(state, type);
  if(!baseContent){
    return null;
  }
  if (uid) {
    return getTypeByUID(state, type, uid);
  }
  else {
    if(getTypeFormat(state, type) === CONTENT_FORMATS.REPEATABLE){
      return getContentOrderedForType(state, type);
    }
    else {
      return getTypeContent(state, type);
    }
  }
};

/**
 * Get a page by type and uid.
 * @param state
 * @param type
 * @param uid
 * @returns {null}
 */
export const getTypeByUID = (state, type, uid) => {
  const content = getTypeContent(state, type);
  if (!content) {
    return null;
  }
  if (content[uid]) {
    return content[uid];
  }
  else {
    return null;
  }
};

/**
 * Get the current loaded page.
 * @param state
 * @param type
 * @returns {null}
 */
export const getTypePage = (state, type) => {
  const root = getTypeRoot(state, type);
  if (root && root.page) {
    return root.page;
  }
  else {
    return null;
  }
};

/**
 * For repeatable types, get content in order.
 * @param state
 * @param type
 * @param filter
 * @param order
 * @returns {Array.<*>}
 */
export const getOrderedContent = (state, type, filter, order) => {
  if (!filter) {
    filter = (page) => {
      return page.first_publication_date;
    };
  }
  if (!order) {
    order = 'desc';
  }
  const content = getTypeContent(state, type);
  const contentArray = Object.keys(content).map((page) => content[page]);
  return contentArray.sort((pageA, pageB) => {
    if (order === 'desc') {
      return filter(pageA) < filter(pageB);
    }
    else {
      return filter(pageA) > filter(pageB);
    }
  });
};

/**
 * Get content of a given type, ordered in the same manner as its Prismic ordering settings,
 * or by the default Prismic ordering settings.
 * @param state
 * @param type
 * @returns {Array.<*>}
 */
export const getContentOrderedForType = (state, type) => {
  const opts = getTypeOptions(type, true);
  const firstOrder = opts.orderings[0];
  const filter = (page) => {
    const split = firstOrder.on.split('.');
    const attr = split[split.length - 1];
    if(split[0] === 'my'){
      return page.data[attr];
    }
    else if(split[0] === 'document'){
      return page[attr];
    }
  };
  return getOrderedContent(state, type, filter, firstOrder.order);
};

/**
 * Get the format of the type based on loaded content.
 * @param state
 * @param type
 * @returns {*}
 */
export const getTypeFormat = (state, type) => {
  const content = getTypeContent(state, type);
  if (!content || isEmptyObject(content)) {
    return null;
  }
  if(content.id){
    return CONTENT_FORMATS.SINGLE;
  }
  else {
    return CONTENT_FORMATS.REPEATABLE;
  }
};