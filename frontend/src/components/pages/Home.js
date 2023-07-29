import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

// styles
import "./Home.css";

// components
import MyVerticallyCenteredModal from "../Modal";

export default function Home() {
  const notify = () => toast("Wow so easy !");

  return (
    <div id="venta" className="top-most-div px-5 py-5">
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          quaerat, repellat placeat reiciendis ea illo. Velit, molestias
          molestiae? Sed vitae minus unde fugit magni porro ducimus ratione
          impedit assumenda ipsum Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Cumque excepturi repellat ab. Reiciendis fuga
          expedita facilis, quidem beatae esse praesentium commodi aspernatur,
          sunt alias nihil nam officia accusamus dolores. Repellat! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Consequatur repellendus
          nulla autem ullam corrupti, quasi voluptates fuga repellat deserunt
          quia quisquam impedit adipisci iste magnam ad rem cumque, quae aut.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, rem
          sunt voluptas iste hic quaerat adipisci error nisi excepturi rerum
          sint accusantium odit voluptates inventore quo maiores esse totam aut.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
          temporibus voluptatum commodi recusandae! Illo modi numquam
          doloremque, corporis possimus fugit deserunt beatae magni ab
          voluptatibus nemo, in quo eius! Tempora!
        </p>
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-center mt-5">
        <Link className="btn btn-primary" type="button" to="/addsite">
          Add more site
        </Link>
        <MyVerticallyCenteredModal notify={notify} />
      </div>
    </div>
  );
}
