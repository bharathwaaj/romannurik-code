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

var xid = 100000;
var XML_DATA = [
  { id:++xid, label:"AndroidManifest.xml", link:"guide/topics/manifest/manifest-intro.html", type:"xml", extraRank:1 },

  // Manifest
  { id:++xid, subLabel:"AndroidManifest.xml", label:"<action>", link:"guide/topics/manifest/action-element.html", type:"xml" },
  { id:++xid, subLabel:"AndroidManifest.xml", label:"<activity>", link:"guide/topics/manifest/activity-element.html", type:"xml" },
  { id:++xid, subLabel:"AndroidManifest.xml", label:"<activity-alias>", link:"guide/topics/manifest/activity-alias-element.html", type:"xml" },
  { id:++xid, subLabel:"AndroidManifest.xml", label:"<application>", link:"guide/topics/manifest/application-element.html", type:"xml" },
  { id:++xid, subLabel:"AndroidManifest.xml", label:"<category>", link:"guide/topics/manifest/category-element.html", type:"xml" },
  { id:++xid, subLabel:"AndroidManifest.xml", label:"<compatible-screens>", link:"guide/topics/manifest/compatible-screens-element.html", type:"xml" },
  { id:++xid, subLabel:"AndroidManifest.xml", label:"<data>", link:"guide/topics/manifest/data-element.html", type:"xml" },
  { id:++xid, subLabel:"AndroidManifest.xml", label:"<grant-uri-permission>", link:"guide/topics/manifest/grant-uri-permission-element.html", type:"xml" },
  { id:++xid, subLabel:"AndroidManifest.xml", label:"<instrumentation>", link:"guide/topics/manifest/instrumentation-element.html", type:"xml" },
  { id:++xid, subLabel:"AndroidManifest.xml", label:"<intent-filter>", link:"guide/topics/manifest/intent-filter-element.html", type:"xml" },
  { id:++xid, subLabel:"AndroidManifest.xml", label:"<manifest>", link:"guide/topics/manifest/manifest-element.html", type:"xml" },
  { id:++xid, subLabel:"AndroidManifest.xml", label:"<meta-data>", link:"guide/topics/manifest/meta-data-element.html", type:"xml" },
  { id:++xid, subLabel:"AndroidManifest.xml", label:"<path-permission>", link:"guide/topics/manifest/path-permission-element.html", type:"xml" },
  { id:++xid, subLabel:"AndroidManifest.xml", label:"<permission>", link:"guide/topics/manifest/permission-element.html", type:"xml" },
  { id:++xid, subLabel:"AndroidManifest.xml", label:"<permission-group>", link:"guide/topics/manifest/permission-group-element.html", type:"xml" },
  { id:++xid, subLabel:"AndroidManifest.xml", label:"<permission-tree>", link:"guide/topics/manifest/permission-tree-element.html", type:"xml" },
  { id:++xid, subLabel:"AndroidManifest.xml", label:"<provider>", link:"guide/topics/manifest/provider-element.html", type:"xml" },
  { id:++xid, subLabel:"AndroidManifest.xml", label:"<receiver>", link:"guide/topics/manifest/receiver-element.html", type:"xml" },
  { id:++xid, subLabel:"AndroidManifest.xml", label:"<service>", link:"guide/topics/manifest/service-element.html", type:"xml" },
  { id:++xid, subLabel:"AndroidManifest.xml", label:"<supports-gl-texture>", link:"guide/topics/manifest/supports-gl-texture-element.html", type:"xml" },
  { id:++xid, subLabel:"AndroidManifest.xml", label:"<supports-screens>", link:"guide/topics/manifest/supports-screens-element.html", type:"xml" },
  { id:++xid, subLabel:"AndroidManifest.xml", label:"<uses-configuration>", link:"guide/topics/manifest/uses-configuration-element.html", type:"xml" },
  { id:++xid, subLabel:"AndroidManifest.xml", label:"<uses-feature>", link:"guide/topics/manifest/uses-feature-element.html", type:"xml" },
  { id:++xid, subLabel:"AndroidManifest.xml", label:"<uses-library>", link:"guide/topics/manifest/uses-library-element.html", type:"xml" },
  { id:++xid, subLabel:"AndroidManifest.xml", label:"<uses-permission>", link:"guide/topics/manifest/uses-permission-element.html", type:"xml" },
  { id:++xid, subLabel:"AndroidManifest.xml", label:"<uses-sdk>", link:"guide/topics/manifest/uses-sdk-element.html", type:"xml" },

  // Animations
  { id:++xid, subLabel:"Animation Resources", label:"<animator>", link:"guide/topics/graphics/animation.html#declaring-xml", type:"xml" },
  { id:++xid, subLabel:"Animation Resources", label:"<objectAnimator>", link:"guide/topics/graphics/animation.html#declaring-xml", type:"xml" },

  { id:++xid, subLabel:"Animation Resources", label:"<set>", link:"guide/topics/resources/animation-resource.html#set-element", type:"xml" },
  { id:++xid, subLabel:"Animation Resources", label:"<alpha>", link:"guide/topics/resources/animation-resource.html#set-element", type:"xml" },
  { id:++xid, subLabel:"Animation Resources", label:"<scale>", link:"guide/topics/resources/animation-resource.html#set-element", type:"xml" },
  { id:++xid, subLabel:"Animation Resources", label:"<translate>", link:"guide/topics/resources/animation-resource.html#set-element", type:"xml" },
  { id:++xid, subLabel:"Animation Resources", label:"<rotate>", link:"guide/topics/resources/animation-resource.html#set-element", type:"xml" },

  { id:++xid, subLabel:"Animation Resources", label:"<animation-list>", link:"guide/topics/resources/animation-resource.html#animation-list-element", type:"xml" },

  { id:++xid, subLabel:"Animation Resources", label:"<accelerateDecelerateInterpolator>", link:"guide/topics/resources/animation-resource.html#Interpolators", type:"xml" },  
  { id:++xid, subLabel:"Animation Resources", label:"<accelerateInterpolator>", link:"guide/topics/resources/animation-resource.html#Interpolators", type:"xml" },
  { id:++xid, subLabel:"Animation Resources", label:"<anticipateInterpolator>", link:"guide/topics/resources/animation-resource.html#Interpolators", type:"xml" },
  { id:++xid, subLabel:"Animation Resources", label:"<anticipateOvershootInterpolator>", link:"guide/topics/resources/animation-resource.html#Interpolators", type:"xml" },
  { id:++xid, subLabel:"Animation Resources", label:"<bounceInterpolator>", link:"guide/topics/resources/animation-resource.html#Interpolators", type:"xml" },
  { id:++xid, subLabel:"Animation Resources", label:"<cycleInterpolator>", link:"guide/topics/resources/animation-resource.html#Interpolators", type:"xml" },
  { id:++xid, subLabel:"Animation Resources", label:"<decelerateInterpolator>", link:"guide/topics/resources/animation-resource.html#Interpolators", type:"xml" },
  { id:++xid, subLabel:"Animation Resources", label:"<linearInterpolator>", link:"guide/topics/resources/animation-resource.html#Interpolators", type:"xml" },
  { id:++xid, subLabel:"Animation Resources", label:"<overshootInterpolator>", link:"guide/topics/resources/animation-resource.html#Interpolators", type:"xml" },

  // Drawables
  { id:++xid, subLabel:"Drawable Resources", label:"<bitmap>", link:"guide/topics/resources/drawable-resource.html#bitmap-element", type:"xml" },
  { id:++xid, subLabel:"Drawable Resources", label:"<nine-patch>", link:"guide/topics/resources/drawable-resource.html#ninepatch-element", type:"xml" },
  { id:++xid, subLabel:"Drawable Resources", label:"<layer-list>", link:"guide/topics/resources/drawable-resource.html#layerlist-element", type:"xml" },
  { id:++xid, subLabel:"Drawable Resources", label:"<selector>", link:"guide/topics/resources/drawable-resource.html#selector-element", type:"xml" },
  { id:++xid, subLabel:"Drawable Resources", label:"<level-list>", link:"guide/topics/resources/drawable-resource.html#levellist-element", type:"xml" },
  { id:++xid, subLabel:"Drawable Resources", label:"<transition>", link:"guide/topics/resources/drawable-resource.html#transition-element", type:"xml" },
  { id:++xid, subLabel:"Drawable Resources", label:"<inset>", link:"guide/topics/resources/drawable-resource.html#inset-element", type:"xml" },
  { id:++xid, subLabel:"Drawable Resources", label:"<clip>", link:"guide/topics/resources/drawable-resource.html#clip-element", type:"xml" },
  { id:++xid, subLabel:"Drawable Resources", label:"<scale>", link:"guide/topics/resources/drawable-resource.html#scale-element", type:"xml" },

  { id:++xid, subLabel:"Drawable Resources", label:"<shape>", link:"guide/topics/resources/drawable-resource.html#shape-element", type:"xml" },
  { id:++xid, subLabel:"Drawable Resources", label:"<corners>", link:"guide/topics/resources/drawable-resource.html#corners-element", type:"xml" },
  { id:++xid, subLabel:"Drawable Resources", label:"<gradient>", link:"guide/topics/resources/drawable-resource.html#gradient-element", type:"xml" },
  { id:++xid, subLabel:"Drawable Resources", label:"<padding>", link:"guide/topics/resources/drawable-resource.html#padding-element", type:"xml" },
  { id:++xid, subLabel:"Drawable Resources", label:"<size>", link:"guide/topics/resources/drawable-resource.html#size-element", type:"xml" },
  { id:++xid, subLabel:"Drawable Resources", label:"<solid>", link:"guide/topics/resources/drawable-resource.html#solid-element", type:"xml" },
  { id:++xid, subLabel:"Drawable Resources", label:"<stroke>", link:"guide/topics/resources/drawable-resource.html#stroke-element", type:"xml" },

  // Layout
  { id:++xid, subLabel:"Layouts", label:"<fragment>", link:"guide/topics/fundamentals/fragments.html#Adding", type:"xml" },
  { id:++xid, subLabel:"Layouts", label:"<include>", link:"guide/topics/resources/layout-resource.html#include-element", type:"xml" },
  { id:++xid, subLabel:"Layouts", label:"<requestFocus>", link:"guide/topics/resources/layout-resource.html#requestfocus-element", type:"xml" },
  { id:++xid, subLabel:"Layouts", label:"<merge>", link:"guide/topics/resources/layout-resource.html#merge-element", type:"xml" },

  // Menu
  { id:++xid, subLabel:"Menu Resources", label:"<menu>", link:"guide/topics/resources/menu-resource.html#menu-element", type:"xml" },
  { id:++xid, subLabel:"Menu Resources", label:"<group>", link:"guide/topics/resources/menu-resource.html#group-element", type:"xml" },
//  { id:++xid, subLabel:"Menu Resources", label:"<item>", link:"guide/topics/resources/menu-resource.html#item-element", type:"xml" },

  // String
  { id:++xid, subLabel:"String Resources", label:"<string>", link:"guide/topics/resources/string-resource.html#string-element", type:"xml" },
  { id:++xid, subLabel:"String Resources", label:"<string-array>", link:"guide/topics/resources/string-resource.html#string-array-element", type:"xml" },
//  { id:++xid, subLabel:"String Resources", label:"<item>", link:"guide/topics/resources/string-resource.html#string-array-item-element", type:"xml" },
  { id:++xid, subLabel:"String Resources", label:"<plurals>", link:"guide/topics/resources/string-resource.html#plurals-element", type:"xml" },
//  { id:++xid, subLabel:"String Resources", label:"<item>", link:"guide/topics/resources/string-resource.html#plurals-item-element", type:"xml" },

  // Style
  { id:++xid, subLabel:"Style/Theme Resources", label:"<style>", link:"guide/topics/resources/style-resource.html#style-element", type:"xml" },
//  { id:++xid, subLabel:"Style/Theme Resources", label:"<item>", link:"guide/topics/resources/style-resource.html#item-element", type:"xml" },

  // More Resources
  { id:++xid, subLabel:"Resources", label:"<bool>", link:"guide/topics/resources/more-resources.html#bool-element", type:"xml" },
  { id:++xid, subLabel:"Resources", label:"<color>", link:"guide/topics/resources/more-resources.html#color-element", type:"xml" },
  { id:++xid, subLabel:"Resources", label:"<dimen>", link:"guide/topics/resources/more-resources.html#dimen-element", type:"xml" },
//  { id:++xid, subLabel:"Resources", label:"<item>", link:"guide/topics/resources/more-resources.html#id-item-element", type:"xml" },
  { id:++xid, subLabel:"Resources", label:"<integer>", link:"guide/topics/resources/more-resources.html#integer-element", type:"xml" },
  { id:++xid, subLabel:"Resources", label:"<integer-array>", link:"guide/topics/resources/more-resources.html#integer-array-element", type:"xml" },
//  { id:++xid, subLabel:"Resources", label:"<item>", link:"guide/topics/resources/more-resources.html#integer-array-item-element", type:"xml" },
  { id:++xid, subLabel:"Resources", label:"<array>", link:"guide/topics/resources/more-resources.html#array-element", type:"xml" },

  // Other XML resources
  { id:++xid, subLabel:"App Widget Resources", label:"<appwidget-provider>", link:"guide/topics/appwidgets/index.html#MetaData", type:"xml" },

  { id:++xid, subLabel:"Searchable Resources", label:"<searchable>", link:"guide/topics/search/searchable-config.html#searchable-element", type:"xml" },
  { id:++xid, subLabel:"Searchable Resources", label:"<actionkey>", link:"guide/topics/search/searchable-config.html#actionkey-element", type:"xml" },

  // Fun stuff in android.R.styleable
  { id:++xid, subLabel:"SyncAdapter", label:"<sync-adapter>", link:"reference/android/R.styleable.html#SyncAdapter", type:"xml" },
  { id:++xid, subLabel:"AccountAuthenticator", label:"<account-authenticator>", link:"reference/android/R.styleable.html#AccountAuthenticator", type:"xml" },
  { id:++xid, subLabel:"AccessibilityService", label:"<accessibility-service>", link:"reference/android/R.styleable.html#AccessibilityService", type:"xml" },
  { id:++xid, subLabel:"DeviceAdmin", label:"<device-admin>", link:"reference/android/R.styleable.html#DeviceAdmin", type:"xml" },
  { id:++xid, subLabel:"InputExtras", label:"<input-extras>", link:"reference/android/R.styleable.html#InputExtras", type:"xml" },
  { id:++xid, subLabel:"InputMethod", label:"<input-method>", link:"reference/android/R.styleable.html#InputMethod", type:"xml" },
  { id:++xid, subLabel:"RecognitionService", label:"<recognition-service>", link:"reference/android/R.styleable.html#RecognitionService", type:"xml" },
  { id:++xid, subLabel:"SpellChecker", label:"<spell-checker>", link:"reference/android/R.styleable.html#SpellChecker", type:"xml" },
  { id:++xid, subLabel:"TextToSpeechEngine", label:"<tts-engine>", link:"reference/android/R.styleable.html#TextToSpeechEngine", type:"xml" },
  { id:++xid, subLabel:"Wallpaper", label:"<wallpaper>", link:"reference/android/R.styleable.html#Wallpaper", type:"xml" },
  { id:++xid, subLabel:"WallpaperPreviewInfo", label:"<wallpaper-preview>", link:"reference/android/R.styleable.html#WallpaperPreviewInfo", type:"xml" },
];

for (var i = 0; i < XML_DATA.length; i++) {
  XML_DATA[i].label = XML_DATA[i].label
      .replace(/\</g, '&lt;')
      .replace(/\>/g, '&gt;');
  DATA.push(XML_DATA[i]);
}
