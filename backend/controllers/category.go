package controllers

import (
	"backend/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

type Categories struct {
	Name          string `json:"name" binding:"required"`
	Specification string `json:"specification" binding:"required"`
}

func GetCategory(c *gin.Context) {
	u, err := models.GetAllCategory()
	if err != nil {
		c.JSON(http.StatusNoContent, gin.H{"message": "no category yet"})
		return
	}
	c.JSON(http.StatusAccepted, gin.H{"status": true, "data": u})

}

func CreateCategory(c *gin.Context) {
	var input Categories
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	category := models.Category{Name: input.Name, Specification: input.Specification}

	_, err := category.SaveCategory()
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "made a bad request to create category"})
		return
	}
	c.JSON(http.StatusCreated, gin.H{"status": true, "data": c})

}
