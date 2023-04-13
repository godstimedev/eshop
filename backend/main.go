package main

import (
	"backend/controllers"
	"backend/middlewares"
	"backend/models"
	"fmt"

	"github.com/gin-gonic/gin"
)

func main() {
	fmt.Printf("more to come!")
	models.ConnectDataBase()
	r := gin.Default()
	public := r.Group("/api")

	public.POST("/register", controllers.Register)
	public.POST("/login", controllers.Login)

	protected := r.Group("/api/auth")
	protected.Use(middlewares.JwtAuthMiddleware())
	protected.GET("/user", controllers.CurrentUser)
	r.Run(":8080")
}
