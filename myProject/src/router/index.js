import Vue from 'vue'
import Router from 'vue-router'
import Druid from '@/components/Druid'
import Hunter from '@/components/Hunter'
import Mega from '@/components/Mega'
import Paladin from '@/components/Paladin'
import Priest from '@/components/Priest'
import Rogue from '@/components/Rogue'
import Shaman from '@/components/Shaman'
import Walock from '@/components/Walock'
import Warrior from '@/components/Warrior'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Hunter', component: Hunter},
    {path: '/druid', name: 'Druid', component: Druid},
    {path: '/mega', name: 'Mega', component: Mega},
    {path: '/paladin', name: 'Paladin', component: Paladin},
    {path: '/priest', name: 'Priest', component: Priest},
    {path: '/rogue', name: 'Rogue', component: Rogue},
    {path: '/shaman', name: 'Shaman', component: Shaman},
    {path: '/walock', name: 'Walock', component: Walock},
    {path: '/warrior', name: 'Warrior', component: Warrior}

  ]
})
