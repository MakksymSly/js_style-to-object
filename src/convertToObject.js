'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleArr = sourceString.split(';');

  const styleObj = {};

  styleArr.forEach((style) => {
    const [property, value] = style.split(':');

    if (property && value) {
      styleObj[property.trim()] = value.trim();
    }
  });

  return styleObj;
}

module.exports = convertToObject;
