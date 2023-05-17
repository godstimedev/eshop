package controllers

import (
	"backend/models"
	"backend/utils/review"
	"net/http"

	"github.com/gin-gonic/gin"
)

type Reviews struct {
	ReviewedProductID int64          `json:"reviewed_product_id"`
	ReviewedProduct   models.Product `json:"reviewed_product"`
	User              models.User    `json:"user"`
	UserID            int64          `json:"user_id"`
	Comment           string         `json:"comment"`
	Stars             float32        `json:"stars"`
}

func CreateReview(c *gin.Context) {
	var input Reviews
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusCreated, gin.H{"error": "an error occured"})
		return
	}
	reviews := models.Reviews{}
	reviews.User = input.User
	reviews.ReviewedProduct = input.ReviewedProduct
	reviews.Comment = input.Comment
	reviews.Stars = input.Stars
	reviews.ReviewedProduct.CountUsersReview += 1
	stars := review.GetStarsProduct(
		int64(reviews.ReviewedProduct.CountUsersReview),
		float64(reviews.ReviewedProduct.Stars),
		float64(reviews.Stars),
	)
	reviews.ReviewedProduct.Stars = float32(stars)
	data, err := reviews.SaveReview()
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "an error occured wile creating the review"})
		return
	}
	c.JSON(http.StatusCreated, gin.H{"status": true, "data": data})

}
