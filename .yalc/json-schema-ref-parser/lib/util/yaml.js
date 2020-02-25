/* eslint lines-around-comment: [2, {beforeBlockComment: false}] */
"use strict";

const { parseWithPointers, safeStringify } = require("@stoplight/yaml");

/**
 * Simple YAML parsing functions, similar to {@link JSON.parse} and {@link JSON.stringify}
 */
module.exports = {
  /**
   * Parses a YAML string and returns the value.
   *
   * @param {string} text - The YAML string to be parsed
   * @param {function} [reviver] - Not currently supported. Provided for consistency with {@link JSON.parse}
   * @returns {*}
   */
  parse (text, reviver) {
    return parseWithPointers(text, {
      json: true,
      mergeKeys: true,
      ignoreDuplicateKeys: false,
    });
  },

  /**
   * Converts a JavaScript value to a YAML string.
   *
   * @param   {*} value - The value to convert to YAML
   * @param   {function|array} replacer - Not currently supported. Provided for consistency with {@link JSON.stringify}
   * @param   {string|number} space - The number of spaces to use for indentation, or a string containing the number of spaces.
   * @returns {string}
   */
  stringify (value, replacer, space) {
    let indent = (typeof space === "string" ? space.length : space) || 2;
    return safeStringify(value, { indent });
  }
};
