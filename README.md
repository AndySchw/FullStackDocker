Um Ihre Anwendung aufzusetzen und zu starten, folgen Sie bitte diesen Schritten:

## Voraussetzungen
- Installieren Sie [Docker](https://www.docker.com/products/docker-desktop) auf Ihrem System.
- Installieren Sie [Docker Compose](https://docs.docker.com/compose/install/), falls es nicht bereits mit Docker installiert wurde.
- Klone Sie dieses Repository auf Ihr lokales System.

## Anleitung

1. Öffnen Sie ein Terminalfenster und navigieren Sie zu dem Ordner, in den Sie das Repository geklont haben.

2. Bauen Sie die Docker-Images und starten Sie die Docker-Container:

    ```bash
    docker-compose up --build
    ```
    Der Befehl `docker-compose up` startet Ihre Anwendung und der zusätzliche Flag `--build` sorgt dafür, dass Docker die Images vor dem Start der Container baut.

3. Wenn Sie die Anwendung im laufenden Zustand sehen wollen, können Sie das Flag `-d` (detached mode) verwenden, das die Container im Hintergrund startet:

    ```bash
    docker-compose up -d --build
    ```
4. Öffnen Sie Ihren Webbrowser und navigieren Sie zu `http://localhost:8080`, um das Frontend zu sehen, und zu `http://localhost:3000`, um das Backend zu sehen.

5. Wenn Sie fertig sind, können Sie die Anwendung mit dem folgenden Befehl stoppen:

    ```bash
    docker-compose down -d
    ```
    Dieser Befehl stoppt und entfernt die Container, Netzwerke und Volumes, die mit `docker-compose up` definiert und erstellt wurden. Bei der Verwendung von `-d` sorgen sie dafür das beim herrunterfahren alle container und Volumen gelöscht werden.

Bitte beachten Sie, dass diese Anleitung davon ausgeht, dass Sie Docker und Docker Compose korrekt auf Ihrem System installiert haben und grundlegende Kenntnisse in der Arbeit mit Docker haben. Sie können die offizielle Docker-Dokumentation für weitere Informationen konsultieren.


/////////////////////////////////////////////////////////////////////////////

1. **MongoDB-Container Einrichten:**
   In Ihrer `docker-compose.yml` haben Sie einen MongoDB-Service eingerichtet. Hier legen Sie die Portnummer fest, um Verbindungen zu ermöglichen und binden das Volume an einen lokalen Pfad, um Daten dauerhaft zu speichern.

2. **MongoDB-Import-Container Einrichten:**
   Dieser Service ist dafür zuständig, die Daten in Ihre MongoDB zu importieren. Er benutzt das MongoDB-Image und den mongoimport-Befehl zum Einlesen der Daten.

3. **Backend-Service (app) Einrichten:**
   Dieser Service stellt Ihre Node.js-Anwendung bereit. Sie bauen das Image mit dem Dockerfile im Backend-Verzeichnis und setzen den Port auf 3000. Hier verbinden Sie auch das Volume für das Frontend.

4. **Frontend-Service Einrichten:**
   Der Frontend-Service ist ein Nginx-Server, der die statischen Dateien ausliefert. Sie bauen das Image mit dem Dockerfile im Frontend-Verzeichnis und setzen den Port auf 8080. Hier verbinden Sie das Volume mit dem öffentlichen Verzeichnis des Backends.

5. **Dockerfile für das Backend:**
   Im Backend-Verzeichnis erstellen Sie ein Dockerfile, das eine Node.js-Umgebung bereitstellt und die notwendigen Abhängigkeiten installiert. Hier kopieren Sie Ihre `app.js` und andere notwendige Dateien in das Image und starten die Anwendung.

6. **Dockerfile für das Frontend:**
   Im Frontend-Verzeichnis erstellen Sie ein Dockerfile, das ein Nginx-Image bereitstellt. Sie überschreiben die Standardkonfiguration von Nginx, um Anfragen an Ihren Backend-Service umzuleiten.

7. **Backend-Code (app.js):**
   In Ihrer `app.js` definieren Sie die Verbindung zu MongoDB und die Express-Routen für Ihre Anwendung. Sie verwenden Pug als Template-Engine und stellen die statischen Dateien zur Verfügung, die von Nginx ausgeliefert werden. 

Beachten Sie bitte, dass diese Anleitung sehr allgemein gehalten ist und Sie eventuell Anpassungen vornehmen müssen, je nach Ihren spezifischen Anforderungen und dem genauen Aufbau Ihrer Anwendung und Umgebung. 

Vergessen Sie nicht, Ihre Anwendung regelmäßig zu testen und die Fehlerprotokolle zu überprüfen, um sicherzustellen, dass alles wie erwartet funktioniert. Sie können die Fehlerprotokolle mit dem Befehl `docker logs <container-id>` anzeigen.