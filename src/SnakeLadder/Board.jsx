const Cell = ({ cellNum, player }) => {
return (
    <div className="cell"> {cellNum} </div>
)

};
const Board = () => {
  const renderBoard = () => {
    const rows = [];
    let cellNum = 1;
    for (let i = 0; i < 10; i++) {
      const row = [];
      for (let j = 0; j < 10; j++) {
        row.push(<Cell key={cellNum} cellNum={cellNum} />);
        cellNum++;
      }

      rows.push(
        <div key={i} className="row">
          {row}
        </div>
      );
    }
    return rows;
  };

  return (
    <>
      Board
      <div className="board">
      {renderBoard()}
      </div>
    </>
  );
};
export default Board;
