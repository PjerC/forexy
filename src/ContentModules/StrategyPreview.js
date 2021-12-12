
// porbrac opise strategii z objStrategies.preview 
const StrategyPreview = (props) => {
    const {previewText} = props;
    return(
        <div className="d-flex text-secondary text-wrap fw-bold justify-content-center align-items-center h-25 w-75 border border-warning  m-2 ">{previewText}</div>
    )
}
export default StrategyPreview;