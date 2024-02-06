FROM alpine:latest

RUN apk add python3 py3-pip

WORKDIR /app
COPY . .

RUN pip install -r requirements.txt

ENTRYPOINT ["python3"]
CMD ["app.py"]
