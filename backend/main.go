package main

import (
	"backend/controllers"
	"backend/middlewares"
	"backend/models"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

// @title Gin Swagger Example API
// @version 1.0
// @description This is a sample server server.
// @termsOfService http://swagger.io/terms/

// @contact.name API Support
// @contact.url http://www.swagger.io/support
// @contact.email support@swagger.io

// @license.name Apache 2.0
// @license.url http://www.apache.org/licenses/LICENSE-2.0.html

// @host localhost:3000
// @BasePath /
// @schemes http

func main() {
	//fmt.Printf("more to come!")

	if err := godotenv.Load(); err != nil {
		log.Fatal("no .env found")
	}
	models.ConnectDataBase()
	r := gin.Default()
	public := r.Group("/api")

	public.POST("/register", controllers.Register)
	public.POST("/login", controllers.Login)
	public.GET("/category", controllers.GetCategory)
	public.GET("/product", controllers.ProductList)
	public.GET("/product/:id", controllers.ProductId)
	public.GET("/review/product/:product_id", controllers.GetProductReviews)
	public.GET("review/product/:product_id/:review_id", controllers.GetSpecificReview)

	protected := r.Group("/api/auth")
	protected.Use(middlewares.JwtAuthMiddleware())
	protected.GET("/user", controllers.CurrentUser)
	protected.POST("/product/create-review", controllers.CreateReview)
	protected.PUT("/product/likes/:product_id", controllers.LikeProduct)

	admin := r.Group("/api/admin")
	admin.Use(middlewares.AdminMiddleware(models.DB))
	admin.POST("/create-product", controllers.CreateProduct)
	admin.POST("/create-category", controllers.CreateCategory)

	r.Run(":8080")
}

// HealthCheck godoc
// @Summary Show the status of server.
// @Description get the status of server.
// @Tags root
// @Accept */*
// @Produce json
// @Success 200 {object} map[string]interface{}
// @Router / [get]
func HealthCheck(c *gin.Context) {
	res := map[string]interface{}{
		"data": "Server is up and running",
	}

	c.JSON(http.StatusOK, res)
}
