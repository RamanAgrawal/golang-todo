package main

import (
	"todo-api/routes"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	api := app.Group("/api")
	routes.TodoRoutes(api.Group("/todo"))

	app.Listen(":3000")
}
