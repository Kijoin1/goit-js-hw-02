function getShippingCost(country){
    let priceShipping
    switch (country) {
        case "China":
        priceShipping = 100;
        return `Shipping to ${country} will cost ${priceShipping} credits`
        case "Chile":
        priceShipping = 250;
        return `Shipping to ${country} will cost ${priceShipping} credits`
        case "Australia":
        priceShipping = 170;
        return `Shipping to ${country} will cost ${priceShipping} credits`
        case "Jamaica":
        priceShipping = 120;
        return `Shipping to ${country} will cost ${priceShipping} credits`
        
    default:
    return "Sorry, there is no delivery to your country";
    }
}

console.log(getShippingCost("Australia"));
console.log(getShippingCost("Germany"));
console.log(getShippingCost("China")); 
console.log(getShippingCost("Chile")); 
console.log(getShippingCost("Jamaica"));
console.log(getShippingCost("Sweden"));