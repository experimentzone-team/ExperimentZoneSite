// Javascript for the CRO Calculator 

const visitorsElement = document.getElementById('numberOfVisitors')
const ordersElement = document.getElementById('numberOfOrders')
const aovElement = document.getElementById('averageOrderValue')
const croIncreaseElement = document.getElementById('increaseToConversion')
const investmentElement = document.getElementById('croInvestment')

let currentConversionRate
let currentRevenue
let newOrderConversionRate
let newOrderTotal
let revenueGrowth
let returnOnInvestment

const calculate = function () {

    if (visitors > 0 && visitors !== NaN && orders > 0 && orders !== NaN && aov > 0 && aov !== NaN && croIncrease > 0 && croIncrease !== NaN) {
        currentConversionRate = (orders / visitors) * 100

        currentRevenue = orders * aov
    
        newOrderConversionRate = ((currentConversionRate) * (1 + (croIncrease / 100)))
    
        newOrderTotal = (newOrderConversionRate * visitors) / 100
    
        revenueGrowth = newOrderTotal * aov
    
        returnOnInvestment = ((revenueGrowth - currentRevenue) / investment) * 100

        document.getElementById("currentConversionRate").innerText = (Math.round(100 * currentConversionRate) / 100) + "%"
        document.getElementById("currentRevenue").innerText = "$" + (Math.round(100 * currentRevenue) / 100)
        document.getElementById("newConversionRate").innerText = (Math.round(100 * newOrderConversionRate) / 100) + "%"
        document.getElementById("newOrderTotal").innerText = Math.round(100 * newOrderTotal) / 100
        document.getElementById("revenueGrowth").innerText = "$" + (Math.round(100 * revenueGrowth) / 100)
        document.getElementById("returnOnInvestment").innerText = (Math.round(100 * returnOnInvestment) / 100) + "%" 
        
    } else {
        document.getElementById("currentConversionRate").innerText = "0%"
        document.getElementById("currentRevenue").innerText = "$0"
        document.getElementById("newConversionRate").innerText = "0%"
        document.getElementById("newOrderTotal").innerText = 0
        document.getElementById("revenueGrowth").innerText = "$0"
        document.getElementById("returnOnInvestment").innerText = "0%"    
        
    }

}

let visitors = 0
visitorsElement.addEventListener("input", function () {
    visitors = parseFloat(this.value)
    if (visitors < 1) {
        document.getElementById("numberOfVisitors").classList.add("invalid")
    } else {
        document.getElementById("numberOfVisitors").classList.remove("invalid")
    }
    calculate()
})
let orders = 0
ordersElement.addEventListener("input", function () {
    orders = parseFloat(this.value)
    if (orders < 1) {
        document.getElementById("numberOfOrders").classList.add("invalid")
    } else {
        document.getElementById("numberOfOrders").classList.remove("invalid")
    }
    calculate()
})
let aov = 0
aovElement.addEventListener("input", function () {
    aov = parseFloat(this.value)
    if (aov < 1) {
        document.getElementById("averageOrderValue").classList.add("invalid")
    } else {
        document.getElementById("averageOrderValue").classList.remove("invalid")
    }
    calculate()
})
let croIncrease = 0
croIncreaseElement.addEventListener("input", function () {
    croIncrease = parseFloat(this.value)
    if (croIncrease < 1) {
        document.getElementById("increaseToConversion").classList.add("invalid")
    } else {
        document.getElementById("increaseToConversion").classList.remove("invalid")
    }
    calculate()
})
let investment = 1000
investmentElement.addEventListener("input", function () {
    investment = parseFloat(this.value)
    calculate()
})






