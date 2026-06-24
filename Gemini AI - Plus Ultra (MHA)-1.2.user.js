// ==UserScript==
// @name         Gemini AI - Plus Ultra (MHA)
// @namespace    https://tampermonkey.net/
// @version      1.2
// @description  Change the text of the current subscription from "Plus" to "Plus Ultra"
// @author       Blunnix
// @license      MIT
// @match        https://gemini.google.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';

    function isEditable(node) {
        const parent = node.parentNode;
        if (!parent) return false;
        return parent.nodeName === 'TEXTAREA' ||
               parent.nodeName === 'INPUT' ||
               parent.isContentEditable;
    }


    function procesarTexto(node) {
        if (isEditable(node)) return;

        const texto = node.nodeValue;
        if (!texto) return;

        const trimText = texto.trim();
        if (trimText === "Plus") {
            node.nodeValue = texto.replace("Plus", "Plus Ultra");
        } else if (trimText === "PLUS") {
            node.nodeValue = texto.replace("PLUS", "PLUS ULTRA");
        }
    }


    function procesarNodo(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            procesarTexto(node);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            const walker = document.createTreeWalker(
                node,
                NodeFilter.SHOW_TEXT
            );
            let textNode;
            while ((textNode = walker.nextNode())) {
                procesarTexto(textNode);
            }
        }
    }


    procesarNodo(document.body);


    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.type === 'childList') {

                for (const node of mutation.addedNodes) {
                    procesarNodo(node);
                }
            } else if (mutation.type === 'characterData') {

                procesarTexto(mutation.target);
            }
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true
    });
})();
