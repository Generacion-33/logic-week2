# Instrucciones

## Elimina un usuario del arreglo
La función `deleteUser(users, email)` recibe dos **parámetros**; 
1. `users` Un arreglo de usuarios
2. `email` Una cadena de texto que contiene el correo del usuario

Tu labor es encontrar en el arreglo al usuario que tenga el correo recibido y eliminarlo, finalmente deberás **retornar** el arreglo sin el usuarios eliminado.

### Entrada de muestra

```javascript
users = [
  { name: 'Wilber', email: 'wil@academlo.com' }, 
  { name: 'Jesús', email: 'jesus@academlo.com' }, 
  { name: 'Gabriel', email: 'gabriel@gmail.com' }
]
    
email = 'wil@academlo.com'
```

### Salida de muestra

```javascript
[
 { name: 'Jesús', email: 'jesus@academlo.com' },  
 { name: 'Gabriel', email: 'gabriel@gmail.com' }
]
```

### Consejos💡
Si el `email` que recibe es `'andres@academlo.com'`, tu función deberá retorna un arreglo con todos los usuarios menos a `Andrés`.

Recuerda que por cada **TEST** el parámetro de la función `email` "cambiará" su valor, tu función debe ser generica, es decir, que sin importar el `email` que recibas como parámetro, tu función siempre deberá eliminar a ese usuario del arreglo, y retornar el arreglo sin el usuario eliminado.

> No hay gloria en la práctica, pero sin práctica no hay gloria.