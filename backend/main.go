package main

import (
	"backend/controllers"
	_ "backend/docs"
	"backend/middlewares"
	"backend/models"
	"log"
	"net/http"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
)

// @title Eshop API documentation
// @version 1.0
// @description api documentation for Eshop.

// @host localhost:8080
// @BasePath /api
func main() {
	//fmt.Printf("more to come!")

	if err := godotenv.Load(); err != nil {
		log.Fatal("no .env found")
	}
	models.ConnectDataBase()
	r := gin.Default()
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowMethods:     []string{"PUT", "PATCH", "GET"},
		AllowHeaders:     []string{"Origin"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		AllowOriginFunc: func(origin string) bool {
			return origin == "https://github.com"
		},
		MaxAge: 12 * time.Hour,
	}))
	r.GET("/docs/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))
	//r.GET("/docs/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))

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
