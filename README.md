Labs Challenge
El objetivo del challenge es construir un Front-End y un Back-End que interactuen con una API externa.

Vamos a usar la API pública de Mercado Libre. De ella vamos a extraer publicaciones que luego vamos a guardar en nuestro propio back-end usando un caché. Para el Fron-end vamos a desarrollar una serie de Componentes de React para poder mostrar e interactuar con las publicaciones antes mencionadas.

Back-End
Usaremos el siguiente endpoint de Mercado Libre https://api.mercadolibre.com/sites/MLA/search?q={query}. Recibe un queryString con el parámetro q con un string que indica el keyword a buscar. La API retorna un JSON con la siguiente forma:

{
  "site_id": "MLA",
  "query": "iphone",
  "paging": {},
  "results": [{
  	"id": "MLA851931164",
    "site_id": "MLA",
    "title": "iPhone 11 128 Gb Morado 4 Gb Ram",
    "seller": {},
    "price": 182240,
    ...
  }],
  "secondary_results": [
    ...
  ],
  "related_results": [
  	...
  ],
  "sort": {
    "id": "relevance",
    "name": "More relevant"
  },
  "available_sorts": [],
  "filters": [],
  "available_filters": []
}
Podemos ver la documentación completa del endpoint en este link.

Nuestro Back-End va a tener la ruta:

/api/search
/api/search
Esta ruta recibe un queryString con un término de búsqueda. Por ejemplo: /api/search?query=zapatillas. Y debe retornar un arreglo de items de Mercado Libre con la forma:

[
  {
      "id": "MLA785937833",
      "title": "Zapatillas Marca Rcn Ultraliviana Negra",
      "price": 1769,
      "currency_id": "ARS",
      "available_quantity": 200,
      "thumbnail": "http://http2.mlstatic.com/D_728833-MLA32445355209_102019-I.jpg",
      "condition": "new"
  },
  {
      "id": "MLA716347136",
      "title": "Zapatillas Ozono Skate Directo De Fábrica",
      "price": 1769,
      "currency_id": "ARS",
      "available_quantity": 200,
      "thumbnail": "http://http2.mlstatic.com/D_728833-MLA32445355209_102019-I.jpg",
      "condition": "new"
  }
]
Extra-Credit: En cada request de búsqueda, se deberá crear un caché, de tal manera que a la siguiente búsqueda no se use la API de Mercado Libre, si no que los datos se recuperen del caché. Tip: Usar un objeto (cada propiedad es al término de búsqueda y el valor de esa propiedad el arreglo de resultados.)

Front-End
Deberás crear una App en React con los siguientes componentes:

SearchBar
Un formulario controlado con un input de búsqueda, que dispare los requests a la API (a nuestro BACK-END, no a Mercado Libre).

Product Card
En este componente se muestra un producto en particular, debemos mostrar:

su imagen.
su titulo.
su precio (con la moneda).
su condicion.
si tiene stock o no.
Catalogo
Este componente va mostrar un arreglo de productos (obtenidos de la API) usando Product Card. Tambien debe posibilitar:

Poder ordenar los productos en base a su precio, de forma ascendete o descendente.
Poder filtrar por condicion.
Poder páginar los resultados de a 30 productos por página.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
