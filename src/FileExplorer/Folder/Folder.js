import { useState } from "react";
import "../styles.css";

const Folder = ({
  explorerData,
  handleInsertNode,
  handleDeleteNode,
  handleUpdateNode,
}) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const createNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setShowInput({
      visible: true,
      isFolder,
    });
    setExpand(true);
  };

  const deleteFolder = (e) => {
    e.stopPropagation();
    handleDeleteNode(explorerData.id);
  };
  const updateFolder = (e) => {
    e.stopPropagation();
    handleUpdateNode(explorerData.id);
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorerData.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };
  return (
    <>
      <div style={{ margin: "15px" }}>
        {explorerData.isFolder ? (
          <>
            <div className="folder" onClick={() => setExpand(true)}>
              <div>
                <span>📁 {explorerData.name}</span>
                {/* {showInput ? 📁 <input type="text"/>} */}
              </div>
              <div>
                <button onClick={(e) => createNewFolder(e, true)}>
                  {" "}
                  Folder +{" "}
                </button>
                <button onClick={(e) => createNewFolder(e, false)}>
                  {" "}
                  File +{" "}
                </button>
                <button onClick={(e) => deleteFolder(e)}>Delete</button>
                <button onClick={(e) => updateFolder(e)}>update</button>
              </div>
            </div>

            <div
              className="items"
              style={{
                display: expand ? "block" : "none",
                paddingLeft: "25px",
              }}
            >
              {showInput.visible ? (
                <div className="inputContainer">
                  <span> {showInput.isFolder ? "📁" : "📄"}</span>
                  <input
                    type="text"
                    autoFocus
                    onBlur={() =>
                      setShowInput({ ...showInput, visible: false })
                    }
                    onKeyDown={onAddFolder}
                    className="inputContainer__input"
                  />
                </div>
              ) : null}
              {explorerData.items?.length > 0 &&
                explorerData.items.map((item) => {
                  return (
                    <Folder
                      explorerData={item}
                      handleInsertNode={handleInsertNode}
                      handleUpdateNode={handleUpdateNode}
                      handleDeleteNode={handleDeleteNode}
                      key={item.id}
                    />
                  );
                })}
            </div>
          </>
        ) : (
          <div className="file">
            <span>
              📄 {explorerData.name}{" "}
              <button onClick={(e) => deleteFolder(e)}>Delete</button>
              <button onClick={(e) => updateFolder(e)}>update</button>
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default Folder;
