export default {
    methods: {
        copyToClipboard(content) {
            navigator.clipboard.writeText(content);
        },
        getLocation() {
            return new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(
                    position => {
                        const latitude = position.coords.latitude;
                        const longitude = position.coords.longitude;
                        resolve({ la: latitude, lo: longitude });
                    },
                    error => {
                        console.error("Error getting geolocation:", error);
                        reject(false);
                    }
                );
            });
        },
        // checkStrangeCharacters(string) {
        //     var format = /[%^&*()+\=\[\]{};':"\\|,.<>\/?]+/;
        //     if (format.test(string)) {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // },
        formatTime(date) {
            const dateformat = new Date(date);
            const house = dateformat.getHours();
            const minute = dateformat.getMinutes();
            const seconds = dateformat.getSeconds();
            return house + ':' + minute + ':' + seconds
        },
        formatDate(date) {
            const dateformat = new Date(date);
            const day = dateformat.getDate();
            const month = Number(dateformat.getMonth()) + 1;
            const year = dateformat.getFullYear();
            return day + '-' + month + '-' + year;
        },
        //tạo kí tự ngẫu nhiên
        generateRandomCharacters(length) {
            var strings = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            var randomCharacters = "";
            for (var i = 0; i < length; i++) {
                var location = Math.floor(Math.random() * strings.length);
                randomCharacters += strings.charAt(location);
            }
            return randomCharacters;
        }
    },
};