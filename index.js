const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, name) {
    const driversFound =drivers.filter(z => z.toLowerCase() === name.toLowerCase());
    if(driversFound){
        return driversFound
    }
    return [];
}
function fuzzyMatch (drivers, string){
    const driversFiltered = drivers.filter(each => each.startsWith(string));
    if (driversFiltered){
        return driversFiltered;
    }
    return [];
}
function   matchName(drivers,string){
    const driversFiltered = drivers.filter(each => each.name === string);
    if(driversFiltered){
        return driversFiltered;
    }
    return [];
}