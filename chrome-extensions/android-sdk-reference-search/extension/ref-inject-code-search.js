/*
 * Copyright 2011 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Thanks to Jeff Gilfelt for GitHub AOSP mirror integration!

var _PACKAGE_DOC_URL_REGEX = /http:\/\/d(?:eveloper)?.android.com\/reference\/(.+)\/package-(summary|descr).html/;
var _PACKAGE_SRC_URL_TEMPLATE = 'http://android.git.kernel.org/?p=$PROJECT;a=tree;f=core/java/$NAME_SLASH';

var _CLASS_DOC_URL_REGEX = /http:\/\/d(?:eveloper)?.android.com\/reference\/(.+).html/;
var _CLASS_SRC_URL_TEMPLATE = 'http://android.git.kernel.org/?p=$PROJECT;a=blob;f=core/java/$NAME_SLASH.java';

var _CODESEARCH_URL_TEMPLATE = 'http://codesearch.google.com/codesearch?q=package:android.git.kernel.org+file:$NAME_SLASH';
var _GITGREP_URL_TEMPLATE = 'http://android.git.kernel.org/?p=$PROJET&a=search&h=HEAD&st=grep&s=$QUERY';

var _GITHUB_MIRROR_URL_TEMPLATE = 'https://github.com/android/platform_frameworks_base/blob/master/$TREE/java/$NAME_SLASH';

var _PACKAGE_TREE_MAP = {
  'android.drm'           : 'drm',
  'android.drm.mobile1'   : 'media',
  'android.renderscript'  : 'graphics',
  'android.graphics'      : 'graphics',
  'android.icu     '      : 'icu4j',
  'android.security'      : 'keystore',
  'android.location'      : 'location',
  'android.media'         : 'media',
  'android.mtp'           : 'media',
  'android.opengl'        : 'opengl',
  'android.sax'           : 'sax',
  'android.telephony'     : 'telephony',
  'android.net.rtp'       : 'voip',
  'android.net.sip'       : 'voip',
  'android.net.wifi'      : 'wifi',
};

var _DEFAULT_TREE = 'core';

var url = window.location.href;
var appendContent = null;

function trimLastNamePart(s) {
  return s.replace(/\.[^.]*$/, '');
}

var m;
if (m = url.match(_PACKAGE_DOC_URL_REGEX)) {
  var nameSlash = m[1];
  var packageName = nameSlash.replace(/\//g, '.');

  var tree = _DEFAULT_TREE;
  var tmpPackageName = packageName;
  while (tmpPackageName) {
    if (tmpPackageName in _PACKAGE_TREE_MAP) {
      tree = _PACKAGE_TREE_MAP[tmpPackageName];
      break;
    }
    if (!tmpPackageName.match(/\./)) {
      break;
    }
    tmpPackageName = trimLastNamePart(tmpPackageName);
  }

  appendContent = [
      ' (<a href="',
      _GITHUB_MIRROR_URL_TEMPLATE
          .replace(/\$TREE/g, tree)
          .replace(/\$NAME_SLASH/g, nameSlash),
      '">view source listing</a>)'
  ].join('');

} else if (m = url.match(_CLASS_DOC_URL_REGEX)) {
  var nameSlash = m[1];
  var outerNameSlash = nameSlash.replace(/\..*$/, ''); // trim inner classes
  var outerNameDot = outerNameSlash.replace(/\//g, '.');
  var packageName = trimLastNamePart(outerNameDot);

  var tree = _DEFAULT_TREE;
  var tmpPackageName = packageName;
  while (tmpPackageName) {
    if (tmpPackageName in _PACKAGE_TREE_MAP) {
      tree = _PACKAGE_TREE_MAP[tmpPackageName];
      break;
    }
    if (!tmpPackageName.match(/\./)) {
      break;
    }
    tmpPackageName = trimLastNamePart(tmpPackageName);
  }

  appendContent = [
      ' (<a href="',
      _GITHUB_MIRROR_URL_TEMPLATE
          .replace(/\$TREE/g, tree)
          .replace(/\$NAME_SLASH/g, outerNameSlash + '.java'),
      '">view source</a>)'
  ].join('');

}

if (appendContent) {
  var appendNode = document.createElement('span');
  appendNode.innerHTML = appendContent;

  document
      .getElementById('jd-header')
      .getElementsByTagName('h1')[0]
      .appendChild(appendNode);
}
