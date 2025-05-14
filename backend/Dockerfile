FROM openjdk:17-jdk-slim
LABEL maintainer="echoge11@gmail.com"
COPY target/todo-backend.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
