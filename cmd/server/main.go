package main

import (
	"todo-api/routes"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	api := app.Group("/api")

	app.Get("/", func(c *fiber.Ctx) error {
		return c.Status(fiber.StatusOK).JSON(fiber.Map{
			"msg": "welcome",
		})
	})
	routes.TodoRoutes(api.Group("/todo"))

	app.Listen(":3000")
}
