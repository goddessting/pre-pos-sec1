function buildSameElement(element, collection_b, collection){
  for(var j = 0; j < collection_b.length; j++)
  {
    if(element === collection_b[j])
      collection.push(element);
  }
}

function collect_same_elements(collection_a, collection_b) {
  var collection=[];
  for(var i = 0 ; i < collection_a.length; i++){
    buildSameElement(collection_a[i], collection_b, collection);
  }

  return collection;
}

module.exports = collect_same_elements;
