# Battle of Gods

## Objetivo

El objetivo es crear una aplicación donde simular competiciones donde los Dioses se enfrentan entre si (Similar ATP).
La aplicación tendrá funcionalidades como un ranking con puntuaciones, historicos de competiciones, información del Dios.

## Contenido

1. Ranking
2. Pérfil Dios
   1. Información (Nombre, Origen, Historia, Foto)
   2. Puntuación y victorias
   3. Gráficas
      1. Rendimiento
      2. Enfrentamientos
   4. Palmares
3. Competiciones
   1. Histórico
4. Estadísticas

## Modelado de Datos

### GODS

---

Entidad que contendrá la información de un Dios.

- Propiedades
  - **Código**: Código del Dios.
  - **Nombre**: Nombre del Dios.
  - **Origen**: Origen del Dios.
  - **Historia**: Historia del Dios.
  - **Foto**: Imagen del Dios.

| Código | Nombre | Origen  | Historia   | Foto |
| ------ | ------ | ------- | ---------- | ---- |
| 1      | Thor   | Nordico | Lore Ipsum | Foto |
| 2      | Anubis | Egipcio | Lore Ipsum | Foto |
| 3      | Zeus   | Griego  | Lore Ipsum | Foto |
| 4      | Shiva  | Hindu   | Lore Ipsum | Foto |

### RANKINGS

---

Entidad que contendrá los puntos obtenidos por cada Dios durante las diferentes competiciones.

- Propiedades
  - **Código God**: Código del Dios.
    - Referencia a **Código** de la tabla **GODS**
  - **Puntuación**: Puntuación de Dios.
  - **Victorias**: Victorias de torneos acumuladas.

| Código | Puntuacion | Victorias |
| ------ | ---------- | --------- |
| 1      | 600        | 2         |
| 2      | 345        | 1         |
| 3      | 570        | 1         |
| 4      | 125        | 0         |

### COMPETITIONS

---

Entidad que contendrá el maestro de las competiciones.

- Propiedades
  - **Código**: Código de la competición.
  - **Descripción**: Descripción de la competición

| Código | Descripcion   |
| ------ | ------------- |
| 1      | Competición A |
| 2      | Competición B |
| 3      | Competición C |
| 4      | Competición D |

### SEASONS

---

Entidad que contendrá el maestro de las temporadas.

- Propiedades
  - **Código**: Código de la temporada.
  - **Description**: Descripción de la temporada.
  - **Competitions-Played**: Número de competiciones jugadas.
  - **Total-Competitions**: Total de competiciones de una temporada.
  - **Finalizado**: Indicador del estado de la temporada.

| Código | CompetitionPlayed | TotalCompetitions | Finalizado |
| ------ | ----------------- | ----------------- | ---------- |
| 2019   | 4                 | 4                 | Sí         |
| 2020   | 1                 | 4                 | No         |

### ROUNDS

---

Entidad que contendrá el maestro de rondas en una competición

- Propiedades
  - **Código**: Código de la ronda.
  - **Descripción**: Descripción de la ronda.

| Código | Descripción |
| ------ | ----------- |
| 1      | Top2        |
| 2      | Top4        |
| 3      | Top8        |
| 4      | Top16       |
| 5      | Top32       |

> Esta es la representación
> del maestro de rondas

### MATCHES

---

Entidad que contendrá los enfrentamientos entre dioses.

- Propiedades
  - **Código**: Código del encuentro.
  - **Battler 1**: Código de uno de los Dioses.
    - Referencia a **Código** de la tabla **GODS**
  - **Battler 2**: Código de uno de los Dioses.
    - Referencia a **Código** de la tabla **GODS**
  - **Competición**: Código de la competición.
    - Referencia a **Código** de la tabla **COMPETITIONS**
  - **Ronda**: Código de la ronda.
    - Referencia a **Código** de la tabla **ROUNDS**
  - **Season**: Código de la temporada.
    - Referencia a **Código** de la tabla **SEASONS**
  - **Winner**: Código del ganador.
    - Referencia a **Código** de la tabla **GODS**

| Código | Battler 1 | Battler 2 | Competición | Ronda   | Season | Winner  |
| ------ | --------- | --------- | ----------- | ------- | ------ | ------- |
| 1      | 1(Thor)   | 2(Anubis) | 1(Comp. A)  | 3(Top4) | 2020   | 1(Thor) |
| 2      | 1(Thor)   | 3(Zeus)   | 1(Comp. A)  | 2(Top2) | 2020   | 1(Thor) |
| 3      | 3(Zeus)   | 4(Shiva)  | 1(Comp. A)  | 3(Top4) | 2020   | 3(Zeus) |

> Esta represenstación indica que en la **Season 2020** en la **Competición A**
> se produjeron dos enfrentamientos en la **Ronda Top4** (equivalente a semifinales) \
> donde los ganadores fueron **Thor** y **Zeus** y luego se enfrentaron en la **Ronda Top1** (equivalente a la final)
> y el ganador de la competición es **Thor**.

### POSITION-COMPETITIONS

---

Entidad que contendrá las posiciones finales de cada dios en una competición según la temporada.

- Propiedades
  - **Código**
    - _Ejemplo: 1_
  - **Código GOD**
    - Referencia a **Código** de la tabla **GODS**
    - _Ejemplo: 1_
  - **Competición**
    - Referencia a **Código** de la tabla **COMPETITIONS**
    - _Ejemplo: 3_
  - **Season**
    - Referencia a **Código** de la tabla **SEASONS**
  - **Ronda**
    - Referencia a **Código** de la tabla **ROUNDS**
  - **Puntuación**
    - _Ejemplo: 100_

| Código | Gods      | Competición | Ronda     | Season | Puntuación |
| ------ | --------- | ----------- | --------- | ------ | ---------- |
| 1      | 1(Thor)   | 1(Comp. A)  | 1(Winner) | 2020   | 500        |
| 2      | 3(Zeus)   | 1(Comp. A)  | 2(Top2)   | 2020   | 250        |
| 3      | 2(Anubis) | 1(Comp. A)  | 3(Top4)   | 2020   | 100        |
| 4      | 4(Shiva)  | 1(Comp. A)  | 3(Top4)   | 2020   | 100        |
| 5      | 4(Shiva)  | 1(Comp. A)  | 1(Winner) | 2019   | 500        |

> Esta representación indica la posición final de cada Dios en una competición y temporada
> y la puntuación que obtiene en esa competición.

### INSCRIPTIONS

---

Entidad que contendrá la información de las competiciones donde ha participado un Dios por temporada.

- Propiedades
  - **Competition**
  - **God**
  - **Season**

### TYPES-COMPETITION

---

Entidad maestra que contendrá el tipo de competición

- Propiedades
  - **Type**

Tipos de Competición: [The Olympus, International, Master, Regional]

### COMPETITIONS-PLAYED

---

Entidad que contendrá la información de las competiciones de cada Season y si han sido disputadas.

- Propiedades
  - **Competition**
  - **Season**
  - **Order**
  - **isPlayed**

### POINTS-ROUND-TYPE-COMPETITION

---

Entidad que contendrá las puntuaciones por Ronda según el tipo de competición

- Propiedades
  - **TypeCompetition**
  - **Round**
  - **Points**

### REGION-GODS

---

Entidad que contendrá el maestro de Origenes de los Dioses.

- Propiedades
  - **idOrigen**
  - **Origen**

### PROCEDIMIENTO ACTUALIZACIÓN RANKING

---

El proceso para actualizar el ranking será el siguiente:

- Termina una competición

  - Se obtiene las posiciones y puntuaciones de todos los dioses para esa competición y temporada.
  - Se envia un objeto con un listado de dioses y sus puntuaciones. Luego en el servicio se cálcula dichas puntuaciones y se actualizada cada registro.

### PROCESO GENERACIÓN MATCHES

---

El proceso para generar un MATCH será el siguiente:

- Elegimos la competición donde realizar las inscripciones:
- Se generá en [FRONT] las eliminatorias. Pulsamos simular una ronda y se generán los MATCH de la Ronda en [BACK] de la competición.

### CONFIGURACIÓN COMPETICIÓN

---

El tipo [Olympus] tendrá un total de 128 participantes y el ganador obtendrá 2000 puntos.
El tipo [International] tendrá un total de 64 participantes y el ganador obtendrá 1000 puntos.
El tipo [Master]  tendrá un total de 32 participantes y el ganador obtendrá 500 puntos.
El tipo [Regional] tendrá un total de 16 participantes y el ganador obtendrá 250 puntos.

Cada temporada contará con un [Olympus], 4 [International], 12 [Master] y 36 [Regional] para cada Origen.
Calendario de la temporada.
3 [Regional] -> 1 [Master] -> 3 [Regional] -> 1 [Master] -> 3 [Regional] -> 1 [Master] -> 1 [International]
3 [Regional] -> 1 [Master] -> 3 [Regional] -> 1 [Master] -> 3 [Regional] -> 1 [Master] -> 1 [International]
3 [Regional] -> 1 [Master] -> 3 [Regional] -> 1 [Master] -> 3 [Regional] -> 1 [Master] -> 1 [Interantional]
3 [Regional] -> 1 [Master] -> 3 [Regional] -> 1 [Master] -> 3 [Regional] -> 1 [Master] -> 1 [Interantional]
1 [Olympus]

[Regional] 36
[Master] 12
[International] 4
[Olympus] 1
Total de competiciones disputadas por temporada: 53

### CONFIGURACIÓN PUNTOS POR RONDA

---

- [Olympus]

  - Winner: 2000 puntos
  - Top 2: 1200 puntos
  - Top 4: 720 puntos
  - Top 8: 360 puntos
  - Top 16: 180 puntos
  - Top 32: 90 puntos
  - Top 64: 45 puntos
  - Top 128: 10 puntos

- [International]

  - Winner: 1000 puntos
  - Top 2: 600 puntos
  - Top 4: 360 puntos
  - Top 8: 180 puntos
  - Top 16: 90 puntos
  - Top 32: 45 puntos
  - Top 64: 25 puntos

- [Master]

  - Winner: 500 puntos
  - Top 2: 300 puntos
  - Top 4: 150 puntos
  - Top 8: 90 puntos
  - Top 16: 45 puntos
  - Top 32: 15 puntos

- [Regional]

  - Winner: 250 puntos
  - Top 2: 120 puntos
  - Top 4: 60 puntos
  - Top 8: 30 puntos
  - Top 16: 10 puntos

### CONFIGURACIÓN RONDAS

- [TOP 2, TOP 4, TOP 8, TOP 16, TOP 32, TOP 64, TOP 128]

### CONFIGURACIÓN REGIONES

- [ALL, NORDIC, GREEK, ...]
