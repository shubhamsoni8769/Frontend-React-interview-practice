export const useTraverseTree = () => {
  const insertNode = (root, folderId, item, isFolder) => {
    console.log("here", root, folderId, item, isFolder);
    if (root.id === folderId && root.isFolder) {
      root.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder,
        items: [],
      });
      return root;
    }

    const latestNode = root.items.map((obj) => {
      return insertNode(obj, folderId, item, isFolder);
    });
    return { ...root, items: latestNode };
  };

  const deleteNode = (root, folderId) => {
    const updatedArr = [];
    for (let ele of root.items) {
      if (ele.id !== folderId) {
        const result = deleteNode(ele, folderId);
        updatedArr.push(result);
      } else {
        console.log("I am in else");
      }
    }
    return { ...root, items: updatedArr };
  };

  const upateNode = (root, folderId, newName="name Updated") => {
    if (root.id === folderId) {
      root.name = newName;
      return {...root}
    }
    const latestNode = root.items.map(ele => {
      return upateNode(ele, folderId, newName)
    })
    
    return { ...root, items: latestNode };
  };

  return { insertNode, deleteNode, upateNode };
};
