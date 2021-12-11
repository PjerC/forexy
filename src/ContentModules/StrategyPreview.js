
// porbrac opise strategii z objStrategies.preview 
const StrategyPreview = (props) => {
    const {previewText} = props;
    return(
        <div className="d-flex text-primary justify-content-center align-items-center border border-secondary h-25 w-100 m-2 ">{previewText}</div>
    )
}
export default StrategyPreview;