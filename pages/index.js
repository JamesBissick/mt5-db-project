import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Container } from 'react-bootstrap';
import { CustomPagination, MoviesTable } from '../components';
import axios from 'axios';


export async function getStaticProps() {
  try {
    const { data } = await axios.get(`${ process.env.APP_DOMAIN }/api/movies/0`);
    return { props: { ...data } };
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      length: 0,
      movies: []
    },
  };
}


export default function Home({ movies, length }) {
  const [ data, setData ] = useState(movies);
  const [ page, setPage ] = useState(0);
  const [ pageItemNumber, setPageItemNumber ] = useState(10);

  useEffect(() => {
    window.localStorage.setItem('PAGE_ITEM_NUMBER', JSON.stringify(pageItemNumber));
  }, [pageItemNumber]);

  const handlePageChange = async (page) => {
    setPage(page);
    const { data } = await axios.get(`/api/movies/${ page }`);
    setData(data.movies);
  };


  return (
    <div>
      <Head>
        <title>Movie list </title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Container style={ { marginTop: '50px' } }>
        <h1>Movie list 🍿</h1>
        <MoviesTable data={ data } />
        <CustomPagination
          page={ page }
          length={ length }
          pageItemNumber={ pageItemNumber }
          handlePageChange={ handlePageChange }
        />
        <div style={
          {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: '5px',
            marginTop: '-113px'
          }
        }>
          <span>Items per page: </span>
          <select className='selectItemNumber' value={ pageItemNumber } style={
            {
              height: '38px',
              padding: '.375rem 0.75rem',
              border: '1px solid #dee2e6',
              borderRadius: '5px',
              color: '#0d6efd'
            }
          } onChange={ (event) => {
            const selectedNum = event.target.value;
            setPageItemNumber(selectedNum);
          } }
          >
            <option value='10'>10</option>
            <option value='20'>20</option>
            <option value='50'>50</option>
            <option value='75'>75</option>
            <option value='100'>100</option>
          </select>
        </div>
      </Container>
      <footer style={
        {
          position: 'fixed',
          bottom: '0',
          width: '100%',
          height: '80px',
          color: '#363c43',
          textAlign: 'end',
          padding: '25px'
        }
      }>
        Hosted with Surge <img src="/surge-icon.svg" alt="Surge" style={
        {
          height: '35px',
          marginLeft: '5px'
        }
      } />
      </footer>
    </div>
  );
}