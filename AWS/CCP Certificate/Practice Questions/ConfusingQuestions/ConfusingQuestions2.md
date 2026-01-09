# Practice Questions 2

## Module 2

### Pregunta 1:

## Module 3

### Pregunta 1:
¿Cuáles son los servicios o características de AWS que permiten la ```replicación de datos``` en ```todas las regiones de AWS?``` (Seleccione DOS).

- A) Amazon S3
- B) Amazon Elastic Block Store (Amazon EBS)
- C) Almacén de instancias Amazon EC2
- D) AWS Storage Gateway
- E) Amazon RDS


 **Respuestas correctas:** 
  
   A) Amazon S3

   C) Amazon RDS

> [!NOTE]
> Amazon S3 y Amazon RDS permiten la replicación de datos en todas las regiones de AWS. Amazon S3 ofrece replicación entre regiones para objetos almacenados en buckets, mientras que Amazon RDS permite la replicación entre regiones para bases de datos relacionales.
### Pregunta 2:
¿Cuáles de los siguientes son los ```beneficios de ejecutar una base de datos en Amazon RDS```, en comparación con una base de datos en las instalaciones? (Seleccione DOS).


- A) RDS provee respaldos de forma predeterminada.
- B) RDS admite cualquier base de datos relacional.
- C) RDS cuesta lo mismo, independientemente del motor de base de datos que se utilice.
- D) La capacidad de cómputo de la base de datos de RDS se puede escalar fácilmente.
- E) AWS administra los grupos de seguridad de Amazon RDS.



 **Respuestas correctas:** 
  
  A) RDS provee respaldos de forma predeterminada.

  D) La capacidad de cómputo de la base de datos de RDS se puede escalar fácilmente.

> [!NOTE]
> Amazon RDS ofrece respaldos automáticos y permite escalar fácilmente la capacidad de cómputo y almacenamiento según las necesidades de la aplicación. Sin embargo, no admite cualquier base de datos relacional, ya que solo es compatible con ciertos motores de bases de datos. Además, los costos varían según el motor de base de datos utilizado, y los grupos de seguridad son gestionados por el usuario a través de AWS IAM.

### Pregunta 3:

Una empresa ejecuta ```una aplicación replicada en seis instancias de Amazon EC2 basadas en Linux``` en ```dos zonas de disponibilidad``` de una región de AWS. La aplicación necesita a```cceso compartido a los datos.``` La aplicación modificará los datos con frecuencia dentro de los archivos de datos existentes.

¿Qué solución de almacenamiento de AWS satisface las necesidades de la empresa con la MENOR sobrecarga operativa?


- A) Amazon Elastic Block Store (Amazon EBS) Multi-Attach

- B) Amazon Elastic File System (Amazon EFS)

- C) Amazon S3

- D) Amazon FSx para Lustre



 **Respuestas correctas:** 
  
   A) Amazon Elastic File System (Amazon EFS)


> [!NOTE]
> Amazon EFS es un sistema de archivos escalable y totalmente administrado que permite el acceso compartido a los datos desde múltiples instancias de Amazon EC2. Es ideal para aplicaciones que requieren acceso concurrente y modificaciones frecuentes a los archivos de datos existentes.
> FSx para Lustre es más adecuado para cargas de trabajo de alto rendimiento y no es necesario en este caso. Amazon S3 no es adecuado para acceso compartido y modificaciones frecuentes en archivos. Amazon EBS Multi-Attach permite el acceso a un volumen EBS desde múltiples instancias, pero no es tan eficiente como EFS para este caso de uso.

### Pregunta 4:


¿Qué servicio de AWS se puede utilizar para proporcionar ```un centro de contacto bajo demanda y basado en la nube?```

Informar errores de contenido

- <del> A) AWS Direct Connect </del>

- B) Amazon Connect

- <del> C) AWS Support </del>

- D) AWS Managed Service



 **Respuestas correctas:** 
  
  > - B) Amazon Connect


> [!NOTE]
> Amazon connect es un servicio de centro de contacto basado en la nube que permite a las empresas configurar y administrar un centro de contacto de manera rápida y sencilla, proporcionando una experiencia de cliente mejorada.

### Pregunta 5:

¿Para qué se deben utilizar las ubicaciones ```perimetrales de AWS? ```(Seleccione DOS).


- <del> A) Alojar aplicaciones y bases de datos </del>
- B) Ofrecer contenido más cerca de los usuarios
- <del> C) Ejecutar servicios de almacenamiento en caché de base de datos NoSQL</del>
- D) Reducir la carga de los servidores web basados en Amazon EC2
- <del>E) Enviar mensajes de notificación a los usuarios finales</del>




 **Respuestas correctas:** 
  
   B) Ofrecer contenido más cerca de los usuarios

   D) Reducir la carga de los servidores web basados en Amazon EC2


> [!NOTE]
> Amazon coudfront y AWS Global Accelerator utilizan ubicaciones perimetrales para ofrecer contenido y aplicaciones más cerca de los usuarios finales, lo que reduce la latencia y mejora el rendimiento. Además, al distribuir el tráfico a través de estas ubicaciones, se puede reducir la carga en los servidores web basados en Amazon EC2.
### Pregunta 6:


Una aplicación crítica para uso comercial requiere una implementación en varias regiones para cumplir con los acuerdos de nivel de servicios (SLA) de disponibilidad.

```¿Qué servicio o función de AWS se debe utilizar para el enrutamiento de red y el balanceo de carga de esta aplicación?```

- A) Amazon Route 53
- B) Application Load Balancer (ALB)
- C) Amazon API Gateway
- D) AWS Site-to-Site VPN


 **Respuestas correctas:** 
  
   A) Amazon Route 53


> [!NOTE]
> Amazon Route 53 es un servicio de DNS que permite el enrutamiento de tráfico a nivel global y puede dirigir las solicitudes a diferentes regiones de AWS, lo que es ideal para aplicaciones que requieren alta disponibilidad y redundancia geográfica.

### Pregunta 7:


A una empresa le gustaría alojar sus ```bases de datos MySQL ```en AWS y mantener un ```control total del sistema operativo```, la instalación y la configuración de la base de datos.

¿Cuál servicio de AWS debe utilizar la empresa para alojar las bases de datos?

- A) Amazon RDS
- B) Amazon EC2
- C) Amazon DynamoDB
- D) Amazon Aurora

 **Respuestas correctas:** 
  
   B) Amazon EC2


> [!NOTE]
> EC2 proporciona control total sobre el sistema operativo y la configuración de la base de datos, lo que permite a la empresa gestionar su propia instalación de MySQL.
### Pregunta 8:


¿Qué elemento define una ```zona de disponibilidad``` de AWS?


- A) Uno o varios centros de datos físicos con alimentación y red redundantes

- B) Una ubicación geográfica completamente aislada de otras ubicaciones de AWS

- C) Una o más ubicaciones de borde en todo el mundo (used by route 53, cloudfront y aws globals accelerator)

- D) Una ubicación de centro de datos con una sola fuente de alimentación y redes 

 **Respuestas correctas:** 
  
  A) Uno o varios centros de datos físicos con alimentación y red redundantes


> [!NOTE]
> Las zonas de disponibilidad de AWS son ubicaciones físicas dentro de una región de AWS que consisten en uno o más centros de datos independientes con alimentación, refrigeración y redes redundantes para garantizar alta disponibilidad y tolerancia a fallos.
## Module 4


### Pregunta 1:


¿Qué función de ```AWS Organizations``` se puede usar para realizar un seguimiento de los cobros en varias cuentas e informar ```el costo combinado?```


- A) Las políticas de control de servicios (SCP)

- B) AWS Budgets

- C) Facturación unificada

- D) AWS Identity and Access Management (IAM)


 **Respuestas correctas:** 
  
  C) Facturación unificada

> [!NOTE]
> Facturación unificada en AWS Organizations permite a las organizaciones consolidar los costos y el uso de múltiples cuentas de AWS en una sola factura, facilitando el seguimiento y la gestión de los gastos combinados.

### Pregunta 2:


¿Qué pueden hacer los usuarios en ```AWS Marketplace?``` (Seleccione DOS).


- <del> A) Vender instancias de spot de Amazon EC2 no utilizadas.</del>


- B) Vender soluciones a otros usuarios de AWS.

- C) Comprar software de terceros que se ejecuta en AWS.


- <del> D) Comprar documentos de seguridad y cumplimiento de AWS.</del>

- <del> E) Solicitar AWS Snowball Edge.</del> (nada que ver)

 **Respuestas correctas:** 
  
  B) Vender soluciones a otros usuarios de AWS.

   C) Comprar software de terceros que se ejecuta en AWS.

> [!NOTE]
> En AWS Marketplace, los usuarios pueden comprar software de terceros que se ejecuta en AWS y también vender sus propias soluciones a otros usuarios de AWS.




### Pregunta 3:


Una empresa necesita acceso por teléfono, correo electrónico y chat las ```24 horas del día, los 7 días de la semana. ```Si un sistema de producción tiene una interrupción del servicio, el tiempo de respuesta debe ser ```menor a 1 hora```.

¿Qué plan de AWS Support cumple estos requisitos al MENOR costo?

- A) AWS Basic Support

- B) AWS Developer Support

- C) AWS Business Support

- D) AWS Enterprise Support


 **Respuestas correctas:** 
  
  C) AWS Business Support

> [!NOTE]
> Business support es la respuesta correcta porque ofrece acceso 24/7 por teléfono, correo electrónico y chat, con un tiempo de respuesta de menos de 1 hora para interrupciones en sistemas de producción.



