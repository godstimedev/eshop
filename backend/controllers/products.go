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
}
