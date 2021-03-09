// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE file in the project root for full license information.

/**
 * This method will be called at the start of exports.transform in toc.html.js
 */
exports.preTransform = function (model) {
  return model;
}

/**
 * This method will be called at the end of exports.transform in toc.html.js
 */
exports.postTransform = function (model) {
  transformItem(model, 1);
  return model;
}


function transformItem(item, level) {
  // set to null incase mustache looks up
  item.topicHref = item.topicHref || null;
  item.tocHref = item.tocHref || null;
  item.name = item.name || null;

  if (item.topicHref && item.topicHref.indexOf("https://www.royalapps.com") == 0) {
    item.isExternal = true;
  }

  item.level = level;
  if (item.items && item.items.length > 0) {
    var length = item.items.length;
    for (var i = 0; i < length; i++) {
      transformItem(item.items[i], level + 1);
    };
  } else {
    item.items = [];
    item.leaf = true;
  }
}
