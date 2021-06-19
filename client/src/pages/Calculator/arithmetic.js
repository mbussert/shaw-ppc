export default {
    calculate: function (width, height) {

    const numOfPanels = width / 50;
    const panelsRounded = Math.ceil(numOfPanels);
    const adjustedHeight = parseFloat(height) + 6;
    const heightCalculation = adjustedHeight * panelsRounded;
    const dividedHeight = heightCalculation / 12
    const finalCalculation = Math.ceil(dividedHeight);

    return finalCalculation;

    }
};
