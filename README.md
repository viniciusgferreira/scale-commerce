# Scale-commerce

This is a personal project of an Ecommerce web app based on Event-driven architecture for microservices.
The main goal is to build all the Backend, service by service and connect them with asynchronous communication using RabbitMQ.

The communication between client and server use RESTful API endpoint, which is handled by an API Gateway that distribute all the requests to each service.

## Services status
Currently only User and Order services were built, this it a project to improve and showcase my skills.

## About the idea

This backend web application can scale horizontally using Docker Containers, accordingly to each service needs. Each service is independent from other services, with it's own Database.

## API

All endpoints live under the URL /api/(service-name)/ and then generally follow the REST architecture.

You can skip to how to use clicking here-> [Endpoints](#endpoints)

## Architecture design diagram


![Scale Commerce - Microservices Arch](https://user-images.githubusercontent.com/30271243/206193862-e9ef7746-af21-4ae2-977f-dc18fa6866c8.png)

# Endpoints
All requests must be encoded as JSON with the Content-Type: application/json header. Most responses, including errors, are encoded exclusively as JSON as well.

## User service

### Structure of User object

The User object in `` folder has the following fields:

```js
{
		"_id": String,
		"username": String,
		"password": String,
		"role": String,
		"orders": Array
	}
```

### GET /user-service/users
List all Users and their info
### GET /user-service/users/:id
List User info by ID.
### POST /user-service/users
Add User from Json body request.
```js
{
	"username": "viniciusgf",
	"password": "passadmin2",
	"role": "admin"
}
```
### PUT /user-service/users
Edit User info from specific id inside Json body request
```js
{
	"id": "6390cac708a259a1a8158a1e",
	"username": "newusername",
	"password": "newpassword"
}
```
### DELETE /user-service/users/:id
Delete User by ID.

## Order service

### Structure of Order object

The Order object in `` folder has the following fields:

```js
{
		"_id": String,
		"user": String,
		"totalPrice": Number,
		"products": Array
	}
```

### GET /order-service/orders
List all orders and their info
### GET /order-service/orders/:id
List order info by ID.
### POST /order-service/orders
Add order from Json body request.
```js
{
	"user": "vini",
	"totalPrice": 2000,
	"products": ["TV", "Notebook"]
}
```
### PUT /order-service/orders
Edit order info from specific id inside Json body request
```js
{
	"id": "6390cac708a259a1a8158a1e",
	"user": "vinicius",
	"totalPrice": 2200,
	"products": ["Iphone", "Notebook"]
}
```
### DELETE /order-service/orders/:id
Delete order by ID.
