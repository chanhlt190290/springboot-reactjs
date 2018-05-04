FROM openjdk:8-jdk-alpine3.7
VOLUME /tmp
COPY build/libs/spring-react-1.0.jar app.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","app.jar"]
