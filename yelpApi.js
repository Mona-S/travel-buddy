class Yelp{
    constructor(lat, lng, location){
        this.data = {};
        this.location = location;
        this.lat = lat;
        this.lng = lng;
        this.term = '';
    }
    addEventHandlers(){

    }
    getYelpData(){
        const api = 'M3S7kd9LGDSgQq4a-CGJfRTTp6RbPZRmqvCO4-fsTFctm92rRn94jm7jSchf0Jnfg4o_OhR4MpeZN7x3mdt6Rhn7v2mz4aFGBGNsaNDaA37z7DCpEfMKnK6mAhVCXXYx'
        $.ajax({
            dataType: 'json',
            url: 'yelp.php',
            method: 'GET',
            headers: {
                "Authorization": "Bearer M3S7kd9LGDSgQq4a-CGJfRTTp6RbPZRmqvCO4-fsTFctm92rRn94jm7jSchf0Jnfg4o_OhR4MpeZN7x3mdt6Rhn7v2mz4aFGBGNsaNDaA37z7DCpEfMKnK6mAhVCXXYx"
            },
            data: {
               location: this.location,
               latitude: this.lat,
               longitude: this.lng,
               term: this.term 
            }
        }).done( (data, status, jqXHR) => {
            console.log(data, status);
        }).fail((jqXHR, textStatus, errorThrown) => console.log(jqXHR, textStatus, errorThrown) )
        .always( (data, textStatus, jqXHR) => console.log("Promise Completion Callback", data, textStatus, jqXHR))
    }
    render(){
        
    }
}
