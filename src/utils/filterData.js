export const filterData = (data, filterDetails) => {
    let filteredData = data;
    if(filterDetails.propertyType !== 'all'){
        filteredData = data.filter(property => property.propertyType === filterDetails.propertyType);
    }
    if(filterDetails.price !== "all"){
        filteredData = filteredData.filter(property => filterDetails.price[0] <= property.price && property.price <= filterDetails.price[1])
    }
    if(filterDetails.location !== "All"){
        filteredData = filteredData.filter(property => property.state === filterDetails.location || property.city === filterDetails.location);
    }
    if(filterDetails.date){
        filteredData = filteredData.filter(property => filterDetails.date > property.dateAvailable.fromDate)
    }
    return filteredData;


}