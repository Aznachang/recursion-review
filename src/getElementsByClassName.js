// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, nodes, result) {
  nodes = nodes || document.childNodes;
  result = result || [];
  for(var i = 0; i < nodes.length; i++) {
    if(nodes[i].className !== undefined && nodes[i].className.includes(className)) {
      result.push(nodes[i]);
    }
    if(nodes[i].childNodes.length > 0) {
      result.concat(getElementsByClassName(className, nodes[i].childNodes, result));
    }
  }
  return result;
};
