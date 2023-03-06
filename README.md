<h1 align="center">
  Tiui Technical Test 🔎 - API
</h1>
This repository was created for the technical test for Tiui.
The idea of this application is based on one of the solutions that Tiui offers (Storage and inventory management), in a very simple way, it offers a CRUD for the registration of companies/entrepreneurs and simple handling of their inventories.

### Table of Content
1. [How to run the aplication](#run)
2. [JSON File to test the endpoints](#json)
3. [Used technologies](#techs)
4. [Endpoints](#endpoints)


## How to run the aplication <a name="run"></a>
To start this project, it is necessary to install the dependencies. So use the command below to install them:

```
yarn install
```

Configure the environment variables in your .env, passing the correct credentials to connect to the database

With that done, to run your application, just use the command:

```
yarn dev
```
and it will be running on your `http://localhost:3000`


## JSON File to test on Insomnia or Postman <a name="json"></a>

In the main branch you will find a file named `tiui api request collection`, there you'll find all endpoints ready to be tested.

## Used technologies <a name="techs"></a>

I used the following technologies on this project:
NodeJS, TypeScript, Express, TypeORM, UUID, JsonWebToken, DotEnv, Bcrypt, PG and other auxiliary ones. They can be seem in the `package.json` file

## Endpoints <a name="endpoints"></a>

### Company

(POST) Creating a company

```
http://localhost:3000/company
```

Request example:

```
{
	"name": "Tiui",
	"description": "Tiui Soluciones es una empresa mexicana que busca ofrecer las mejores soluciones de logística en el mercado para que las personas puedan incrementar su número de ventas en lugares en los que les es imposible vender. El nombre de Tiui es una palabra de origen  nahuatl que significa 'vamos' y se decidio tal nombre ya que Tiui Soluciones nace bajo el contexto de la pandemia con el propósito de hacer crecer a las pequeñas y medianas empresas que sufren debido a las crisis económicas y sanitarias.",
	"password": "Tiui!sAwesome"
}
```

Response example:

```
{
  "id": "df4b91e1-fc60-4168-a5cb-7c35c0931896",
	"name": "Tiui",
	"description": "Tiui Soluciones es una empresa mexicana que busca ofrecer las mejores soluciones de logística en el mercado para que las personas puedan incrementar su número de ventas en lugares en los que les es imposible vender. El nombre de Tiui es una palabra de origen  nahuatl que significa 'vamos' y se decidio tal nombre ya que Tiui Soluciones nace bajo el contexto de la pandemia con el propósito de hacer crecer a las pequeñas y medianas empresas que sufren debido a las crisis económicas y sanitarias.",
	"created_at": "2023-03-06T09:37:15.710Z"
}
```

(POST) Login as a company

```
http://localhost:3000/company/login
```

Request example:

```
{
	"name": "Tiui",
	"password": "Tiui!sAwesome"
}
```

Response example:

```
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTmljZUpvYnMiLCJpYXQiOjE2NzgwODUxNTEsImV4cCI6MTY3ODE3MTU1MX0.SNMoPE-zR1gf0wsOoEGXkpbZ8hXzpjKjC9-zu7gZRek"
}
```
## Endpoints with atuhorization required

(GET) Listing all companies

```
http://localhost:3000/companies
```

Request example:

```
no body
```

Response example:

```
[
	{
		"id": "9728aff2-062f-4364-9a5e-4f87b3b386e6",
		"name": "NiceJobs",
		"description": "empregos informais",
		"created_at": "2023-03-06T06:39:38.149Z",
		"storage": [
			{
				"id": "78b10dcd-7325-4597-9b54-a94877ae570e",
				"name": "my second product",
				"price": "200",
				"description": "my second product",
				"created_at": "2023-03-06T07:35:22.046Z"
			},
			{
				"id": "67fc572c-f26c-4814-9f55-765d87291f70",
				"name": "my first product",
				"price": "20",
				"description": "my first product",
				"created_at": "2023-03-06T09:46:57.595Z"
			}
		]
	},
	{
		"id": "da18d155-6d45-49b4-88cb-9f9b6bce4965",
		"name": "Tiui",
		"description": "Tiui Soluciones es una empresa mexicana que busca ofrecer las mejores soluciones de logística en el mercado para que las personas puedan incrementar su número de ventas en lugares en los que les es imposible vender. El nombre de Tiui es una palabra de origen  nahuatl que significa 'vamos' y se decidio tal nombre ya que Tiui Soluciones nace bajo el contexto de la pandemia con el propósito de hacer crecer a las pequeñas y medianas empresas que sufren debido a las crisis económicas y sanitarias.",
		"created_at": "2023-03-06T10:55:18.498Z",
		"storage": []
	}
]
```

(GET) Listing your company

```
http://localhost:3000/company
```

Request example:

```
no body
```

Response example:

```
{
	"id": "da18d155-6d45-49b4-88cb-9f9b6bce4965",
	"name": "Tiui",
	"description": "Tiui Soluciones es una empresa mexicana que busca ofrecer las mejores soluciones de logística en el mercado para que las personas puedan incrementar su número de ventas en lugares en los que les es imposible vender. El nombre de Tiui es una palabra de origen  nahuatl que significa 'vamos' y se decidio tal nombre ya que Tiui Soluciones nace bajo el contexto de la pandemia con el propósito de hacer crecer a las pequeñas y medianas empresas que sufren debido a las crisis económicas y sanitarias.",
	"created_at": "2023-03-06T10:55:18.498Z",
	"storage": []
}
```

(PATCH) Updating your company

```
http://localhost:3000/company
```

Request example: (fields you can update: name, description, password)

```
{
	"name":"esther's company",
	"description": "Esther's company is a developer's personal company."
}
```

Response example:

```
{
	"message": "Company updated successfully",
	"company": {
		"name": "esther's company",
		"description": "Esther's company is a developer's personal company."
	}
}
```

(DELETE) Deleting your company

```
http://localhost:3000/company
```

Request example:

```
no body
```

Response example:

```
{
	"message": "Company deleted successfully"
}
```

## Storage

(POST) Adding a product to your storage

```
http://localhost:3000/storage
```

Request example:

```
{
	"name": "my first product",
	"description": "my first product",
	"price": "200"
}
```

Response example:

```
{
	"id": "17e7c2f8-3f60-4b55-874b-37659eb07506",
	"name": "my first product",
	"description": "my first product",
	"price": "200",
	"company": {
		"id": "da18d155-6d45-49b4-88cb-9f9b6bce4965",
		"name": "Tiui",
		"password": "$2b$10$dbrN2qSrSRoHp3uQGkiQF.gflqBMgjJqqf9L3QpNPvMbToy6l5/e2",
		"description": "Tiui Soluciones es una empresa mexicana que busca ofrecer las mejores soluciones de logística en el mercado para que las personas puedan incrementar su número de ventas en lugares en los que les es imposible vender. El nombre de Tiui es una palabra de origen  nahuatl que significa 'vamos' y se decidio tal nombre ya que Tiui Soluciones nace bajo el contexto de la pandemia con el propósito de hacer crecer a las pequeñas y medianas empresas que sufren debido a las crisis económicas y sanitarias.",
		"created_at": "2023-03-06T10:55:18.498Z",
		"storage": []
	},
	"created_at": "2023-03-06T11:10:25.255Z"
}
```

(GET) List your storage products

```
http://localhost:3000/storage
```

Request example:

```
no body
```

Response example:

```
[
	{
		"id": "17e7c2f8-3f60-4b55-874b-37659eb07506",
		"name": "my first product",
		"price": "200",
		"description": "my first product",
		"created_at": "2023-03-06T11:10:25.255Z"
	},
	{
		"id": "01s7c2f8-3f60-4b55-874b-37659eb57896",
		"name": "my second product",
		"price": "200",
		"description": "my second product",
		"created_at": "2023-03-06T11:10:25.255Z"
	}
]
```

(GET) List one specific product

```
http://localhost:3000/storage/:id
```

Request example:

```
no body
```

Response example:

```
{
	"id": "67fc572c-f26c-4814-9f55-765d87291f70",
	"name": "my first product",
	"price": "20",
	"description": "my first product",
	"created_at": "2023-03-06T09:46:57.595Z"
}
```

(PATCH) Updating your product

```
http://localhost:3000/storage/:id
```

Request example: (fields you can update: name, description, price)

```
{
	"description": "This product is in construction"
}
```

Response example:

```
{
	"message": "Product updated successfully",
	"product": {
		"name": "my second product",
		"description": "aaa",
		"price": "400"
	}
}
```

(DELETE) Deleting a product

```
http://localhost:3000/storage/:id
```

Request example:

```
no body
```

Response example:

```
{
	"message": "Product deleted successfully"
}
```
