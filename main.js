const app = {
  data() {
    return {
      Hokkaido: [{
          name: 'Fort Goryokaku,Hakodate',
          url: './images/1.jpg',
          Like: false
        },
        {
          name: 'Mount Hakodate,Hakodate',
          url: './images/2.jpg',
          Like: false
        },
        {
          name: 'Otaru Canal Area,Otaru',
          url: './images/3.jpg',
          Like: false
        },
        {
          name: 'Furano Flower Field,Furano',
          url: './images/4.jpg',
          Like: false
        },
        {
          name: 'Furano Ski Area,Furano',
          url: './images/5.jpg',
          Like: false
        },
        {
          name: 'Abashiri Drift Ice,Abashiri',
          url: './images/6.jpg',
          Like: false
        },
        {
          name: 'Jigokudani,Noboribetsu',
          url: './images/7.jpg',
          Like: false
        },
        {
          name: 'Aoiike Blue Pond,Biei',
          url: './images/8.jpg',
          Like: false
        },
        {
          name: 'Asahiyama Zoo,Asahiyama',
          url: './images/9.jpg',
          Like: false
        },
        {
          name: 'Shiroi Koibito,Sapporo',
          url: './images/10.jpg',
          Like: false
        },
        {
          name: 'Sapporo TV Tower,Sapporo',
          url: './images/11.jpg',
          Like: false
        },
        {
          name: 'Mount Moiwa,Sapporo',
          url: './images/12.jpg',
          Like: false
        },
      ],
      inputTask : '',
      search : true
    }
  },
  methods: {
    likeCheck(index) {
      this.Hokkaido[index].Like = !this.Hokkaido[index].Like
    },

    Search() {
      this.search = !this.search 
    }
  },

  computed: {
    sumLike() {
      return this.Hokkaido.filter(t => t.Like).length
    }
  }
}

mountedApp = Vue.createApp(app).mount('#app')