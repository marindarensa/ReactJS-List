import React, { Component } from 'react'
import Media from './Media';

export class Gallery extends Component {
    render() {
        return (
            <div className="container">
                <br/>
                <br/>
                <h3 className="text-center">Tanaman Obat Keluarga</h3>
                <br/>
                <br/>
                <Media image="4.jpeg" title="Jahe">  
                Jahe, adalah tanaman rimpang yang sangat populer sebagai rempah-rempah dan bahan obat. 
                Rimpangnya berbentuk jemari yang menggembung di ruas-ruas tengah. Rasa dominan pedas 
                disebabkan senyawa keton bernama zingeron. Jahe termasuk suku Zingiberaceae.
                </Media>  
                <Media image="5.jpg" title="Sereh">  
                Serai atau sereh adalah tumbuhan anggota suku rumput-rumputan yang dimanfaatkan sebagai 
                bumbu dapur untuk mengharumkan makanan. Minyak serai adalah minyak atsiri yang diperoleh 
                dengan jalan menyuling bagian atas tumbuhan tersebut.
                </Media>
                <Media image="6.jpg" title="Lidah Buaya">  
                Lidah buaya adalah spesies tumbuhan dengan daun berdaging tebal dari genus Aloe. 
                Tumbuhan ini bersifat menahun, berasal dari Jazirah Arab, dan tanaman liarnya telah 
                menyebar ke kawasan beriklim tropis, semi-tropis, dan kering di berbagai belahan dunia. 
                </Media>  
            </div>
        )
    }
}

export default Gallery;