// ==UserScript==
// @name        Youtube AV1
// @namespace   Violentmonkey Scripts
// @match       *://www.youtube.com/*
// @grant       none
// @version     1.0
// @author      onokatio
// @description 2023/1/23 13:35:22
// @supportURL   https://github.com/hepokon365/updatable_userscript
// ==/UserScript==

const quality = '8192';
localStorage.setItem('yt-player-av1-pref', quality);