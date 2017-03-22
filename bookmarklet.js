javascript:(function() {

  var showPnxLinkElem = document.querySelectorAll('prm-brief-result-container');
   urlParamVid = location.search.split('vid=')[1].split('&')[0];

  function createLink (linkUrl, linkText) {
     var obj = document.createElement("a");
     obj.setAttribute("href", linkUrl);
     obj.setAttribute("target", "_blank");
     obj.style.margin = "0 0 0 2em";
     obj.innerHTML = linkText;
     return obj;
  }

  for (var i=0, j=showPnxLinkElem.length; i < j; i++) {

   var showPnxRecId = showPnxLinkElem[i].querySelector('.list-item-primary-content').getAttribute('data-recordid'),
     resultItemChildren = showPnxLinkElem[i].parentNode.childNodes,
     resultItemLastChild = resultItemChildren[resultItemChildren.length - 1],
     recordIdSpan = document.createElement("span"),
     showSourceLinkHref = "./sourceRecord?vid="+urlParamVid+"&docId="+showPnxRecId,
     showSourceLink = createLink (showSourceLinkHref, "Show Source Record"),
     showPnxLinkHref;

   /* Change PNX-link for PCI-records */
   if (/^TN./.test(showPnxRecId) === false ) {
     showPnxLinkHref = "./fulldisplay?vid="+urlParamVid+"&docid="+showPnxRecId+"&showPnx=true";
   } else {
     showPnxLinkHref = "./fulldisplay?vid="+urlParamVid+"&docid="+showPnxRecId+"&context=PC&showPnx=true";
   }

   var showPnxLink = createLink (showPnxLinkHref, "Show Pnx");
   recordIdSpan.className = "show-recordid";
   recordIdSpan.innerHTML = showPnxRecId;
   recordIdSpan.style.padding = "2em 0 0 0";
   recordIdSpan.appendChild(showPnxLink);

   /* No Source-links for Third Node (PCI) and SFX records */
   if (/^TN./.test(showPnxRecId) === false && /.*(sfx|SFX|Sfx).*/.test(showPnxRecId) === false ) {
     recordIdSpan.appendChild(showSourceLink);
   }

   /* Append recordid and links only once */
   if (resultItemLastChild.className !== 'show-recordid') {

   /* Prepend FRBR records with note */
     if (showPnxLinkElem[i].querySelector('prm-search-result-frbr-line')) {
       var prefix = document.createElement("strong");
       prefix.innerHTML = 'FRBR preferred/generic record:';
       showPnxLinkElem[i].appendChild(prefix);
       var linebreak = document.createElement("br");
       showPnxLinkElem[i].appendChild(linebreak);
     }

     showPnxLinkElem[i].parentNode.appendChild(recordIdSpan);
   }
  }
})();
