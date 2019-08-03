class Yelp{
    constructor(lat, lng, location){
        this.data = {};
        this.location = location;
        this.lat = lat;
        this.lng = lng;
        this.term = '';
        this.name = '';
        this.phone = '';
        this.price = '';
        this.rating = '';
        this.image = null;
    }

    getLocationData(){
        this.lat = null;
        this.lng = null;
        this.getYelpData();
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
            $('.yelp').empty();
            for (let b of data.businesses){
                this.image = b.image_url;
                this.name = b.name;
                this.phone = b.phone;
                this.price = b.price;
                this.rating = b.rating;
                this.location = b.location.address1;
                if (this.price === undefined){
                    
                }
                const businessContainerClone = $("#templates > .businessContainer").clone();
                businessContainerClone.find('.imageContainer').css('background-image', `url(${this.image})`);
                businessContainerClone.find('.name').text(this.name);
                businessContainerClone.find('.phone').text('T: ' + this.phone);
                businessContainerClone.find('.price').text('Price '+ this.price);
                businessContainerClone.find('.rating').text('Rating: ' + this.rating);
                businessContainerClone.find('.locationInfo').text(this.location);

                $('.yelp').append(businessContainerClone);
            }
        }).fail((jqXHR, textStatus, errorThrown) => console.log(jqXHR, textStatus, errorThrown) )
        .always( (data, textStatus, jqXHR) => console.log("Promise Completion Callback", data, textStatus, jqXHR))
    }
}
