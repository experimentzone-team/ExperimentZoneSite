// Javascript for the CRO Calculator 

const visitorsElement = document.getElementById('numberOfVisitors')
const ordersElement = document.getElementById('numberOfOrders')
const aovElement = document.getElementById('averageOrderValue')
const croIncreaseElement = document.getElementById('increaseToConversion')
const investmentElement = document.getElementById('croInvestment')
const monthsElement = document.getElementById('monthsOfInvestment')


let currentConversionRate
let currentRevenue
let annualRevenue
let newOrderConversionRate
let newOrderTotal
let revenueGrowth
let futureAnnualRevenue
let returnOnInvestment
let monthlyInvestment

const calculate = function () {

    if (visitors > 0 && visitors !== NaN && orders > 0 && orders !== NaN && aov > 0 && aov !== NaN && croIncrease > 0 && croIncrease !== NaN) {
        currentConversionRate = (orders / visitors) * 100

        currentRevenue = orders * aov

        annualRevenue = currentRevenue * 12
    
        newOrderConversionRate = ((currentConversionRate) * (1 + (croIncrease / 100)))
    
        newOrderTotal = (newOrderConversionRate * visitors) / 100
    
        revenueGrowth = newOrderTotal * aov

        futureAnnualRevenue = revenueGrowth * 12
    
        returnOnInvestment = ((((revenueGrowth - currentRevenue) * months)) / investment)

        monthlyInvestment = (investment / months)

        document.getElementById("currentConversionRate").innerText = ((Math.round(100 * currentConversionRate) / 100).toLocaleString()) + "%"
        document.getElementById("currentRevenue").innerText = "$" + ((Math.round(annualRevenue))).toLocaleString()
        document.getElementById("newConversionRate").innerText = ((Math.round(100 * newOrderConversionRate) / 100).toLocaleString()) + "%"
        document.getElementById("newOrderTotal").innerText = (Math.round(newOrderTotal)).toLocaleString()
        document.getElementById("revenueGrowth").innerText = "$" + ((Math.round(futureAnnualRevenue)).toLocaleString())
        document.getElementById("monthlyInvestment").innerText = "$" + ((Math.round(monthlyInvestment)).toLocaleString())
        document.getElementById("returnOnInvestment").innerText = ((Math.round(10 * returnOnInvestment) / 10).toLocaleString()) + "X" 

        if (returnOnInvestment > 1) {
            document.getElementById("roi").classList.add("positive")
        } else {
            document.getElementById("roi").classList.remove("positive")
        }
        
    } else {
        document.getElementById("currentConversionRate").innerText = "0%"
        document.getElementById("currentRevenue").innerText = "$0"
        document.getElementById("newConversionRate").innerText = "0%"
        document.getElementById("newOrderTotal").innerText = 0
        document.getElementById("revenueGrowth").innerText = "$0"
        document.getElementById("returnOnInvestment").innerText = "0X"    
        
    }

}

var commas = function(val, id) {
    var x = val
    if (x !== "" && !isNaN(x) ){
        // x = parseInt(x.replace(/,/g, ''))
        document.getElementById(id).value = x.toLocaleString()

        if (id === "averageOrderValue" || id === "croInvestment") {
            document.getElementById(id).value = "$" + document.getElementById(id).value 
        }

        if (id === "increaseToConversion") {
            document.getElementById(id).value = document.getElementById(id).value + "%"
        }
    } else {
        document.getElementById(id).value = ""
    }
}

let visitors = 100000
visitorsElement.addEventListener("input", function () {

    visitors = parseInt(this.value.replace(/,/g, ''))
    visitors = parseFloat(visitors)
    if (visitors < 1) {
        document.getElementById("numberOfVisitors").classList.add("invalid")
    } else {
        document.getElementById("numberOfVisitors").classList.remove("invalid")
    }
    calculate()
    commas(visitors, "numberOfVisitors")
   
})
let orders = 2000
ordersElement.addEventListener("input", function () {
    orders = parseInt(this.value.replace(/,/g, ''))
    orders = parseFloat(orders)
    if (orders < 1) {
        document.getElementById("numberOfOrders").classList.add("invalid")
    } else {
        document.getElementById("numberOfOrders").classList.remove("invalid")
    }
    calculate()
    commas(orders, "numberOfOrders")
})
let aov = 125
aovElement.addEventListener("input", function () {
    aov = parseInt(this.value.replace(/\$|,/g, ''))
    aov = parseFloat(aov)
    if (aov < 1) {
        document.getElementById("averageOrderValue").classList.add("invalid")
    } else {
        document.getElementById("averageOrderValue").classList.remove("invalid")
    }
    calculate()
    commas(aov, "averageOrderValue")
})
let croIncrease = 10
croIncreaseElement.addEventListener("input", function (e) {
    croIncrease = parseInt(this.value.replace(/\%|,/g, ''))
    croIncrease = parseFloat(croIncrease)
    if (croIncrease < 1) {
        document.getElementById("increaseToConversion").classList.add("invalid")
    } else {
        document.getElementById("increaseToConversion").classList.remove("invalid")
    }
    calculate()
    if (e.inputType !== "deleteContentBackward") {
        commas(croIncrease, "increaseToConversion")
    }
})
let investment = 150000
investmentElement.addEventListener("input", function () {
    investment = parseInt(this.value.replace(/\$|,/g, ''))
    investment = parseFloat(investment)
    calculate()
    commas(investment, "croInvestment")
})

let months = 12
monthsElement.addEventListener("input", function () {
    months = this.value
    calculate()
})

calculate()




