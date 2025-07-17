# support360.activetrac

###############################################

🗂️ Branching Strategy
main es la rama de producción.
development es la rama de integración (desarrollo).
Se utilizan ramas feature, release, y hotfix.

📌 Objetivo
Establecer una estrategia clara de control de versiones utilizando Git, que permita un desarrollo colaborativo, organizado y seguro, minimizando errores en producción.

🌳 Ramas Principales
Rama	Propósito
main	Rama de producción. Solo contiene código estable.
development	Rama de integración. Contiene el último código aprobado para próxima versión.

🔄 Flujo General
Nuevas funcionalidades parten de development como base (feature/*).
Una vez validadas, se integran a development.
Cuando se quiere preparar una versión para producción, se crea una rama release/*.
Una vez validada la release, se fusiona a main (producción) y a development (para mantener coherencia).
Si hay errores críticos en main, se corrigen mediante ramas hotfix/*.

🧪 Tipos de Ramas
feature/*
Propósito: Desarrollo de nuevas funcionalidades o cambios importantes.
Base: development
Destino (merge): development
Ejemplo: feature/login, feature/api-refactor
release/*
Propósito: Preparar una versión para producción.
Base: development
Destino (merge): main y luego development
Ejemplo: release/v1.2.0
hotfix/*
Propósito: Corregir errores críticos en producción.
Base: main
Destino (merge): main y luego development
Ejemplo: hotfix/fix-login-bug

🔃 Reglas de Merge
Los feature/* se integran mediante Pull Request (PR) a development.
Las release/* y hotfix/* se integran mediante PR a main y development.
Todo PR debe pasar revisiones de código y pruebas automatizadas antes del merge.