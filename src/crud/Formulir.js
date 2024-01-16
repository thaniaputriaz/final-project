import { Button, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const FormBook = ({
  nama,
  author,
  deskripsi,
  harga,
  handleSubmit,
  handleChange,
  id
}) => {

  return (
    <div className="mt-3">
      <Row>
        <colgroup>
          <h4>{id? "Edit Data" : "tambah data (belum selesai styling)"}</h4>
            <hr></hr>
        </colgroup>
      </Row>
      <Row>
        <colgroup>
          <Form onSubmit={handleSubmit}>
          <Form.Label htmlFor="basic-url" className="label">Name</Form.Label>
            <Form.Group controlId="nama" className="mb-3">
              <Form.Control
                name="nama"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={nama}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>

            <Form.Label htmlFor="basic-url" className="label">Author</Form.Label>
            <Form.Group controlId="author" className="mb-3">
              <Form.Control
                name="author"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={author}
                onChange={(event) => handleChange(event)}
              />
              {/* <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text> */}
            </Form.Group>

            <Form.Label htmlFor="basic-url" className="label">Deskripsi</Form.Label>
            <Form.Group controlId="deskripsi" className="mb-3">
              <Form.Control
                as="textarea"
                name="deskripsi"
                aria-describedby="basic-addon3"
                value={deskripsi}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>

            <Form.Label htmlFor="basic-url" className="label">Harga</Form.Label>
            <Form.Group controlId="harga" className="mb-3">
              {/* <InputGroup.Text>Rp</InputGroup.Text> */}
              <Form.Control
                type="number"
                aria-label="Amount (to the nearest dollar)"
                placeholder="harga"
                onChange={(event) => handleChange(event)}
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

export default FormBook;
