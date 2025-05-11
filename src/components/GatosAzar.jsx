// import React, { useState, useEffect } from 'react'

// const GatosAzar = () => {
//   const [GatosAzar, setGatosAzar] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);


// let PalabraAzar ="gato";
// useEffect(() => {
//   const fetchGatosAzar = async () => {
//       try {
//           const response = await fetch(`https://cataas.com/cat/says/hola`);
//           if (!response.ok) {
//               throw new Error('Error fetching data from API');
//           }
//           const data = await response.json();
// }
// catch (error) {
//           setError(error.message);
//       }
//       finally {
//           setLoading(false);
//       }
// }
//   }

// )


//   return (
//    <>
//    response
//    {loading && <p>Loading...</p>}
//    </>
//   )
// }
// export default  GatosAzar
import React, { useState } from 'react';

const GatosAzar = () => {
  const [palabra, setPalabra] = useState('');
  const [gatoUrl, setGatoUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchGatoAzar = async (texto) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://cataas.com/cat/says/${encodeURIComponent(texto)}`);
      if (!response.ok) {
        throw new Error('Error al obtener la imagen');
      }
      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setGatoUrl(imageUrl);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (palabra.trim() !== '') {
      fetchGatoAzar(palabra);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Generador de Gatos</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={palabra}
          onChange={(e) => setPalabra(e.target.value)}
          placeholder="Escribí una palabra o frase"
        />
        <button type="submit">Ver Gato</button>
      </form>

      {loading && <p>Cargando...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {gatoUrl && <img src={gatoUrl} alt="Gato al azar" style={{ marginTop: '20px', maxWidth: '100%' }} />}
    </div>
  );
};

export default GatosAzar;
