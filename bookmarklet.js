javascript:(function() {

    var showPnxLinkElem = document.querySelectorAll('prm-brief-result-container'),
        urlParamVid = location.search.split('vid=')[1].split('&')[0];

    function createLink (linkUrl, linkText) {
        var obj = document.createElement("a");
        obj.setAttribute("href", linkUrl);
        obj.setAttribute("target", "_blank");
        obj.style.margin = "0 0 0 2em";
        obj.innerHTML = linkText;
        return obj;
    }

    function appendAllLinks (elementToAppendLinks) {

        var showPnxRecId = elementToAppendLinks.querySelector('.list-item-primary-content').getAttribute('data-recordid'),
            resultItemChildren = elementToAppendLinks.parentNode.childNodes,
            resultItemLastChild = resultItemChildren[resultItemChildren.length-1],
            recordIdSpan = document.createElement("span"),
            hrefBase = elementToAppendLinks.querySelector('.media-thumbnail').querySelector('a').getAttribute('ng-href').replace(/docid=.*?(&|$)/, "docid="+showPnxRecId+"$1"),
            showSourceLinkHref = hrefBase.replace(/fulldisplay/, "sourceRecord").replace(/docid=/, "docId="),
            showSourceLink = createLink (showSourceLinkHref, "Show Source Record"),
            showRISLinkHref = "../primo_library/libweb/action/display.do?doc="+showPnxRecId+"&vid="+urlParamVid+"&showRIS=true",
            showRISLink = createLink (showRISLinkHref, "Show RIS");

        /* Service Pages via old UI for the time being */
        if (/openurl/.test(location) === true) {
            var templocation = location.href;
            showPnxLinkHref = templocation.replace(/primo-explore/, "primo_library/libweb/action")+"&showPnx=true";
        } else {
        /* Make use of new urlToXmlPnx */
            showPnxLinkHref = showPnxLinkElem[i].querySelector('.urlToXmlPnx').getAttribute('data-url');
        }

        var showPnxLink = createLink (showPnxLinkHref, "Show Pnx");
        recordIdSpan.className = "show-recordid";
        recordIdSpan.innerHTML = showPnxRecId;
        recordIdSpan.style.padding = "2em 0 0 0";
        if (/openurl/.test(hrefBase) !== true ) {
            recordIdSpan.appendChild(showPnxLink);
        }

        /* No Source-links for Third Node (PCI, EBSCO etc.) records */
        if (/context=L/.test(hrefBase) === true) {
            recordIdSpan.appendChild(showSourceLink);
            /* No RIS-links for PrimoVE (no old UI to link to) */
            if (/\/discovery\//.test(hrefBase) === false) {
                recordIdSpan.appendChild(showRISLink);
            }
        }

        /* Append recordid and links only once */
        if (resultItemLastChild.className !== 'show-recordid') {
            /* Prepend FRBR records with note */
            if (elementToAppendLinks.querySelector('prm-search-result-frbr-line')) {
                var prefix = document.createElement("strong"),
                    linebreak = document.createElement("br");
                prefix.innerHTML = 'FRBR preferred/generic record:';
                elementToAppendLinks.appendChild(prefix);
                elementToAppendLinks.appendChild(linebreak);
            }
            elementToAppendLinks.parentNode.appendChild(recordIdSpan);
        }
    }
    if (showPnxLinkElem) {
        for (var i=0, j=showPnxLinkElem.length; i < j; i++) {
            currentElement = showPnxLinkElem[i];
            appendAllLinks(currentElement);
        }
    } else {
        console.log('No elements found to apply showPnx bookmarklet to.')
    }
})();
