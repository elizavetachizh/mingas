export const defaultCenter = {
    lat: 53.905812,
    lng: 27.602552
}

export const GetBrowserLocation = () => {
    return new Promise((resolve, reject) => {
        if('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    const {latitude: lat, longitude: lng} = pos.coords;
                    resolve({lat, lng});
                },
                () => {
                    reject(defaultCenter);
                },
            );
        } else {
            reject(defaultCenter)
        }
    })
}