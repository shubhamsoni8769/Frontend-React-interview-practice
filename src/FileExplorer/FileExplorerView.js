import { useState } from "react";
import explorer from "./data/FolderData";
import Folder from "./Folder/Folder";
import { useTraverseTree } from "./hook/useTraverseTree";

export const FileExplorerView = () => {
  const [explorerData, setExplorerData] = useState(explorer);
  const { insertNode, deleteNode, upateNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };
  const handleDeleteNode = (folderId) =>{
    const finalTree = deleteNode(explorerData, folderId);
    setExplorerData(finalTree);
  }

  const handleUpdateNode = (folderId) =>{
    console.log("fdkjghjdkfhjk");
    const finalTree = upateNode(explorerData, folderId);
    setExplorerData(finalTree);
  }

  return (
    <>
      <Folder explorerData={explorerData} handleInsertNode={handleInsertNode} handleUpdateNode={handleUpdateNode} handleDeleteNode={handleDeleteNode} />
    </>
  );
};

export default FileExplorerView;
