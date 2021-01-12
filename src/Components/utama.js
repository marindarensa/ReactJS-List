  
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Beranda from './beranda'
import Gallery from './gallery'
import HariBesar from './haribesar'
import Produk from './produk'

const utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/haribesar" component={HariBesar} />
        <Route path="/produk" component={Produk} />
    </Switch>
)
export default utama;