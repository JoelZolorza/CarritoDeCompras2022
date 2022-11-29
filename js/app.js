const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const expresiones = {
	domicilio: /^[a-zA-Z0-9\_\-\s]{4,40}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	codigoPostal: /^\d{4,8}$/, // 4 a 12 digitos.
	dni:  /^\d{8,15}$/,
    cuit:  /^[\d\_\-\s]{4,16}$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
     }

     const campos = {
        nombre: false,
        domicilio: false,
        codigoPostal: false,
        dni: false,
        cuit: false,
        telefono: false
        }
        


  /*   const validarFormulario = (e) => {
       switch(e.target.name) {
        case "nombre":
            if(expresiones.nombre.test(e.target.value)) {
                document.getElementById('grupo__nombre').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo__nombre').classList.add('formulario__grupo-correcto');
                document.querySelector('#grupo__nombre i').classList.add('fa-check-circle');
                document.querySelector('#grupo__nombre i').classList.remove('fas fa-times-circle');
                document.querySelector('#grupo__usuario .formulario__input-error').classList.remove('formulario__input-error-activo');
            } else {
                document.getElementById('grupo__nombre').classList.add('formulario__grupo-incorrecto');
                document.getElementById('grupo__nombre').classList.remove('formulario__grupo-correcto');
                document.querySelector('#grupo__nombre i').classList.add('fas fa-times-circle');
                document.querySelector('#grupo__nombre i').classList.remove('fa-times-circle');
                document.querySelector('#grupo__usuario .formulario__input-error').classList.add('formulario__input-error-activo');
            }
        break;
        case "domicilio":
        
        break;
        case "codigoPostal":
        
        break;
        case "dni":
        
        break;
        case "cuit":
        
        break;
        case "telefono":
        
        break;
       }
     }
*/


const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
        break;
        case "domicilio":
            validarCampo(expresiones.domicilio, e.target, 'domicilio');
        break;
        case "codigoPostal":
            validarCampo(expresiones.codigoPostal, e.target, 'codigoPostal');
            
        break;
        case "dni":
            validarCampo(expresiones.dni, e.target, 'dni');
        break;
        case "cuit":
            validarCampo(expresiones.cuit, e.target, 'cuit');
        break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono');
        break;
    }
}


const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}





inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);

 })








     

     const form = document.getElementById("formulario");
     console.log(form)

     form.addEventListener("submit",(event) => {
        event.preventDefault();
        var idformData = new FormData(form);  
        insertRowTable(idformData); 
     }) 

     function insertRowTable (idformData) {
        let transactionTableRef = document.getElementById("table");

        let newTransactionRow = transactionTableRef.insertRow(-1);

        let newTypecellRef = newTransactionRow.insertCell(0);
        newTypecellRef.textContent = idformData.get("nombre");

         newTypecellRef = newTransactionRow.insertCell(1);
        newTypecellRef.textContent = idformData.get("domicilio");

         newTypecellRef = newTransactionRow.insertCell(2);
        newTypecellRef.textContent = idformData.get("codigoPostal");

         newTypecellRef = newTransactionRow.insertCell(3);
        newTypecellRef.textContent = idformData.get("telefono");

         newTypecellRef = newTransactionRow.insertCell(4);
        newTypecellRef.textContent = idformData.get("dni");

         newTypecellRef = newTransactionRow.insertCell(5);
        newTypecellRef.textContent = idformData.get("cuit");

        

         

    }

     
       
     

     formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        
       
        

        if(campos.codigoPostal && campos.nombre && campos.cuit && campos.domicilio && campos.telefono){
            formulario.reset();
    
            document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
            setTimeout(() => {
                document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
            }, 5000);
    
            document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
                icono.classList.remove('formulario__grupo-correcto');
            });
        } else {
            document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
            setTimeout(() => {
                document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
            }, 5000);
            

        }
    });
     
    



     // document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');