# Instrucciones

## Obten los correso de tdos los usuarios
La función `getEmails(users)` recibe como **parámetro** un arreglo `users` que contiene objetos, cada objeto dentro del `array` representa un usuario, tu labor es tomar ese `array`, recorrerlo y obtener los correos de todos los usuarios, deberás **retornar** un nuevo arreglo con los correos.

### Entrada de muestra

```javascript
users = [
  { name: "Wilber", email: "wil@academlo.com", age: 30 },
  { name: "Gabriel", email: "gabriel@academlo.com", age: 40 },
  { name: "Jesús", email: "jesus@academlo.com", age: 20 },
]
```

### Salida de muestra

```javascript
["wil@academlo.com", "gabriel@academlo.com", "jesus@academlo.com"]
```


### Consejos💡
El `array` que recibe la función puede contener n catidad de usuarios.

Recuerda que por cada **TEST** el parámetro de la función `users` "cambiará" su valor, tu función debe ser generica, es decir, que sin importar la longitud del arreglo, siempre deberá retornar el los `correos` de todos los usuarios.

> No hay gloria en la práctica, pero sin práctica no hay gloria.