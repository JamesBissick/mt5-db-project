import { Badge, Table } from 'react-bootstrap';


export default function MoviesTable({ data }) {
  return (
    <Table hover='true' style={ { margin: '50px 0' } }>
      <thead>
      <tr style={ { backgroundColor: '#363c43', color: 'white' } }>
        <th>Title</th>
        <th>Genre</th>
        <th>Rating</th>
        <th>Rental count</th>
        <th>Price</th>
      </tr>
      </thead>
      <tbody>
      { data.map(movie => (
        <tr key={ movie.id }>
          <td>{ movie.title }</td>
          <td>{ movie.genre }</td>
          <td>
            <Badge pill='pill' bg="success">{ movie.rating }</Badge>
          </td>
          <td>
            { movie.rental_count > 0 ? movie.rental_count : '--' }
          </td>
          <td>{ `${ movie.rental_price }€` }</td>
        </tr>
      )) }
      </tbody>
    </Table>
  );
}
