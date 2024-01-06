const csv=require('csvtojson')

const getDataFromCsv = async () => {

    const jsonArray=await csv().fromFile('./csv/EF_Road_transport_passenger_cars.csv');
    return jsonArray
    
}

const generateSQl = async () => {
    const csvData = await getDataFromCsv()
    csvData.forEach(x => { 
        const val = parseFloat(x.Value)
        if (typeof (val) === 'number' || val !== NaN) {
            console.log(`('${x.Abatement}', '${x.Technology}','${x.Fuel}','${x.Unit}','${x.Region}',${val} ),`)
        }
    })
}

(async () => {
await generateSQl()
})()