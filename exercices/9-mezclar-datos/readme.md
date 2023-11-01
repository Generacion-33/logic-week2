# Instrucciones

## Mezclando datos de 2 arreglos
La función `mergeData(users, attendances)` recibe 2 **parámetros**:
1. `users` Una lista de usuarios
2. `attendances` Una lista de asistencias

Donde `attendance` nos indica si el usuario asistió o no a sus clases de programación. Tu labor es hacer una mezcla de los datos de ambos arreglos y devolver uno solo que contenga toda la información sin duplicar los datos.

### Entrada de muestra

```javascript
users = [
  { name: 'Gabriel', email: 'gabriel@gmail.com' },
  { name: 'Jesús', email: 'jesus@academlo.com' },
  
]

attendances = [
  { email: 'gabriel@gmail.com', attendance: false },
  { email: 'jesus@academlo.com', attendance: true }
]
```

### Salida de muestra

```javascript
[
    { name: 'Gabriel', email: 'gabriel@gmail.com', attendance: true },
    { name: 'Jesús', email: 'jesus@academlo.com', attendance: false }
]
```


### Consejos💡
Puedes usar cualquiera de los dos arreglos para realizar la mezcla y retornarlo.

Recuerda que por cada **TEST** los **parámetros** de la función "cambiarán su valor", tu funcion deberá retornar un solo arreglo con la mezcla de los 2 arreglos sin duplicar los datos.

> No hay gloria en la práctica, pero sin práctica no hay gloria.