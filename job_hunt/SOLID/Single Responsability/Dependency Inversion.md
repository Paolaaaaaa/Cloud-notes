# Dependency Inversion Principle
El Principio de Inversión de Dependencias establece que los módulos de alto nivel no deben depender de módulos de bajo nivel, sino que ambos deben depender de abstracciones. Además, las abstracciones no deben depender de los detalles, sino que los detalles deben depender de las abstracciones. Esto ayuda a reducir el acoplamiento entre los componentes del sistema y facilita la reutilización y el mantenimiento del código.

### Versión Mal Aplicada del Principio de Inversión de Dependencias
```java
class UserService {
  constructor() {
    this.database = new MySQLDatabase();  // Dependencia directa de un detalle específico
  }
  getUser(id) {
    return this.database.query(`SELECT * FROM users WHERE id = ${id}`);
  }
}
```
### Versión Bien Aplicada del Principio de Inversión de Dependencias
```java
interface Database {
  query(sql);
}
class MySQLDatabase implements Database {
  query(sql) { /* ... */ }
}
class UserService {
  constructor(database) {
    this.database = database;  // Dependencia de una abstracción
  }
  getUser(id) {
    return this.database.query(`SELECT * FROM users WHERE id = ${id}`);
  }
}
```