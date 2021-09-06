import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    people: [
      {
        id: '1',
        photo: '../img/all/photo.png',
        data: 'Contact Email not Linked',
        info: 'Updated 1 day ago',
        name: 'Tom Cruise',
        release: 'on 24.05.2019',
        date: 'May 26, 2019',
        time: '6:30 PM',
        priority: 'normal'
      },
      {
        id: '2',
        photo: '../img/all/1.png',
        data: 'Adding Images to Featured Posts',
        info: 'Updated 1 day ago',
        name: 'Matt Damon',
        release: 'on 24.05.2019',
        date: 'May 26, 2019',
        time: '8:00 AM',
        priority: 'low'
      },
      {
        id: '3',
        photo: '../img/all/2.png',
        data: 'When will I be charged this month?',
        info: 'Updated 1 day ago',
        name: 'Robert Downey',
        release: 'on 24.05.2019',
        date: 'May 26, 2019',
        time: '7:30 PM',
        priority: 'high'
      },
      {
        id: '4',
        photo: '../img/all/3.png',
        data: 'Payment not going through',
        info: 'Updated 2 days ago',
        name: 'Christian Bale',
        release: 'on 24.05.2019',
        date: 'May 25, 2019',
        time: '5:00 PM',
        priority: 'normal'
      },
      {
        id: '5',
        photo: '../img/all/4.png',
        data: 'Unable to add replies',
        info: 'Updated 2 days ago',
        name: 'Henry Cavil',
        release: 'on 24.05.2019',
        date: 'May 25, 2019',
        time: '4:00 PM',
        priority: 'high'
      },
      {
        id: '6',
        photo: '../img/all/5.png',
        data: 'Downtime since last week',
        info: 'Updated 3 days ago',
        name: 'Chris Evans',
        release: 'on 23.05.2019',
        date: 'May 25, 2019',
        time: '2:00 PM',
        priority: 'normal'
      },
      {
        id: '7',
        photo: '../img/all/6.png',
        data: 'Referral Bonus',
        info: 'Updated 4 day ago',
        name: 'Sam Smith',
        release: 'on 22.05.2019',
        date: 'May 25, 2019',
        time: '11:30 AM',
        priority: 'low'
      },
      {
        id: '8',
        photo: '../img/all/7.png',
        data: 'How do I change my password?',
        info: 'Updated 6 days ago',
        name: 'Steve Rogers',
        release: 'on 21.05.2019',
        date: 'May 24, 2019',
        time: '1:00 PM',
        priority: 'normal'
      },
      {
        id: '9',
        photo: '../img/all/6.png',
        data: 'Referral Bonus',
        info: 'Updated 4 day ago',
        name: 'ababababab',
        release: 'on 22.05.2019',
        date: 'May 25, 2019',
        time: '11:30 AM',
        priority: 'low'
      },
      {
        id: '10',
        photo: '../img/all/7.png',
        data: 'How do I change my password?',
        info: 'Updated 6 days ago',
        name: 'smsmsmmsms',
        release: 'on 21.05.2019',
        date: 'May 24, 2019',
        time: '1:00 PM',
        priority: 'normal'
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
