package routes

import (
	"todo-api/controllers"

	"github.com/gofiber/fiber/v2"
)

func TodoRoutes(route fiber.Router) {
	route.Get("/", controllers.GetTodos)
	route.Post("/", controllers.CreateTodo)
}
