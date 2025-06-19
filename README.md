# Serverless and EC2-based API Deployment

This project demonstrates two methods of deploying simple APIs using Node.js and Express:

1. A traditional server hosted on an **Amazon EC2 instance**
2. A serverless function deployed using **AWS Lambda** and **API Gateway**

---

## 🔹 EC2-Hosted Express API

This API is running on a Node.js Express server inside an Amazon EC2 instance.

### Base URL

    http://3.139.93.136:3000


### Available Endpoints

- `GET /hello`  
  Returns a plain text greeting.

**Example:**
    http://3.139.93.136:3000/hello


- `GET /status`  
Returns server uptime, status and hostname in JSON.

**Example:**
    http://3.139.93.136:3000/status


---

## 🔹 Serverless API (AWS Lambda + API Gateway)

This is a stateless API endpoint served via AWS Lambda and exposed through API Gateway.

### Base URL

    https://4adld6myh5.execute-api.us-east-2.amazonaws.com/api

### Available Endpoints

- `GET /api`  
  Returns a simple JSON message.

  **Example cURL Request:**
  ```bash
  curl https://4adld6myh5.execute-api.us-east-2.amazonaws.com/api
  ```
    Expected Response:
{
  "message": "Hello from Lambda!"
}
