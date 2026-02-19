const todo = {
    tareas: [],

    // Método para agregar tareas con nombre, descripción y fecha
    agregar: function() {
        const nombre = document.getElementById("nombreTarea").value.trim();
        const descripcion = document.getElementById("descripcionTarea").value.trim();
        const fecha = document.getElementById("fechaTarea").value;
        
        // Función con parámetros sin valor de retorno (página 4)
        if(nombre !== "" && descripcion !== "" && fecha !== "") {
            this.tareas.push({
                id: Date.now(),
                nombre: nombre,
                descripcion: descripcion,
                fecha: fecha,
                completada: false
            });
            
            // Limpiar formulario
            document.getElementById("nombreTarea").value = "";
            document.getElementById("descripcionTarea").value = "";
            document.getElementById("fechaTarea").value = "";
            
            this.mostrar();
        }
    },

    // Método para eliminar una tarea
    eliminar: function(id) {
        this.tareas = this.tareas.filter(tarea => tarea.id !== id);
        this.mostrar();
    },

    // Método para eliminar todas las tareas
    eliminarTodas: function() {
        this.tareas = [];
        this.mostrar();
    },

    // Método para completar una tarea
    completar: function(id) {
        const tarea = this.tareas.find(t => t.id === id);
        if(tarea) {
            tarea.completada = true;
            this.mostrar();
        }
    },

    // Método para mostrar tareas
    mostrar: function() {
        const lista = document.getElementById("listaTareas");
        lista.innerHTML = "";
        
        function crearId() {
            return 'tarea-' + Date.now() + Math.random();
        }

        // Recorrer tareas con forEach (como vimos en clase)
        this.tareas.forEach(tarea => {
            const li = document.createElement("li");
            li.id = crearId();
            
            // Aplicar clase si está completada
            if(tarea.completada) {
                li.className = "completada";
            }
            
            // Contenedor para la información de la tarea
            const divInfo = document.createElement("div");
            divInfo.className = "info-tarea";
            
            // Mostrar nombre, descripción y fecha
            const textoCompleto = document.createTextNode(
                `${tarea.nombre} - ${tarea.descripcion} (Fecha: ${tarea.fecha})`
            );
            divInfo.appendChild(textoCompleto);
            
            // Botones de acción
            const divAcciones = document.createElement("div");
            divAcciones.className = "acciones";
            
            // Botón completar (solo si no está completada)
            if(!tarea.completada) {
                const btnCompletar = document.createElement("button");
                btnCompletar.textContent = "✓";
                btnCompletar.onclick = () => this.completar(tarea.id);
                btnCompletar.className = "btn-completar";
                divAcciones.appendChild(btnCompletar);
            }
            
            // Botón eliminar
            const btnEliminar = document.createElement("button");
            btnEliminar.textContent = "✗";
            btnEliminar.onclick = () => this.eliminar(tarea.id);
            btnEliminar.className = "btn-eliminar";
            
            divAcciones.appendChild(btnEliminar);
            li.appendChild(divInfo);
            li.appendChild(divAcciones);
            lista.appendChild(li);
        });
    }
};

// Función sin parámetros que se ejecuta al cargar (página 3)
function inicializar() {
    console.log("TODO List inicializado");
}

// Llamar a la función de inicialización
inicializar();