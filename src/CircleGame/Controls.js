const Controls = ({handleUndo, handleRedo, handleReset, hasCircle, hasHistory}) => {
    return  (
        <div className="controls" onClick={(e) => {
            e.stopPropagation()
        }}>
            <button disabled={!hasCircle} className={hasCircle ? '' : 'disabled'} onClick={handleUndo}>Undo</button>
            <button disabled={!hasHistory} className={hasHistory ? '' : 'disabled'} onClick={handleRedo}>Redo</button>
            <button onClick={handleReset}>Reset</button>

        </div>
    )

}
export default Controls