const bstHeight = (node) => {
  //If null return 0
  if(node === null){
    return 0;
  }
  
  //Get left sub tree height
  const leftHeight = bstHeight(node.left);
  
  //Get right sub tree height
  const rightHeight = bstHeight(node.right);
  
  //Return the max of them
  return leftHeight > rightHeight ? leftHeight + 1 : rightHeight + 1;
}
