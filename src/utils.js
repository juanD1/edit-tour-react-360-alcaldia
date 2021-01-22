import Swal from 'sweetalert2';

export const successAlert = ({ title, text }) =>
  Swal.fire({
    title,
    text,
    icon: 'success',
  });

export const serializeParams = params =>
  Object.keys(params)
    .map(key => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
    })
    .join('&');
