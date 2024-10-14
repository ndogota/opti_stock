FROM postgres

ENV POSTGRES_PASSWORD=docker
ENV POSTGRES_DB=db

COPY db.sql /docker-entrypoint-initdb.d/

EXPOSE 5432