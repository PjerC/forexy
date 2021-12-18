
// porbrac opise strategii z objStrategies.preview 
const StrategyPreview = (props) => {
    const {previewText} = props;
    return(
        <div className="d-flex container text-secondary fw-bold justify-content-center h-25 align-items-center rounded  m-1 p-1">
            <p className="fs-6">{previewText}</p>
        </div>
    )
}
export default StrategyPreview;