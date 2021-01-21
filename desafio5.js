var usuario = prompt ("Ingrese nombre de Usuario: ")

alert("Hola " + usuario + "!." + " " + " Bienvenido/a a la Base de Datos de la Institución San Nicolás" )
class datosAlumnos{
    constructor(nombreAlumno,dniAlumno,gradoAlumno,promedioAlumno){
        this.alumno = nombreAlumno;
        this.dni = dniAlumno;
        this.grado = gradoAlumno;
        this.promedio = promedioAlumno;
    }
    mostrarDatosEnPantalla() {
        document.getElementById("baseDeDato").innerHTML = `
        <div>
        <img src="man.png" alt="">
        <p>NOMBRE: ${this.alumno}<p>
        <p>DNI: ${this.dni}</p>
        <p>AÑO DE CURSO: ${this.grado}<p>
        <p>PROMEDIO TRIMESTRAL: ${this.promedio}</p>
        </div>
        `;
    }
    mostrarDatosEnPantallaDos() {
        document.getElementById("baseDeDatoDos").innerHTML = `
        <div>
        <img src="woman.png" alt="">
        <p>NOMBRE: ${this.alumno}<p>
        <p>DNI: ${this.dni}</p>
        <p>AÑO DE CURSO: ${this.grado}<p>
        <p>PROMEDIO TRIMESTRAL: ${this.promedio}</p>
        </div>
        `;
    }
}

function mostrarDatos() {
  let alumnoUno = new datosAlumnos("Santiago Fernadnez", 53268553, "3er Grado", 10);
  alumnoUno.mostrarDatosEnPantalla();
}

function mostrarDatosDos() {
    let alumnoDos = new datosAlumnos("Emilia Fernandez", 55256963, "Salita de 4(Jardin)", 10);
    alumnoDos.mostrarDatosEnPantallaDos();
  }

