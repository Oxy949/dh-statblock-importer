/*!
 * Daggerheart: Stats Toolbox
 * 2025 https://github.com/brunocalado
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3.
 */

export class TextNormalizer {
  static clean(text) {
    if (!text) return text;
    return text
      .replace(/\r\n|\r/g, "\n")
      .replace(/[\u00A0\u1680\u180E\u2000-\u200B\u202F\u205F\u3000\uFEFF]/g, " ")
      .replace(/[\u2013\u2014\u2212]/g, "-")
      .replace(/[ \t]+/g, " ")
      .trim();
  }
}
