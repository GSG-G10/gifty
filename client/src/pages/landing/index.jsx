import { useEffect, useState } from "react";
import axios from "axios";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import Filter from "../../components/Filter";

function Landing() {
  const [products, setProducts] = useState([]);
  const [filterdProducts, setFilterProducts] = useState(products);
  const [error, setError] = useState(false);

  const Alert = (props) => (
    <MuiAlert elevation={6} variant="filled" {...props} />
  );

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setError(false);
  };

  useEffect(() => {
    axios
      .get("/products")
      .then((response) => response.data)
      .then((data) => {
        setProducts(data);
        setFilterProducts(data);
      })
      .catch(() => setError(true));
  }, []);

  return (
    <>
      <Filter products={products} setFilterProducts={setFilterProducts} />

      <Snackbar open={error} autoHideDuration={10000} onClose={handleClose}>
        <Alert severity="error">An Error Occurred!</Alert>
      </Snackbar>
    </>
  );
}

export default Landing;
