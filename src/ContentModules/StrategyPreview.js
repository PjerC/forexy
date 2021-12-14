
// porbrac opise strategii z objStrategies.preview 
const StrategyPreview = (props) => {
    const {previewText} = props;
    return(
        <div className="d-flex text-secondary fw-bold justify-content-center align-items-center rounded h-25 m-1 p-2 ">{previewText}</div>
    )
}
export default StrategyPreview;