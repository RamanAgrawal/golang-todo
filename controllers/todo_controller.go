package controllers

import (
	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
)

type Todo struct {
	ID    uuid.UUID
	Title string `json:"title"`
}

var todos = []Todo{}

func GetTodos(c *fiber.Ctx) error {
	return c.Status(fiber.StatusOK).JSON(todos)
}

func CreateTodo(c *fiber.Ctx) error {
	var todo = new(Todo)

	if err := c.BodyParser(todo); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "error creating todo",
		})
	}

	todos = append(todos, *todo)
	return c.Status(fiber.StatusCreated).JSON(todo)
}
