import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../Hooks/useFetch';
import { PHOTO__GET } from '../../api';
import Error from '../Help/Error';
import Loading from '../Help/Loading';
import PhotoContent from './PhotoContent';
import Head from '../Help/Head';

const Photo = () => {
  const {id} = useParams();
  const {data, error, loading, request} = useFetch(); 
  React.useEffect( () => {
    const {url, options} = PHOTO__GET(id);
    request(url, options);
  }, [request, id]);
  if(error) return <Error error={error} />
  if(loading) return <Loading />
  if(data) return <section className='container mainContainer'>
    <Head title={data.photo.title} />
    <PhotoContent single={true} data={data} />
  </section>
  else return null
}

export default Photo
