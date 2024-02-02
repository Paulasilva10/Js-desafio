const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-Select")

const convertValues = async() => {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // valor em Real
    const currencyValueConverted = document.querySelector(".currency-value") // outro moedas


    const data  = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,AUD-BRL,JPY-BRL").then(response => response.json())

    const dolarToday =data.USDBRL.high
    const euroToday =data.EURBRL.high
    const japaneseToday =data.JPYBRL.high
    const australiandollar =data.AUDBRL.high
 
    console.log(data)

    // const dolarToday = 5.2
    // const euroToday = 6.2
    // const japaneseToday = 5
    // const australiandollar = 4


    if (currencySelect.value == "dolar") { // se o select estiver selecionado o valor dolar, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "japaneseyen") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue / japaneseToday)
    }

    if (currencySelect.value == "australiandollar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-au", {
            style: "currency",
            currency: "AUD"
        }).format(inputCurrencyValue / australiandollar)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")
    
    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src ="./assets/dolar.png"

    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "japaneseyen") {
        currencyName.innerHTML = "Japanese Yen"
        currencyImage.src = "./assets/japan.png"
    }

    if (currencySelect.value == "australiandollar") {
        currencyName.innerHTML = "Australian Dollar"
        currencyImage.src = "./assets/australia.png"
    }


}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)



//if (currencySelect.value == "chineseyuan") {
 //   currencyValueConverted.innerHTML = new Intl.NumberFormat("zh-HK",{
//        style: "currency"
 //       currency:"CNY"
 //   }).format(inputCurrencyValue / chineseYuan)
//}