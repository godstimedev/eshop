package controllers

import (
	"backend/models"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/shopspring/decimal"
)

type Products struct {
	Name             string          `json:"name" binding:"required"`
	Category         models.Category `json:"category" binding:"required"`
	CategoryID       uint64          `json:"category_id"`
	Likes            uint64          `json:"likes"`
	Description      string          `json:"description"`
	Price            decimal.Decimal `json:"price"`
	DiscountPrice    decimal.Decimal `json:"discount_price"`
	Image            []byte          `json:"image"`
	Specification    string          `json:"specification"`
	DiscountPercent  decimal.Decimal `json:"discount_percent"`
	Stars            float32         `json:"stars"`
	CountUsersReview uint64          `json:"count_users_review"`
	InStock          bool            `json:"in_stock"`
}

func CreateProduct(c *gin.Context) {
	var input Products
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "a client errored occured"})
		return
	}

	product := models.Product{}
	product.Name = input.Name
	product.Category = input.Category
	product.Price = input.Price
	product.Description = input.Description
	product.Price = input.Price
	product.Image = input.Image
	product.InStock = input.InStock
	product.Specification = input.Specification
	newproduct, err := product.SaveProduct()
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "client error occured"})
	}
	c.JSON(http.StatusCreated, gin.H{"data": newproduct})
}

func ProductList(c *gin.Context) {
	product, err := models.GetAllProduct()
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "no product to display"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"status": true, "data": product})
}

func ProductId(c *gin.Context) {
	id := c.Param("id")

	product, err := models.GetProductById(id)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "invalid id passed no product found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"status": true, "data": product})

}

func LikeProduct(c *gin.Context) {
	product_id := c.Param("product_id")
	product, err := models.UpdateProductLikes(product_id)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "unable to like product"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": product})

}
