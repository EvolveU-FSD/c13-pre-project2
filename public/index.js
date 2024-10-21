console.log('Loading index.js into browser')

//
// API Handling
//
async function loadDataFromServer(ip) {
    const url = 'http://'+ip+'/api/someData'
    const response = await fetch(url)
    if (response.status !== 200) {
        console.log('Oops... fetch for '+url+' failed')
        return
    }
    const dataObject = await response.json()
    return dataObject
}

// 
// Page Handling
//
async function loadAndDisplayDataFromServer() {
    const ip = document.getElementById('ip').value
    showLoading()
    let dataObject = await loadDataFromServer(ip)
    clearLoading()
    console.log('Fetched data:', dataObject)
    writeDataOntoPage(dataObject)
}

function showLoading() {
    document.getElementById('loadedData').replaceChildren("Loading...")
}

function clearLoading() {
    document.getElementById('loadedData').replaceChildren()
}

function writeDataOntoPage(dataObject) {
    const text = JSON.stringify(dataObject)
    document.getElementById('loadedData').append(text)
}

