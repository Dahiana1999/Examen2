import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'



const router = createBrowserRouter([
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/lunes",
    element: <div
    style={{color:"white", fontSize:"50px", textAlign:"center", fontWeight:"bold",textDecoration:"underline"}}> Tarea del Lunes
    <img src="./src/assets/lunes.jpg" alt="imagen" width="500" height="500" style={{borderRadius:"10px", display:'flex'}}/>
    <p>Ten un lindo día <i class="fa-solid fa-heart"></i></p>
    <button onClick={() => window.location.href = "http://localhost:5173/home"}>Volver</button>
    </div>
    
  },

  {
    path: "/martes",
    element: <div
    style={{color:"white", fontSize:"50px", textAlign:"center", fontWeight:"bold", textDecoration:"underline"}}>Tarea del Martes
    <img src="./src/assets/martes.avif" alt="imagen" width="500" height="500" style={{borderRadius:"10px", display:'flex'}}/>
    <p>Ten un lindo día <i class="fa-solid fa-heart"></i></p>
    <button onClick={() => window.location.href = "http://localhost:5173/home"}>Volver</button>
    </div>
  },

  {path: "/miercoles",
    element: <div
    style={{color:"white", fontSize:"50px", textAlign:"center", fontWeight:"bold",textDecoration:"underline"}}>Tarea del Miércoles
    <img src="./src/assets/miercoles.jpg" alt="imagen" width="500" height="500" style={{borderRadius:"10px", display:'flex'}}/>
    <p>Ten un lindo día <i class="fa-solid fa-heart"></i></p>
    <button onClick={() => window.location.href = "http://localhost:5173/home"}>Volver</button>
    </div>
  },
  {path: "/jueves",
    element: <div
    style={{color:"white", fontSize:"50px", textAlign:"center", fontWeight:"bold",textDecoration:"underline"}}>Tarea del Jueves
    <img src="./src/assets/jueves.avif" alt="imagen" width="500" height="500" style={{borderRadius:"10px", display:'flex'}}/>
    <p>Ten un lindo día <i class="fa-solid fa-heart"></i></p>
    <button onClick={() => window.location.href = "http://localhost:5173/home"}>Volver</button>
    </div>
  },
  {path: "/viernes",
    element: <div
    style={{color:"white", fontSize:"50px", textAlign:"center", fontWeight:"bold",textDecoration:"underline"}}>Tarea del Viernes
    <img src="./src/assets/viernes.avif" alt="imagen" width="500" height="500" style={{borderRadius:"10px", display:'flex'}}/>
    <p>Ten un lindo día <i class="fa-solid fa-heart"></i></p>
    <button onClick={() => window.location.href = "http://localhost:5173/home"}>Volver</button>
    </div>
  },
  {path: "/sabado",
    element: <div
    style={{color:"white", fontSize:"50px", textAlign:"center", fontWeight:"bold",textDecoration:"underline"}}>Tarea del Sábado
    <img src="./src/assets/sabado.avif" alt="imagen" width="500" height="500" style={{borderRadius:"10px", display:'flex'}}/>
    <p>Ten un lindo día <i class="fa-solid fa-heart"></i></p>
    <button onClick={() => window.location.href = "http://localhost:5173/home"}>Volver</button>
    </div>
  },
  {path: "/domingo",
    element: <div className='Domingo'
    style={{color:"white", fontSize:"50px", textAlign:"center", fontWeight:"bold",textDecoration:"underline"}}>Tarea del Domingo
    <img src="./src/assets/domingo.avif" alt="imagen" width="500" height="500" style={{borderRadius:"10px", display:'flex'}}/>
    <p>Ten un lindo día <i class="fa-solid fa-heart"></i></p>
    <button onClick={() => window.location.href = "http://localhost:5173/home"}>Volver</button>
    </div>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)
 

//no olvidar la App