import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-regular-svg-icons';

const Tabel = ({books, editData, hapusData}) => {
  return (
    <Table striped>
      <thead>
        <tr >
          <th>#</th>
          <th>Nama</th>
          <th>Author</th>
          <th>Deskripsi</th>
          <th>Harga</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => {
            return (
                <tr>
                <td>{index+1}</td>
                <td>{book.nama}</td>
                <td>{book.author}</td>
                <td>{book.deskripsi}</td>
                <td>Rp. {book.harga}</td>
                <td>
                    <button className='btn btn-warning' onClick={() => editData(book.id)} >
                    <FontAwesomeIcon icon={faPenToSquare} /> Edit
                      </button>
                    <button className="btn btn-danger" onClick={() => hapusData(book.id) }>
                    Hapus
                      </button>
                </td>
              </tr>
            )
        })}
      </tbody>
    </Table>
  );
}

export default Tabel;