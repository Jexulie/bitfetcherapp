var Gbp = props => {
    return (
        <div className="col s6 offset-s3">
            <div className="card hoverable">
                <span className="new badge blue lighten-3" data-badge-caption="">&#163;</span>
                <p><span className="blue-text text-lighten-1">1 Bitcoin is {props.data.rate}</span></p>
            </div>
        </div>
    )
}

export default Gbp;