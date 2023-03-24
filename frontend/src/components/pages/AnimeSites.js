import { useFetch } from "../hooks/useFetch";

// styles
import "./AnimeSites.css";

export default function AnimeSites() {
  const {
    data: datas,
    isPending,
    error,
  } = useFetch("http://localhost:3012/datas");

  console.log(datas);
  console.log(isPending);
  console.log(error);

  return (
    <div className="top-most-div px-5 py-3">
      <h2>Sites where I regularly visit</h2>

      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Site Name</th>
            <th scope="col">Link</th>
          </tr>
        </thead>
        <tbody>
          {isPending && (
            <tr>
              <td>Loading...</td>
              <td></td>
              <td></td>
            </tr>
          )}

          {error && (
            <tr>
              <td>{error}</td>
              <td></td>
              <td></td>
            </tr>
          )}

          {datas &&
            datas.map((data) => (
              <tr key={data.id}>
                <th scope="row">{data.id}</th>
                <td>{data.name}</td>
                <td>
                  <a href={data.url} target="_blank" rel="noreferrer">
                    {data.url}
                  </a>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
