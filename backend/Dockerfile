FROM openjdk:21-jdk-slim

LABEL maintainer="echoge11@gmail.com"

WORKDIR /app  # Set working directory

COPY target/todo-0.0.1-SNAPSHOT.jar /app/app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/app/app.jar"]
