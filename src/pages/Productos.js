import React,{useState} from 'react'
import ItemDetailContainer from "../components/ItemDetailContainer";
import image0 from "../assets/Roma.jpg";
import image1 from "../assets/Barcelona.jpg";
import image2 from "../assets/kioto_japon.jpeg";
import image3 from "../assets/chiangmai.jpg";
import { Container } from 'react-bootstrap';


function Productos() {
    const [viajes, setViajes] = useState([
        {
          id: "V-01",
          name: "Roma, Italia",
          image: image0,
          stock: 8,
          description:
            "Lorem ipsum dolor sit, amet consectetur adipiscing, elit id.",
          precio: 3500,
        },
        {
          id: "V-02",
          name: "Barcelona, España",
          image: image1,
          stock: 3,
          description:
            "Lorem ipsum dolor sit, amet consectetur adipiscing, elit id.",
          precio: 3200,
        },
        {
          id: "V-03",
          name: "Kioto, Japon",
          image: image2,
          stock: 9,
          description:
            "Lorem ipsum dolor sit, amet consectetur adipiscing, elit id.",
          precio: 4100,
        },
        {
          id: "V-04",
          name: "Chiang Mai, Tailandia",
          image: image3,
          stock: 5,
          description:
            "Lorem ipsum dolor sit, amet consectetur adipiscing, elit id.",
          precio: 5000,
        },
      ]);
    return (
        <Container fluid>
             <h1
        style={{ color: "white", textAlign: "center", fontFamily: "cursive" }}
      >
        Products
      </h1>
        <ItemDetailContainer viajes={viajes}/>
        </Container>
    )
}

export default Productos
