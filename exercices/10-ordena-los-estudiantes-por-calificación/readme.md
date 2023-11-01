# Instrucciones

## Ordena los estudiantes por su calificación
La función `orderStudentsByScore(students)` recibe como **parámetro** `students` que es un arreglo de "**n**" cantidad de estudiantes, tu labor es ordenarlo de "**menor**" a "**mayor**" utilizando como referencia la propiedad `score`. Deberás **retornar** el arreglo ordenado.

### Entrada de muestra

```javascript
students = [
  { name: 'Jesús', email: 'jesus@academlo.com', score: 100 },
  { name: 'David', email: 'david@gmail.com', score: 70 },
  { name: 'Ernesto', email: 'ernesto@gmail.com', score: 34 }
]
```

### Salida de muestra

```javascript
[
    { name: 'Ernesto', email: 'ernesto@gmail.com', score: 34 },
    { name: 'David', email: 'david@gmail.com', score: 70 },
    { name: 'Jesús', email: 'jesus@academlo.com', score: 100 }
]
```


### Consejos💡
Tu función debería tener el siguiente orden basado en el ejemplo anterior; el score más pequeño es `34`, le sigue el `70` y el mayor es `100`.

Puedes utilizar el método `sort()`.

Recuerda que por cada **TEST** el parámetro de la función `students` "cambiará su longitud", tu función debe ser generica, es decir, que sin importar la longitud del arreglo, siempre deberá **retornar** el arreglo ordenado por su `score` de "**menor**" a "**mayor**".

> No hay gloria en la práctica, pero sin práctica no hay gloria. 