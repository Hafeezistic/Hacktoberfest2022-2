const maxWidthUsingQueue = (node) => { 
  // Base case 
  if (node === null){ 
    return 0; 
  }

  // Initialize result 
  let maxwidth = 0; 

  // Do Level order traversal keeping  
  // track of number of nodes at every level 
  const q = new Queue(); 
  q.enqueue(node); 

  while (!q.isEmpty())  
  { 
    // Get the size of queue when the level order 
    // traversal for one level finishes 
    let count = q.size(); 

    // Update the maximum node count value 
    maxwidth = Math.max(maxwidth, count); 

    // Iterate for all the nodes in  
    // the queue currently 
    while (count > 0)  
    { 
      // Dequeue an node from queue 
      let temp = q.dequeue(); 

      // Enqueue left and right children  
      // of dequeued node 
      if (temp.left !== null)  
      { 
        q.enqueue(temp.left); 
      } 

      if (temp.right !== null)  
      { 
        q.enqueue(temp.right); 
      } 

      count--;
    } 
  } 

  return maxwidth; 
}
