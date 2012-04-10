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

// Thanks to Jeff Gilfelt for GitHub AOSP mirror integration!

var _PACKAGE_DOC_URL_REGEX = /http:\/\/d(?:eveloper)?.android.com\/reference\/(.+)\/package-(summary|descr).html/;
var _CLASS_DOC_URL_REGEX = /http:\/\/d(?:eveloper)?.android.com\/reference\/(.+).html/;

var _GITHUB_MIRROR_URL_TEMPLATE = 'https://github.com/android/$PROJECT/blob/master/$TREE/java/$NAME_SLASH';

var _PACKAGE_MAP = {
  'android.drm'           : { project:'platform_frameworks_base', tree:'drm' },
  'android.drm.mobile1'   : { project:'platform_frameworks_base', tree:'media' },
  'android.renderscript'  : { project:'platform_frameworks_base', tree:'graphics' },
  'android.graphics'      : { project:'platform_frameworks_base', tree:'graphics' },
  'android.icu     '      : { project:'platform_frameworks_base', tree:'icu4j' },
  'android.security'      : { project:'platform_frameworks_base', tree:'keystore' },
  'android.location'      : { project:'platform_frameworks_base', tree:'location' },
  'android.media'         : { project:'platform_frameworks_base', tree:'media' },
  'android.mtp'           : { project:'platform_frameworks_base', tree:'media' },
  'android.opengl'        : { project:'platform_frameworks_base', tree:'opengl' },
  'android.sax'           : { project:'platform_frameworks_base', tree:'sax' },
  'android.telephony'     : { project:'platform_frameworks_base', tree:'telephony' },
  'android.net.rtp'       : { project:'platform_frameworks_base', tree:'voip' },
  'android.net.sip'       : { project:'platform_frameworks_base', tree:'voip' },
  'android.net.wifi'      : { project:'platform_frameworks_base', tree:'wifi' },

  'android.support.v4'    : { project:'platform_frameworks_support', tree:'v4' },
  'android.support.v7'    : { project:'platform_frameworks_support', tree:'v7' },
  'android.support.v13'   : { project:'platform_frameworks_support', tree:'v13' }
};

var _DEFAULT_PROJECT = 'platform_frameworks_base';
var _DEFAULT_TREE = 'core';

function trimLastNamePart(s) {
  return s.replace(/\.[^.]*$/, '');
}

function getPackageInfo(packageName) {
  var pi = {
    project: _DEFAULT_PROJECT,
    tree: _DEFAULT_TREE
  };
  var tmpPackageName = packageName;
  while (tmpPackageName) {
    if (tmpPackageName in _PACKAGE_MAP) {
      pi.tree = _PACKAGE_MAP[tmpPackageName].tree;
      pi.project = _PACKAGE_MAP[tmpPackageName].project;
      break;
    }
    if (!tmpPackageName.match(/\./)) {
      break;
    }
    tmpPackageName = trimLastNamePart(tmpPackageName);
  }
  return pi;
}

(function() {
  var url = window.location.href;
  var appendContent;

  var m;
  if (m = url.match(_PACKAGE_DOC_URL_REGEX)) {
    var nameSlash = m[1];
    var packageName = nameSlash.replace(/\//g, '.');

    var pi = getPackageInfo(packageName);

    appendContent = [
        ' (<a href="',
        _GITHUB_MIRROR_URL_TEMPLATE
            .replace(/\$PROJECT/g, pi.project)
            .replace(/\$TREE/g, pi.tree)
            .replace(/\$NAME_SLASH/g, nameSlash),
        '">view source listing</a>)'
    ].join('');

  } else if (m = url.match(_CLASS_DOC_URL_REGEX)) {
    var nameSlash = m[1];
    var outerNameSlash = nameSlash.replace(/\..*$/, ''); // trim inner classes
    var outerNameDot = outerNameSlash.replace(/\//g, '.');
    var packageName = trimLastNamePart(outerNameDot);

    var pi = getPackageInfo(packageName);

    appendContent = [
        ' (<a href="',
        _GITHUB_MIRROR_URL_TEMPLATE
            .replace(/\$PROJECT/g, pi.project)
            .replace(/\$TREE/g, pi.tree)
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
})();
