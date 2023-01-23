// ==UserScript==
// @name        Youtube AV1
// @namespace   https://github.com/onokatio/userscript/
// @match       *://www.youtube.com/*
// @grant       none
// @version     1.2
// @author      onokatio
// @description 2023/1/23 13:35:22
// @updateURL    https://github.com/onokatio/userscript/raw/master/YoutubeAV1.user.js
// @downloadURL  https://github.com/onokatio/userscript/raw/master/YoutubeAV1.user.js
// @supportURL   https://github.com/onokatio/userscript/
// ==/UserScript==

const quality = '8192';
localStorage.setItem('yt-player-av1-pref', quality);
