## Practice Questions
### Pregunta 1: 
Qué servicio de AWS puede utilizar una empresa para ```detectar un corte en los servidores de su sitio web``` y  para ```redirigir``` a los usuarios a servidores alternativos ubicados en diferentes regiones geográficas?
   - A) Amazon CloudFront
   - B) GuardDuty
   - C) Amazon Route 53
   - D) Trusted Advisor

   **Respuesta correcta:** 

C) Amazon Route 53

> [!NOTE]
> Amazon Route 53 has health checking and DNS failover capabilities to route traffic away from unhealthy resources to healthy ones, ensuring high availability.


   | Service | What is it? | Best Use Cases |
   |-------|------------|---------------|
   | **Amazon Route 53** </br>  <img src="../../Images/image-63.png" width="100"/> | Scalable DNS and domain registration | Website routing, health checks, global traffic management, Responses to failover |

### Pregunta 2: 

¿Cuáles servicios o funciones de aws ```pueden controlar el tráfico de VPC```? (Seleccione dos respuestas correctas)
   - A) Security Groups
   - B) AWS Direct Connect
   - C) Amazon GuardDuty
   - D) Network ACLs
   - E) Amazon Connect


   **Respuestas correctas:** 
  
   A) Security Groups

   D) Network ACLs

> [!NOTE]
> **Security Groups** act as virtual firewalls for EC2 instances, controlling inbound and outbound traffic at the instance level. **Network ACLs** provide an additional layer of security by controlling traffic at the subnet level within a VPC.

   | Service | What is it? | Best Use Cases |
   |-------|------------|---------------|
   | **Security Groups** </br>  <img src="../../Images/image-58.png" width="100"/> | Virtual firewall for EC2 instances | Control inbound and outbound traffic at the instance level |
   | **Network ACLs** </br>  <img src="../../Images/image-55.png" width="100"/> | Stateless firewall for subnets in a VPC | Control traffic at the subnet level, provide an additional layer of security |


### Pregunta 3: 

Después de seleccionar una reserva de servidor dedicado de Amazon EC2, ¿ qué opción  de precios ofrecería el ```descuento más grande?```
   - A) Sin pago anticipado
   - B) Pago por horas y por demanda
   - C) pago parcial por anticipado
   - D) Pago total por anticipado

  **Respuesta correcta:** 
 
 D) Pago total por anticipado


> [!NOTE]
> Pago total por anticipado ofrece el mayor descuento en comparación con otras opciones de precios para reservas de servidores dedicados de Amazon EC2.

   | Pricing Option | Description | Discount Level |
   |-------|------------|---------------|
   | **Pago total por anticipado** </br>  <img src="../../Images/image-64.png" width="100"/> | Pay the entire reservation cost upfront | Highest discount |
   | **Pago parcial por anticipado** </br>  <img src="../../Images/image-65.png" width="100"/> | Pay a portion of the reservation cost upfront, with the rest billed over time | Moderate discount |
   | **Sin pago anticipado** </br>  <img src="../../Images/image-54.png" width="100"/> | No upfront payment, pay monthly over the reservation term | Lowest discount |
### Pregunta 4: 

 Una empresa no posee un centro de datos físico , pero necesita una solución de red que conecte las computadoras portatiles de ```los empleados ```directamente a ```la nube de AWS```. ¿Qué servicio de AWS puede proporcionar esta funcionalidad?
   - A) AWS Outposts
   - B) AWS Client VPN
   - C) AWS Snowball edge
   - D) Amazon CloudFront

   **Respuesta correcta:**
 
   B) AWS Client VPN

> [!NOTE]
> AWS client VPN is a managed client-based VPN service that enables secure connections to AWS resources and on-premises networks from any location using an OpenVPN-based client.

   | Service | What is it? | Best Use Cases |
   |-------|------------|---------------|
   | **AWS Client VPN**  | Managed client-based VPN service | Securely connect users to AWS resources and on-premises networks from any location |


### Pregunta 5: 
¿Cuales de las siguientes son caracteristicas de las ```regiones y zonas de disponibilidad de AWS```? (Seleccione dos respuestas correctas)
   - A) Las regiones llevan los servicios de AWS <del>a las instalaciones.</del>

   - ``` B) Las regiones constan de multiples zonas de disponibilidad```
   - C) una zona de disponibilidad contiene varias regiones
   - D) Las regiones se encuentran a 100 km (60 millas) una de otra

   - ```E) Las regiones se encuentran en todo el mundo```

   **Respuestas correctas:** 
    B) Las regiones constan de multiples zonas de disponibilidad,

    E) Las regiones se encuentran en todo el mundo

> [!NOTE]
> Las reigiones se constan de multiples zonas de disponibilidad y se encuentran en todo el mundo para proporcionar redundancia y baja latencia.

### Pregunta 6: 

¿Qué servicio puede utilizar un cliente para ```configurar una cuenta administrativa de pagador``` con el fin de ver los informes de ```facturación unificada```?

   - A) AWS Organizations
   - B) AWS IAM
   - C) AWS Budgets
   - D) AWS Cost Explorer

   **Respuesta correcta:** 
    A) AWS Organizations

> [!NOTE]
> AWS Oraganizations permite configurar una cuenta administrativa de pagador para ver informes de facturación unificada y administrar múltiples cuentas de AWS.



### Pregunta 7: 
   ¿Qué opción es una función basica del ```AWS Cloud Adoption Framework? (AWS CAF)``` desde el punto de vista de las ```opraciones```?
   
   - A) Administrar el redimiento y la capacidad
   - B) Administrar la cartera de aplicaciones
   - C) Administrar identidades y accesos
   - D) Administrar los productos

   **Respuesta correcta:**
    A) Administrar el redimiento y la capacidad


> [!NOTE]
> Administrar el redimiento y la capacidad es una función básica del AWS Cloud Adoption Framework (AWS CAF) desde el punto de vista de las operaciones. Operaciones mantiene disponibilidad, rendimiento y capacidad de los servicios y recursos de AWS.
### Pregunta 8: 

Una empresa tiene una ```instancia de amazon EC2``` que debe ```acceder a AWS secrets Manager para recurperar las credenciales```

¿Qué identidad o servicio necesita para instancia EC2 para relizar la tarea?
   - A) Un rol de IAM
   - B) Un usuario de IAM
   - C) Grupo de IAM
   - D) Un grupo de seguridad

   **Respuesta correcta:**
    A) Un rol de IAM

> [!NOTE]
> Un rol de IAM proporciona permisos temporales a las instancias de Amazon EC2 para acceder a otros servicios de AWS, como AWS Secrets Manager, sin necesidad de almacenar credenciales en la instancia.

### Pregunta 9: 
   ¿Qué tareas requieren el uso del ```usuario root``` de la cuenta de AWS? (Seleccione dos respuestas correctas)
   - ```A) Restaurar los permisos de administrador de IAM.```
   - B) Modificar un tipo de isntancia de Amazon EC2
   - C) Agrupar recursos en AWS Systems Manager
   - D) Ejecutar aplicaciones en Amazon Elastic Kubernetes Service (EKS)
   - E) ```Cerrar una cuenta de AWS```
   **Respuestas correctas:**
    A) Restaurar los permisos de administrador de IAM.

    E) Cerrar una cuenta de AWS

> [!NOTE]
> Entre las tareas que requieren el uso del usuario root de la cuenta de AWS se incluyen restaurar los permisos de administrador de IAM y cerrar una cuenta de AWS.

**Task that require root user credentials:**

   >- Remove member account root user credentials to prevent account recovery of the root user. You can also allow password recovery to recover root user credentials for a member account.

   >- Remove a misconfigured bucket policy that denies all principals from accessing an Amazon S3 bucket.

   >- Delete an Amazon Simple Queue Service resource-based policy that denies all principals from accessing an Amazon SQS queue.

### Pregunta 10: 

Una empresa necesita ```auditar sus  recursos de AWS```. La empresa debe ```documentar cualquier cambio que se hizo en los recursos.``` ¿Qué servicio de AWS puede proporcionar esta funcionalidad?
   - A) AWS Aritifact
   - B) AWS Config
   - C) Amazon Inspector
   - D) AWS Cloudwatch

   **Respuesta correcta:**
    B) AWS Config

> [!NOTE]
> AWS config proporciona un inventario de recursos de AWS, historial de configuración y notificaciones de cambios para ayudar a auditar y evaluar las configuraciones de los recursos.

### Pregunta 11: 

   De acuerdo con el ```modelo de responsabilidad compartida de AWS```, ¿qué tarea es ```responsabilidad del cliente?```(Seleccione dos respuestas correctas)

   - A) Aplicar parches al sistema operativo invitado
   - B) Proteger la infraestructura física de AWS
   - C) Aplicar parches al hardware de la red
   - D) Configurar los firewalls de la instancia
   - E) Desactivar los dispositivos de almacenamiento obsoletos

   **Respuestas correctas:**

   A) Aplicar parches al sistema operativo invitado

   D) Configurar los firewalls de la instancia

> [!NOTE]
> Dentro del modelo de responsabilidad compartida de AWS, los clientes son responsables de aplicar parches al sistema operativo invitado y configurar los firewalls de la instancia para asegurar sus aplicaciones y datos en la nube.
   ### Pregunta 12: 
¿Qué principio de diseño de arquitectura se aplica al concepto de r```edimensionamiento (rightscaling)``` de la infraestructura de la nube en AWS?
   - A) Escalar horizontalmente para aumentar la disponibilidad de la carga de trabajo
   - B) Optimizar los costos.
   - C) Realizar cambios fecuentes , pequeños y reversibles
   - D)Realizar operaciones como código

   **Respuesta correcta:**
    B) Optimizar costos

> [!NOTE]
> El redimensionamiento (rightscaling) de la infraestructura de la nube en AWS se aplica al principio de diseño de arquitectura de optimizar costos, asegurando que los recursos se ajusten a las necesidades actuales sin sobredimensionamiento ni subdimensionamiento.

   ### Pregunta 13: 
      
   Una empresa quiere que sus empleados tengan ```accesso a la infraestructura de escritorios virtuales ```para acceder de forma segura a los ```escriotorios``` que les proporcionan mediante los dispositivos ```personales de los empleados```.
   
   - A) Amazon AppStream 2.0
   - B) AWS AppSync
   - C) Amazon FSx para Windows File Server
   - D) Amazon Workspaces


     **Respuesta correcta:**
    D) Amazon Workspaces

> [!NOTE]
> Amazon Workspace es un servicios de escritorio como servicio (DaaS) que permite a los empleados acceder de forma segura a escritorios virtuales desde sus dispositivos personales.
   ### Pregunta 14: 
¿Qué servicio de AWS ofrece una forma sencilla de ```configurar un nuevo entorno de AWS``` con ```múltiples cuentas y gobernanza a escala```?

   
   - A) AWS Trusted Advisor
   - B) AWS Security Hub
   - C) AWS Control Tower
   - D) AWS Resource Access Manager


     **Respuesta correcta:**
   > C) AWS Control Tower

> [!NOTE]
> AWS Control Tower proporciona una forma sencilla de configurar y gobernar un entorno de AWS con múltiples cuentas, aplicando mejores prácticas y políticas de seguridad a escala.


   ### Pregunta 15: 
Un profesional de la nube tiene la tarea de desarrollar un ```plan de recuperación ante desastres y pretende replicar datos entre multiples áreas``` geográficas.

¿ Cuál es el componente de la nube de AWS que la empresa debe utilizar para cumplir dichos requisitos?
   
   - A) Cuentas AWS
   - B) Regiones de AWS
   - C) Zonas de disponibilidad
   - D) Ubicaciones perimetrales


     **Respuesta correcta:**
   > B) Regiones de AWS


> [!NOTE]
> Las regiones de AWS son ubicaciones geográficas separadas que permiten replicar datos entre múltiples áreas geográficas para la recuperación ante desastres.
### Pregunta 16
¿Qué función se puede utilizar para proteger los buckets de Amazon S3 contra sobreescrituras o eliminaciones accidentales?

   - A) Políticas de ciclo de vida
   - B) El control de versiones de un bucket
   - C) La encriptación del lado del servidor
   - D) Los puntos de acceso de S3

     **Respuesta correcta:**
   > B) El control de versiones de un bucket

> [!NOTE]
> El control de versiones de un bucket de Amazon S3 permite mantener múltiples versiones de un objeto, protegiendo contra sobreescrituras o eliminaciones accidentales.


 ### Pregunta 17
Una empresa quiere mejorar su ```postura de seguridad y auditoría limitando el acceso entrante a Amazon EC2```.

¿Qué debería usar la empresa para acceder a las instancias de forma remota en lugar de abrir los puertos SSH entrantes y administrar las claves SSH?

   - A) Pares de claves EC2
   - B) AWS Systems Manager Session Manager
   - C) AWS Identity and Access Management (IAM)
   - D) Las ACL de red


     **Respuesta correcta:**
   > B) AWS Systems Manager Session Manager

> [!NOTE]
> AWS Systems Manager Session Manager permite acceder de forma segura a las instancias de Amazon EC2 sin necesidad de abrir puertos SSH entrantes ni administrar claves SSH, mejorando la postura de seguridad y auditoría.

### Pregunta 18
¿Qué servicio de base de datos de AWS proporciona almacenamiento de datos en memoria?


   - A) Amazon DynamoDB
   - B) Amazon ElastiCache
   - C) Amazon RDS
   - D) Amazon Timestream



     **Respuesta correcta:**
   > B) Amazon ElastiCache


### Pregunta 19
¿Cuáles de los siguientes son los principios de seguridad del marco de AWS Well-Architected? (Seleccione DOS).

   - A) Analizar y atribuir los gastos.
   - B) Monitorear, alertar y auditar las acciones y los cambios en los recursos de AWS.
   - C) Implementar a nivel mundial en minutos.
   - D) Proteger los datos en tránsito y en reposo.
   - E) Realizar operaciones como código.

     **Respuesta correcta:**
   > B) Monitorear, alertar y auditar las acciones y los cambios en los recursos de AWS.

   > D) Proteger los datos en tránsito y en reposo.
   ### Pregunta 20:

   Una empresa tiene una aplicación sin estado que puede gestionar interrupciones. La aplicación debe estar disponible 24 horas al día. El tráfico aumenta considerablemente durante el horario comercial.

   ¿Qué tipos de instancias para los picos de tráfico y de base tienen MÁS optimización de costos para cumplir con estos requisitos?

   - A) Instancias reservadas tanto para el pico de tráfico como para el tráfico base
   - B) Instancias reservadas para el tráfico base e instancias de spot para el pico de tráfico mediante Amazon EC2 Fleet
   - C) Instancias bajo demanda para tráfico base e instancias bajo demanda con escalado automático para picos de tráfico
   - D) Instancias bajo demanda para el tráfico base e instancias de spot para los picos de tráfico mediante Amazon EC2 Fleet

 **Respuesta correcta:**  
   > B) Instancias reservadas para el tráfico base e instancias de spot para el pico de tráfico mediante Amazon EC2 Fleet
   
 > Explicación: Las instancias reservadas optimizan costos para la capacidad base (compromiso 1–3 años). Las instancias Spot reducen costes en picos temporales; EC2 Fleet permite combinar tipos y objetivos de capacidad.  

   > A es incorrecta porque las reservadas no son óptimas para picos temporales. C y D son menos costosas para la base que usar únicamente instancias bajo demanda.
   
   ### Pregunta 21:
   
   ¿Cuál es un ejemplo de alta disponibilidad en la nube de AWS?
   
   - A) Asesoramiento del soporte técnico de AWS en cualquier momento del día
   - B) Garantía de la accesibilidad de una aplicación, incluso si falla un recurso
   - C) Disponibilidad de cualquier servicio de AWS para su uso mediante el pago bajo demanda
   - D) Implementación en cualquier parte del mundo con el uso de regiones de AWS
   
   **Respuesta correcta:**
   > B) Garantía de la accesibilidad de una aplicación, incluso si falla un recurso
   
   > Explicación: La alta disponibilidad asegura que una aplicación permanezca accesible aun si falla un recurso, evitando puntos únicos de error.
   ______________
   ________
   


