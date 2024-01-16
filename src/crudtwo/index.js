import React, { Component } from "react";
import TabelP from "./TabelP";
import FormP from "./FormulirP";
import NavbarP from "./NavbarP";

export default class Crudtwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pinjamans: [],
      namaPeminjam: "",
      namaBuku: "",
      tanggalKeluar: "",
      tanggalMasuk: "",
      id: "",
    };
  }

  handleChangee = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.id === "") {
      this.setState({
        pinjamans: [
          ...this.state.pinjamans,
          {
            id: this.state.pinjamans.length + 1,
            namaPeminjam: this.state.namaPeminjam,
            namaBuku: this.state.namaBuku,
            tanggalKeluar: this.state.tanggalKeluar,
            tanggalMasuk: this.state.tanggalMasuk,
          },
        ],
      });
    } else {
      const peminjamTidakDipilih = this.state.pinjamans
        .filter((book) => book.id !== this.state.id)
        .map((filterBuku) => {
          return filterBuku;
        });

      this.setState({
        pinjamans: [
          ...peminjamTidakDipilih,
          {
            id: this.state.id,
            namaPeminjam: this.state.namaPeminjam,
            namaBuku: this.state.namaBuku,
            tanggalKeluar: this.state.tanggalKeluar,
            tanggalMasuk: this.state.tanggalMasuk,
          },
        ],
      });
    }

    this.setState({
      namaPeminjam: "",
      namaBuku: "",
      tanggalKeluar: "",
      tanggalMasuk: "",
      id: "",
    });
  };

  editData = (id) => {
    const peminjamYangDipilih = this.state.pinjamans
      .filter((book) => book.id === id)
      .map((filterBuku) => {
        return filterBuku;
      });

    this.setState({
      namaPeminjam: peminjamYangDipilih[0].namaPeminjam,
      namaBuku: peminjamYangDipilih[0].namaBuku,
      tanggalKeluar: peminjamYangDipilih[0].tanggalKeluar,
      tanggalMasuk: peminjamYangDipilih[0].tanggalMasuk,
      id: peminjamYangDipilih[0].id,
    });
  };

  hapusData = (id) => {
    const bukuBaru = this.state.pinjamans
      .filter((book) => book.id !== id)
      .map((filterBuku) => {
        return filterBuku;
      });

    this.setState({
      pinjamans: bukuBaru,
    });
  };

  render() {
    // console.log(this.state.pinjamans)
    return (
      <div className="container mt-4">
        <h2>DATA PINJAMAN (Belum distyling hehe)</h2>
        <div className="container mt-4">
            {/* <NavbarP /> */}
          <TabelP pinjamans={this.state.pinjamans} editData={this.editData} hapusData={this.hapusData}/>
          <FormP {...this.state} handleChangee={this.handleChangee} handleSubmit={this.handleSubmit}/>
          <div></div>
        </div>
      </div>
    );
  }
}
