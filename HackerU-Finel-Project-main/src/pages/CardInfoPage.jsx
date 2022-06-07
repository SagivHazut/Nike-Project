import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CardInfoPage = () => {
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/cards/card/${id}`)
      .then((res) => {})

      .catch((err) => {});
  }, [id]);
  return <h1>CardInfoPage</h1>;
};

export default CardInfoPage;
