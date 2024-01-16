import React, { Component } from 'react'
import NavbarC from './NavbarC'
import TabelBuku from './Tabel'
import FormBook from './Formulir'
import FormP from '../crudtwo/FormulirP'
import TabelP from '../crudtwo/TabelP'
import './style.css'

export default class Crud extends Component {

  constructor(props) {
    super(props)

    this.state = {
      books : [],
      nama : "",
      author : "",
      deskripsi : "",
      harga : 0,
      id : "",
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.id === "") {
      this.setState({
        books: [
          ...this.state.books,
          {
            id: this.state.books.length + 1,
            nama: this.state.nama,
            author: this.state.author,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          },
        ],
      });
    } else {
      const bukuYangSelainDipilih = this.state.books
        .filter((book) => book.id !== this.state.id)
        .map((filterBuku) => {
          return filterBuku;
        });

      this.setState({
        books: [
          ...bukuYangSelainDipilih,
          {
            id: this.state.id,
            nama: this.state.nama,
            author: this.state.author,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          },
        ],
      });
    }

    this.setState({
      nama : "",
      author : "",
      deskripsi : "",
      harga : 0,
      id : "",
    })
  }

  editData = (id) => {
    const bukuYangDipilih = this.state.books
      .filter((book) => book.id === id)
      .map((filterBuku) => {
        return filterBuku
      })

    this.setState({
      nama : bukuYangDipilih[0].nama,
      author : bukuYangDipilih[0].author,
      deskripsi : bukuYangDipilih[0].deskripsi,
      harga : bukuYangDipilih[0].harga,
      id : bukuYangDipilih[0].id,
    });
  };
  
  hapusData = (id) => {
    const bukuBaru = this.state.books
      .filter((book) => book.id !== id)
      .map((filterBuku) => {
        return filterBuku;
      });

    this.setState({
      books: bukuBaru
    });
  };

  render() {
    // console.log(this.state.books)
    return (
      <div className='inputan container mt-4'>
        {/* <NavbarC /> */}
        <div className='formbook'>
        <FormBook {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        </div>
        <div className='container mt-4'>
        <TabelBuku books={this.state.books} editData={this.editData} hapusData={this.hapusData}/>
        {/* <TabelP /> */}
        
        </div>
      </div>
    )
  }
}
