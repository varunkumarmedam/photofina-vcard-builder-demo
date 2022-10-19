const { createApp } = Vue

createApp({
    data() {
        return {
            name: 'Barak Obama',
            designation: "Full Stack Developer",
            company: 'Photofina',
            email: 'hello@photofina.com',
            location: "123, Dummy, Washington DC, USA",
            mobile: "+91 998877665",
            website: 'ceo.photofina.com',
            description: "Mobile & Cloud developer"
        };
    },
}).mount('#app')