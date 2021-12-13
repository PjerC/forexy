
// porbrac opise strategii z objStrategies.preview 
const StrategyPreview = (props) => {
    const {previewText} = props;
    return(
        <div className="d-flex text-secondary fw-bold justify-content-center align-items-center rounded w-50 h-25">{previewText}</div>
    )
}
export default StrategyPreview;