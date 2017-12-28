const totalEstimate = (estimate) => {
    if (!estimate) return 0;
    let valueTotal = 0;
    estimate.map(valueEstimate => {
        return (
            valueTotal += valueEstimate.estimate
        );
    });
    return (
        Math.round(valueTotal / estimate.length)
    );
};

export default totalEstimate;