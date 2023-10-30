function check(){
    navigator.geolocation.getCurrentPosition((looca) =>{
        let info = looca.coords
        let lat = info.latitude
        let long = info.longitude
        console.log(`your current location is at ${Math.round(lat)}N and ${Math.round(long)}E`);
        disp.innerHTML = `your current location is at ${Math.round(lat)}N and ${Math.round(long)}E`
    })
}