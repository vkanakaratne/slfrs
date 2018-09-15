FROM openjdk:8
VOLUME /tmp
COPY target/app-1.0.0.jar /app.jar
EXPOSE 8080/tcp
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]
