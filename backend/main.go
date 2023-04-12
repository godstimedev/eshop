package main

import (
	"backend/controllers"
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

	r.Run(":8080")
}
