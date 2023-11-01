# Instrucciones

## Encuentra un usuario por su nombre
La función `findUser(users, name)` recibe 2 **parámetros**:
1. `users` Una lista de usuarios
2. `name` Una cadena de texto con el nombre del usuario

Tu labor es encontrar y **retornar** al usuario con el nombre recibido.

### Entrada de muestra

```javascript
users = [
  { name: 'Jesús', gender: 'male', age: 22 },
  { name: 'Luis', gender: 'male', age: 22 },
  { name: 'Andrés', gender: 'male', age: 49 },
  { name: 'María', gender: 'female', age: 35 }
]

name = 'Andrés'
```

### Salida de muestra

```javascript
{ name: 'Andrés', gender: 'male', age: 49 }
```


### Consejos💡
En el caso de haber recibido el arreglo mencionado anteriormento y el nombre `Andrés` deberías retornar a `Andrés`.

Recuerda que por cada **TEST** los parámetros de la función "cambiarán su valor", tu función debe ser generica, es decir, que sin importar cuál sea el valor de los parámetros, siempre deberá retornar el usuario con el nombre recibido.

> No hay gloria en la práctica, pero sin práctica no hay gloria. 