import Swal from "sweetalert2"

export const toast = {
    success: (msg)=>{
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: msg,
            showConfirmButton: false,
            timer: 1500
          })
    }
}