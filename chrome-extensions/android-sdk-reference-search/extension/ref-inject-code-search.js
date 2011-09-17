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

var _PACKAGE_DOC_URL_REGEX = /http:\/\/d(?:eveloper)?.android.com\/reference\/(.+)\/package-(summary|descr).html/;
var _PACKAGE_SRC_URL_TEMPLATE = 'http://android.git.kernel.org/?p=$PROJECT;a=tree;f=core/java/$NAME_SLASH';

var _CLASS_DOC_URL_REGEX = /http:\/\/d(?:eveloper)?.android.com\/reference\/(.+).html/;
var _CLASS_SRC_URL_TEMPLATE = 'http://android.git.kernel.org/?p=$PROJECT;a=blob;f=core/java/$NAME_SLASH.java';

var _CODESEARCH_URL_TEMPLATE = 'http://codesearch.google.com/codesearch?q=package:android.git.kernel.org+file:$NAME_SLASH';
var _GITGREP_URL_TEMPLATE = 'http://android.git.kernel.org/?p=$PROJET&a=search&h=HEAD&st=grep&s=$QUERY';

var url = window.location.href;
var appendContent = null;

var m;
if (m = url.match(_PACKAGE_DOC_URL_REGEX)) {
  return;
  // var nameSlash = m[1];
  // var nameDot = m[1].replace(/\//g, '.');
  // var project = 'platform/frameworks/base.git';
  // appendContent = [
  //     '<p><br><a href="',
  //     _CODESEARCH_URL_TEMPLATE
  //         .replace(/\$PROJECT/g, project)
  //         .replace(/\$NAME_SLASH/g, nameSlash),
  //     '">Browse Package Source</a></p>'
  // ].join('');

} else if (m = url.match(_CLASS_DOC_URL_REGEX)) {
  var nameSlash = m[1].replace(/\..*/, ''); // trim inner classes
  var nameDot = m[1].replace(/\//g, '.');
  var project = 'platform/frameworks/base.git';
  appendContent = [
      ' (<a href="',
      _CODESEARCH_URL_TEMPLATE
          .replace(/\$NAME_SLASH/g, nameSlash + '.java'),
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
