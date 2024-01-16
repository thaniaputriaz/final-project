import { Button, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const FormP = ({
  namaPeminjam,
  namaBuku,
  tanggalKeluar,
  tanggalMasuk,
  harga,
  handleSubmit,
  handleChangee,
  id
}) => {

  return (
    <div className="m-4">
      <Row>
        <colgroup>
          <h4>{id? "Edit Data" : "tambah data"}</h4>
            <hr></hr>
        </colgroup>
      </Row>
      <Row>
        <colgroup>
          <Form onSubmit={handleSubmit} >
            <Form.Group controlId="namaPeminjam" className="mb-3">
              <Form.Control
                name="namaPeminjam"
                placeholder="Name"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={namaPeminjam}
                onChange={(event) => handleChangee(event)}
              />
            </Form.Group>

            <Form.Group controlId="namaBuku" className="mb-3">
              <Form.Control
                name="namaBuku"
                placeholder="namaBuku"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={namaBuku}
                onChange={(event) => handleChangee(event)}
              />
              {/* <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text> */}
            </Form.Group>

            {/* <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label> */}
            <Form.Group controlId="tanggalKeluar" className="mb-3">
              <Form.Control
                type="date"
                name="tanggalKeluar"
                aria-describedby="basic-addon3"
                placeholder="tanggalKeluar"
                value={tanggalKeluar}
                onChange={(event) => handleChangee(event)}
              />
            </Form.Group>

            <Form.Group controlId="tanggalMasuk" className="mb-3">
              {/* <InputGroup.Text>Rp</InputGroup.Text> */}
              <Form.Control
                name="tanggalMasuk"
                type="date"
                aria-label="Amount (to the nearest dollar)"
                placeholder="tanggalMasuk"
                onChange={(event) => handleChangee(event)}
              />
              {/* <InputGroup.Text>.00</InputGroup.Text> */}
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </colgroup>
      </Row>
    </div>
  );
};

export default FormP;
