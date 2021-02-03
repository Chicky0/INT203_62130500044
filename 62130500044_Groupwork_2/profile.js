    const app = {
        data() {
            return {
                img : "images/2.jpg",
                name : 'Nippit Chotigo',
                faculty : 'Information Technology',
                article : '89',
                followers : '2.5k',
                ratings : '8.0'
            }
        }

    }
    var mountedApp = Vue.createApp(app).mount('#app')
