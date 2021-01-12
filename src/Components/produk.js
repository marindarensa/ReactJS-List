import React, { Component } from "react";
import $ from "jquery";
class Produk extends Component {
	constructor() {
		super();
		this.state = {
			produk: [
				{ nama: "Jahe", harga: "2000", jb: "5", total: "" },
				{ nama: "Lengkuas", harga: "500", jb: "4", total: "" },
				{ nama: "Sereh", harga: "500", jb: "3", total: "" },
				{ nama: "Kunyit", harga: "1000,", jb: "", total: "" },
				{ nama: "Sirih", harga: "1500", jb: "", total: "" },
				{ nama: "Daun Salam", harga: "500", jb: "", total: "" },
				{ nama: "Lengkuas", harga: "1500", jb: "", total: "" },
				{ nama: "Kayu Manis", harga: "2500", jb: "", total: "" },
			],
			harga: "",
			nama: "",
			jb: "",
			total:"",
			action: ""
		}
	}
	render() {
		return (
			<div className="container">
				<br />
				<br />
				<h3 className="text-center">Produk Adiwiyata</h3>
				<br />
				<br />
				{ /* generate list */}
				<ul className="list-group">
					{this.state.produk.map((item, index) => {
						return (
							<li className="list-group-item" key={index}>
								<h5 className="text-info">{item.nama}</h5>
								<h6>Harga: {item.harga}</h6>
								<h6>Jumlah Barang: {item.jb}</h6>
								<h6>Total: {item.total}</h6>

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

				{ /* elemen form modal */}
				<div className="modal fade" id="modal">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header bg-success text-white">
								<h5>Form Produk</h5>
							</div>
							<form onSubmit={this.SaveProduk}>
								<div className="modal-body">
									Harga
        	                <input type="text" name="harga" className="form-control" onChange={this.bind}
										value={this.state.harga} />
        	                Nama
        	                <input type="text" name="nama" className="form-control" onChange={this.bind}
										value={this.state.nama} />
        	                Jumlah Barang
        	                <input type="text" name="jb" className="form-control" onChange={this.bind}
										value={this.state.jb} />
							Total
        	                <input type="text" name="total" className="form-control" onChange={this.bind}
										value={this.state.total} />
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
		this.setState({ [event.target.name]: event.target.value });
		/* fungsi ini digunakan untuk memasukkan data dari elemen input 
		ke variable state. 
		contoh ketika input nis diisi, maka secara otomatis variabel harga 
		pada state bernilai sesuai dengan inputan 
		*/
	}

	SaveProduk = (event) => {
		event.preventDefault();
		// temp digunakan untuk menyimpan sementara  
		// data array produk  
		let temp = this.state.produk;

		if (this.state.action === "insert") {
			// temp akan ditambahkan dengan data produk yang baru  
			// sesuai dengan data yang dimasukkan pada form  
			temp.push({
				harga: this.state.harga,
				nama: this.state.nama,
				jb: this.state.jb,
				total: this.state.total
			});
		} else if (this.state.action === "update") {
			// mencari index data yang akan diubah  
			let index = temp.findIndex(item => item.harga === this.state.harga);
			// mengubah data array sesuai dengan masukan pada form  
			temp[index].nama = this.state.nama;
			temp[index].jb = this.state.jb;
			temp[index].total = this.state.total;
		}


		// array produk diupdate dengan nilai data temp  
		this.setState({ produk: temp });

		// menutup modal  
		$("#modal").modal('hide');
	}

	Add = () => {
		// mengosongkan nilai harga, nama, dan jumlah barang  
		// pada saat tombol add ditekan  
		this.setState({
			harga: "",
			nama: "",
			jb: "",
			total: "",
			action: "insert"
		});
	}

	Edit = (item) => {
		this.setState({
			harga: item.harga,
			nama: item.nama,
			total: item.total,
			action: "update"
		});
	}

	Drop = (index) => {
		// temp digunakan untuk menyimpan sementara  
		// data array produk  
		let temp = this.state.produk;

		// menghapus data pada index yang dihapus  
		temp.splice(index, 1);

		// array produk diupdate dengan nilai data temp  
		this.setState({ produk: temp });
	}
	
}
export default Produk;  