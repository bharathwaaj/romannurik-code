/*
 * Copyright 2012 Google Inc.
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

var _PACKAGE_DOC_URL_REGEX = /http(?:s)?:\/\/d(?:eveloper)?.android.com\/reference\/(.+)\/package-(summary|descr).html/;
var _CLASS_DOC_URL_REGEX = /http(?:s)?:\/\/d(?:eveloper)?.android.com\/reference\/(.+).html/;

var _GOOGLESOURCE_URL_TEMPLATE = 'https://android.googlesource.com/$PROJECT/+/refs/heads/master/$TREE/java/$NAME_SLASH';

var _PACKAGE_MAP = {
  'java'                  : { project:'platform/libcore',             tree:'luni/src/main' },
  'javax'                 : { project:'platform/libcore',             tree:'luni/src/main' },
  'org'                   : { project:'platform/libcore',             tree:'luni/src/main' },
  'android'               : { project:'platform/frameworks/base',     tree:'core' },
  'android.drm'           : { project:'platform/frameworks/base',     tree:'drm' },
  'android.drm.mobile1'   : { project:'platform/frameworks/base',     tree:'media' },
  'android.renderscript'  : { project:'platform/frameworks/base',     tree:'graphics' },
  'android.graphics'      : { project:'platform/frameworks/base',     tree:'graphics' },
  'android.icu     '      : { project:'platform/frameworks/base',     tree:'icu4j' },
  'android.security'      : { project:'platform/frameworks/base',     tree:'keystore' },
  'android.location'      : { project:'platform/frameworks/base',     tree:'location' },
  'android.media'         : { project:'platform/frameworks/base',     tree:'media' },
  'android.mtp'           : { project:'platform/frameworks/base',     tree:'media' },
  'android.opengl'        : { project:'platform/frameworks/base',     tree:'opengl' },
  'android.sax'           : { project:'platform/frameworks/base',     tree:'sax' },
  'android.telephony'     : { project:'platform/frameworks/base',     tree:'telephony' },
  'android.net.rtp'       : { project:'platform/frameworks/base',     tree:'voip' },
  'android.net.sip'       : { project:'platform/frameworks/base',     tree:'voip' },
  'android.net.wifi'      : { project:'platform/frameworks/base',     tree:'wifi' },
  'android.support.v4'    : { project:'platform/frameworks/support',  tree:'v4' },
  'android.support.v7'    : { project:'platform/frameworks/support',  tree:'v7' },
  'android.support.v13'   : { project:'platform/frameworks/support',  tree:'v13' }
};

function trimLastNamePart(s) {
  return s.replace(/\.[^.]*$/, '');
}

function getPackageInfo(packageName) {
  var tmpPackageName = packageName;
  while (tmpPackageName) {
    if (tmpPackageName in _PACKAGE_MAP) {
      var pi = {};
      pi.tree = _PACKAGE_MAP[tmpPackageName].tree;
      pi.project = _PACKAGE_MAP[tmpPackageName].project;
      return pi;
    }
    if (!tmpPackageName.match(/\./)) {
      break;
    }
    tmpPackageName = trimLastNamePart(tmpPackageName);
  }
  return null;
}

(function() {
  var url = window.location.href;
  var appendContent;

  var m;
  if (m = url.match(_PACKAGE_DOC_URL_REGEX)) {
    var nameSlash = m[1];
    var packageName = nameSlash.replace(/\//g, '.');

    var pi = getPackageInfo(packageName);
    if (pi) {
      appendContent = [
          ' (<a href="',
          _GOOGLESOURCE_URL_TEMPLATE
              .replace(/\$PROJECT/g, pi.project)
              .replace(/\$TREE/g, pi.tree)
              .replace(/\$NAME_SLASH/g, nameSlash),
          '">view source listing</a>)'
      ].join('');
    }

  } else if (m = url.match(_CLASS_DOC_URL_REGEX)) {
    var nameSlash = m[1];
    var outerNameSlash = nameSlash.replace(/\..*$/, ''); // trim inner classes
    var outerNameDot = outerNameSlash.replace(/\//g, '.');
    var packageName = trimLastNamePart(outerNameDot);

    var pi = getPackageInfo(packageName);
    if (pi) {
      appendContent = [
          ' (<a href="',
          _GOOGLESOURCE_URL_TEMPLATE
              .replace(/\$PROJECT/g, pi.project)
              .replace(/\$TREE/g, pi.tree)
              .replace(/\$NAME_SLASH/g, outerNameSlash + '.java'),
          '">view source</a>)'
      ].join('');
    }

  }

  if (appendContent) {
    var appendNode = document.createElement('span');
    appendNode.innerHTML = appendContent;

    document
        .getElementById('jd-header')
        .getElementsByTagName('h1')[0]
        .appendChild(appendNode);
  }
})();
