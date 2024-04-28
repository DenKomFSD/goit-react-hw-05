import { Link } from "react-router-dom";
import notFound from "../../assets/pics/NotFoundPic/ORFI0N0.jpg";

export default function NotFoundPage() {
  return (
    <>
      <h2>Oops, there is no such page...</h2>
      <p>
        go back <Link to="/">Home page</Link>
      </p>
      <img src={notFound} alt="" width={500} />
    </>
  );
}
