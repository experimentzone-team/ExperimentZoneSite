// Javascript for the CRO Calculator --

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
    currentConversionRate = (orders / visitors) * 100

    currentRevenue = orders * aov

    newOrderConversionRate = (currentConversionRate * (1 + croIncrease))

    newOrderTotal = newOrderConversionRate * visitors

    revenueGrowth = newOrderTotal * aov

    returnOnInvestment = ((revenueGrowth - currentRevenue) / investment) * 100

    document.getElementById("currentConversionRate").innerText = Math.round(100 * currentConversionRate) / 100
    document.getElementById("currentRevenue").innerText = Math.round(100 * currentRevenue) / 100
    document.getElementById("newConversionRate").innerText = Math.round(100 * newOrderConversionRate) / 100
    document.getElementById("newOrderTotal").innerText = Math.round(100 * newOrderTotal) / 100
    document.getElementById("revenueGrowth").innerText = Math.round(100 * revenueGrowth) / 100
    document.getElementById("returnOnInvestment").innerText = Math.round(100 * returnOnInvestment) / 100
}




let visitors = 0
visitorsElement.addEventListener("input", function () {
    visitors = parseFloat(this.value)
    calculate()
})
let orders = 0
ordersElement.addEventListener("input", function () {
    orders = parseFloat(this.value)
    calculate()
})
let aov = 0
aovElement.addEventListener("input", function () {
    aov = parseFloat(this.value)
    calculate()
})
let croIncrease = 0
croIncreaseElement.addEventListener("input", function () {
    croIncrease = parseFloat(this.value)
    calculate()
})
let investment = 0
investmentElement.addEventListener("input", function () {
    investment = parseFloat(this.value)
    calculate()
})







