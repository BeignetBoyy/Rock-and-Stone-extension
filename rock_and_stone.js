// Source - https://stackoverflow.com/a/18474626
// Posted by Paul, modified by community. See post 'Timeline' for change history
// Retrieved 2026-07-15, License - CC BY-SA 3.0

function replaceTextOnPage(from, to){
  getAllTextNodes().forEach(function(node){

    // If the replacement already exists in the node we ignore
    if(!node.nodeValue.toLowerCase().includes(to.toLowerCase())){
        // we check wether the node contains our from string (avoids some pages from breaking)
        if(node.nodeValue.toLowerCase().includes(from.toLowerCase())){
            node.nodeValue = node.nodeValue.toLowerCase().replace(new RegExp(quote(from), 'g'), to);
        }
    }
  });

  function getAllTextNodes(){
    var result = [];

    (function scanSubTree(node){
      if(node.childNodes.length) 
        for(var i = 0; i < node.childNodes.length; i++) 
          scanSubTree(node.childNodes[i]);
      else if(node.nodeType == Node.TEXT_NODE) 
        result.push(node);
    })(document);

    return result;
  }

  function quote(str){
    return (str+'').replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
  }
}

replaceTextOnPage("rock", "Rock and Stone")