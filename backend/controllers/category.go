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
