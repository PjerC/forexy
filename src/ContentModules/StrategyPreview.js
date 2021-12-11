
// porbrac opise strategii z objStrategies.preview 
const StrategyPreview = (props) => {
    const {previewText} = props;
    return(
        <div className="d-flex text-secondary fw-bold justify-content-center align-items-center h-25 w-100 m-2 ">{previewText}</div>
    )
}
export default StrategyPreview;