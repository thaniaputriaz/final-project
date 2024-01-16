import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-regular-svg-icons';

const TabelP = ({pinjamans =[], editData, hapusData}) => {
  return (
    <Table striped>
      <thead>
        <tr >
          <th>#</th>
          <th>Nama Peminjam</th>
          <th>Nama Buku</th>
          <th>Tanggal Keluar</th>
          <th>Tanggal Masuk</th>
        </tr>
      </thead>
      <tbody>
        {pinjamans.map((pinjaman, index) => {
            return (
                <tr>
                <td>{index+1}</td>
                <td>{pinjaman.namaPeminjam}</td>
                <td>{pinjaman.namaBuku}</td>
                <td>{pinjaman.tanggalKeluar}</td>
                <td>{pinjaman.tanggalMasuk}</td>
                <td>
                    <button className='btn btn-warning' onClick={() => editData(pinjaman.id)} >
                    <FontAwesomeIcon icon={faPenToSquare} /> Edit
                      </button>
                    <button className="btn btn-danger" onClick={() => hapusData(pinjaman.id) }>
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

export default TabelP;