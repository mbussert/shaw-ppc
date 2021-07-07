export default {
    calculate: function (width, height, border) {

    const numOfPanels = width / 50;
    const panelsRounded = Math.ceil(numOfPanels);

    let orderHeight;

    if(border) {
        orderHeight = parseFloat(height) + 6;
    } else {
        orderHeight = parseFloat(height)
    }
    const heightCalculation = orderHeight * panelsRounded;
    const dividedHeight = heightCalculation / 12
    const finalCalculation = Math.ceil(dividedHeight);

    return finalCalculation;

    }
};
