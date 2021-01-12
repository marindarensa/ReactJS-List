import React, {Component} from "react";
import $ from "jquery";
class haribesar extends Component{
    constructor(){
        super();
        this.state = {
            hb : [
                {tgl:"10 Januari", nama:"Hari Gerakan Sejuta Pohon",agenda:"Menanam pohon besama"},
                {tgl:"21 Februari", nama:"Hari Peduli Sampah Nasional",agenda:"Melaksanakan Bank Sampah"},
                {tgl:"21 Maret", nama:"Hari Kehutanan Sedunia",agenda:""},
                {tgl:"22 Maret", nama:"Hari Air Sedunia",agenda:""},
                {tgl:"30 Maret", nama:"Earth Hour",agenda:""},
                {tgl:"22 April", nama:"Hari Bumi",agenda:""},
                {tgl:"5 Juni", nama:"Hari Lingkungan Hidup Sedunia",agenda:""}, 
            ],
            tgl:"",
            nama:"",
            agenda:"",
            action:""
        }
    }
    	render(){  
        	    return (  
        	      <div className="container"> 
				   <br/>
                  <br/>
                   <h3 className="text-center">Hari Besar</h3> 
                  <br/>
                  <br/> 
        	        { /* generate list */ }  
        	        <ul className="list-group">  
        	          {this.state.hb.map((item,index) => {  
        	            return (  
        	              <li className="list-group-item" key={index}>  
        	                <h5 className="text-info">{item.nama}</h5>  
        	                <h6>Tanggal: {item.tgl}</h6>  
        	                <h6>Agenda: {item.agenda}</h6>  
        	  
        	                <button className="btn btn-sm btn-primary m-1" onClick={() => this.Edit(item)}  
        	                data-toggle="modal" data-target="#modal">  
        	                  Edit  
        	                </button>  
        	                <button className="btn btn-sm btn-danger m-1" onClick={() => this.Drop(index)}>  
        	                  Hapus  
        	                </button>  
        	              </li>  
        	            );  
        	          })}  
        	        </ul>  
       	            <button className="btn btn-sm btn-success m-3" onClick={this.Add}  
        	        data-toggle="modal" data-target="#modal">  
        	          Tambah Data  
        	        </button>  
        	  
        	        { /* elemen form modal */ }  
        	        <div className="modal fade" id="modal">  
        	          <div className="modal-dialog">  
        	            <div className="modal-content">  
        	              <div className="modal-header bg-success text-white">  
        	                <h5>Form Hari Besar</h5>  
        	              </div>  
        	              <form onSubmit={this.SaveHb}>  
        	              <div className="modal-body">  
        	                Tanggal 
        	                <input type="text" name="tgl" className="form-control" onChange={this.bind}  
        	                value={this.state.tgl} />  
        	                Nama  
        	                <input type="text" name="nama" className="form-control" onChange={this.bind}  
        	                value={this.state.nama} />  
        	                Agenda  
        	                <input type="text" name="agenda" className="form-control" onChange={this.bind}  
                            value={this.state.agenda} />  
        	              </div>  
        	              <div className="modal-footer">  
                            <button type="submit" className="btn btn-primary">  
        	                  Simpan  
        	                </button>  
        	              </div>  
        	              </form>  
        	            </div>  
        	          </div>  
        	        </div>  
        	      </div>  
        	    );  
		 } 
		 	bind = (event) => {  
				  this.setState({[event.target.name]: event.target.value});  
				  /* fungsi ini digunakan untuk memasukkan data dari elemen input 
				  ke variable state. 
				  contoh ketika input nis diisi, maka secara otomatis variabel nis 
				  pada state bernilai sesuai dengan inputan 
				  */  
				}  
				  
				SaveHb = (event) =>{  
				  event.preventDefault();  
				  // temp digunakan untuk menyimpan sementara  
				  // data array haribesar 
				  let temp = this.state.hb;  
				  
				  if (this.state.action === "insert") {  
				    // temp akan ditambahkan dengan data haribesar yang baru  
				    // sesuai dengan data yang dimasukkan pada form  
				    temp.push({  
					  tgl: this.state.tgl,  
				      nama: this.state.nama,  
				      agenda: this.state.agenda  
				    });  
				  } else if (this.state.action === "update") {  
				    // mencari index data yang akan diubah  
				    let index = temp.findIndex(item => item.tgl === this.state.tgl);  
				    // mengubah data array sesuai dengan masukan pada form  
				    temp[index].nama = this.state.nama;  
				    temp[index].agenda = this.state.agenda;  
				  }  
				  
				  
				  // array haribesar diupdate dengan nilai data temp  
				  this.setState({hb: temp});  
				  
				  // menutup modal  
				  $("#modal").modal('hide');  
				}  
				  
				Add = () => {  
				  // mengosongkan nilai tgl, nama, dan agenda  
				  // pada saat tombol add ditekan  
				  this.setState({  
				    tgl: "",  
				    nama: "",  
				    agenda: "",  
				    action: "insert"  
				  });  
				}  
				  
 				Edit = (item) => {  
			   	  this.setState({  
				    tgl: item.tgl,  
				    nama: item.nama,  
				    action: "update"  
				  });  
				}  
				  
				Drop = (index) => {  
				  // temp digunakan untuk menyimpan sementara  
				  // data array haribesar  
				  let temp = this.state.hb;  
				  
				  // menghapus data pada index yang dihapus  
				  temp.splice(index,1);  
				  
				  // array siswa diupdate dengan nilai data temp  
				  this.setState({hb: temp});  
				}  
} 
export default haribesar;  