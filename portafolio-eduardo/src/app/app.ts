import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  

  // Usamos un arreglo de objetos para tus proyectos
  //Utilizamos el array misProyectos para crear objetos lietrales donde definimos las propiedades de este dentro del objeto, ahora si queremos añadir un nuevo proyecto no tenemos que tocar nada de la interfaz grafica solo debemos añadir aqui un nuevo objeto con sus respectivas propiedades y se visualizara en nuestra interfaz grafica ya que estamos recorriendo en la interfaz este array mediante un bucle
  misProyectos = [
    {
      titulo: 'Sistema de Inventario "Mi Tienda"',
      descripcion: 'Full Stack App con Laravel 12 y Angular 21. Incluye autenticación JWT, CRUD de productos y gestión de perfiles.',
      tecnologias: ['Angular 21', 'Laravel 12', 'JWT', 'MySQL'],
      enlace: 'https://mi-tienda-2026.vercel.app',
      github: 'https://github.com/Eduardo-07max/mi-tienda-2026',
      esResponsive: false
    },
    {
      titulo: 'Task Manager Pro',
      descripcion: 'Gestor de tareas dinámico con niveles de prioridad. Implementación de lógica relacional y actualizaciones con AJAX y jQuery.',
      tecnologias: ['Laravel 12', 'jQuery', 'AJAX', 'PHP'],
      enlace: 'https://web-production-1eda3.up.railway.app/',
      github: 'https://github.com/Eduardo-07max/sistema-gestion-tareas',
      esResponsive: false
    }
  ];
}
